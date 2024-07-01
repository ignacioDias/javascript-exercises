const sumAll = function(...args) {
    if(args.length != 2)
        return 'ERROR';
    if(typeof args[0] != 'number' || typeof args[1] != 'number')
        return 'ERROR';
    if(args[0] < 0 || args[1] < 0)
        return 'ERROR';
    min = Math.min(args[0], args[1]);
    max = Math.max(args[0], args[1]);
    sum = 0;
    for(i = min; i <= max; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
