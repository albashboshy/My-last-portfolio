let year = document.querySelector(".year");
year.innerText= new Date().getFullYear();  



let menu = document.querySelector(".menu");
let ul =document.querySelector(".links");
let close = document.querySelector(".close");

menu.addEventListener("click",function(){
    ul.classList.remove("links");
    ul.classList.toggle("active");
    
    
})

close.addEventListener("click", ()=>{
    ul.classList.add("links");
    ul.classList.remove("active");
})


  AOS.init({
    duration: 1000,
    easing: 'ease-out',
    once: true
  });

let cv = document.querySelector("#mycv")

cv.addEventListener("click", function(){
  alert('please contact us from last section by my number for my cv ')
}
)