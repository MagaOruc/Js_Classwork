const arr1=['a','b','c','d','e','f','g','k']

function getRandomLetter(getNum) {
    return getNum[Math.floor(Math.random () * getNum.length)]
  
}
console.log(getRandomLetter(arr1));

//2
const arr2=[1,2,3,4,14,5,6,8]

let calcSum=0

function sumEven () {
    for (i=0;i<arr2.length; i++){
        if(  arr2[i]%2==0  ){
            calcSum += arr2[i]


        } 
    }
    return 




    
}sumEven()
console.log(calcSum);

//3
//   const arr3=[-3,-5,-9,3,0,true,false,-22]
//   const newarr=[]

// function positive ()

// for (i=0;i<arr3.length;i++){
   
//   }


    







