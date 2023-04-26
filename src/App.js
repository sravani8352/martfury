import './App.css';
import Navbar from './components/navbar';
import Navbar1 from './components/navbar1';
import Navbar2 from './components/navbar2';
import ProductImg from './components/productimg';
import Categories from './components/categories';
import Computer from './components/computer';
import Products from './components/product'; 
import Policies from './components/policies';
import Footer from './components/footer';
import Carousel from './components/carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navbar1/>
      <Navbar2/>
      <ProductImg/>
      <Categories/>
      <Products/>
      <Carousel/>
      <Computer/>
      <Policies/>
      <Footer/>
    </div>
  );
}

export default App;
