let leftRightofLetter= (str,letter) => {
    let index=str.indexOf(letter);
    if(index!=-1){
        if(index==0){
            console.log(str[1]);
        }
        else if(index==str.length-1){
            console.log(str[length-2]);
        } else {
            console.log(str[index-1]+""+str[index+1]);
        }
    }
}

leftRightofLetter("IBHUBS","X");