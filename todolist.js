// Requirements:
    // 1. App should utilize JavaScript, HTML, and CSS
    // 2. App should allow users to submit/create tasks
    // 3. Tasks should be displayed in a list
    // 4. List items should be removable (able to delete entries)

// Stretch Requirements:
    // 1. Button to select all list items
    // 2. Description field for each item
    // 3. Due Date field for each item
    // 4. Make list items editable

// Technical Requirements:
    // ● All event listeners should be defined in “window.onload” with named functions
    // ● No global variables
    // ● All styling in CSS file
    // ● All events and functionality in JavaScript file
    // ● Multiple functions
    // ● Comments in the code explaining each section

    // ADD LIST ITEM FROM INPUT LIST // 
    document.querySelector('.addItemButton').addEventListener('click', () => {
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');

        let listItem = document.createElement('input');
        let saveButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        saveButton.className = "saveButton";
        deleteButton.className = "deleteButton";

        listItem.value = document.querySelector('.addItemInput').value;
        saveButton.textContent = "Save";
        deleteButton.textContent = "Delete";

        li.appendChild(listItem);
        li.appendChild(saveButton);
        li.appendChild(deleteButton);

        ul.appendChild(li);
        document.querySelector('.addItemInput').value = '';
    });
    // ADD LIST ITEM FROM INPUT LIST // 

    document.querySelector('.removeLastButton').addEventListener('click', () => {
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.querySelector('ul').lastChild;
        ul.removeChild(li);

    });

//     document.addEventListener('click', (event) => {
// console.log(event.target);

//     })

// for (let i=0; i<document.getElementsByTagName('button.deleteButton').length; i++ ) {
//     document.getElementsByTagName('button.deleteButton')[i].addEventListener('click', () => {
//         let ul = document.getElementsByTagName('ul')[0];
//         let li = document.querySelector('ul').lastChild;
//         ul.removeChild(li);

//     });
// };


    document.querySelector('div.listDiv').addEventListener('click', (event) => {
      
        document.querySelector('div.listDiv').removeChild(document.querySelector('div.listDiv').childNodes(event.target));
    });
