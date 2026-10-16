# Submission Outputs — Book Review Final Project

Run the server from the final_project folder:

    cd final_project
    npm install
    npm start

## Task 1 — getallbooks

Command:

    curl -s http://localhost:5000/

Expected output:

    {"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}},"2":{"author":"Hans Christian Andersen","title":"Fairy tales","reviews":{}},"3":{"author":"Dante Alighieri","title":"The Divine Comedy","reviews":{}},"4":{"author":"Unknown","title":"The Epic Of Gilgamesh","reviews":{}},"5":{"author":"Unknown","title":"The Book Of Job","reviews":{}},"6":{"author":"Unknown","title":"One Thousand and One Nights","reviews":{}},"7":{"author":"Unknown","title":"Njál's Saga","reviews":{}},"8":{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}},"9":{"author":"Honoré de Balzac","title":"Le Père Goriot","reviews":{}},"10":{"author":"Samuel Beckett","title":"Molloy, Malone Dies, The Unnamable, the trilogy","reviews":{}}}

## Task 2 — getbooksbyISBN

Command:

    curl -s http://localhost:5000/isbn/8

Expected output:

    {"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}}

## Task 3 — getbooksbyauthor

Command:

    curl -s "http://localhost:5000/author/Jane%20Austen"

Expected output:

    [{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}}]

## Task 4 — getbooksbytitle

Command:

    curl -s "http://localhost:5000/title/Pride%20and%20Prejudice"

Expected output:

    [{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}}]

## Task 5 — getbookreview

Command:

    curl -s http://localhost:5000/review/8

Expected output:

    {}

## Task 6 — register

Command:

    curl -s -X POST http://localhost:5000/register -H "Content-Type: application/json" -d '{"username":"shivam","password":"pass123"}'

Expected output:

    {"message":"User successfully registered. Now you can login"}

## Task 7 — login

Command:

    curl -s -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -c cookies.txt -d '{"username":"shivam","password":"pass123"}'

Expected output:

    User successfully logged in

The -c cookies.txt option saves the session cookie for the protected review request.

## Task 8 — reviewadded

Command:

    curl -s -X PUT "http://localhost:5000/customer/auth/review/8?review=Excellent%20book" -b cookies.txt

Expected output:

    {"message":"The review for the book with ISBN 8 has been added/updated.","reviews":{"shivam":"Excellent book"}}

## Task 9 — deletereview

Command:

    curl -s -X DELETE http://localhost:5000/customer/auth/review/8 -b cookies.txt

Expected output:

    {"message":"Reviews for the ISBN 8 posted by the user shivam deleted."}

## Task 10 — general.js URL

    https://github.com/shivamcode2030/github-final-project/blob/main/final_project/router/general.js

The file contains getAllBooks(), getBooksByISBN(), getBooksByAuthor(), and getBooksByTitle(), all implemented with async/await and Axios.

## Task 11 — githubrepo

This requires the GitHub repository to actually be forked from the official course skeleton. The repository currently used for staging is not a fork of that skeleton, so do not submit a fabricated output.

Recommended fork:
    https://github.com/ibm-developer-skills-network/expressBookReviews

After creating the fork under the account shivamcode2030, run:

    curl -s https://api.github.com/repos/shivamcode2030/expressBookReview

The output should show "fork": true and a parent repository whose full_name is ibm-developer-skills-network/expressBookReviews.
