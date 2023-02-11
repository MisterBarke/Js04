module.exports = checkNumber;

function checkNumber(b){
    b <= 10;
    if (b < 5) {
        console.log('Faible');
    } else if (b === 5 || b === 6) {
        console.log('Moyen');
    }
    }
    checkNumber(4);
    checkNumber(5);
    checkNumber(6);

