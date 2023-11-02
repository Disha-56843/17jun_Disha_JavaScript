const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const item_count = document.getElementById('item-count');

let quantity = 1;
update();

function update() {
    item_count.textContent = quantity;
}

function increaseQuantity() {
    if (quantity < 10) {
        quantity++;
        update();
    }
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        update();
    }
}