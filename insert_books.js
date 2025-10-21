// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb+srv://wambuarichard335_db_user:P2lvfOKv50tQSz6@cluster0.sug8jlz.mongodb.net/plp_bookstore?retryWrites=true&w=majority&appName=Cluster0';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Insert multiple book documents into the 'books' collection
const books = [
  {
    title: "The Art of MongoDB",
    author: "Dedan Okware",
    genre: "Technology",
    published_year: 2023,
    price: 29.99,
    in_stock: true,
    pages: 320,
    publisher: "TechPress"
  },
  {
    title: "Node.js for Beginners",
    author: "Eddy Mwangi",
    genre: "Programming",
    published_year: 2022,
    price: 24.50,
    in_stock: true,
    pages: 280,
    publisher: "CodeWorld"
  },
  {
    title: "Mastering JavaScript",
    author: "Richard Wambua",
    genre: "Programming",
    published_year: 2021,
    price: 35.00,
    in_stock: true,
    pages: 450,
    publisher: "JS Publications"
  },
  {
    title: "Python Made Easy",
    author: "Sharon Mutheu",
    genre: "Programming",
    published_year: 2020,
    price: 27.75,
    in_stock: false,
    pages: 310,
    publisher: "LearnPress"
  },
  {
    title: "Database Design Essentials",
    author: "Rich Brown",
    genre: "Database",
    published_year: 2023,
    price: 31.25,
    in_stock: true,
    pages: 360,
    publisher: "TechWorld"
  },
  {
    title: "Modern Web Development",
    author: "Eddy Karanja",
    genre: "Web Development",
    published_year: 2024,
    price: 40.00,
    in_stock: true,
    pages: 500,
    publisher: "WebTech"
  },
  {
    title: "React in Depth",
    author: "Margaret Wanjiru",
    genre: "Frontend Development",
    published_year: 2023,
    price: 33.90,
    in_stock: true,
    pages: 420,
    publisher: "ReactPress"
  },
  {
    title: "Data Science Fundamentals",
    author: "Pauline Mwangi",
    genre: "Data Science",
    published_year: 2021,
    price: 45.00,
    in_stock: false,
    pages: 480,
    publisher: "DataPub"
  },
  {
    title: "Artificial Intelligence 101",
    author: "Charles Njoroge",
    genre: "AI",
    published_year: 2022,
    price: 39.99,
    in_stock: true,
    pages: 390,
    publisher: "SmartTech"
  },
  {
    title: "Cloud Computing Basics",
    author: "Joy Mumbua",
    genre: "Cloud Technology",
    published_year: 2023,
    price: 28.50,
    in_stock: true,
    pages: 350,
    publisher: "CloudHub"
  }
];

// Function to insert books
async function insertBooks() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertMany(books);
    console.log(`📚 Successfully inserted ${result.insertedCount} books`);
  } catch (err) {
    console.error("❌ Error inserting books:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection closed");
  }
}

// Run the function
insertBooks();
