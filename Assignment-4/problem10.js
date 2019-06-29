let duplicateRemover = (arrofobj) => {
    let ids=[];
 let filobj=arrofobj.maps(
     (obj) => {
         if(id.includes(obj.id)){
             arrofobj.filter(obj=>!id.includes(obj.id));
         }
         ids.concat(obj.id);
     }
 )
    gradeStats(filobj);
}

let gradeStats = (objs) => {
    let agrade=0;let bgrade=0; let cgrade=0; let fail=0;let distinction=0;
   objs.map((obj)=>{
       grade=obj.gpa;
    switch (grade) {
        case grade>=8:
            distinction++;
            break;
        case grade>=7 && grade<7:
            agrade++;
            break;
        case grade>=6 && grade<7:
            bgrade++;
            break;
        case grade>=4 && grade<6:
            cgrade++;
        case grade<4:
            fail++;
    }
   });
   return {distinction,agrade,bgrade,cgrade,fail}
}