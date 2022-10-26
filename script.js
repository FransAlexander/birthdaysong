const container = document.querySelector(".container_center")
const newForm = document.createElement("form")
const newInput = document.createElement("input")
const newButton = document.createElement("button")
const headerText = document.querySelector(".top_text")
const containerSong = document.querySelector(".header_text")

headerText.textContent = "hi"

containerSong.appendChild(headerText)

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
  }else if(inputVal>=590209 && inputVal<=590308){
    newForm.setAttribute("action","1959/59feb9-mar8.html")
  }else if(inputVal>=590309 && inputVal<=590412){
    newForm.setAttribute("action","1959/59mar9-apr12.html")
  }else if(inputVal>=590413 && inputVal<=590510){
    newForm.setAttribute("action","1959/59apr13-may10.html")
  }else if(inputVal>=590511 && inputVal<=590517){
    newForm.setAttribute("action","1959/59may11-may17.html")
  }else if(inputVal>=590518 && inputVal<=590531){
    newForm.setAttribute("action","1959/59may18-may31.html")
  }else if(inputVal>=590601 && inputVal<=590712){
    newForm.setAttribute("action","1959/59jun1-jul12.html")
  }else if(inputVal>=590713 && inputVal<=590809){
    newForm.setAttribute("action","1959/59jul13-aug9.html")
  }else if(inputVal>=590810 && inputVal<=590823){
    newForm.setAttribute("action","1959/59aug10-aug23.html")
  }else if(inputVal>=590824 && inputVal<=590920){
    newForm.setAttribute("action","1959/59aug24-sep20.html")
  }else if(inputVal>=590921 && inputVal<=591004){
    newForm.setAttribute("action","1959/59sep21-oct4.html")
  }else if(inputVal>=591005 && inputVal<=591115){
    newForm.setAttribute("action","1959/59oct5-nov15.html")
  }else if(inputVal>=591005 && inputVal<=591115){
    newForm.setAttribute("action","1959/59oct5-nov15.html")
  }else if(inputVal>=591116 && inputVal<=591122){
    newForm.setAttribute("action","1959/59nov16-nov22.html")
  }else if(inputVal>=591123 && inputVal<=591213){
    newForm.setAttribute("action","1959/59nov23-dec13.html")
  }else if(inputVal>=591214 && inputVal<=591227){
    newForm.setAttribute("action","1959/59dec14-dec27.html")
  }else if(inputVal>=591228 && inputVal<=591231){
    newForm.setAttribute("action","1959/59dec28-dec31.html")
  }
})



