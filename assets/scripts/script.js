let count = 0;
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('subtract');
const currentCount = document.getElementById('count');

addBtn.addEventListener('click', add);
subBtn.addEventListener('click', subtract);

function add() {
  count = count + 1;
  updateCount();
}

function subtract() {
  count = count - 1;
  updateCount();
}

function updateCount() {
  currentCount.textContent = count;
}
