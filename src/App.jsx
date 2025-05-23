import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/detalle/:id" element={<ProductDetailPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
