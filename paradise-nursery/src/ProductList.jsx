import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Navbar from "./Navbar";
import { addItem, selectCartItems } from "./CartSlice";
import { plantCategories } from "./data/plants";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="page">
      <Navbar />

      <main className="products-page">
        <section className="section-heading">
          <div>
            <p className="eyebrow">SHOP HOUSEPLANTS</p>
            <h1>Find your perfect plant</h1>
            <p>
              Explore three collections of indoor plants, with six unique
              choices in every category.
            </p>
          </div>
          <Link to="/cart" className="secondary-btn">
            <ShoppingCart size={18} />
            View Cart
          </Link>
        </section>

        {plantCategories.map((category) => (
          <section className="category-section" key={category.id}>
            <div className="category-heading">
              <div>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
              <span className="category-count">
                {category.products.length} plants
              </span>
            </div>

            <div className="product-grid">
              {category.products.map((plant) => {
                const added = isInCart(plant.id);

                return (
                  <article className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <div className="product-body">
                      <div className="product-meta">
                        <h3>{plant.name}</h3>
                        <strong>₹{plant.price.toLocaleString("en-IN")}</strong>
                      </div>
                      <p>{plant.description}</p>
                      <button
                        className={added ? "add-btn added" : "add-btn"}
                        type="button"
                        onClick={() => dispatch(addItem(plant))}
                        disabled={added}
                      >
                        {added ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
