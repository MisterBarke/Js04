module.exports = checkEvenOdd;

function checkEvenOdd(num) {
    if (num % 2 === 0) {
      return "pair";
    } else {
      return "impair";
    }
  }
  
 
  let result = checkEvenOdd(11);
  console.log(result); // impair
  
  result = checkEvenOdd(8);
  console.log(result); // pair