const express = require("express");
const jwt = require("jsonwebtoken");

const books = require("./booksdb.js");
const regd_users = express.Router();

const users = [];

const isValid = (username) => {
  return users.some((user) => user.username === username);
};

const authenticatedUser = (username, password) => {
  return users.some(
    (user) => user.username === username && user.password === password
  );
};

// Only registered users can login.
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Error logging in" });
  }

  if (!authenticatedUser(username, password)) {
    return res
      .status(401)
      .json({ message: "Invalid Login. Check username and password" });
  }

  const accessToken = jwt.sign({ username }, "access", { expiresIn: "1h" });

  req.session.authorization = {
    accessToken,
    username
  };

  return res.status(200).send("User successfully logged in");
});

// Add or modify the logged-in user's review.
regd_users.put("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];

  if (!book) {
    return res.status(404).json({ message: "Unable to find book!" });
  }

  const review = req.body.review ?? req.query.review;

  if (!review || String(review).trim() === "") {
    return res.status(400).json({ message: "Review is required" });
  }

  const username = req.user.username;
  book.reviews[username] = String(review);

  return res.status(200).json({
    message: `The review for the book with ISBN ${isbn} has been added/updated.`,
    reviews: book.reviews
  });
});

// Delete only the logged-in user's review.
regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];

  if (!book) {
    return res.status(404).json({ message: "Can't delete review." });
  }

  const username = req.user.username;

  if (!Object.prototype.hasOwnProperty.call(book.reviews, username)) {
    return res.status(404).json({ message: "Review not found." });
  }

  delete book.reviews[username];

  return res.status(200).json({
    message: `Reviews for the ISBN ${isbn} posted by the user ${username} deleted.`
  });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
