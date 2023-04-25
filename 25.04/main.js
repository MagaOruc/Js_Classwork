let header= document.createElement("header")
let nav= document.createElement("nav")
let ul= document.createElement("ul")
let home= document.createElement("li")
let about= document.createElement("li")
let blog= document.createElement("li")
let contact= document.createElement("li")
let  secHome=document.createElement("secHome")
let  secAbout=document.createElement("secAbout")
let  secBlog=document.createElement("secblog")
let  secContact=document.createElement("secContact")


document.body.append(header)


header.append(nav)
nav.append(ul)
ul.append(home)
ul.append(about)
ul.append(blog)
ul.append(contact)
document.body.append(secHome)
document.body.append(secAbout)
document.body.append(secBlog)
document.body.append(secContact)


header.style.width="100%"
header.style.height="50px"
header.style.backgroundColor="black"

// nav.style.display="Flex"
// nav.style.justifyContent="space-around"
// nav.style.alignItems="center"

ul.style.height="50px"
ul.style.display="Flex"
ul.style.justifyContent="space-around"
ul.style.alignItems="center"

home.style.listStyle="none"
home.style.color="white"

about.style.listStyle="none"
about.style.color="white"

blog.style.listStyle="none"
blog.style.color="white"

contact.style.listStyle="none"
contact.style.color="white"
home.style.cursor="pointer"
about.style.cursor="pointer"
blog.style.cursor="pointer"
contact.style.cursor="pointer"

home.innerHTML="<strong>Home</strong>"
about.innerHTML="<strong>About</strong>"
blog.innerHTML="<strong>Blog</strong>"
contact.innerHTML="<strong>Contact</strong>"

secHome.style.fontSize="32px"
secHome.style.marginTop="20px"
secHome.style.border="1px dashed black"
secHome.style.height="100vh"
secHome.style.display="Flex"
secHome.style.justifyContent="center"
secHome.style.alignItems="center"
secHome.innerHTML="<strong>Home</strong>"


secAbout.style.fontSize="32px"
secAbout.style.border="1px dashed black"
secAbout.style.height="100vh"
secAbout.style.display="Flex"
secAbout.style.justifyContent="center"
secAbout.style.alignItems="center"
secAbout.innerHTML="<strong>About</strong>"

secBlog.style.fontSize="32px"
secBlog.style.border="1px dashed black"
secBlog.style.height="100vh"
secBlog.style.display="Flex"
secBlog.style.justifyContent="center"
secBlog.style.alignItems="center"
secBlog.innerHTML="<strong>Blog</strong>"

secContact.style.fontSize="32px"
secContact.style.border="1px dashed black"
secContact.style.height="100vh"
secContact.style.display="Flex"
secContact.style.justifyContent="center"
secContact.style.alignItems="center"
secContact.innerHTML="<strong>Contact</strong>"



home.addEventListener("click", function(){
    window.scrollTo(0,secHome.offsetTop)
})

about.addEventListener("click", function(){
    window.scrollTo(0,secAbout.offsetTop)
})

blog.addEventListener("click", function(){
    window.scrollTo(0,secBlog.offsetTop)
})

contact.addEventListener("click", function(){
    window.scrollTo(0,secContact.offsetTop)
})


















