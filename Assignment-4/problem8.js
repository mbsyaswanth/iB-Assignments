let longestWord = (str) => {
    var words=str.split(" ");
    for(i=0;i<words.length;i++){
        for(j=0;j<words.length;j++){
            if(words[i].length<=words[j].length){
                if(j==(words.length-1)){
                   // console.log("in if",words[i]);
                    return words[i];
                } else if(i!=j) {
                    //console.log(words[i]);
                    break;
                }
            } else{
                return words[i];
            }
        }  
    }
    
}

let strng='You the nation follows progress';
console.log(longestWord(strng));