
exports.min = function min (array) {
    let minNum = "";
    for (x in array){
        if (array[x] < minNum ){ minNum = array[x]}
        // console.log(` ${minNum} ${array[x]}`)
    }
    return minNum;
}

exports.max = function max (array) {
    let maxNum = "";
    for (x in array){
        if (array[x] > maxNum ){ maxNum = array[x]}
        // console.log(` ${minNum} ${array[x]}`)
    }
    return maxNum;
}

exports.avg = function avg (array = []) {
    console.log(array)
    if (array.length === 0 ){ 
        // console.log("zero")
        return 0;
    }
      let avgNum = 0;
      for (x in array){
          avgNum = (array[x] + avgNum);
  
      }
    //   console.log(` ${x}  ${x}`)
      return avgNum/array.length;
    //   return 0;
  }
