let char = "X";
let turn = 1;

function changeTurn() {
  turn % 2 === 1 ? (char = "X") : (char = "0");
}

document.querySelector("table").onclick = () => {
  let cell = event.target;
  cell.innerHTML = char;
  turn += 1;
  changeTurn();
};

document.querySelector("span").innerHTML = char;
