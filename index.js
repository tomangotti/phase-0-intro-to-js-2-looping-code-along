// Code your solutions in this file
;

function writeCards(names, event) {
    let message = [];
    let i = 0;
    while(i < names.length){
        message[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        i++;
    }
    return message;
}

console.log(writeCards(['Charlie', 'Samip', 'Ali'], "birthday"));

function countDown(num1) {
    let i = 0;
    while (i <= num1){
        console.log(num1 - i);
        i++;
    };
}

countDown(15)