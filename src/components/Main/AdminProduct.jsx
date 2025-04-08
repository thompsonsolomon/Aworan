import { useState, useEffect } from "react";
import "../Styles/Dashboard.css";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Constant/Firebase";

const AdminProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: 1,
    image: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  const productsRef = collection(db, "AworanProducts");
  const [loading, setLoading] = useState(false)

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const snapshot = await getDocs(productsRef);
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(list);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const data = {
      ...form,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
    };

    if (editingId) {
      setLoading(true)
      const productDoc = doc(db, "AworanProducts", editingId);
      await updateDoc(productDoc, data);
      setEditingId(null);
      setLoading(false)
    } else {
      setLoading(true)
      await addDoc(productsRef, data);
      setLoading(false)
    }

    setForm({
      name: "",
      price: "",
      stock: 1,
      image: "",
      description: "",
    });
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product.id);
  };

  const handleDelete = async (id) => {
    const productDoc = doc(db, "AworanProducts", id);
    await deleteDoc(productDoc);
    fetchProducts();
  };

  return (
    <>
      <div className="ProductTop">
        <div className="ProductFirst">
          <p>
            <span>{products.length}</span>
            Product(s) Left
          </p>
        </div>

        <div className="ProductLeft">
          {/* <button>Create New Product </button> */}
        </div>
      </div>
      <div className="admin-container">
        <h2>Admin Product Manager</h2>

        <form onSubmit={handleSubmit} className="product-form">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
          />
          <select name="stock" value={form.stock} onChange={handleChange}>
            <option value={1}>In Stock</option>
            <option value={0}>Out of Stock</option>
          </select>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={form.description}
            onChange={handleChange}
            required
          />
          <button type="submit">
            {loading ? "Loading..." : editingId ? "Update Product" : "Add Product"}
          </button>
        </form>

        <div className="product-list">
          {products.map((prod) => (
            <div key={prod.id} className="product-card">
              <img src={prod.image} alt={prod.name} />
              <h3>{prod.name}</h3>
              <p>{prod.description}</p>
              <p><strong>${prod.price.toFixed(2)}</strong></p>
              <p className={prod.stock ? "in-stock" : "out-stock"}>
                {prod.stock ? "In Stock" : "Out of Stock"}
              </p>
              <div className="card-actions">
                <button onClick={() => handleEdit(prod)}>Edit</button>
                <button onClick={() => handleDelete(prod.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default AdminProduct;
