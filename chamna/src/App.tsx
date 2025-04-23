import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Landing from './pages/Landing';
import Loading from './pages/Loading';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
