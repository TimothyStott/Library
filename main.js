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



function addBookToLibrary(){
    myLibrary.push(new Book("Test","Test",50,true))
    myLibrary.forEach(book => console.log(book));
}

function updateLibraryDisplay(){

}   



const addButton = document.querySelector("#addSubmitBtn");
addButton.addEventListener('click', addBookToLibrary);


