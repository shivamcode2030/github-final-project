# Online Book Review Application

Final project for IBM's Node.js and Express back-end course.

## Project features

This RESTful application supports:

- retrieving all books
- searching by ISBN, author, and title
- retrieving book reviews
- user registration and login
- adding and modifying a logged-in user's own review
- deleting a logged-in user's own review
- JWT authentication combined with Express sessions
- asynchronous Node.js client methods using async/await and Axios

## Run

    cd final_project
    npm install
    npm start

The server runs on port 5000.

## cURL test sequence

Use these commands in order.

1. Get all books

    curl -s http://localhost:5000/

2. Get book by ISBN

    curl -s http://localhost:5000/isbn/8

3. Get books by author

    curl -s http://localhost:5000/author/Jane%20Austen

4. Get books by title

    curl -s http://localhost:5000/title/Pride%20and%20Prejudice

5. Get the initial review

    curl -s http://localhost:5000/review/8

6. Register

    curl -s -X POST http://localhost:5000/register -H "Content-Type: application/json" -d '{"username":"shivam","password":"pass123"}'

7. Login and save session cookie

    curl -s -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -c cookies.txt -d '{"username":"shivam","password":"pass123"}'

8. Add or modify a review

    curl -s -X PUT "http://localhost:5000/customer/auth/review/8?review=Excellent%20book" -b cookies.txt

9. Delete the review

    curl -s -X DELETE http://localhost:5000/customer/auth/review/8 -b cookies.txt

## Task 10: Axios client methods

The file router/general.js contains these four async methods:

- getAllBooks()
- getBooksByISBN(isbn)
- getBooksByAuthor(author)
- getBooksByTitle(title)

Each method uses Axios with async/await and is exported for reuse.

## Submission note

The official course skeleton is from ibm-developer-skills-network/expressBookReviews. The final repository should be a GitHub fork of that repository.
