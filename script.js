// Mendefinisikan nilai x dan y
var x = 5;
var y = 10;


var tambah = x + y;
document.write("x =", x, "<br>")
document.write("y =",  y, "<br>")
document.write(x, "+", y, "=", tambah, "<br>", "<br>")

var kurang = x - y;
document.write(x, "-", y, "=", kurang, "<br>", "<br>")

var kali = x * y;
document.write(x, "*", y, "=", kali, "<br>", "<br>")

var bagi = x / y;
document.write(x, "/", y, "=", bagi, "<br>", "<br>")

var modulus = x % y;
document.write(x, "%", y, "=", modulus, "<br>", "<br>")

var pokok = 1000; 
var bungaTunggal = (pokok * x * y) / 100;
document.write("Bunga tunggal: " + bungaTunggal, "<br>", "<br>");

var tahun = 5; 
var bungaMajemuk = pokok * Math.pow(1 + (x / 100), tahun) - pokok;
document.write("Bunga majemuk: " + bungaMajemuk, "<br>", "<br>");
