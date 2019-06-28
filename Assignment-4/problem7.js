let reverseObject = (obj) => {
    // let key=Object.keys(obj);
    // let value=Object.values(obj);
    // let newObj={};
    // key.map((key,index)=>{
    //     newObj[value[index]]=key;
    // })
    let newObj={};
    for (var property in obj) {
        newObj[obj[property]]=property;
      }

    return newObj;
}

let Objec = {
    1: "One",
    2: "Two"
    };

console.log(reverseObject(Objec));