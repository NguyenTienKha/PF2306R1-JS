function validateEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        emailInput.focus();
        // return false;
    }
}

// function validphoneNumber(){
//     var phoneNumberInput = document.getElementsByName('phone');
//     var phoneNumber = phoneNumberInput.value;
//     if()

// }