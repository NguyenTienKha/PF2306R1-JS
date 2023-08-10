function CheckNumber() {
	let number = document.getElementById("numberInput").value;
	if(Number.isInteger(number)){
		if (number % 2 === 0) {
			alert(number + " là một số chẵn.");
		} else {
			alert(number + " là một số lẻ.");
		}
	}else alert("Please enter an integer number !");
}
