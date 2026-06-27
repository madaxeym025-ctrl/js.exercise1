let img = document.querySelector('.img')
let change = document.querySelector('.change')


change.addEventListener("click", ()=>{

    let mid = prompt("inter your picture")
    let wi = prompt("inter you width")
    let hi = prompt("inter you hiethg")
    img.setAttribute('src', mid)
    img.style.width = wi
    img.style.height = hi
    
})