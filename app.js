var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector(".message");
const notesToReturn = document.querySelectorAll(".no-of-notes");
const NOTES = [2000, 500, 100, 20, 10, 5, 1];

function validateBillAndCashAmt() {
  hideMessage();
  let bill = parseInt(billAmount.value);
  let cash = parseInt(cashGiven.value);
  if (bill > 0) {
    if (cash >= bill) {
      calculateChange(cash - bill);
    } else {
      showMessage(
        "The Cash provided should be greater or equal to the Bill Amount"
      );
    }
  } else {
    showMessage("The given Bill Amount is invalid");
  }
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function hideMessage() {
  message.style.display = "none";
}

function calculateChange(amount) {
  for (let i = 0; i < NOTES.length; i++) {
    const noOfNotes = Math.trunc(amount / NOTES[i]);
    amount %= NOTES[i];
    notesToReturn[i].innerText = noOfNotes;
  }
}

checkButton.addEventListener("click", validateBillAndCashAmt);
