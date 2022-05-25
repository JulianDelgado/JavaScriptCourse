// EXAMPLE ONE
var words = ["H","E","L","L","O"];

//Simple Method
/* var words_concat = words.join("");
console.log(words_concat); */

// Reduce Method
var words_concat = words.reduce(function(last_returned,word,index,originalArray){
    return last_returned+word;
});
console.log(words_concat);

// EXAMPLE TWO
var numbers = [20,1,23,1,5];

//Simple Method
/* var i = numbers.length-1;   //Always is length - 1
sum = 0;    // Similar to last_returned
for(;i>=0;i--){ // From i=length since i >= 0, when i < 0 then exit for
    sum += numbers[i];
}
console.log(sum); */

// Reduce method
/* var sum = numbers.reduce(function(last_returned,word,index,originalArray){
    return last_returned+word;
}); //First last_returned is 0.
console.log(sum); */

// Reduce method with initial value last_returned
var sum = numbers.reduce(function(last_returned,word,index,originalArray){
    return last_returned+word;
},5);   // Now, first last_returned is 5 and not 0.
console.log(sum);
