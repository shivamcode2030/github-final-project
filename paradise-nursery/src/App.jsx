import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function Home() {
  return (
    <div className="page">
      <Navbar />
      <main className="landing">
        <div className="landing-overlay" />
        <div className="landing-content">
          <p className="eyebrow light">WELCOME TO</p>
          <h1>Paradise Nursery</h1>
          <p>
            Bring nature indoors with beautiful, easy-to-care-for houseplants
            selected for every room and every lifestyle.
          </p>
          <Link className="primary-btn" to="/plants">
            Get Started
          </Link>
        </div>
      </main>
      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
