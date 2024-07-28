let char = "X";
let turn = 1;
let arr = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"],
];

document.querySelector("span").innerHTML = char;

const changeTurn = () => {
  turn % 2 === 1 ? (char = "X") : (char = "0");
  document.querySelector("span").innerHTML = char;
};

const checkWinner = () => {
  if (arr[0][0] == "X" && arr[0][1] == "X" && arr[0][2] == "X") {
    return "X";
  }
  if (arr[1][0] == "X" && arr[1][1] == "X" && arr[1][2] == "X") {
    return "X";
  }
  if (arr[2][0] == "X" && arr[2][1] == "X" && arr[2][2] == "X") {
    return "X";
  }
  if (arr[0][0] == "X" && arr[1][0] == "X" && arr[2][0] == "X") {
    return "X";
  }
  if (arr[0][1] == "X" && arr[1][1] == "X" && arr[2][1] == "X") {
    return "X";
  }
  if (arr[0][2] == "X" && arr[1][2] == "X" && arr[2][2] == "X") {
    return "X";
  }
  if (arr[0][0] == "X" && arr[1][1] == "X" && arr[2][2] == "X") {
    return "X";
  }
  if (arr[0][2] == "X" && arr[1][1] == "X" && arr[2][0] == "X") {
    return "X";
  }
  if (arr[0][0] == "0" && arr[0][1] == "0" && arr[0][2] == "0") {
    return "0";
  }
  if (arr[1][0] == "0" && arr[1][1] == "0" && arr[1][2] == "0") {
    return "0";
  }
  if (arr[2][0] == "0" && arr[2][1] == "0" && arr[2][2] == "0") {
    return "0";
  }
  if (arr[0][0] == "0" && arr[1][0] == "0" && arr[2][0] == "0") {
    return "0";
  }
  if (arr[0][1] == "0" && arr[1][1] == "0" && arr[2][1] == "0") {
    return "0";
  }
  if (arr[0][2] == "0" && arr[1][2] == "0" && arr[2][2] == "0") {
    return "0";
  }
  if (arr[0][0] == "0" && arr[1][1] == "0" && arr[2][2] == "0") {
    return "0";
  }
  if (arr[0][2] == "0" && arr[1][1] == "0" && arr[2][0] == "0") {
    return "0";
  }
  return false;
};

const winner = (text) => {
  setTimeout(() => {
    alert(text);
  }, 50);
};

document.querySelector("table").onclick = (event) => {
  let cell = event.target;
  let row = cell.parentElement.rowIndex;
  let column = cell.cellIndex;
  if (arr[row][column] !== "X" && arr[row][column] !== "0") {
    arr[row][column] = char;
    if (checkWinner() === "X") {
      winner("X Won!!!");
    } else if (checkWinner() === "0") {
      winner("0 Won!!!");
    }

    if (cell.innerHTML) {
      event.preventDefault();
    } else {
      if (checkWinner() == false && turn == 10) {
        winner("dead head");
      }
      cell.innerHTML = char;
      turn += 1;
      changeTurn();
    }
  }
  console.log(arr);
};
