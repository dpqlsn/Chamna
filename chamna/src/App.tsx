import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Home from './pages/home/home';
import Image from './pages/Image/Image';
import NotFound from './pages/404/404';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/image" element={<Image />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}