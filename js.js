const itemList = document.getElementById('itemList');

function addItem() {
    const itemName = document.nameForm.newItemName.value;
    let item = '<div class="item"><span>' + itemName + '</span><div><button type="button" class="doneButton" onclick="doneItem(this)">DONE</button><button type="button" class="deleteButton" onclick="deleteItem(this)">DELETE</button></div></div>';
    itemList.insertAdjacentHTML('beforeend',item);
}

function doneItem(btn) {
    btn.parentNode.parentNode.firstChild.style.textDecoration = 'line-through';
}

function deleteItem(btn) {
    btn.parentNode.parentNode.remove();
}