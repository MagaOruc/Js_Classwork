// 1.Filter out Strings from an Array///////////////////////////////////////////////////
// Create a function called 'filterArray(arr)' that takes an array of non-negative integers and strings and return
//  a new array without the strings.

filterArray([1, 'c', 2, "a", "b"])         // [1, 2]
filterArray(['4', 1, "a", "b", 0, 15])   //[1, 0, 15]

// FIRST WAY
function filterArray(arr){
   return arr.filter((el)=> typeof el==='number')
}
console.log(filterArray([1, 'c', 2, "a", "b"]));
console.log(filterArray(['4', 1, "a", "b", 0, 15]));
///   SECOND WAY
function filterArray(arr){
   return arr.filter((el)=> el=== Number(el))
}console.log(filterArray([1, 'c', 2, "a", "b"]));
console.log(filterArray(['4', 1, "a", "b", 0, 15]));
// THIRD WAY 

function filterArray(arr) {
 

    return arr.filter((item) => Number.isInteger(item))
}
console.log( filterArray([1, 'c', 2, "a", "b"]));
// console.log(filterArray(['4', 1, "a", "b", 0, 15]));

// 2.Summing a Slice////////////////////////////////////////////////////////////////////
// Create a function called 'sliceSum(arr, n)' that has an array and an integer n, return the sum of the first n numbers in the array.

 sliceSum([9, 8, 7, 6], 3)  //24
 sliceSum([1, 3, 2], 2) //4
 sliceSum([3, 6, 2], 0) //0

 function sliceSum(arr,index){
    return arr.slice(0,index).reduce((sum, prev)=> sum+=prev,0)
 } console.log(sliceSum([9, 8, 7, 6], 3));

// 3.Spelling it Out////////////////////////////////////////////////////////////////////
// Create a function called 'spelling(str)' which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// spelling("bee") // ["b", "be", "bee"]
// spelling("happy") //["h", "ha", "hap", "happ", "happy"]


 function forSpell(arr){
   return arr.split("").map((e,i)=> arr.slice(0,i+1))

} 
console.log(forSpell("bee"));
console.log(forSpell("Maga"));


// 4.Hashes and Pluses//////////////////////////////////////////////////////////////////
// Create a function caled "hashPlusCount(str)" that returns the number of hashes and pluses in a string.
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].

(hashPlusCount("###+")); // [3, 1]
hashPlusCount("#+++#+#++#") // [4, 6]
hashPlusCount("") // [0, 0]


function hashPlusCount(str){
   let hashes =0;
   let plus= 0;
  str.split``.map((el)=> el === "#"? hashes++ : plus++ )
  return [hashes, plus]
}console.log( hashPlusCount("#+++#+#++#"));
console.log(hashPlusCount("###+")); // [3, 1]




// 5.Reverse the Case////////////////////////////////////////////////////////////////////
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

 function reversCase(arr){
    return arr.split("").map((el,i)=> el=== el.toLocaleUpperCase() ?el.toLocaleLowerCase() :el.toLocaleUpperCase()  )

 }console.log(reversCase("SoNuNdA"));




