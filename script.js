let subBtn = document.querySelector(".sub_btn")
let input = document.querySelector(".input")
let form = document.querySelector(".date_form")
let linkDiv = document.querySelector(".linkDiv")
 //yyyy/dd/mm
 
input.addEventListener("input", ()=>{
  
  let inputVal = parseInt(input.value)
  
  if(inputVal >= 590101 && inputVal <= 590118){
    let newLink = document.createElement('a')
    newLink.classList.add("newLink")
    newLink.setAttribute("href","1959/59jan1-18.html")
    newLink.textContent = "click me"
    linkDiv.appendChild(newLink)
  }

})


function getYear(){
  let inputVal = parseInt(input.value)
  console.log(inputVal)
}