import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Landing from './pages/Landing';
import Main from './pages/Main';
import Loading from './pages/Loading';
import Result from './pages/Result.tsx';;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/main" element={<Main />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
