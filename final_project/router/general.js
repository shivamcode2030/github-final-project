const express = require("express");
const axios = require("axios");

const books = require("./booksdb.js");
const isValid = require("./auth_users.js").isValid;
const users = require("./auth_users.js").users;

const public_users = express.Router();

const BASE_URL = process.env.BOOK_API_BASE_URL || "http://localhost:5000";

// Register a new user.
public_users.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Unable to register user."
    });
  }

  if (isValid(username)) {
    return res.status(409).json({
      message: "User already exists!"
    });
  }

  users.push({ username, password });

  return res.status(200).json({
    message: "User successfully registered. Now you can login"
  });
});

// Get the book list available in the shop.
public_users.get("/", (req, res) => {
  return res.json(books);
});

// Get book details based on ISBN.
public_users.get("/isbn/:isbn", (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  return res.json(book);
});

// Get book details based on author.
public_users.get("/author/:author", (req, res) => {
  const author = decodeURIComponent(req.params.author).toLowerCase();

  const results = Object.values(books).filter(
    (book) => book.author.toLowerCase() === author
  );

  return res.json(results);
});

// Get all books based on title.
public_users.get("/title/:title", (req, res) => {
  const title = decodeURIComponent(req.params.title).toLowerCase();

  const results = Object.values(books).filter(
    (book) => book.title.toLowerCase() === title
  );

  return res.json(results);
});

// Get book review.
public_users.get("/review/:isbn", (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  return res.json(book.reviews);
});

// -----------------------------------------------------------------------------
// Task 10 support: four Node.js methods using async/await + Axios.
// The file can also be executed directly for simple command-line testing.
// ----------------------------------------------------------------------------- 

async function getAllBooks() {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
}

async function getBooksByISBN(isbn) {
  const response = await axios.get(
    `${BASE_URL}/isbn/${encodeURIComponent(isbn)}`
  );
  return response.data;
}

async function getBooksByAuthor(author) {
  const response = await axios.get(
    `${BASE_URL}/author/${encodeURIComponent(author)}`
  );
  return response.data;
}

async function getBooksByTitle(title) {
  const response = await axios.get(
    `${BASE_URL}/title/${encodeURIComponent(title)}`
  );
  return response.data;
}

async function runClientMethod() {
  const [command, ...args] = process.argv.slice(2);

  try {
    let result;

    switch (command) {
      case "all":
        result = await getAllBooks();
        break;
      case "isbn":
        result = await getBooksByISBN(args[0]);
        break;
      case "author":
        result = await getBooksByAuthor(args.join(" "));
        break;
      case "title":
        result = await getBooksByTitle(args.join(" "));
        break;
      default:
        console.log(
          "Usage: node router/general.js all | isbn <isbn> | author <author> | title <title>"
        );
        return;
    }

    console.log(JSON.stringify(result, null, 4));
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    console.error(message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  runClientMethod();
}

module.exports.general = public_users;
module.exports.getAllBooks = getAllBooks;
module.exports.getBooksByISBN = getBooksByISBN;
module.exports.getBooksByAuthor = getBooksByAuthor;
module.exports.getBooksByTitle = getBooksByTitle;
