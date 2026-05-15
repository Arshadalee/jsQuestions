function findCharacterOccurrence(str) {
 let map=new Map();

 for(let i=0;i<str.length;i++){
    if(map.has(str[i])){
        let count=map.get(str[i]);
        count++;
        map.set(str[i],count);
    }else{
        map.set(str[i],1);
    }
 }console.log(map);
 return map;
 
}
findCharacterOccurrence("hello world");