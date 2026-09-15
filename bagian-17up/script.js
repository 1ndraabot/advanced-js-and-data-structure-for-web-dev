//Bagian 17
//Bagian 17.1
const productsNested = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: {
      width: 30,
      height: 2,
      depth: 20,
    },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" },
    ],
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: {
      width: 7,
      height: 0.8,
      depth: 15,
    },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" },
    ],
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: 150,
    rating: 4.8,
    stock: 25,
    category: "audio",
    tags: ["bluetooth", "electronics", "music"],
    dimensions: {
      width: 18,
      height: 20,
      depth: 8,
    },
    reviews: [
      { user: "F", rating: 5, comment: "Great sound quality" },
      { user: "G", rating: 5, comment: "Noise cancellation is amazing" },
    ],
  },
  {
    id: 4,
    title: "Ergonomic Chair",
    price: 250,
    rating: 4.0,
    stock: 5,
    category: "furniture",
    tags: ["office", "furniture", "comfort"],
    dimensions: {
      width: 65,
      height: 120,
      depth: 65,
    },
    reviews: [
      { user: "H", rating: 4, comment: "Helps with back pain" },
      { user: "I", rating: 3, comment: "Hard to assemble" },
      { user: "J", rating: 5, comment: "Very comfortable" },
    ],
  },
  {
    id: 5,
    title: "Smart Watch",
    price: 200,
    rating: 3.9,
    stock: 0,
    category: "wearables",
    tags: ["mobile", "fitness", "electronics"],
    dimensions: {
      width: 4,
      height: 1,
      depth: 24,
    },
    reviews: [
      { user: "K", rating: 3, comment: "Step counter is inaccurate" },
      { user: "L", rating: 4, comment: "Sleek design" },
    ],
  },
  {
    id: 6,
    title: "Mechanical Keyboard",
    price: 110,
    rating: 4.7,
    stock: 18,
    category: "laptops",
    tags: ["computer", "accessories", "gaming"],
    dimensions: {
      width: 44,
      height: 4,
      depth: 13,
    },
    reviews: [
      { user: "M", rating: 5, comment: "Tactile feel is great" },
      { user: "N", rating: 4, comment: "A bit loud but nice" },
      { user: "O", rating: 5, comment: "Best keyboard I ever owned" },
    ],
  },
];

const state = {
  products: [],
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle" 
};

//Bagian 17
const renderProduct = (product)=> {
    const container = document.querySelector('#product-list');
    container.innerHTML = "";

    for (const item of product) {
        const card = document.createElement('div');
        card.classList.add("product-card");
        card.innerHTML = `
        <img src="${item.thumbnail}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.category}</p>
        <p>Harga: $${item.price}</p>
        <p>Rating: ${item.rating}</p>
        `;
        container.append(card);
    }
};

const firstFiveProducts = productsNested.slice(0, 5);
renderProduct(firstFiveProducts);


//Bag 18
function render() {
  const container = document.querySelector("#product-list");

  if (state.status === "loading") {
    container.innerHTML = "<p>Memuat data...</p>";
    return;
  }

  if (state.status === "error") {
    container.innerHTML = "<p>Gagal memuat produk. Silakan coba lagi.</p>";
    return;
  }

  if (state.status === "idle") {
    container.innerHTML = "";
    return;
  }

  let filtered = state.products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(state.search.toLowerCase().trim());

    const matchesCategory =
      state.category === "all" || product.category === state.category;

    return matchesSearch && matchesCategory;
  });

  let sorted = [...filtered];

  if (state.sortBy === "price-low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }

  if (sorted.length === 0) {
    state.status = "empty";
    container.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }

  state.status = "success";
  renderProduct(sorted);
}

//Bag 19
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

const categorySelect = document.querySelector("#category-select");
categorySelect.addEventListener("change", (e) => {
  state.category = e.target.value;
  render();
});

const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  render();
});

//Bag 20
function getStatistics(products = []) {
  if (!products?.length) return null; // Optional chaining pada array check

  const totalProducts = products.length;

  const { totalPrice, totalStock } = products.reduce((acc, product) => {
    // 1. Destructuring properti dari object product
    const { price = 0, stock = 0, dimensions } = product;

    // 2. Optional Chaining + Nullish Coalescing pada nested object
    const width = dimensions?.width ?? 0;

    return {
      totalPrice: acc.totalPrice + price,
      totalStock: acc.totalStock + stock
    };
  }, { totalPrice: 0, totalStock: 0 });

  return {
    totalProducts,
    totalStock,
    averagePrice: (totalPrice / totalProducts).toFixed(2)
  };
}