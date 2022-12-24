const menuBtn=document.querySelector(".menu-btn")
let openBtn= document.querySelector(".open-icon")
let closeBtn=document.querySelector(".close-icon")
let menuItem=document.querySelector(".menu-list")
menuBtn.addEventListener("click",()=>{
    if(menuBtn.classList.contains("active")){
        menuBtn.classList.toggle("active")
        openBtn.style.display="none"
        closeBtn.style.display="block"
        menuItem.style.display="block"
        
    }
    else{
        menuBtn.classList.toggle("active")
        openBtn.style.display="block"
        closeBtn.style.display="none"
        menuItem.style.display="none"
    }
})