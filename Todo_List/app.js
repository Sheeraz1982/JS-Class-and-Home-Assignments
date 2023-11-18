function submitForm() {
    // Get the value from the input field
    var inputValue = document.getElementById('inputValue').value;

    if (inputValue.trim() === '') {
        alert('Beta Pehlay Kuch Likhu tu');
        return;
    }

    // Create a new div element to display the value and buttons
    var displayDiv = document.getElementById('display');
    var itemDiv = document.createElement('div');
    itemDiv.setAttribute("id", inputValue);
    itemDiv.innerHTML = inputValue + ' <button onclick="editItem(this)">Edit</button> <button onclick="deleteItem(this)">Delete</button>';
    displayDiv.appendChild(itemDiv);

    // Clear the input field
    document.getElementById('inputValue').value = '';
}

function editItem(button) {        
    var newValue = prompt('Enter new value:', '');
    console.log(newValue)
    if (newValue !== null && newValue !== '') {
        button.parentNode.innerHTML = newValue + ' <button onclick="editItem(this)">Edit</button> <button onclick="deleteItem(this)">Delete</button>';
    }
}

function deleteItem(button) {
    button.parentNode.remove();
}
// function deleteItem(button) {        
   
//     console.log(newValue)
// }

// function deleteTod0(){
//     console.log('todo deleted');
// }

// function editTodo(){
//     console.log('todo edited')
// }