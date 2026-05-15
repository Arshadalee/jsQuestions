 function revserseString(str){
    let rvs="";

    for(let i=0;i<str.length;i++){
        rvs=str[i]+rvs;

    }
    console.log(rvs);
    return rvs;
}   
revserseString("hello world 1234");