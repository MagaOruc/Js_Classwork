// 1.Array method/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr = ['d', 7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]

// 1.1 Splice 'arr' // ['1',7, '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1]
// 1.2 Show only last three values of 'arr' // [ false, 1, null]
// 1.3 Concat [true,'8','myName'] in front of the 'arr'. //[true,'8','myName','d', 7 '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]
// 1.4 Find second 7's index. //4
// 1.5 Filter only true value // ['d', 7, '1', '7', 7, 'c', 'a', 7, '3', 1]
// 1.6 Sum only integer values of 'arr' //22
// 1.7 Find fasly values' length //4
 
1.1
console.log(arr.splice(2,arr.length-1));
1.2
console.log(arr.slice(arr.length-3));
1.3
console.log([true, '8', 'myName'].concat(arr));
 // 1.4
  console.log(arr.indexOf(7,2));

 1.5 
 console.log(arr.filter((el)=> typeof el=== 'number' || typeof el=== 'string' ));


1.6
  console.log(arr.reduce((sum,prev)=> Number.isInteger(prev) ? sum+prev : sum,0));

1.7
console.log(arr.filter((el)=>  !el ));

// 2.Object vs Array///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.1 Create a function called 'findSmallest(inks)', that find out min value of obj.

// console.log(findSmallest({
//     "cyan": 23,
//     "magenta": 12,
//     "yellow": 10
// })); // 10

// console.log(findSmallest({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
// }));  // 432

// console.log(findSmallest({
//     "cyan": 700,
//     "magenta": 700,
//     "yellow": 0
// })); // 0

// function findSmallest(obj){
    
//  let arr=Object.values(obj);
//  let min = Math.min(...arr)
// return min;
// }

// 2.2 Create a function called maxNums that find out max num of each arr

 console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //[7, 90, 2]
 console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // [-34, -2, 7]

function maxNums(array){
    return array.map((el)=> Math.max(...el))
}

// 2.3 Create a function called 'findLetterIndex(text,letter)', that returns the first index and the last index of a character.

// console.log(findLetterIndex("hello", "l")); // [2,3]
// console.log(findLetterIndex("happy", "h")); //[0, 0]

// function findLetterIndex(word,letter){
//   return [word.indexOf(letter),word.lastIndexOf(letter)]
// }









