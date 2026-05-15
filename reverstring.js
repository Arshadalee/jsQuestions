
function reverseString(str) {

 const arr= str.split("");
 const reversedArr= arr.reverse();
 const reversedStr= reversedArr.join("");
 console.log(reversedStr);
 return reversedStr;
}

reverseString("hello world");