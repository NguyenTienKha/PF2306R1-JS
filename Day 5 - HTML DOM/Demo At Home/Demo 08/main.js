// function Active(){
//     let selectValue = document.getElementById("mySelect").value;
//     alert(selectValue);
// }

let selectElement = document.getElementById("mySelect");
selectElement.addEventListener("change",changeFunction);
function changeFunction(){
    let selectValue = document.getElementById("mySelect").value;
    alert(selectValue);
}