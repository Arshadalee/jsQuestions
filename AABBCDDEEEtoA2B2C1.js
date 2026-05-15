
function compressString(s) {
 let cmp="";
 let count=1;

 for(let i=0;i<s.length;i++){
    if(s[i]===s[i+1]){
        count++;
    } else {
        cmp = cmp+s[i] + count;
        count = 1;  
    }
 }
 console.log(cmp);
 return cmp;
}
compressString("AABBCDDEEE");