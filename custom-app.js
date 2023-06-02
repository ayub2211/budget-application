// document.addEventListener('DOMContentLoaded', function() {
//   const taskInput = document.getElementById('taskInput');
//   const addTaskBtn = document.getElementById('addTaskBtn');
//   const taskList = document.getElementById('taskList');

//   addTaskBtn.addEventListener('click', function() {
//       const taskText = taskInput.value.trim();
//       if (taskText !== '') {
//           const taskItem = createTaskItem(taskText);
//           taskList.appendChild(taskItem);
//           taskInput.value = '';
//       }
//   });

//   function createTaskItem(taskText) {
//       const taskItem = document.createElement('li');
//       const taskCheckbox = document.createElement('input');
//       const taskLabel = document.createElement('label');
//       const deleteBtn = document.createElement('button');

//       taskCheckbox.type = 'checkbox';
//       taskLabel.textContent = taskText;
//       deleteBtn.textContent = 'Delete';

//       taskCheckbox.addEventListener('change', function() {
//           if (taskCheckbox.checked) {
//               taskLabel.classList.add('completed');
//           } else {
//               taskLabel.classList.remove('completed');
//           }
//       });

//       deleteBtn.addEventListener('click', function() {
//           taskItem.remove();
//       });

//       taskItem.appendChild(taskCheckbox);
//       taskItem.appendChild(taskLabel);
//       taskItem.appendChild(deleteBtn);

//       return taskItem;
//   }
// });



let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;



//Set Budget Part
totalAmountButton.addEventListener("click", function() {
  tempAmount = totalAmount.value;
  
  // Empty or negative input
  if (tempAmount === "" || tempAmount < 0) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    
    // Set Budget
    amount.innerHTML = tempAmount;
    
    // Set Balance
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    
    // Clear Input Box
    totalAmount.value = "";
  }
});
//Function To Disable Edit and Delete Button
function disableButtons(bool) {
  const editButtons = document.getElementsByClassName("edit");
  for (const button of editButtons) {
    button.disabled = bool;
  }
}



//Function To Modify List Elements
function modifyElement(element, edit = false) {
  const parentDiv = element.parentElement;
  const parentAmount = parentDiv.querySelector(".amount").innerText;

  if (edit) {
    const parentText = parentDiv.querySelector(".product").innerText;
    productTitle.value = parentText;
    userAmount.value = parentAmount;
    disableButtons(true);
  }

  balanceValue.innerText = parseInt(balanceValue.innerText) + parseInt(parentAmount);
  expenditureValue.innerText = parseInt(expenditureValue.innerText) - parseInt(parentAmount);

  parentDiv.remove();
}

//Function To Create List
function listCreator(expenseName, expenseValue) {
  const sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex-space");
  sublistContent.innerHTML = `
    <p class="product">${expenseName}</p>
    <p class="amount">${expenseValue}</p>
    <button class="fa-solid fa-pen-to-square edit" style="font-size: 1.2em"></button>
    <button class="fa-solid fa-trash-can delete" style="font-size: 1.2em"></button>
  `;

  const editButton = sublistContent.querySelector(".edit");
  editButton.addEventListener("click", () => {
    modifyElement(editButton, true);
  });

  const deleteButton = sublistContent.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });

  document.getElementById("list").appendChild(sublistContent);
}



//Function To Add Expenses
checkAmountButton.addEventListener("click", function() {
  if (!userAmount.value || !productTitle.value) {
    productTitleError.classList.remove("hide");
    return false;
  }

  disableButtons(false);

  let expenditure = parseInt(userAmount.value);
  let sum = parseInt(expenditureValue.innerText) + expenditure;
  expenditureValue.innerText = sum;

  const totalBalance = tempAmount - sum;
  balanceValue.innerText = totalBalance;

  listCreator(productTitle.value, userAmount.value);

  productTitle.value = "";
  userAmount.value = "";
});





// Variable INTIALIZATION

// let totalAmount = document.getElementById("total-amount");
// let userAmount = document.getElementById("user-amount");
// const checkAmountButton = document.getElementById("check-amount");
// const totalAmountButton = document.getElementById("total-amount-button");
// const productTitle = document.getElementById("product-title");
// const errorMessage = document.getElementById("budget-error");
// const productTitleError = document.getElementById("product-title-error");
// const productCostError = document.getElementById("product-cost-error");
// const amount = document.getElementById("amount");
// const expenditureValue = document.getElementById("expenditure-value");
// const balanceValue = document.getElementById("balance-amount");
// const list = document.getElementById("list");
// let tempAmount = 0;



// //Set Budget Part
// totalAmountButton.addEventListener("click", () => {
//   tempAmount = totalAmount.value;
//   //empty or negative input
//   if (tempAmount === "" || tempAmount < 0) {
//     errorMessage.classList.remove("hide");
//   } else {
//     errorMessage.classList.add("hide");
//     //Set Budget
//     amount.innerHTML = tempAmount;
//     //Set Balance
//     balanceValue.innerText = tempAmount - expenditureValue.innerText;
//     //Clear Input Box
//     totalAmount.value = "";
//   }
// });


//Function To Disable Edit and Delete Button

// const disableButtons = (bool) => {
//   let editButtons = document.getElementsByClassName("edit");
//   Array.from(editButtons).forEach((element) => {
//     element.disabled = bool;
//   });
// };


//Function To Modify List Elements
// const modifyElement = (element, edit = false) => {
//   let parentDiv = element.parentElement;
//   let currentBalance = balanceValue.innerText;
//   let currentExpense = expenditureValue.innerText;
//   let parentAmount = parentDiv.querySelector(".amount").innerText;
//   if (edit) {
//     let parentText = parentDiv.querySelector(".product").innerText;
//     productTitle.value = parentText;
//     userAmount.value = parentAmount;
//     disableButtons(true);
//   }
//   balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
//   expenditureValue.innerText =
//     parseInt(currentExpense) - parseInt(parentAmount);
//   parentDiv.remove();
// };


//Function To Create List
// const listCreator = (expenseName, expenseValue) => {
//   let sublistContent = document.createElement("div");
//   sublistContent.classList.add("sublist-content", "flex-space");
//   list.appendChild(sublistContent);
//   sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
//   let editButton = document.createElement("button");
//   editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
//   editButton.style.fontSize = "1.2em";
//   editButton.addEventListener("click", () => {
//     modifyElement(editButton, true);
//   });
//   let deleteButton = document.createElement("button");
//   deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
//   deleteButton.style.fontSize = "1.2em";
//   deleteButton.addEventListener("click", () => {
//     modifyElement(deleteButton);
//   });
//   sublistContent.appendChild(editButton);
//   sublistContent.appendChild(deleteButton);
//   document.getElementById("list").appendChild(sublistContent);
// };


//Function To Add Expenses
// checkAmountButton.addEventListener("click", () => {
//   //empty checks
//   if (!userAmount.value || !productTitle.value) {
//     productTitleError.classList.remove("hide");
//     return false;
//   }
//   //Enable buttons
//   disableButtons(false);
//   //Expense
//   let expenditure = parseInt(userAmount.value);
//   //Total expense (existing + new)
//   let sum = parseInt(expenditureValue.innerText) + expenditure;
//   expenditureValue.innerText = sum;
//   //Total balance(budget - total expense)
//   const totalBalance = tempAmount - sum;
//   balanceValue.innerText = totalBalance;
//   //Create list
//   listCreator(productTitle.value, userAmount.value);
//   //Empty inputs
//   productTitle.value = "";
//   userAmount.value = "";
// });