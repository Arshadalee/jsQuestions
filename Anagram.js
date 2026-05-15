function checkAnagram(str1, str2) {

    const aa=str1.toLowerCase().split('').sort().join('');
    const bb=str2.toLowerCase().split('').sort().join('');

    if(aa===bb){
        console.log("thi is Anagram");
    }    else{
        console.log("Not Anagram");
    }       

}
checkAnagram("listen", "silent");