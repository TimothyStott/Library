//Default Book Creation, instantiation of library array, and addition of default book 
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let myLibrary = [];
myLibrary.push(theHobbit);

//Main Book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.infoString = this.title + " by " + this.author + ", " + this.pages + " pages, " 
    this.info = function(){
        if(read){
            return this.infoString + "read.";
       }
       else
            return this.infoString + "not read";
    }
}
//Default constants for information needed
const addButton = document.getElementById("#addSubmitBtn");
const titleText = document.getElementById("#Title");
const authorText = document.getElementById('#Author');
const numPages = document.getElementById('Pages');
const isRead = document.getElementById('Read-CheckBox');

//Event Listner



function addBookToLibrary(){
    
}

function updateLibraryDisplay(){

}   



addButton.addEventListener('click', addBookToLibrary);


