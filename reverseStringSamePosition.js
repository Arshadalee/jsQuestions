
function reverseStringSamePosition(str){
    let words = str.split(' ');
    let result = [];
    for(let i=0;i<words.length;i++){
        let word=words[i];
        let rvs="";

        for(let j=0;j<word.length;j++){
            rvs=word[j]+rvs;
        }
        result.push(rvs);
    }
    let finalResult=result.join('');
    console.log(finalResult);
    return finalResult;
}
reverseStringSamePosition("hello world 12345");



//using reverse method

function reverseString(str){
    
    const arr=str.split(' ');
    const rvs=[];
    
    for(let i=0;i<arr.length;i++){
        let word=arr[i];
        for(let j=0;j<word.length;j++){
           word= word.split('').reverse().join('');
        }
        rvs.push(word);
    }
    const result=rvs.join(' ')
    console.log(result);
}
reverseString("hello world");