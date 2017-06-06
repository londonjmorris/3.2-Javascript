// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1,num2){
    if (num1 >= num2){
    return num1;} else {
      return num2;
    }

}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1,num2,num3){
   if(num1 >= num2 && num1 >= num3){
     return num1;
   } else if(num2 >= num3){
     return num2;
   } else return num3;
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){

  var result = char == "a" || char == "e" || char == "i" ||char == "o" || char== "u";

  return result;
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
function sum(num1,num2){
  var result = num1 + num2;
  return result;
}



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(num1,num2,num3){
  var result = (num1 + num2 + num3) / 3;
  return result;
}


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(str){
  var l = str.length;
  return l;
}



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
function greaterThan(num1, num2){
  var result = (num2 > num1);
  return result;
}



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet(Name){
  var hello = "Hello, " + Name + "!";
  return hello;
}



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(adj,noun,verb,adv){
  var sentence = "The " + adj + " " + noun + " was upset because the " + noun + " went to the store and saw that everyone was " + verb + " " + adv + ".";
  return sentence;
}
