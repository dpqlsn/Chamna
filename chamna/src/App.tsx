import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Home from './pages/home/home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}