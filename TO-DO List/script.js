let items = [];
const itemDiv = document.getElementById("items");
const input = document.getElementsByTagName("input")[0];
const storageKey = "items";

function renderItems() {
    itemDiv.innerHTML = null;

    for (const [index, item] of Object.entries(items)) {
        const container = document.createElement('div');
        container.style.marginBottom = "10px";
        container.style.display = "flex";
        container.style.justifyContent = "space-between";

        let t = document.createElement('p');
        t.innerHTML = item;

        let btn = document.createElement('button');
        btn.innerHTML = 'Delete';
        btn.onclick = () => removeItem(index);

        container.appendChild(t);
        container.appendChild(btn);

        itemDiv.appendChild(container);
    }
}

function loadItems() {
    let x = localStorage.getItem(storageKey);
    if (x) items = JSON.parse(x);
    renderItems();
}

function saveItems() {
    const stringItem = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItem);
}

function addItem() {
    let value = input.value;
    if (!value) {
        return;
    }
    items.push(value);
    renderItems();
    input.value = "";
    saveItems()
}

function removeItem(index) {
    items.splice(index, 1);
    renderItems();
    saveItems()
}
document.addEventListener("DOMContentLoaded",loadItems);