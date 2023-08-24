let a = ""; //первое число
let b = ""; //второе число
let op = ""; //знак оператора

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]; //массив цифр
const operators = ["+", "-", "*", "/"]; //массив операторов

const out = document.querySelector(".field"); //задаем константу, соответсвующую значению, отражающемуся в поле вывода

//находим элемент button, при нажатии на него выполняется функция

document.querySelectorAll("button").forEach((button) => {
  //выбираем все кнопки из всего документа, для каждой кнопки(for.Each) присваиваем слушатель события (onclick)
  button.onclick = (event) => {
    if (event.target.textContent === "C") {
      //если нажимают на объект с текстом С, то в поле вывода 0
      a = ""; //первое число пустота
      b = ""; //второе число пустота
      op = ""; //опрератор пустота
      out.textContent = "0"; // в поле вывода отражается 0
      return;
    }

    const value = event.target.textContent; //из нажатой кнопки считываю текст

    if (digits.includes(value)) {
      //если считанный текст из массива цифр digits, то;
      if (op === "") {
        a = a + value;
        console.log(a, op, b);
        out.textContent = a;
      } else {
        b = b + value;
        console.log(a, op, b);
        out.textContent = b;
      }
    }

    if (operators.includes(value)) {
      //если считанный текст из массива операторов, то;
      op = value;
      console.log(a, op, b);
      out.textContent = op;
    }

    if (value === "=") {
      if (op === "+") {
        a = Number(a) + Number(b);
      }
      if (op === "-") {
        a = Number(a) - Number(b);
      }
      if (op === "*") {
        a = Number(a) * Number(b);
      }
      if (op === "/") {
        a = Number(a) / Number(b);
      }
      console.log(a, op, b);
      out.textContent = a;
      b = "";
      op = "";
    }
  };
});
