// console.log(9/5 * 50 + 32);
// console.log(9/5 * 70 + 32);
// console.log(9/5 * 100 + 32);

// convertCelsiusToFahrenheit(50);
// convertCelsiusToFahrenheit(70);
// convertCelsiusToFahrenheit(100);

// Tugas
/**
 * TODO:
 * 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
 * 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
 *    "Halo! Nama saya (name). Saya tinggal di (origin)."
 *
 *    Contoh: Jika `name` bernilai 'Fulan' dan `origin` bernilai 'Jakarta', fungsi harus mengembalikan:
 *    "Halo! Nama saya Fulan. Saya tinggal di Jakarta.".
 *
 * 3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".
 * 4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
 * 5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.
 */

function hello( name, origin = 'Bandung'){
return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

let rahmat = hello('Rahmat', 'semarang');
let indra = hello('Indra',);

console.log(rahmat);
console.log(indra);

const greet = (name) => "Hello, " + name + "!";

console.log(greet("Bob"));

function sayHello() {
  console.log('Hello');
}

sayHello();