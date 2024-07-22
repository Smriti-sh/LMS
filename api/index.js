// // var express = require("express");
// // var cors = require("cors");     //middleware enable Cross-Origin Resource Sharing, which allows the server to accept requests from different origins.
// // const multer = require("multer");       //a middleware for handling multipart/form-data, which is primarily used for uploading files.
// // const { MongoClient } = require("mongodb");

// // var app = express();
// // app.use(cors());        //Applies the CORS middleware to all routes, enabling cross-origin requests.
// // // app.use(cors({
// // //     origin: 'http://localhost:4200', 
// // //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// // //     credentials: true
// // //   }));
// // app.use(express.json());        //Middleware to parse JSON bodies of incoming requests.

// // const username = encodeURIComponent("admin");
// // const password = encodeURIComponent("123abc456");
// // const cluster = "cluster0.zuaefuo.mongodb.net";
// // const uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;

// // const client = new MongoClient(uri);    //Creates a new instance of the MongoDB client using the connection URI.
// // var database;
// // var collectn; 

// // async function connectToDatabase() {
// //     try {
// //         await client.connect();
// //         database = client.db("LMS");
// //         collectn = database.collection("books");
// //         console.log("Mongo DB Connection Successful");
// //     } catch (error) {
// //         console.error("Failed to connect to MongoDB", error);
// //     }
// // }

// // async function fetchBooks() {
// //     try {
// //         return await collectn.find({}).toArray();   //Finds all documents in the books collection and converts them to an array.
// //     } catch (error) {
// //         console.error("Error fetching books", error);
// //         throw error;
// //     }
// // }

// // // Middleware to check database connection
// // app.use((req, res, next) => {               //Middleware that runs for every incoming request
// //     if (!database) {
// //         res.status(500).send("Database connection not established");
// //     } else {
// //         next();
// //     }
// // });

// // // API to get all books
// // //
// // app.get('/api/LMS/GetBooks', async (req, res) => {
// //     try {
// //         const books = await fetchBooks();
// //         res.send(books);
// //     } catch (error) {
// //         res.status(500).send("Error fetching books");
// //     }
// // });

// // //Defines a POST route to add a new book
// // app.post('/api/LMS/AddBooks', multer().none(), async (req, res) => {
// //     const { newBooks } = req.body;      //Destructures the newBooks field from the request body.
// //     if (!newBooks) {
// //         return res.status(400).send("New Book Description is required");
// //     }

// //     try {
// //         const numOfDocs = await collectn.countDocuments();
// //         //Counts the number of documents in the books collection.
// //         const result = await collectn.insertOne({      //Inserts a new book document with an ID based on the current number of documents and the description provided.
// //             id: (numOfDocs + 1).toString(),
// //             description: newBooks
// //         });
// //         res.json("Added Successfully");
// //     } catch (error) {
// //         res.status(500).send("Error adding book");
// //     }
// // });

// // app.delete('/api/LMS/DeleteBooks', async (req, res) => {
// //     const { id } = req.query;
// //     if (!id) {
// //         return res.status(400).send("Book ID is required");
// //     }

// //     try {
// //         const result = await collectn.deleteOne({ id });
// //         if (result.deletedCount === 0) {
// //             return res.status(404).send("Book not found");
// //         }
// //         res.json("Deleted Successfully");
// //     } catch (error) {
// //         res.status(500).send("Error deleting book");
// //     }
// // });

// // app.listen(5037, async () => {
// //     await connectToDatabase();
// //     console.log("Server is listening on port 5037");
// // });




// var express = require("express");
// var mongoose = require('mongoose');
// const Product = require('./models/product.model.js');
// const productRoute = require("./routes/product.route.js");
// var app = express();

// //middleware
// //we have to use this middleware because we are not allowed to pass json to nodejs by default
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));  //this middleware allows us to add data through api even by form url-encoded format instead of just json


// //routes
// app.use('/api/products', productRoute);


// app.get('/', (req, res) => {
//     res.send("Hello message from API");
// });




// // //to get all data in db
// // app.get('/api/products', async (req, res) => {
// //     try {
// //         const products = await Product.find({});    //to find everything in DB
// //         res.status(200).json(products);
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // });


// // //added json Viewer for better view of json
// // //to get 1 specific data from db
// // app.get("/api/products/:id", async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const product = await Product.findById(id);
// //         res.status(500).json(product);
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // });

// // //to show all
// // app.post('/api/products', async (req, res) => {
// //     try {
// //         //This method creates a new document in the Product collection using the data from req.body.
// //         const product = await Product.create(req.body);
// //         res.status(200).json(product);
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // })


// // //update
// // app.put('/api/products/:id', async (req, res) => {
// //     try {

// //         const { id } = req.params;
// //         const product = await Product.findByIdAndUpdate(id, req.body);

// //         if (!product) {
// //             return res.status(404).json({ message: "Product not found" });
// //         }
// //         const updatedProduct = await Product.findById(id);
// //         res.status(200).json(updatedProduct);
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // });


// // //delete
// // app.delete('/api/products/:id', async (req, res) => {
// //     try {

// //         const { id } = req.params;
// //         const product = await Product.findByIdAndDelete(id);

// //         if (!product) {
// //             return res.status(404).json({ message: "Product not found" });
// //         }
// //         res.status(200).json({ message: "Product deleted successfully" });
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // })


// mongoose.connect("mongodb+srv://admin:123abc456@cluster0.zuaefuo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
//     .then(() => {
//         console.log("Connected to database");
//         app.listen(3000, () => {
//             console.log('Server is running on port 3000');
//         });
//     })
//     .catch(() => {
//         console.log("Connected failed");
//     });


const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://admin:123abc456@cluster0.zuaefuo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
