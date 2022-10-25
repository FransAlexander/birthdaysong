

const container = document.querySelector(".container_center")
const newForm = document.createElement("form")
const newInput = document.createElement("input")
const newButton = document.createElement("button")


newForm.classList.add("date_from")
newInput.classList.add("input")
newButton.classList.add("sub_btn")
newInput.setAttribute("placeholder","yy/mm/dd")
newInput.setAttribute("type","number")
newForm.setAttribute("type","submit")

newForm.appendChild(newInput)
newForm.appendChild(newButton)
container.appendChild(newForm)

let input = document.querySelector(".input")
let form = document.querySelector(".date_form")
let btn = document.querySelector(".sub_btn")

btn.addEventListener("click",()=>{
  let inputVal = parseInt(input.value)
  if(inputVal>=590101 && inputVal<=590118){
    newForm.setAttribute("action","1959/59jan1-18.html")
  }else if(inputVal>=590119 && inputVal<=590208){
    newForm.setAttribute("action","1959/59jan19-feb8.html")
  }
})



