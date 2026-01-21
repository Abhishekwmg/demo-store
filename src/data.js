const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 2999,
        category: "Electronics",
        description: "Over-ear wireless headphones with noise cancellation and 20 hours battery life.",
        brand: "SoundMax",
        rating: 4.5,
        stock: 45,
        image: "https://via.placeholder.com/300x300?text=Headphones"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 4499,
        category: "Wearables",
        description: "Fitness watch with heart rate monitor, sleep tracking, and waterproof design.",
        brand: "FitPro",
        rating: 4.2,
        stock: 30,
        image: "https://via.placeholder.com/300x300?text=Smart+Watch"
    },
    {
        id: 3,
        name: "Gaming Mouse",
        price: 1599,
        category: "Accessories",
        description: "Ergonomic gaming mouse with RGB lighting and adjustable DPI.",
        brand: "GameX",
        rating: 4.6,
        stock: 80,
        image: "https://via.placeholder.com/300x300?text=Gaming+Mouse"
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        price: 3799,
        category: "Accessories",
        description: "Mechanical keyboard with blue switches and customizable backlight.",
        brand: "KeyMaster",
        rating: 4.7,
        stock: 25,
        image: "https://via.placeholder.com/300x300?text=Keyboard"
    },
    {
        id: 5,
        name: "Portable Power Bank 20000mAh",
        price: 2199,
        category: "Electronics",
        description: "High-capacity power bank with fast charging and dual USB output.",
        brand: "ChargeUp",
        rating: 4.4,
        stock: 60,
        image: "https://via.placeholder.com/300x300?text=Power+Bank"
    },
    {
        id: 6,
        name: "Laptop Backpack",
        price: 1899,
        category: "Bags",
        description: "Water-resistant laptop backpack with multiple compartments.",
        brand: "UrbanCarry",
        rating: 4.3,
        stock: 50,
        image: "https://via.placeholder.com/300x300?text=Backpack"
    },
    {
        id: 7,
        name: "Wireless Earbuds",
        price: 3499,
        category: "Electronics",
        description: "True wireless earbuds with touch control and charging case.",
        brand: "BeatPods",
        rating: 4.1,
        stock: 70,
        image: "https://via.placeholder.com/300x300?text=Earbuds"
    },
    {
        id: 8,
        name: "Smart LED Bulb",
        price: 799,
        category: "Home",
        description: "WiFi-enabled smart bulb with app control and color modes.",
        brand: "GlowSmart",
        rating: 4.0,
        stock: 120,
        image: "https://via.placeholder.com/300x300?text=Smart+Bulb"
    },
    {
        id: 9,
        name: "Stainless Steel Water Bottle",
        price: 999,
        category: "Lifestyle",
        description: "Insulated stainless steel bottle that keeps drinks hot or cold.",
        brand: "HydroSteel",
        rating: 4.8,
        stock: 90,
        image: "https://via.placeholder.com/300x300?text=Water+Bottle"
    },
    {
        id: 10,
        name: "Office Chair",
        price: 7499,
        category: "Furniture",
        description: "Ergonomic office chair with lumbar support and adjustable height.",
        brand: "ComfortSit",
        rating: 4.5,
        stock: 15,
        image: "https://via.placeholder.com/300x300?text=Office+Chair"
    },
    {
        id: 11,
        name: "USB-C Hub",
        price: 2499,
        category: "Accessories",
        description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.",
        brand: "Portify",
        rating: 4.3,
        stock: 40,
        image: "https://via.placeholder.com/300x300?text=USB+Hub"
    },
    {
        id: 12,
        name: "Wireless Charger",
        price: 1299,
        category: "Electronics",
        description: "Fast wireless charging pad compatible with most smartphones.",
        brand: "WireFree",
        rating: 4.2,
        stock: 55,
        image: "https://via.placeholder.com/300x300?text=Wireless+Charger"
    },
    {
        id: 13,
        name: "Bluetooth Speaker",
        price: 2799,
        category: "Audio",
        description: "Portable Bluetooth speaker with deep bass and 10-hour playtime.",
        brand: "BoomBox",
        rating: 4.6,
        stock: 35,
        image: "https://via.placeholder.com/300x300?text=Speaker"
    },
    {
        id: 14,
        name: "Notebook Set (Pack of 3)",
        price: 499,
        category: "Stationery",
        description: "A set of 3 premium quality ruled notebooks.",
        brand: "NoteWell",
        rating: 4.1,
        stock: 150,
        image: "https://via.placeholder.com/300x300?text=Notebook"
    },
    {
        id: 15,
        name: "Desk Lamp",
        price: 1699,
        category: "Home",
        description: "LED desk lamp with adjustable brightness and flexible neck.",
        brand: "BrightLite",
        rating: 4.4,
        stock: 65,
        image: "https://via.placeholder.com/300x300?text=Desk+Lamp"
    },
    {
        id: 16,
        name: "Running Shoes",
        price: 5299,
        category: "Footwear",
        description: "Lightweight running shoes with breathable mesh design.",
        brand: "RunFast",
        rating: 4.7,
        stock: 20,
        image: "https://via.placeholder.com/300x300?text=Shoes"
    },
    {
        id: 17,
        name: "Sunglasses",
        price: 1999,
        category: "Fashion",
        description: "UV-protected stylish sunglasses with polarized lenses.",
        brand: "SunStyle",
        rating: 4.0,
        stock: 75,
        image: "https://via.placeholder.com/300x300?text=Sunglasses"
    },
    {
        id: 18,
        name: "Travel Duffel Bag",
        price: 3499,
        category: "Bags",
        description: "Spacious travel duffel bag with durable fabric and shoulder strap.",
        brand: "TripMate",
        rating: 4.3,
        stock: 28,
        image: "https://via.placeholder.com/300x300?text=Duffel+Bag"
    },
    {
        id: 19,
        name: "Coffee Mug",
        price: 399,
        category: "Kitchen",
        description: "Ceramic coffee mug with minimalist design.",
        brand: "MugLife",
        rating: 4.5,
        stock: 200,
        image: "https://via.placeholder.com/300x300?text=Coffee+Mug"
    },
    {
        id: 20,
        name: "Phone Stand",
        price: 599,
        category: "Accessories",
        description: "Adjustable phone stand suitable for desk and bedside use.",
        brand: "HoldIt",
        rating: 4.2,
        stock: 110,
        image: "https://via.placeholder.com/300x300?text=Phone+Stand"
    }
];

export default products;
