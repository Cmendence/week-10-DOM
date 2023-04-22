

let id = 1;
//tell my button to add a row to the list
document.getElementById('btn').addEventListener('click', () =>{
    let table = document.getElementById('list');
// insert.row(-1) puts the new row at the end of the list
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
// creates a row with the id, name, age, and favorite number across the cells of the row
    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = document.getElementById('name').value;
    row.insertCell(2).innerHTML = document.getElementById('age').value;
    row.insertCell(3).innerHTML = document.getElementById('fav-num').value;
    //creates a delete button for each row and appends it to the last cell, increments the id++
    let deleteBtn = row.insertCell(4);
    deleteBtn.appendChild(createDeleteButton(id++))
    //clears the input fields by setting the value to an empty string
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('fav-num').value = '';
    // id++
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    //on click, the button logs the item ID it's deleting
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        //sets elementToDelete to the id of the element in this row
        let elementToDelete = document.getElementById(`item-${id}`);
// takes the elementToDelete, finds the parent, and removes it.
        elementToDelete.parentNode.removeChild(elementToDelete);
    
    }
    return btn;
}