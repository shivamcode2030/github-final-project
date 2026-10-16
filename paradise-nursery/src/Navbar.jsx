import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, Leaf } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount } from "./CartSlice";

function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <Leaf size={22} />
        <span>Paradise Nursery</span>
      </Link>

      <nav className="nav-links" aria-label="Primary navigation">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/plants" className={({ isActive }) => (isActive ? "active" : "")}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
          Cart
        </NavLink>
      </nav>

      <Link to="/cart" className="cart-link" aria-label={"Cart with " + cartCount + " items"}>
        <ShoppingCart size={23} />
        <span className="cart-count">{cartCount}</span>
      </Link>
    </header>
  );
}

export default Navbar;
