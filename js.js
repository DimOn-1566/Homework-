// Задание №1



// let x = +prompt("Введите число")
// let y = +prompt("Введите степень")

// function nameOne(x = +prompt('1'), y = prompt('2')) {
//     if( y === 0) return 1
    
//     return x * nameOne( x , y - 1)

// }2
// console.log(nameOne(x , y));

// задание №2

// let a = +prompt('1')
// let b = +prompt('2')
// let i = 0;
// let t = 0;
//     function namTwo(a) {
//     i++
//     if( a % i == 0){
//         t = i 
//     }
//     if( i == a - 1) return t 
//     return namTwo(a)  

   
// }


// console.log(namTwo(a)); 
// i = 0;
// console.log(namTwo(b)); 


// Задание №3

// let t = 0;

// function nameThre(a) {

// if( a % 10 > t){
//     t = a % 10
// }
// if(Math.floor(a) == 0) return t;
//  return nameThre(Math.floor(a/10))
// }

// console.log(nameThre(2596));

// задание 4
let i = 2;
let t = 0;
function fournum (a) {
 i++
 if( a % i == 0 ){
    t = i
 }
 return fournum ( a - 1)


}
console.log(fournum());



    






   
   
