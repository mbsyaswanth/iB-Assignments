let frequency = (arr) => {
    let obj={};
    arr.map((item) => {
        if(obj[item]){
            ++obj[item];
        }
        else{
            obj[item]=1;
        }
    })
    return obj;
}

let arr = ["", "a", "b", "d", "e",''," ","  "];

console.log(frequency(arr));