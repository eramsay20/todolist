// Requirements:
    // 1. App should utilize JavaScript, HTML, and CSS (√)
    // 2. App should allow users to submit/create tasks (√)
    // 3. Tasks should be displayed in a list (√)
    // 4. List items should be removable (able to delete entries) (√)

// Stretch Requirements:
    // 1. Button to select all list items (√)
    // 2. Description field for each item (√)
    // 3. Due Date field for each item (√)
    // 4. Make list items editable (√)

// Technical Requirements:
    // ● All event listeners should be defined in “window.onload” with named functions
    // ● No global variables
    // ● All styling in CSS file 
    // ● All events and functionality in JavaScript file
    // ● Multiple functions
    // ● Comments in the code explaining each section

     //---------ADD LIST ITEM, DESCRIPTION & DUE DATE---------//
    document.querySelector('.addItemButton').addEventListener('click', () => {
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        
        let dueDate = document.createElement('input');
        let listItem = document.createElement('input');
        let saveButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        let descriptLi = document.createElement('li');

        dueDate.type = "date";

        dueDate.className= "dueDate";
        saveButton.className = "saveButton";
        deleteButton.className = "deleteButton";
        descriptLi.className = "descriptLi";

        dueDate.value = document.querySelector('.dueDateSelector').value;
        listItem.value = document.querySelector('.addItemInput').value;
        descriptLi.textContent = document.querySelector('.addItemDescript').value;
        saveButton.textContent = "Save";
        deleteButton.textContent = "Delete";

        li.appendChild(dueDate);
        li.appendChild(listItem);
        li.appendChild(saveButton);
        li.appendChild(deleteButton);

        ul.appendChild(li);
        ul.appendChild(descriptLi);

        document.querySelector('.addItemInput').value = '';
        document.querySelector('.addItemDescript').value = '';
        document.querySelector('.dueDateSelector').value = '';
    });
    //---------ADD LIST ITEM, DESCRIPTION & DUE DATE---------//

    /*/---------REMOVE LAST LIST ITEM FROM LIST---------//
  
        document.querySelector('.removeLastButton').addEventListener('click', () => {
            let ul = document.getElementsByTagName('ul')[0];
            let li = document.querySelector('ul').lastChild;
            ul.removeChild(li);

        });
    //---------REMOVE LAST LIST ITEM FROM LIST---------/*/ 


    //---------DELETE LIST ITEM "A"---------//
    document.querySelector('.listDiv').addEventListener('click', (event) => {

        if (event.target.className =='deleteButton') {
            let li = event.target.parentNode; // stored clicked delete button location
            let ul = li.parentNode; // traverse up the DOM to store delete button's parentNode
            let lid = li.nextElementSibling; // traverse up the DOM to store delete button's parentNode
            
            ul.removeChild(li);
            ul.removeChild(lid);
        }
    });
    //---------DELETE LIST ITEM "A"---------//
    // RESOURCE: https://teamtreehouse.com/library/using-parentnode-to-traverse-up-the-dom
   

    //---------SAVE LIST ITEM "A" CHANGE---------//
    document.querySelector('.listDiv').addEventListener('click', (event) => {

        if (event.target.className =='saveButton') {
            let li = event.target.previousElementSibling; // stored clicked delete button location
            li.value = li.value;
            console.log(`list item text content changed to: ${li.value}`);
            
        }
    });
   //---------SAVE LIST ITEM "A" CHANGE---------//
    // RESOURCE: https://teamtreehouse.com/library/using-previouselementsibling-and-insertbefore


    //---------SELECT ALL LIST ITEMS---------//
    document.querySelector('.selectAll').addEventListener('click', () => {

            let ul = document.getElementsByTagName('ul')[0];

           
            alert(`All list items selected.`);
            console.log(ul);
    
    });
    //---------DELETE LIST ITEM "A"---------//