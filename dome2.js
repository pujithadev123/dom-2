let j=document.getElementById("hello")
j.textContent="i should be brave"
j.style.backgroundColor="yellow"

let pchildElem=document.createElement("div")
pchildElem.textContent="this is div tag"
let anchortag=document.createElement("a")
anchortag.textContent="this is anchor tag"
console.log(anchortag)
let kohliimage=document.createElement("img")
kohliimage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95uuoXKF41VGLw1AI1CQf56aTNbK_PR3JpRAo1un2PaBdEGXxif3VIAGv1-CorHAOyfI&usqp=CAU"
kohliimage.width="200"
let spanelem=document.createElement("span")
spanelem.textContent="this is span tag"
let iframe=document.createElement("iframe")
iframe.frameBorder=1
iframe.width="200"
iframe.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTYhoPVAR0qIFoPaf4pVqBexcJLs9gMpK9h0upk7rlq7lAEftcvTNBKT5zfqM2M7joBA&usqp=CAU"



j.appendChild(pchildElem)
j.append(pchildElem,anchortag,kohliimage,spanelem)
j.removeChild(spanelem)
j.replaceChild(kohliimage,anchortag)
j.replaceChild(iframe,kohliimage)
const clonedElem=j.cloneNode(true)
document.body.append(clonedElem)



let p=document.querySelector("p")
// console.log(divtag.parentElement)
console.log(p.parentNode)

let div=document.querySelector("div")
console.log(div.childNodes)

let parent=document.querySelector("div")
console.log(parent.children)

let parent1=document.querySelector("div")
console.log(parent1.firstChild)

let parent2=document.querySelector("div")
console.log(parent2.firstElementChild)

let thirdp=document.querySelector(".three")
// console.log(thirdp.nextSibling)
console.log(thirdp.nextElementSibling)

let kohliImage=document.createElement("img")
kohliImage.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwWnOmv6F43UgGkbZSO7FAncFAxXhJLUjfw&s")
kohliImage.setAttribute("width","200")
let thirdpp=document.querySelector(".three")
thirdpp.insertAdjacentElement("beforeEnd",kohliImage)





let divtag=document.createElement("div")
divtag.className="container"
divtag.classList.add("one")
divtag.classList.add("two")
divtag.classList.add("three")
divtag.classList.add("four")
divtag.classList.remove("three")
divtag.classList.replace("one","two")
divtag.classList.toggle("five")



console.log(divtag)

let peacockpic=document.createElement("img")
peacockpic.setAttribute("src","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg")
peacockpic.setAttribute("width","300")
peacockpic.style.borderRadius="20%"
document.body.appendChild(peacockpic)
peacockpic.style.backgroundColor="pink"
peacockpic.style.padding="20px"
peacockpic.style.boxShadow="3px 3px 2px blue"


peacockpic.addEventListener("click",function(){
    alert("peacock pic is clicked")
    peacockpic.style.borderRadius="50%"
})