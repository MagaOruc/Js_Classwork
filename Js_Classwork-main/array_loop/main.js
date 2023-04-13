let myText='An Array  is a collection of items of samedata type stored at contiguous memory locations.'
let countA=0
 for (let i=0;i<myText.length; i++){
  if( myText[i]=="a" || myText[i] == "A")
  countA++;
 }
  console.log(countA);

  //  2 
  const arr1=[1,2,4,5,7,9,13,22]
   let sum=0
    for (i=0;i<arr1.length;i++){
        sum=sum+arr1[i]
    }
  console.log(sum);
  

  //  3
  const arr2=[false, 0, 2, true, 23, undefined, 'are u stack?', 'come on']
    const newArr=[]

   for(i=0;i<arr2.length; i++){
   if ( i %2 ==1 )
   newArr.push(arr2[i])

   }
   console.log(newArr);

   // 4 

   let text="How is it going"
   let newText=""
   for(i=0;i<text.length; i++){
    if( text[i] !== "i")

   newText+=text[i]
}
console.log(newText);

//  5 
const numbersArr=[2,'3', false, 0, true,9,'12']
let newNumberArr=0
for( i=0;i<numbersArr.length; i++){
   if(typeof numbersArr[i] == 'number')

   newNumberArr +=  numbersArr[i]

}console.log(newNumberArr);

















