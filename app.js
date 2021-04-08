// variables and selectors
let library = [];
let title = document.getElementById('title');
let writer = document.getElementById('author');
let pages = document.getElementById('pages');
let libradyCard = document.getElementById('libraryWrapper');
const submit = document.getElementById('add');
const read = document.getElementById('read');
let readStatus = false;
let readIt;


// functions 
read.addEventListener('click', function(){
    if(readStatus === false){
        readStatus = true
    } else if (readStatus === true) {readStatus = false}
    if(readStatus ===true){
        read.style = 'background-color: green'
    } else {read.style = 'background-color: red'}
})
if(readStatus === true){
    readIt = 'already read'
} else {readIt = 'not read yet'}


// book prototype
function Book(author,title,pages,read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = false
}
// new book text


// add book function
function addBook (){
   let newBook = new Book()
   newBook.author = writer.value;
   newBook.title = title.value;
   newBook.pages = pages.value;
   newBook.read = readIt;
   
   let bookElement = document.createElement('div');
   bookElement.textContent = `${newBook.title} was written by ${newBook.author} it's ${newBook.pages} pages long, ${newBook.read}`
   libradyCard.appendChild(bookElement)
   
   
}

submit.onclick = function(){
    addBook()
    
}


