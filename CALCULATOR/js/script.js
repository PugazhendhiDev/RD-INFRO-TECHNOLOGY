let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      expression = "";
    } else if (value === "C") {
      expression = expression.slice(0, -1);
    } else if (value === "=") {
      try {
        expression = expression.replace(/X/g, "*");
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
    } else {
      expression += value;
    }

    display.textContent = expression;
  });
});
