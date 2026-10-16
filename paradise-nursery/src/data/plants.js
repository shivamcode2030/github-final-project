export const plantCategories = [
  {
    id: "air-purifying",
    name: "Air Purifying Plants",
    description: "Fresh-looking plants that help bring a cleaner, calmer feel to your space.",
    products: [
      { id: 1, name: "Snake Plant", price: 699, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2fa5?auto=format&fit=crop&w=800&q=80", description: "A hardy classic that thrives with minimal care." },
      { id: 2, name: "Peace Lily", price: 749, image: "https://images.unsplash.com/photo-1593691509543-c55fb32a2e1?auto=format&fit=crop&w=800&q=80", description: "Elegant green leaves with a graceful white bloom." },
      { id: 3, name: "Spider Plant", price: 599, image: "https://images.unsplash.com/photo-1572688484438-313a2a4b2c42?auto=format&fit=crop&w=800&q=80", description: "A cheerful, easy-care plant with arching leaves." },
      { id: 4, name: "ZZ Plant", price: 899, image: "https://images.unsplash.com/photo-1597055181300-d3f5aa195c9f?auto=format&fit=crop&w=800&q=80", description: "Glossy foliage with excellent low-light tolerance." },
      { id: 5, name: "Rubber Plant", price: 949, image: "https://images.unsplash.com/photo-1614595034684-9bfe9f55b218?auto=format&fit=crop&w=800&q=80", description: "Bold leaves that make an instant indoor statement." },
      { id: 6, name: "Dracaena", price: 799, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80", description: "A sleek plant that fits beautifully in modern rooms." }
    ]
  },
  {
    id: "low-light",
    name: "Low Light Favorites",
    description: "Reliable choices for bedrooms, offices, and cozy corners with less sunlight.",
    products: [
      { id: 7, name: "Cast Iron Plant", price: 899, image: "https://images.unsplash.com/photo-1593691509543-c55fb32a2e1?auto=format&fit=crop&w=800&q=80", description: "Tough, elegant foliage for shaded indoor spots." },
      { id: 8, name: "Chinese Evergreen", price: 849, image: "https://images.unsplash.com/photo-1572688484438-313a2a4b2c42?auto=format&fit=crop&w=800&q=80", description: "Patterned leaves with a relaxed tropical look." },
      { id: 9, name: "Parlor Palm", price: 999, image: "https://images.unsplash.com/photo-1597055181300-d3f5aa195c9f?auto=format&fit=crop&w=800&q=80", description: "Soft fronds that add a peaceful feel indoors." },
      { id: 10, name: "Calathea", price: 1049, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80", description: "Decorative foliage with striking natural patterns." },
      { id: 11, name: "Philodendron", price: 899, image: "https://images.unsplash.com/photo-1614595034684-9bfe9f55b218?auto=format&fit=crop&w=800&q=80", description: "A forgiving trailing plant for shelves and desks." },
      { id: 12, name: "Lucky Bamboo", price: 549, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2fa5?auto=format&fit=crop&w=800&q=80", description: "Compact greenery with a simple calming silhouette." }
    ]
  },
  {
    id: "tropical",
    name: "Tropical Beauties",
    description: "Statement houseplants for a lush, vacation-like atmosphere.",
    products: [
      { id: 13, name: "Monstera Deliciosa", price: 1299, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80", description: "Iconic split leaves that bring instant tropical character." },
      { id: 14, name: "Bird of Paradise", price: 1499, image: "https://images.unsplash.com/photo-1597055181300-d3f5aa195c9f?auto=format&fit=crop&w=800&q=80", description: "Large sculptural leaves for a bold indoor display." },
      { id: 15, name: "Alocasia", price: 1199, image: "https://images.unsplash.com/photo-1614595034684-9bfe9f55b218?auto=format&fit=crop&w=800&q=80", description: "Arrow-shaped leaves with dramatic tropical presence." },
      { id: 16, name: "Fiddle Leaf Fig", price: 1399, image: "https://images.unsplash.com/photo-1593691509543-c55fb32a2e1?auto=format&fit=crop&w=800&q=80", description: "Large violin-shaped leaves for bright interiors." },
      { id: 17, name: "Anthurium", price: 999, image: "https://images.unsplash.com/photo-1572688484438-313a2a4b2c42?auto=format&fit=crop&w=800&q=80", description: "Glossy green foliage with vibrant heart-shaped blooms." },
      { id: 18, name: "Bromeliad", price: 1099, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2fa5?auto=format&fit=crop&w=800&q=80", description: "Colorful tropical foliage that brightens any room." }
    ]
  }
];

export const allPlants = plantCategories.flatMap((category) => category.products);
