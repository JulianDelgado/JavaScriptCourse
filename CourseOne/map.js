var numbers = [1,5,6,8];

//Square numbers - Simple Method
// Comment Alt+Shift+A
/* var numbers_square = []; //Declaration is necessary
i = numbers.length-1;
for(;i>=0;i--){
    numbers_square.push(Math.pow(numbers[i],2));  // Pow is ^, and second attribute is potencia
}
console.log(numbers_square); */

//Square numbers - Map Method
var numbers_square = numbers.map(function(number){
    return Math.pow(number,2);
});
console.log(numbers_square);

//Square numbers - Filter Method
// Not found becouse filter return de same items in principal array
/* var numbers_square = numbers.filter(function(number){
    return 1;
});
console.log(numbers_square); */