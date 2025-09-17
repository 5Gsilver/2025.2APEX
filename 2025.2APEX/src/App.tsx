import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage.js";
import ProductListPage from "./features/product/ProductList.js";
import ProductDetailPage from "./features/product/ProductDetailPage.js";
import CartPage from "./features/cart/CartPage.js";
import CheckoutPage from "./components/Checkout/CheckoutPage.js";
import OrderCompletePage from "./components/Order/OrderCompletePage.js";
import LoginPage from "./components/Account/LoginPage.js";
import RegisterPage from "./components/Account/RegisterPage.js";
import ProfilePage from "./components/Account/ProfilePage.js";
import AdminDashboardPage from "./components/Admin/AdminDashboardPage.js";
import ProductManagePage from "./components/Admin/ProductManagePage.js";

// 모든 컴포넌트가 정상적으로 export되어 있다고 가정합니다.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order/complete" element={<OrderCompletePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/products" element={<ProductManagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
