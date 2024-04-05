import './App.css';
import Home from './Home';
import NavBarComp from './navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './product detail';
import Product from './Product';
import Notfound from './notfound';

function App() {
  return (

    <div className="App">
      <NavBarComp />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </div>

  );
}

export default App