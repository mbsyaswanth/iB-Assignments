let reverseObject = (obj) => {
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