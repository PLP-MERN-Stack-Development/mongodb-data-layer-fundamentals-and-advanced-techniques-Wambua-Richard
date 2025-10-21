const { MongoClient } = require('mongodb')

const uri ='mongodb+srv://wambuarichard335_db_user:RichAtlas@96@cluster0.amp8xws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const dbName = 'plp_bookstore'
const collectionName = 'books'
async function runQueries() {
  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log('Connected to MongoDB')

    const database = client.db(dbName)
    const booksCollection = database.collection(collectionName)

    // Query 1: Find all books in a specific genre
    const genreQuery = 'Programming'
    const booksInGenreQuery = await booksCollection.find({ genre: genreQuery }).toArray()
    console.log(`Books in genre ${genreQuery}:`, booksInGenreQuery)

    // Query 2: Find all books with a price greater than a certain amount
    const priceThreshold = 20.00
    const expensiveBooks = await booksCollection.find({ price: { $gt: priceThreshold } }).toArray()
    console.log(`Books with price greater than $${priceThreshold}:`, expensiveBooks)

    // Query 3: Find books by a specific author
    const authorQuery = 'Richard Wambua'
    const booksByAuthorQuery = await booksCollection.find({ author: authorQuery }).toArray()
    console.log(`Books by ${authorQuery}:`, booksByAuthorQuery)


    // Query 4: Update the price of a specific book
    const bookTitle = 'The Art of MongoDB'
    const updateResult = await booksCollection.updateOne(
      { title: bookTitle },
      { $set: { 
        price: 25.99 
        } }
    );

    // Query 5: Delete a book by its title
    const titleToRemove = 'Old Book Title'
    const deleteResultByTitle = await booksCollection.deleteOne({ title: titleToRemove })
    console.log(`Deleted ${deleteResultByTitle.deletedCount} book with title "${titleToRemove}"`)


  } finally {
    await client.close()
    console.log('Disconnected from MongoDB')
  }
}
runQueries().catch(console.dir);