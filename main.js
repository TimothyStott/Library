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
//Buttons
const addButton = document.querySelector("#addSubmitBtn");
const returnButton = document.querySelector('#return-button');
//Inputs
const titleText = document.querySelector("#Title");
const authorText = document.querySelector('#Author');
const numPages = document.querySelector('#Pages');
const isRead = document.querySelector('#Read-CheckBox');
//Divs
const modalDiv = document.querySelector('.book-add-container-modal');


//Event Listner
returnButton.addEventListener('click', hideDiv);




//Functions
function hideDiv(){
    modalDiv.classList.add("hide");
    console.log(modalDiv);
}




function addBookToLibrary(){
    
}

function updateLibraryDisplay(){

}   



addButton.addEventListener('click', addBookToLibrary);


