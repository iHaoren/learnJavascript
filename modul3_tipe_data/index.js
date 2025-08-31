/*Tipe data Primitif

// String
const firstName = "Ibnu";
const lastName = `${firstName} Harun`;
const suku = "Jawa";

console.log(lastName, typeof lastName)

// Number
const umur = 19.2

console.log(umur, typeof umur)

// Boolean
const isMarried = true

console.log(isMarried, typeof isMarried)

// Undifined
let x;

console.log(x, typeof x)

// null
const person = null

console.log(person, typeof person)

// Symbol
const symbol1 = Symbol("description 1")

console.log(symbol1, typeof symbol1)

// BigInt
const bigInt1 = 979866968888888888665n

console.log(bigInt1, typeof bigInt1)
*/


/*Tipe data refference*/

// Object
const orang = {
    nama: "Ibnu",
    umur: 19,
}
console.log(orang, typeof orang)

// Array
const hobby = ["Bersepeda", "Menonton film"]

console.log(hobby, typeof hobby)

// Function
function sayHello(){
    return "Hello Ibnu"
}
console.log(sayHello, typeof sayHello)

/* Perbedaan tipe data primitive dan reference */

// Tipe data primitif

let a = 10
let b = a

a = 20

console.log(b) // output : 10

// Tipe data reference

let me1 = {nama: "ibnu"} //me2 akan menyimpan referensi yang sama dengan me1
let me2 = me1

console.log(me2)
