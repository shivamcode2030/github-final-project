import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import Navbar from "./Navbar";
import {
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  updateQuantity
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  const handleCheckout = () => {
    window.alert("Coming Soon — checkout will be available shortly.");
  };

  return (
    <div className="page">
      <Navbar />

      <main className="cart-page">
        <section className="section-heading">
          <div>
            <p className="eyebrow">YOUR SHOPPING CART</p>
            <h1>Plant Cart</h1>
            <p>{cartCount} plant{cartCount === 1 ? "" : "s"} in your cart.</p>
          </div>
        </section>

        {items.length === 0 ? (
          <section className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add a few plants and they will appear here.</p>
            <Link to="/plants" className="primary-btn">
              Continue Shopping
            </Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-list">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-main">
                    <div>
                      <h2>{item.name}</h2>
                      <p>
                        Unit price: ₹{item.price.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="quantity-control">
                      <button
                        type="button"
                        aria-label={"Decrease " + item.name + " quantity"}
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity - 1
                            })
                          )
                        }
                      >
                        <Minus size={17} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={"Increase " + item.name + " quantity"}
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity + 1
                            })
                          )
                        }
                      >
                        <Plus size={17} />
                      </button>
                    </div>

                    <div className="cart-item-total">
                      <strong>
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </strong>
                      <button
                        className="delete-btn"
                        type="button"
                        onClick={() => dispatch(removeItem(item.id))}
                        aria-label={"Remove " + item.name + " from cart"}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Total Plants</span>
                <strong>{cartCount}</strong>
              </div>
              <div className="summary-row grand-total">
                <span>Total Amount</span>
                <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
              </div>
              <button className="checkout-btn" type="button" onClick={handleCheckout}>
                Checkout
              </button>
              <Link to="/plants" className="secondary-btn full-width">
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

export default CartItem;
