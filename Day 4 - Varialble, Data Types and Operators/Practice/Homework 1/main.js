let year,month,day;
year = parseInt(prompt('Enter year'));
month = parseInt (prompt('Enter month'));
day = parseInt (prompt('Enter day'));

do{
    
}while (isNaN(year) || year <= 0 || !Number.isInteger(year));
document.write('Your date : '+day+"-"+month+"-"+year);