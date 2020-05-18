let addItemInput = document.querySelector('.addItemInput');
let addButton = document.querySelector('.addButton');
let list = document.querySelector('ul');
let clearButton = document.querySelector('.clearButton');
let li = document.querySelector('li');

//focuses field

addItemInput.focus();

//click//

addButton.addEventListener('click', (e) => {
    if (addItemInput.value !== "" && e.type === 'click') {
    let itemText = addItemInput.value;
    let newItem = document.createElement('li')
    newItem.innerHTML = '<button class="newButton"></button>' + itemText;
    list.appendChild(newItem);
    addItemInput.value = "";
    
    newItem.addEventListener('click', () => {
        newItem.innerHTML = '<s>' + itemText + '</s>';
        newItem.style.color = 'grey';
        newItem.style.fontSize = '1.25rem';
        // newItem.lastChild.style.backgroundColor = 'grey';
    });
    }
    // why doesnt .firstChild work??? 
});

//keydown//

// let entry = function(e) {
//     if (addItemInput.value !== "" && e.keyCode === 13) {
//         let itemText = addItemInput.value;
//         let newItem = document.createElement('li')
//         newItem.innerHTML = '<button class="newButton"></button>' + itemText;
//         list.appendChild(newItem);
//         addItemInput.value = "";
        
//         newItem.addEventListener('click', () => {
//             newItem.innerHTML = '<s>' + itemText + '</s>';
//             newItem.style.color = 'grey';
//             newItem.style.fontSize = '1.25rem';
//         });
//     }
// }

window.addEventListener('keydown', (e) => {
    if (addItemInput.value !== "" && e.keyCode === 13) {
        let itemText = addItemInput.value;
        let newItem = document.createElement('li')
        newItem.innerHTML = '<button class="newButton"></button>' + itemText;
        list.appendChild(newItem);
        addItemInput.value = "";
        
        newItem.addEventListener('click', () => {
            newItem.innerHTML = '<s>' + itemText + '</s>';
            newItem.style.color = 'grey';
            newItem.style.fontSize = '1.25rem';
        });
    }
});


//clear//

clearButton.addEventListener('click', () => {
    list.innerHTML = "";
});

// li.addEventListener('click', () => {
//     li.style.color = 'grey';
//     let doneButton = document.querySelector('.doneButton');
//     doneButton.style.backgroundColor = 'blue';
// });
