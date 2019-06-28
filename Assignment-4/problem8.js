let longestWord = (str) => {
    var words=str.split(" ");
    for (i=0;i<words.lenth;i++){
        for(j=0;j<words.lenght;j++){
            if(words[i].length<words[i+1]){
                break;
            }
        }  
    }
    
}