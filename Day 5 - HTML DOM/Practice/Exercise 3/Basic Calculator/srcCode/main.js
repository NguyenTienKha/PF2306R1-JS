function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if(num2==0) result = "Can not divide by zero";
            else result = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById("result").textContent = `Kết quả: ${result}`;
}

