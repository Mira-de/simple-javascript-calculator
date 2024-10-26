const input = document.querySelector(".textBox");
function showNumber(value) {
  input.value = input.value + value;
}

function Delete() {
  input.value = "";
}

function showNumberOne() {
  input.value = input.value.slice(0, -1);
}

function showResult() {
  input.value = eval(input.value);
}
