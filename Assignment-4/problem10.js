let duplicateRemover = (arrofobj) => {
    let ids=[]; let filobj=arrofobj;

     let filtered = arrofobj.filter(function(value){
        if(!ids.includes(value.id)){
            ids.push(value.id);
            return value;
         }  
    
    });
//  console.log()
//  console.log(filtered);
    return gradeStats(filtered);
}

let gradeStats = (objs) => {
    let agrade=0;let bgrade=0; let cgrade=0; let fail=0;let distinction=0;
   objs.map((obj)=>{
       grade=obj.gpa;
       if(grade>=8){
        distinction++;
       } else if(grade>=7 && grade<8){
        agrade++;
       } else if(grade>=6 && grade<7)
       {
        bgrade++;
       } else if(grade>=4 && grade<6) 
       {
        cgrade++;
       } else
       {
        fail++;
       }
   });
   return {distinction,agrade,bgrade,cgrade,fail};
}

let arobj=[ { "name" : "John", "id": 1, "gpa" : 7.8 }, { "name" : "Rick", "id": 2, "gpa" : 3.9 }, { "name" : "Lisa", "id": 3, "gpa" : 8.9 }, { "name" : "John", "id": 1, "gpa" : 8.9 } ];

    console.log(duplicateRemover(arobj));