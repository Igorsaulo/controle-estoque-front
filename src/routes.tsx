import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Produtos } from './pages/produtos';
import { Login } from './pages/login/index';
import { Sidebar } from './components/Sidebar';

export function Router() {
  return (
    <BrowserRouter>
    {location.pathname !== '/entrar' && <Sidebar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/entrar" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}