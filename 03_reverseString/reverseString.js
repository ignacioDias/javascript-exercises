const reverseString = function(str) {
    reversed = "";
    for(const letter of str) {
        reversed = letter.toString() + reversed;
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
