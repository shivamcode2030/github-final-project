const categories = [
  {
    name: "Air Purifying Plants",
    description: "Fresh-looking plants that bring a cleaner, calmer feel to your space.",
    plants: [
      [1, "Snake Plant", 699, "https://images.unsplash.com/photo-1593482892290-f54927ae2fa5?auto=format&fit=crop&w=800&q=80"],
      [2, "Peace Lily", 749, "https://images.unsplash.com/photo-1593691509543-c55fb32a2e1?auto=format&fit=crop&w=800&q=80"],
      [3, "Spider Plant", 599, "https://images.unsplash.com/photo-1572688484438-313a2a4b2c42?auto=format&fit=crop&w=800&q=80"],
      [4, "ZZ Plant", 899, "https://images.unsplash.com/photo-1597055181300-d3f5aa195c9f?auto=format&fit=crop&w=800&q=80"],
      [5, "Rubber Plant", 949, "https://images.unsplash.com/photo-1614595034684-9bfe9f55b218?auto=format&fit=crop&w=800&q=80"],
      [6, "Dracaena", 799, "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80"]
    ]
  },
  {
    name: "Low Light Favorites",
    description: "Reliable choices for bedrooms, offices, and cozy corners with less sunlight.",
    plants: [
      [7, "Cast Iron Plant", 899, "https://images.unsplash.com/photo-1593691509543-c55fb32a2e1?auto=format&fit=crop&w=800&q=80"],
      [8, "Chinese Evergreen", 849, "https://images.unsplash.com/photo-1572688484438-313a2a4b2c42?auto=format&fit=crop&w=800&q=80"],
      [9, "Parlor Palm", 999, "https://images.unsplash.com/photo-1597055181300-d3f5aa195c9f?auto=format&fit=crop&w=800&q=80"],
      [10, "Calathea", 1049, "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80"],
      [11, "Philodendron", 899, "https://images.unsplash.com/photo-1614595034684-9bfe9f55b218?auto=format&fit=crop&w=800&q=80"],
      [12, "Lucky Bamboo", 549, "https://images.unsplash.com/photo-1593482892290-f54927ae2fa5?auto=format&fit=crop&w=800&q=80"]
    ]
  },
  {
    name: "Tropical Beauties",
    description: "Statement houseplants for a lush, vacation-like atmosphere.",
    plants: [
      [13, "Monstera Deliciosa", 1299, "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80"],
      [14, "Bird of Paradise", 1499, "https://images.unsplash.com/photo-1597055181300-d3f5aa195c9f?auto=format&fit=crop&w=800&q=80"],
      [15, "Alocasia", 1199, "https://images.unsplash.com/photo-1614595034684-9bfe9f55b218?auto=format&fit=crop&w=800&q=80"],
      [16, "Fiddle Leaf Fig", 1399, "https://images.unsplash.com/photo-1593691509543-c55fb32a2e1?auto=format&fit=crop&w=800&q=80"],
      [17, "Anthurium", 999, "https://images.unsplash.com/photo-1572688484438-313a2a4b2c42?auto=format&fit=crop&w=800&q=80"],
      [18, "Bromeliad", 1099, "https://images.unsplash.com/photo-1593482892290-f54927ae2fa5?auto=format&fit=crop&w=800&q=80"]
    ]
  }
];

const plants = categories.flatMap(category =>
  category.plants.map(([id, name, price, image]) => ({ id, name, price, image }))
);

let cart = [];

const money = value => "₹" + value.toLocaleString("en-IN");
const cartCount = () => cart.reduce((sum, item) => sum + item.quantity, 0);
const cartTotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

function navbar() {
  return `
    <header class="navbar">
      <a href="#/" class="brand">🌿 <span>Paradise Nursery</span></a>
      <nav class="nav-links">
        <a href="#/">Home</a>
        <a href="#/plants">Plants</a>
        <a href="#/cart">Cart</a>
      </nav>
      <a href="#/cart" class="cart-link">🛒 <span class="cart-count">${cartCount()}</span></a>
    </header>
  `;
}

function home() {
  return navbar() + `
    <main class="landing">
      <div class="landing-overlay"></div>
      <div class="landing-content">
        <p class="eyebrow light">WELCOME TO</p>
        <h1>Paradise Nursery</h1>
        <p>Bring nature indoors with beautiful, easy-to-care-for houseplants selected for every room and every lifestyle.</p>
        <a class="primary-btn" href="#/plants">Get Started</a>
      </div>
    </main>
    <section class="about-section">
      <div>
        <p class="eyebrow">OUR STORY</p>
        <h2>Plants that make a house feel like home.</h2>
        <p>Paradise Nursery is an online houseplant shop for people who want more greenery in everyday life. We select beautiful, practical indoor plants for bedrooms, workspaces, living rooms, and cozy corners.</p>
        <p>Our goal is to make choosing plants simple and enjoyable, whether you are buying your first houseplant or adding to a growing collection.</p>
      </div>
    </section>
  `;
}

function plantsPage() {
  let html = navbar() + `
    <main class="products-page">
      <section class="section-heading">
        <div>
          <p class="eyebrow">SHOP HOUSEPLANTS</p>
          <h1>Find your perfect plant</h1>
          <p>Explore three collections of indoor plants, with six unique choices in every category.</p>
        </div>
        <a href="#/cart" class="secondary-btn">🛒 View Cart</a>
      </section>
  `;

  categories.forEach(category => {
    html += `
      <section class="category-section">
        <div class="category-heading">
          <div>
            <h2>${category.name}</h2>
            <p>${category.description}</p>
          </div>
          <span class="category-count">${category.plants.length} plants</span>
        </div>
        <div class="product-grid">
    `;

    category.plants.forEach(([id, name, price, image]) => {
      const added = cart.some(item => item.id === id);
      html += `
        <article class="product-card">
          <img src="${image}" alt="${name}">
          <div class="product-body">
            <div class="product-meta">
              <h3>${name}</h3>
              <strong>${money(price)}</strong>
            </div>
            <p>Beautiful indoor greenery selected for comfortable everyday living.</p>
            <button class="add-btn ${added ? "added" : ""}" data-add="${id}" ${added ? "disabled" : ""}>
              ${added ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </article>
      `;
    });

    html += "</div></section>";
  });

  html += "</main>";
  return html;
}

function cartPage() {
  let html = navbar() + `
    <main class="cart-page">
      <section class="section-heading">
        <div>
          <p class="eyebrow">YOUR SHOPPING CART</p>
          <h1>Plant Cart</h1>
          <p>${cartCount()} plant${cartCount() === 1 ? "" : "s"} in your cart.</p>
        </div>
      </section>
  `;

  if (cart.length === 0) {
    return html + `
      <section class="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add a few plants and they will appear here.</p>
        <a href="#/plants" class="primary-btn">Continue Shopping</a>
      </section>
    </main>`;
  }

  html += '<div class="cart-layout"><section class="cart-list">';

  cart.forEach(item => {
    html += `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-main">
          <div>
            <h2>${item.name}</h2>
            <p>Unit price: ${money(item.price)}</p>
          </div>
          <div class="quantity-control">
            <button data-dec="${item.id}" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button data-inc="${item.id}" aria-label="Increase quantity">+</button>
          </div>
          <div class="cart-item-total">
            <strong>${money(item.price * item.quantity)}</strong>
            <button class="delete-btn" data-delete="${item.id}" aria-label="Delete item">🗑</button>
          </div>
        </div>
      </article>
    `;
  });

  html += `
    </section>
    <aside class="cart-summary">
      <h2>Order Summary</h2>
      <div class="summary-row"><span>Total Plants</span><strong>${cartCount()}</strong></div>
      <div class="summary-row grand-total"><span>Total Amount</span><strong>${money(cartTotal())}</strong></div>
      <button id="checkout" class="checkout-btn">Checkout</button>
      <a href="#/plants" class="secondary-btn full-width">Continue Shopping</a>
    </aside>
    </div>
    </main>
  `;

  return html;
}

function render() {
  const path = window.location.hash.replace("#", "") || "/";
  if (path === "/plants") {
    document.getElementById("app").innerHTML = plantsPage();
  } else if (path === "/cart") {
    document.getElementById("app").innerHTML = cartPage();
  } else {
    document.getElementById("app").innerHTML = home();
  }
}

document.addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  const inc = event.target.closest("[data-inc]");
  const dec = event.target.closest("[data-dec]");
  const del = event.target.closest("[data-delete]");

  if (add) {
    const id = Number(add.dataset.add);
    const product = plants.find(item => item.id === id);
    if (product && !cart.some(item => item.id === id)) {
      cart.push({ ...product, quantity: 1 });
      render();
    }
  }

  if (inc) {
    const item = cart.find(item => item.id === Number(inc.dataset.inc));
    if (item) item.quantity += 1;
    render();
  }

  if (dec) {
    const item = cart.find(item => item.id === Number(dec.dataset.dec));
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) cart = cart.filter(cartItem => cartItem.id !== item.id);
    }
    render();
  }

  if (del) {
    cart = cart.filter(item => item.id !== Number(del.dataset.delete));
    render();
  }

  if (event.target.closest("#checkout")) {
    window.alert("Coming Soon — checkout will be available shortly.");
  }
});

window.addEventListener("hashchange", render);
render();
