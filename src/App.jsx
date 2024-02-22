import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Pages/Products';
import Food from './Pages/Food';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/food' element={<Food />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
