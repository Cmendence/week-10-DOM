// Find a way to make dates set so end date cannot be before start date
// fields required not working
// Best way to display MM/DD/YYY 

// https://www.youtube.com/watch?v=xvFZjo5PgG0

let id = 1;

document.getElementById('btn').addEventListener('click', () =>{
    let table = document.getElementById('list');
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);

    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = document.getElementById('name').value;
    row.insertCell(2).innerHTML = document.getElementById('age').value;
    row.insertCell(3).innerHTML = document.getElementById('fav-num').value;
    let deleteBtn = row.insertCell(4);
    deleteBtn.appendChild(createDeleteButton(id++))
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
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    
    }
    return btn;
}