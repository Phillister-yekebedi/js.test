// Write a function that takes a string as input and returns the number of vowels in the string.
function countVowels(word) {;
    const vowels = ["a", "e", "i", "o","u","b"];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        count++;
      }
    }
    return count;
  }
    console.log(countVowels("Yekebedi"))

// Write a function that takes,an array of numbers as input and returns the sum of all the numbers.
function ArrayNum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    if (sum > 0) {
      return sum;
    } else {
      return null;
    }
  }

  console.log(ArrayNum(1,3,4,5,6,89,))


// Write a function that takes two numbers as input and returns true if 
//their sum is greater than 100, and false otherwise.

function greaterThan(num, num1){
    let  sum = num + num1
    if(sum>100){
        return true
    }
    else{
        return  false
    }

}
console.log(greaterThan(60,6))


// Write a function that takes in a array of numbers as a parameter and returns 
// the second largest number in the array
function secondLargest(numbers) {
  for (n in num) {
    if (num.length -1 > largest) {
      return num.length -1
    }

    }
  }

 console.log(secondLargest(1,2,3,4))

// Write a function that takes a string as a parameter and returns true
// if the string is a palindrome and false otherwise

function isPalindrome(word) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

let word1 = "madam";
console.log(`${word1}`);
 














