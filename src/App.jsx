// src/App.js
import { Route, Routes } from "react-router-dom";
import { AdminOrders, Auth, CartPage, Checkout, Dashboard, NotFound, Product, ProductDetails } from "./Pages";


const siteSuspended = true;
function App() {
  if (siteSuspended) {
    return (
      <div className="noPAyContainer">
        <div className="container">
          <h1>🔴 Website Unavailable</h1>
          <p><strong>This website has been temporarily suspended due to non-payment.</strong></p>
          <p>The owner of this domain has failed to settle the required service fees for website design, hosting, or maintenance.</p>
          <p>If you are the website owner and would like to restore access, please contact the developer or service provider immediately.</p>
          <p className="warning">This website will remain offline until all outstanding balances are cleared.</p>
        </div>
      </div>
    );
  }

  // normal app routes
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<CartPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<AdminOrders />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

// ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./components/Hooks/Context";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  // Show a loading state while Firebase is checking the auth state
  if (loading) return <div>Loading...</div>;

  // If the user is not logged in, redirect them to the login page
  if (!user) {
    return <Navigate to="/auth" />;
  }

  // If the user is authenticated, render the protected route
  return <Outlet />;
};

