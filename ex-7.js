function isPalindrome(string) {
  // Start coding here
  const word = string.trim();
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false