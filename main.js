//Default Book Creation, instantiation of library array, and addition of default book 
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const lotr1 = new Book("Lord of the Rings", "J.R.R. Tolkien", 350, false);
let myLibrary = [];
myLibrary.push(theHobbit);
myLibrary.push(lotr1);


//Main Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.infoString = this.title + " by " + this.author + ", " + this.pages + " pages, "
    this.info = function () {
        if (read) {
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
const plusButton = document.querySelector('.plus-book');
const deleteButton = document.querySelector('#delete-button');
//Inputs
const titleText = document.querySelector("#Title");
const authorText = document.querySelector('#Author');
const numPages = document.querySelector('#Pages');
const isRead = document.querySelector('#Read-CheckBox');
//Divs
const modalDiv = document.querySelector('.book-add-container-modal');
const bookTable = document.querySelector('.book-table');

//Event Listner
returnButton.addEventListener('click', toggleHideDiv);
plusButton.addEventListener('click', toggleHideDiv)
addButton.addEventListener('click', addBookToLibrary)
deleteButton.addEventListener('click',deleteRows);



//Functions
function toggleHideDiv() {
    modalDiv.classList.toggle("hide");
    console.log(modalDiv);
}

function addBookToLibrary() {

    if (titleText.value != "" && authorText.value != "" && numPages.value != "") 
    {
        myLibrary.push(new Book(titleText.value, authorText.value, parseInt(numPages.value), isRead.checked))
        myLibrary.forEach(book => console.log(book));
        titleText.value = "";
        authorText.value = "";
        numPages.value = "";
        isRead.checked = false;
        updateLibraryDisplay();

    }


}

function initialLibraryDisplay() {


    myLibrary.forEach(book => {
        let newRow = bookTable.insertRow(-1);

        let checkCell = newRow.insertCell(0);
        let titleCell = newRow.insertCell(1);
        let authorCell = newRow.insertCell(2);
        let pagesCell = newRow.insertCell(3);
        let readCell = newRow.insertCell(4);

        let newCheckBox = document.createElement('input');
        newCheckBox.setAttribute('type', 'checkbox')
        checkCell.appendChild(newCheckBox);

        let bookToAdd = document.createTextNode(book.title);
        titleCell.appendChild(bookToAdd);

        let authorToAdd = document.createTextNode(book.author);
        authorCell.appendChild(authorToAdd);

        let pagesToAdd = document.createTextNode(book.pages);
        pagesCell.appendChild(pagesToAdd);

        let boolToAdd = document.createElement('input');
        boolToAdd.setAttribute('type', 'button')
        if (book.read) {
            boolToAdd.classList.add("isReadButton");
            boolToAdd.classList.add("readButton");
        }

        else {
            boolToAdd.classList.add("notReadButton");
            boolToAdd.classList.add("readButton");
        }

        readCell.appendChild(boolToAdd);

    })

    updateReadButtonsAfterDisplay();
}

function updateLibraryDisplay(){
    {
        let book = myLibrary.at(-1);
        let newRow = bookTable.insertRow(-1);

        let checkCell = newRow.insertCell(0);
        let titleCell = newRow.insertCell(1);
        let authorCell = newRow.insertCell(2);
        let pagesCell = newRow.insertCell(3);
        let readCell = newRow.insertCell(4);

        let newCheckBox = document.createElement('input');
        newCheckBox.setAttribute('type', 'checkbox')
        checkCell.appendChild(newCheckBox);

        let bookToAdd = document.createTextNode(book.title);
        titleCell.appendChild(bookToAdd);

        let authorToAdd = document.createTextNode(book.author);
        authorCell.appendChild(authorToAdd);

        let pagesToAdd = document.createTextNode(book.pages);
        pagesCell.appendChild(pagesToAdd);

        let boolToAdd = document.createElement('input');
        boolToAdd.setAttribute('type', 'button')
        if (book.read) {
            boolToAdd.classList.add("isReadButton");
            boolToAdd.classList.add("readButton");
        }

        else {
            boolToAdd.classList.add("notReadButton");
            boolToAdd.classList.add("readButton");
        }

        readCell.appendChild(boolToAdd);

    }
}

function updateReadButtonsAfterDisplay(){
    const readButtonToggle = document.querySelectorAll('.readButton');
    readButtonToggle.forEach(button => button.addEventListener('click',toggleReadStatus));

}

function toggleReadStatus(){
    this.classList.toggle('isReadButton');
    this.classList.toggle('notReadButton');
}

function deleteRows(){
    if(confirm("This cannot be undone. Are you sure?")){
        var table = bookTable.tBodies[0];
        var rowCount = table.rows.length;

        // var i=1 to start after header
        for(var i=1; i<rowCount; i++) {
            var row = table.rows[i];
            // index of td contain checkbox is 8
            var chkbox = row.cells[0].getElementsByTagName('input')[0];
            if('checkbox' == chkbox.type && true == chkbox.checked) {
                table.deleteRow(i);
             }
        }
    }
    updateArray();
}


function updateArray(){
    myLibrary = [];
    
    /*logic needed*/

    console.log(myLibrary);
}

initialLibraryDisplay();


