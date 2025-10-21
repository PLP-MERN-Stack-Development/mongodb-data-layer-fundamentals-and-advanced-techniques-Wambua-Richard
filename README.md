🗄️ Week 1: MongoDB – Data Layer Fundamentals and Advanced Techniques
🚀 Objective

This project introduces the foundational and advanced concepts of MongoDB, focusing on database setup, data modeling, CRUD operations, advanced querying, aggregation pipelines, and indexing for performance optimization.

By the end of this project, you will have a fully functional MongoDB database demonstrating both practical data manipulation and performance optimization techniques.

📂 Project Structure
plp_bookstore/
│
├── insert_books.js        # Script to insert initial data into the 'books' collection
├── queries.js             # Contains all CRUD, advanced queries, and aggregation pipelines
├── README.md              # Project documentation (this file)
└── screenshot/            # Folder containing screenshots of MongoDB Compass or Atlas
    └── collection_view.png

🧰 Prerequisites

Before you begin, ensure you have the following installed or set up:

MongoDB Community Edition
 OR a MongoDB Atlas
 account

MongoDB Shell (mongosh)
 or MongoDB Compass

A working internet connection (for Atlas setup)

Basic understanding of JavaScript and MongoDB commands

⚙️ Setup Instructions
Option 1: Local MongoDB Installation

Install MongoDB Community Edition on your system.

Start the MongoDB server:

sudo systemctl start mongod


Verify that MongoDB is running:

sudo systemctl status mongod

Option 2: MongoDB Atlas (Cloud)

Visit https://www.mongodb.com/atlas

Create a free cluster.

Add a database user and whitelist your IP.

Connect using MongoDB Compass or Shell with the connection string:

mongodb+srv://<username>:<password>@cluster0.mongodb.net/plp_bookstore

🧱 Task Breakdown
🧩 Task 1: MongoDB Setup

Create a database named plp_bookstore

Create a collection named books

Use insert_books.js to insert at least 10 book documents with the following structure:

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic Literature",
  "published_year": 1925,
  "price": 15.99,
  "in_stock": true,
  "pages": 218,
  "publisher": "Scribner"
}

✍️ Task 2: Basic CRUD Operations

Implement basic database operations in queries.js:

Create: Insert multiple book documents

Read:

Find all books in a specific genre

Find books published after a certain year

Find books by a specific author

Update: Change the price of a specific book

Delete: Remove a book by its title

Example:

// Find all science fiction books
db.books.find({ genre: "Science Fiction" });

🔍 Task 3: Advanced Queries

Enhance your queries with:

Filters: Find books in stock and published after 2010

Projection: Display only title, author, and price fields

Sorting: Sort books by price (ascending or descending)

Pagination: Use limit() and skip() to display 5 books per page

Example:

db.books.find({ in_stock: true, published_year: { $gt: 2010 } },
              { title: 1, author: 1, price: 1 })
        .sort({ price: 1 })
        .limit(5);

🧮 Task 4: Aggregation Pipelines

Perform data analysis using MongoDB’s aggregation framework:

Average price of books by genre

Author with the most books

Group books by publication decade and count them

Example:

db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

⚡ Task 5: Indexing for Performance

Implement indexing to improve query speed:

Create an index on title

Create a compound index on author and published_year

Use .explain("executionStats") to compare performance before and after indexing

Example:

db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: 1 });

🧪 Expected Outcome

After completing all tasks, you should have:

A fully functional MongoDB database named plp_bookstore

Inserted and retrieved data efficiently using CRUD and advanced queries

Created insightful aggregation pipelines

Improved query performance using indexes

Screenshots demonstrating your working collections in MongoDB Compass or Atlas

🧠 Example Queries Overview
Operation	Example Command
Insert	db.books.insertMany([...])
Find	db.books.find({ genre: "Romance" })
Update	db.books.updateOne({ title: "Dune" }, { $set: { price: 24.99 } })
Delete	db.books.deleteOne({ title: "Old Book" })
Aggregate	db.books.aggregate([{ $group: { _id: "$genre", avgPrice: { $avg: "$price" }}}])
Index	db.books.createIndex({ title: 1 })
🛠️ How to Run the Scripts
Step 1: Insert Data

Run the data insertion script:

mongosh < insert_books.js

Step 2: Execute Queries

Run your MongoDB queries:

mongosh < queries.js


Or execute interactively inside MongoDB shell:

mongosh
use plp_bookstore


Then paste your queries.

✅ Submission Instructions

Accept the GitHub Classroom assignment invitation.

Clone your repository:

git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Wambua-Richard

Add the following files:

insert_books.js

queries.js

README.md

Screenshot showing MongoDB Compass or Atlas view of your books collection

Commit and push your work:

git add .
git commit -m "Week 1 MongoDB project completed"
git push origin main


Verify that all files are visible on GitHub.

Your submission will be autograded and later reviewed by your instructor.

🧾 Author

Name: Richard Wambua
Course: PLP Backend Development
Week: 1 – MongoDB Fundamentals and Advanced Techniques
>>>>>>> 72f1ca8 (Second commit)
