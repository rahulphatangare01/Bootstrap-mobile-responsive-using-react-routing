import logo from './logo.svg';
import './App.css';
import Navbar from './Componant/Navbar';
import Home from './Componant/Home';
import Product from './Componant/Product';
import Service1 from './Componant/Service1';
import Service2 from './Componant/Service2';
import Contactus from './Componant/Contactus';
import Footer from './Componant/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
        <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product />} />
      <Route path="/service1" element={<Service1 />} />
      <Route path="/service2" element={<Service2 />} />
      <Route path="/contact" element={<Contactus />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,


         
         
       
     


     
    </div>
  );
}

export default App;
