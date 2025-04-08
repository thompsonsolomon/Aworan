import { useEffect, useState } from "react";
import ProductCard from "../components/Main/ProductCard";
import "../components/Styles/Product.css"
import Header from '../components/Ui/Header'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/Constant/Firebase";

export default function Product() {
    const [products, setProducts] = useState([]);
      const productsRef = collection(db, "AworanProducts");
    
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
  // const allData = ProductsData || [];
  const allData = products || [];

  return (
    <div className="Product">
      <Header />
      <div className="cartWrapper">
        <div className="cardCon">
          {allData.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              cover={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
              data={item}
              qty={item.qty}
              instock={item.noOfQuantity}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
