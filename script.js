 let button2 = document.querySelector(".nav2");
 button2.addEventListener("click", ()=> window.scroll({
    top: 250,
    behavior: "smooth",
 }));


 let button1 = document.querySelector(".nav1");
 button1.addEventListener("click",()=> window.scroll({
    top: 50,
    behavior: "smooth",
 }));

 let button3 = document.querySelector(".nav3");
 button3.addEventListener("click",()=> window.scroll({
    top: 550,
    behavior: "smooth",
 }));

 let button4 = document.querySelector(".nav4");
 button4.addEventListener("click",()=> window.scroll({
    top: 630,
    behavior: "smooth",
 }));

 let upButton = document.querySelector(".upButton");
 upButton.addEventListener("click", ()=> window.scroll({ top: 1, behavior:"smooth"}))



 window.addEventListener("scroll", ()=> {
    let scrollPosition = window.scrollY + window.innerHeight;
    if(scrollPosition > 800) {
        upButton.style.display = "block"
    } else{
    upButton.style.display = "none"
    }
 })

