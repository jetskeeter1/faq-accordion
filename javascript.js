const drop1 = document.getElementById("button-1");
const drop2 = document.getElementById("button-2");
const drop3 = document.getElementById("button-3");
const drop4 = document.getElementById("button-4");

drop1.addEventListener("click", ()=>{
    console.log('working');
    document.getElementById("drop-item-1").classList.toggle("open");
});
drop2.addEventListener("click", ()=>{
    console.log('working');
    document.getElementById("drop-item-2").classList.toggle("open");
});
drop3.addEventListener("click", ()=>{
    console.log('working');
    document.getElementById("drop-item-3").classList.toggle("open");
});
drop4.addEventListener("click", ()=>{
    console.log('working');
    document.getElementById("drop-item-4").classList.toggle("open");
});