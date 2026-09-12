//Bagian 1
//Latihan 1.1
const menghitungDiscont = (harga, disc)=> {
    console.log(harga * disc / 100)
}

//Latihan 1.2
const cart = [ 
    { title: "Laptop", price: 1000, discountPercent: 10 }, 
    { title: "Mouse", price: 20, discountPercent: 5 }, 
    { title: "Keyboard", price: 50, discountPercent: 0 } 
];
const totalHargaDiscount = ()=> {
    const result = [];
    for (const item of cart){
        const hargaAfterDisc = item.price - (item.price * item.discountPercent / 100)
        console.log(`Harga ${item.title} ialah: ${hargaAfterDisc}`)
    }
}


//bagian 2
const products = [
  { id: 1, title: "Laptop Pro 15", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone X", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Wireless Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Gaming Monitor 27\"", price: 350, category: "monitors", stock: 8 },
  { id: 5, title: "Mechanical Keyboard", price: 120, category: "accessories", stock: 25 },
  { id: 6, title: "Wireless Mouse", price: 45, category: "accessories", stock: 40 },
  { id: 7, title: "Smartwatch Sport", price: 250, category: "wearables", stock: 12 },
  { id: 8, title: "Tablet Air 10\"", price: 600, category: "tablets", stock: 10 },
  { id: 9, title: "Bluetooth Speaker", price: 80, category: "audio", stock: 18 },
  { id: 10, title: "External SSD 1TB", price: 130, category: "storage", stock: 22 },
  { id: 11, title: "Ultra Slim Laptop", price: 950, category: "laptops", stock: 6 },
  { id: 12, title: "Budget Smartphone", price: 200, category: "phones", stock: 30 },
  { id: 13, title: "Noise Cancelling Earbuds", price: 150, category: "audio", stock: 14 },
  { id: 14, title: "Curved Gaming Monitor 34\"", price: 700, category: "monitors", stock: 4 },
  { id: 15, title: "USB-C Hub Multiport", price: 35, category: "accessories", stock: 50 },
  { id: 16, title: "Webcam HD 1080p", price: 65, category: "accessories", stock: 20 },
  { id: 17, title: "Fitness Tracker Band", price: 50, category: "wearables", stock: 35 },
  { id: 18, title: "Graphic Drawing Tablet", price: 300, category: "tablets", stock: 7 },
  { id: 19, title: "Soundbar Home Theater", price: 220, category: "audio", stock: 9 },
  { id: 20, title: "External Hard Drive 2TB", price: 85, category: "storage", stock: 28 },
  { id: 21, title: "Gaming Laptop RTX", price: 1800, category: "laptops", stock: 3 },
  { id: 22, title: "Flagship Smartphone", price: 1100, category: "phones", stock: 9 },
  { id: 23, title: "Studio Monitor Headphones", price: 180, category: "audio", stock: 11 },
  { id: 24, title: "4K Office Monitor", price: 400, category: "monitors", stock: 15 },
  { id: 25, title: "Ergonomic Vertical Mouse", price: 55, category: "accessories", stock: 16 },
  { id: 26, title: "Fast Wireless Charger", price: 25, category: "accessories", stock: 60 },
  { id: 27, title: "Smart Ring Health Tracker", price: 200, category: "wearables", stock: 8 },
  { id: 28, title: "Mini Tablet 8\"", price: 350, category: "tablets", stock: 13 },
  { id: 29, title: "Microphone Condenser USB", price: 90, category: "audio", stock: 17 },
  { id: 30, title: "NVMe M.2 SSD 2TB", price: 190, category: "storage", stock: 21 }
];

// Latihan 2.1
const findItem = (product, id)=> {
    return product.find(p => p.id == id)
}

//Latihan 2.2
const filterProduct = (product)=> {
    return product.filter((p) => p.stock < 10)
}

//Latihan 2.3
const updateStock = (product, id, newStock)=> {
    return products.map(p => p.id === id ? { ...p, stock: newStock } : p );
}

//bagian 3
const productNested = [
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
      depth: 20
    },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
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
      depth: 15
    },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];

//Latihan 3.1
const ambilTag = (product)=> {
    return product.map(p => p.tags)
}

//Latihan 3.2
const findProductByTag = (product, tag)=> {
    return product.find(p=>p.tags.includes(tag))
}

//Latihan 3.3
const totalRipiew = (id)=> {
    for (const item of productNested){
        const total = item.reviews.length;
        if (item.id == id){
            console.log(`Jumlah review ${item.title} ialah sebanyak ${total}`)
        }
    }
}

//Latihan 3.4
const maxRiview = (product)=> {
    const rating = product.filter((p) => p.reviews.some((ripiw) => ripiw.rating == 5))
    return rating
}

//Latihan 3.5
const meanRating = (product)=> {
    return product.map((p) => {
        const total = p.reviews.reduce((sum, reviews)=> sum + reviews.rating, 0);
        
        const mean = total / p.reviews.length;

        return {
            id: p.id,
            title: p.title,
            mean: Number(mean.toFixed(2))
        }
    })
}

//Latihan 3.6
const ripiwbanyak = (product)=> {
    return product.reduce((max, now) => {
        const nowReview = now.reviews ? now.reviews.length : 0;
        const maxReview = max.reviews ? max.reviews.length : 0;

        return nowReview > maxReview ? nowReview : maxReview;
    })
}

//Latihan 3.7
const ambilAllReview = (product)=> {
    return product.flatMap((p) => p.reviews).map((repiw) => repiw.rating)
}

//bagian 4
const tags = [ 
    ["computer", "office"], 
    ["electronics"], 
    ["gaming", "computer"] ];

//Latihan 4.1
const all = tags.flatMap((p) => p)

//Latihan 4.2
const allComment = productNested.flatMap((p) => p.reviews).map((r)=> r.comment)

//Bagian 5
//Latihan 5.1
const meanPriceByCategory = (product)=> {
    return product.filter((p) => p.category == 'laptops').map(p => p.price);
};

//Latihan 5.2
const getStatistics = (product)=> {
    const totalProduct = `Total product didalam arrat terdapat ${product.length}`;
    const averagePrice = product.reduce((sum, p) => sum + p.price, 0); 
    const highestPrice = Math.max(...product.map(p => p.price)); 
    const lowestPrice = Math.min(...product.map(p => p.price));
    const totalStock = product.reduce((sum, p) => sum + p.stock, 0);
    const averageRating = ()=> {
        return product.map((p) => {
            const total = p.reviews.reduce((sum, ripiw) => sum + ripiw.rating, 0);
            const average = total / p.reviews.length;
            return `Rata rata nya ialah ${average}`
        })
    };
}; 

//Bagian 6
//Latihan 6.1
const angka = [1,2,3,4,5,6,7,8,9,0]
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (i === target) return array[i];
  }
  return -1;
};

//Latihan 6.2
const linearSearchById = (arr, target)=> {
    for (let i = 0; i < arr.length; i++){
        return arr.find(arr => arr.id == target)
    } return"BELAJAR MAKANYA!";
};

//Bagian 7
//Latihan 7.1
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}; 

//Latihan 7.2
const sortingData = [...productNested].sort((a,z) => a.price - z.price);
const binarySearchById = (sortedProduct, targetPrice)=> {
    let left = 0;
    let right = sortedProduct.length - 1;
    while (left <= right){
        const mid = Math.floor((left + right) / 2);
        const nowValue = sortedProduct[mid].price;
        if (nowValue === targetPrice) return sortedProduct[mid];
        if (nowValue < targetPrice) return left = mid + 1;
        else right = mid - 1;
    } return "data tidak ditemukan"
};

//Bagian 8
//Latihan 8.1
function bubbleSort(numbers) {
  const arr = [...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

//Latihan 8.2

const sortProduct = (product, sortBy)=> {
    if (sortBy == 'price-asc'){
        return [...product].sort((a,z) => a.price - z.price);
    } else if (sortBy == 'price-dsc'){
        return [...product].sort((a,z) => z.price - a.price);
    } else if (sortBy == 'rating'){
        const rating = product.flatMap((p) => p.reviews);
        return [...rating].sort((a,z) => a.rating - z.rating)
    } else if (sortBy == 'title'){
        return [...product].sort((a,z) => z.title.localeCompare(a.title))
    }
}; console.log(sortProduct(productNested, 'title'))




