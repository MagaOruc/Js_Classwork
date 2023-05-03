const color=["red",'green', 'blue', 'yellow', 'orange', 'brown']



$(".change").click(function(){

 $(".title").css("color", color[Math.floor(Math.random() * color.length)])
 
});


$(".show").click(function(){
    $(".title").show()
});
    
$(".hide").click(function(){
    $(".title").hide()
});
    ////3

    $.each(color, function(index, element){
        console.log(element);
    })

 let numbers =[4,2,false, null, 'false', NaN,undefined, 8,true,'9' ]
    let sum=0
    $.map(numbers,function(value,index){
        if(value)
        sum+=index
      
    })
    console.log(sum);


