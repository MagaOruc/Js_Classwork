const form=document.createElement("form")
const startButton=document.createElement("button")
const forTime=document.createElement("p")
const nameLabel =document.createElement("Label")
const nameInput=document.createElement("Input")
const surnameLabel=document.createElement("Label")
const surnameInput=document.createElement("Input")
const checkbox=document.createElement("input")
const radio1=document.createElement("input")
const radio2=document.createElement("input")
const submit=document.createElement("button")
const nextPage=document.createElement("button")
///////////////////////////////////////////////////////

 radio1.setAttribute("required","")
 radio1.setAttribute("type","radio")
 radio1.style.accentColor="blue"

radio1.name="choose one"
radio2.name="choose one"

 radio2.setAttribute("required","")
 radio2.setAttribute("type","radio")
 radio2.style.accentColor="blue"


 checkbox.setAttribute("required","")
 checkbox.setAttribute("type","checkbox")
 checkbox.style.accentColor="blue"

////////////////////////////////////////////
document.body.append(startButton)
document.body.append(forTime)
document.body.append(form)

form.append(nameLabel)
form.append(nameInput)
form.append(surnameLabel)
form.append(surnameInput)
form.append(checkbox)
form.append(radio1)
form.append(radio2)
form.append(submit)
document.body.append(nextPage)
///////////////////////////////////////
form.style.height="70vh"
form.style.width="100%"
form.style.border="1px dashed black"
form.style.display="Flex"
form.style.justifyContent="center"
form.style.alignItems="center"
form.style.flexDirection="column"
form.style.marginTop="5%"


nameLabel.innerHTML="<strong>Name</strong>"
nameInput.setAttribute("required","")

surnameLabel.innerHTML="<strong>Surname</strong>"
surnameInput.setAttribute("required","")

submit.innerHTML="<strong>Submit</strong>"
nextPage.innerHTML="Next page >"




startButton.innerHTML="Let's start"
forTime.innerHTML="00:15"

nextPage.addEventListener("click",function(){
    alert('i finished you can go')
})


let interval;
let counter=15;
startButton.addEventListener("click",function(){
    interval=setInterval(()=>{
        counter-=1
        forTime.innerHTML=`00:${counter}`
        if(counter<10){
            forTime.style.color="red"
            forTime.style.borderColor="red"
        }
        if(counter==0){
            forTime.innerHTML="you missed"
        }
        else{
           
        }
    },1000)
})






