
function timeToIndex(string)
const string = "2023-04-28T17:00";
const regex = /T(\d+):/;

const match = string.match(regex);
if (match) {
    const number = match[1];
    console.log(number);  // prints "17"
}
