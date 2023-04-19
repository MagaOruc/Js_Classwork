// 1.Filter out Strings from an Array///////////////////////////////////////////////////
// Create a function called 'filterArray(arr)' that takes an array of non-negative integers and strings and return
//  a new array without the strings.

// let str1=filterArray([1, 'c', 2, "a", "b"])         // [1, 2]
// let str2= filterArray(['4', 1, "a", "b", 0, 15])   //[1, 0, 15]

// //  console.log(filterArray.filter((item)=>typeof item === 'number'));

// function filterArray(arr){
//     return arr.filter((el)=> typeof el==='number')
// }
// console.log(filterArray(str1));
// console.log(filterArray(str2));

// 2.Summing a Slice////////////////////////////////////////////////////////////////////
// Create a function called 'sliceSum(arr, n)' that has an array and an integer n, return the sum of the first n numbers in the array.

//  sliceSum([9, 8, 7, 6], 3)  //24
//  sliceSum([1, 3, 2], 2) //4
//  sliceSum([3, 6, 2], 0) //0

//  function sliceSum(arr,n){
//     return arr.slice(0,n).reduce((sum, prev)=> sum+=prev,0)
//  } console.log(sliceSum([9, 8, 7, 6], 3));

// 3.Spelling it Out////////////////////////////////////////////////////////////////////
// Create a function called 'spelling(str)' which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// spelling("bee") // ["b", "be", "bee"]
// spelling("happy") //["h", "ha", "hap", "happ", "happy"]


 function forSpell(arr){
   return arr.split("").map((e,i)=> arr.slice(0,i+1))

} 
console.log(forSpell("bee"));
console.log(forSpell("Maga"));




// 5.Reverse the Case////////////////////////////////////////////////////////////////////
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

//  reverseCase("Happy Birthday") //"hAPPY bIRTHDAY"
//  reverseCase("MANY THANKS") //"many thanks"

 function reversCase(arr){
    arr.map((el,i)=> )

 }reversCase("MaGa")




