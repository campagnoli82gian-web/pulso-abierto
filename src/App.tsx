import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CryptoDetail from './pages/CryptoDetail';

function NotFound() {
  return (
    <main className="container">
      <h1>Página no encontrada</h1>
      <p>La página que buscás no existe.</p>
      <a href="/">Volver al inicio</a>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/criptomonedas/:id" element={<CryptoDetail />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;