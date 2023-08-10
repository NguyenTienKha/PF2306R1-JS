let tienVay = parseFloat(prompt("Nhap so tien cho vay :"));
let laiSuat = parseFloat(prompt("Nhap lai suat ngan hang : "));
let n = parseFloat(prompt("Nhap so nam cho vay : "));
let tienLai =  tienVay*(laiSuat/100);
let tongTien =tienVay+n*tienLai;
document.write("Sau "+n+" năm thì số tiền cả gốc lẫn lãi là : "+tongTien);