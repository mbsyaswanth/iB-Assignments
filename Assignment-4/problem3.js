let lengthFinder= (arr)=>{
    intC=0;strC=0;objC=0;
    for(i=0;i<arr.length;i++){
        switch (typeof arr[i]){
            case "number":
                intC++;
                break;
            case "string":
                strC++;
                break;
            case "object":
                objC++;
                break;    
        }
    }
    console.log(intC+","+strC+","+objC);
}

var array=[1,2,"Ram",{name:'Sita'}];

lengthFinder(array);