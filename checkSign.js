module.exports = checkSign;

function checkSign(n){
    if (n < 0) {
        return'Negatif';
    } else {
        return 'Positif';
    }
}
let result = checkSign(-898989876676);
console.log(result);
 result = checkSign(47767676);
console.log(result);
 result = checkSign(577767);
console.log(result);
