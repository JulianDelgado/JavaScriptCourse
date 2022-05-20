var numbers = [10,2,3,5,9,20,22];
var even_numbers = [];

//Forma directa de realizarlo
/* i = numbers.length;
for (;i >= 0;i--){
    if(numbers[i]%2 == 0){
        even_numbers.push(numbers[i]);
    }
}
console.log(even_numbers); */

//Forma optima
even_numbers = numbers.filter(function(number){
    return number%2 == 0;
});
console.log(even_numbers);
