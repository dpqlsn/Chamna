import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Home from './pages/home/home';
import Image from './pages/Image/Image';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/image" element={<Image />} />
      </Routes>
    </BrowserRouter>
  );
}