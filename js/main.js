// special countdown 
let dayItem=document.querySelector("#days");
let hoursItem=document.querySelector("#hours");
let minItem=document.querySelector("#min");
let secItem=document.querySelector("#sec");

let countdown= () =>{
    let futureDate=new Date("4 may 2022");
    let currentDate=new Date();
    let myDate=futureDate - currentDate;

    let days=Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours=Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min=Math.floor(myDate / 1000 / 60 ) % 60;
    let sec=Math.floor(myDate / 1000 ) % 60;

    dayItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minItem.innerHTML=min;
    secItem.innerHTML=sec;
}
countdown();
setInterval(countdown,1000);

// scrool up to top 

function scrollTopBack(){
    let scrollTopButton=document.querySelector("#scrollup");
    window.onscroll =function (){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 250){
            scrollTopButton.classList.add('scrollupActive');
        }else{
            scrollTopButton.classList.remove('scrollupActive');
        }
    }
}
scrollTopBack();

// nav hide

let navBar = document.querySelectorAll('.nav-link');
let navCollapse =document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})