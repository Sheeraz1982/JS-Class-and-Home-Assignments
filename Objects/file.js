// let myDetails = {
//     firstName : 'Syed Sheeraz',
//     lastName : 'Ali',
//     age : 42
// }
// myDetails.email = 'idealservicesprovider@gmail.com'

// for(let key in myDetails){
// // console.log(key)
// document.write('<br>' + '<br>' + key + ' : ' + myDetails[key])
// console.log(key + ' : ' + myDetails[key])
// }

// // delete myDetails.lastName;
// // console.log('email' in myDetails);


// let myDetails = {
//     firstName : 'Syed Sheeraz',
//     lastName : 'Ali',
//     age : 42,
//     email : 'idealservicesprovider@gmail.com',
//     hobbies : ['Singing', 'Cricket', 'Reading', 'movies'], 
//     newDetails : {
//         country : 'Pakistan', 
//         city : 'Karachi',
//         nationality : 'Pakistani',
//         religion : 'Muslim'
//     }
// }
// console.log(myDetails.newDetails.nationality)
// console.log(myDetails.newDetails.religion)
// // console.log(myDetails.newDetails.country)

// let myDetails = {
//     firstName : 'Syed Sheeraz',
//     lastName : 'Ali',
//     age : 42,
//     email : 'idealservicesprovider@gmail.com',
//     fullName : function(){
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// console.log(myDetails.fullName());

// let div = document.createElement ("DIV")
// let para = document.createElement("P");
// let paraText = document.createTextNode("Hellow World");
// let textNode = document.createTextNode ("I am busy");
// nodeToAdd.appendChild(textNode)
// nodeToAdd.appendChild(para)
// console.log(nodeToAdd);

// const ul = document.createElement("UL");
// const li1 = document.createElement("LI")
// const li2 = document.createElement("LI")
// const li3 = document.createElement("LI")

// const textNode1 = document.createTextNode('Home');
// const textNode2 = document.createTextNode('About');
// const textNode3 = document.createTextNode('Contact');

// li1.appendChild(textNode1);
// li2.appendChild(textNode2);
// li3.appendChild(textNode3);

// ul1.appendChild(li1);
// ul2.appendChild(li2);
// ul3.appendChild(li3);

// consosle.log(ul);

const input = document.querySelector('#todo')
const ul = document.querySelector('ul');
function addTodo(){
    // console.log(input.value);
    if(input.value.trim() === ''){
        // console.log('enter value');
    }else{
        const li = document.createElement('LI');
        const text = document.createTextNode(input.value);

        const deleteBtn = document.createElement('BUTTON');
        const editBtn = document.createElement('BUTTON');
        const delText = document.createTextNode('Delete');
        const editText = document.createTextNode('Edit');

        deleteBtn.setAttribute('onclick' , 'deleteTodo(this)');
        editBtn.setAttribute('onclick' , 'editTodo(this)');

        deleteBtn.appendChild(delText);
        editBtn.appendChild(editText);
        li.appendChild(text);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);
    }
    input.value = ''
}
function deleteTodo(element){
    console.log('todo deleted');
    console.log(element.parentNode);
   
}
function editTodo(element){
    console.log('todo edited');
    console.log(element);
}
function deleteTodo(element) {
    console.log('todo deleted');
    element.parentNode.remove();
}
function editTodo(element) {
    console.log('todo edited');
    const newText = prompt('Edit todo:', element.parentNode.firstChild.textContent.trim());
    if (newText !== null) {
        element.parentNode.firstChild.textContent = newText;
    }
}
    
