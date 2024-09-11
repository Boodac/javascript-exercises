const sumAll = function(first, second){
    // error handling    
    if(!Number.isInteger(first) || !Number.isInteger(second) || 
        first < 0 || second < 0 || 
        first === NaN || second === NaN) return 'ERROR';
    // make sure the smaller nunber is the first variable
    if(first > second) [first,second] = [second, first];
    let total = 0;
    for(var i = first ; i <=second; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
