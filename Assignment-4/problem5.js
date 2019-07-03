let mapFun = (arr,val) => {
    return arr.map((num) => {let result = num*val; return result});
}

let array = [1,2,3,4];

console.log(mapFun(array,0));