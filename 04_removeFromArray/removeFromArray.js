const removeFromArray = function(arr) {
    testArray = Array.from(arguments);
    testArray.shift();
    return arr.filter(item => !testArray.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;