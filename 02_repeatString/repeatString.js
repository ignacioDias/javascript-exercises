const repeatString = function(str, num) {
    if(num == -1)
        return "ERROR";
    output = ""
    for(i = 0; i < num; i++) {
        output += str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
