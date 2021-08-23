// book constracter
function Book(title, author, isbn){
    this.title = title;
    this. author = author;
    this. isbn = isbn;
    
}

// ui constracter

function UI(){}

// event listner
document.getElementById('book-form').addEventListener('submit',
function (e){
    // get form value
    const title = document.getElementById('title').Value,
    author = document.getElementById('author').Value,
    isbn = document.getElementById('isbn').value
    // console.log(title, author, isbn);
// intention book
const book = new Book(title , author, isbn);

console.log(book);
    e.preventDefault();

});
