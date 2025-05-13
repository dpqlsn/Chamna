import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Landing from './pages/Landing';
import Main from './pages/Main';
import Loading from './pages/Loading';
import Result from './pages/Result.tsx';
import Final from './pages/Final.jsx.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/main" element={<Main />} />
          <Route path="/result" element={<Result />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
