// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  console.dir(product);

  const price = product.querySelector('.price span');
  // Calcular la cantidad
  const quantity = product.querySelector('.quantity input');
  const subtotal = price.textContent*quantity.value;
  //step 3

  let subtotalTag = product.querySelector('.subtotal span');
  // Step 4

  subtotalTag.textContent = subtotal;

  // Step 5
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  //... your code goes here
  let totalAmount = 0;

  const productList = document.querySelectorAll('.product');
  productList.forEach(item => {
    const eachItem = updateSubtotal(item);
    totalAmount += eachItem;
  });
  // ITERATION 3
  //... your code goes here
  let finalAmount = document.querySelector('#total-value span');
  finalAmount.textContent = totalAmount;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const button = event.target;
  const productRow = button.parentNode.parentNode;
  const tableBody = productRow.parentNode;

  tableBody.removeChild(productRow);

  calculateAll;
};

const removeButtons = document.getElementsByClassName('btn btn-remove');

for (let removeButton of removeButtons) {
  removeButton.addEventListener('click', removeProduct);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let inputSearch = document.querySelector('.create-product td input[type=text]');
  let inputPrice = document.querySelector('.create-product input[type=number]');
  let parentTagCreate = document.createElement('tr');
  parentTagCreate.setAttribute('class','product');

  parentTagCreate.innerHTML = 
  `
  <td class="name">
    <span>${inputSearch.value}</span>
    </td>
  <td class="price">$<span>${inputPrice.value}</span></td>
  <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
      <button class="btn btn-remove">Remove</button>
  </td>
  `
  let newParentNode = document.querySelector('tbody');
  newParentNode.appendChild(parentTagCreate);

  const addNewElement = document.getElementById('#crear');
  addNewElement.addEventListener('click', createProduct);
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
