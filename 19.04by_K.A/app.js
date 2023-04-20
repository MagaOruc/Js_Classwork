
function reverseString(str){
    return str.split("").reverse("").join("")
} console.log(reverseString("hello"));

// function reverse(str) {
// let result =""
// for (let i = str.length-1; i >=0; i--) {
    
//     result+=str[i]
// }
// return result; 

// }console.log(reverse(str1));

// function isPolidrof(str) {
//     if(str==str.split("").reverse("").join("")){
//         return `${str} is polidorf`
//     } else return`no ${str} is not polidorf`
// } console.log(isPolidrof(str1));

// let numbers=[1,2,2,2,11,4,5,4,11];

// function removeDublicated1(arr){
//  return arr.filter((el,index)=>arr.indexOf(el)==index)
// }
// console.log(removeDublicated(numbers));

// function removeDublicated2(arr){
//  return arr.filter((el,index)=>arr.indexOf(el)==index)
// }
// console.log(removeDublicated2(numbers));

// function removeDublicated3(arr){
// return [...new Set(arr)]
// }console.log(removeDublicated3(numbers));

     ////////  generateOtp
// function generateOtp(arr){
//     let digits="0123456789"
//     let num=""
//   for( let i=0; i<4;i++){
//     num+=digits[Math.floor(Math.random()*10)]
//   }
//   return num;
// }console.log(generateOtp());


