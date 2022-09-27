
const sum = function(array){
  return array.reduce(function(a, b){ 
    return a + b;
  });
}


exports.sum = sum;