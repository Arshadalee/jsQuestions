
function Vovels(str){

    let vovels=['a','e','i','o','u'];

    for(let i=0;i<str.length;i++){
        if(vovels.includes(str[i])){
          let a=str[i].toUpperCase();
          console.log(a);
        }
    }
}
Vovels("hello world arsh");