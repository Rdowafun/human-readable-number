 module.exports = function toReadable(number) {
     let toTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
         toHundred = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
         leftNumb = 0;
     let numToString = String(number);
     if (number < 20) {
         return toTwenty[number]
     } else if (number >= 20 && number < 100) {
         if (Number(numToString[1]) === 0) {
             return `${toHundred[numToString[0]]}`
         } else {
             return `${toHundred[numToString[0]]} ${toTwenty[numToString[1]]}`
         }
     } else if (number >= 100) {
         if (Number(numToString[1]) === 0 && Number(numToString[2]) === 0) {
             return `${toTwenty[numToString[0]]} hundred`
         } else if (Number(numToString[1]) === 0) {

             return `${toTwenty[numToString[0]]} hundred ${toTwenty[numToString[2]]}`
         } else if (Number(numToString[2]) === 0) {
             return `${toTwenty[numToString[0]]} hundred ${toHundred[numToString[1]]}`
         } else {
             leftNumb = Number(numToString[1] + numToString[2])
             leftNumb < 20 ? leftNumb = toTwenty[leftNumb] : leftNumb = toHundred[numToString[1]] + " " + toTwenty[numToString[2]]
             return number % 100 === 0 ? `${toTwenty[numToString[0]]} hundred` : `${toTwenty[numToString[0]]} hundred ${leftNumb}`
         }
     }
 }
