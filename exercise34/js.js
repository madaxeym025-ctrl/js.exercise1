const list = document.querySelector(".list")
const change = document.querySelector(".ch")
const reback = document.querySelector(".re")

 change.addEventListener('click',()=>{
   let newNone = document.createElement("h1")
    newNone.textContent = "my information"
    list.appendChild (newNone)
})

reback.addEventListener("click",()=>{
    if(list.lastChild){
        list.removeChild(list.lastChild);
    }
}
    
)