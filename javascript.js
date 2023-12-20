const drop1 = document.getElementById("button-1");
const drop2 = document.getElementById("button-2");
const drop3 = document.getElementById("button-3");
const drop4 = document.getElementById("button-4");
const plus1 = document.getElementById("img1");
const plus2 = document.getElementById("img2");
const plus3 = document.getElementById("img3");
const plus4 = document.getElementById("img4");


drop1.addEventListener("click", ()=>{
    console.log('working');
    document.getElementById("drop-item-1").classList.toggle("open");
    if(plus1.src.match("assets/images/icon-plus.svg")){
        plus1.src = "assets/images/icon-minus.svg";
    } else {
        plus1.src = "assets/images/icon-plus.svg";
    }
});
drop2.addEventListener("click", ()=>{
    console.log('working');
    document.getElementById("drop-item-2").classList.toggle("open");
    if(plus2.src.match("assets/images/icon-plus.svg")){
        plus2.src = "assets/images/icon-minus.svg";
    } else {
        plus2.src = "assets/images/icon-plus.svg";
    }
});
drop3.addEventListener("click", ()=>{
    console.log('working');
    document.getElementById("drop-item-3").classList.toggle("open");
    if(plus3.src.match("assets/images/icon-plus.svg")){
        plus3.src = "assets/images/icon-minus.svg";
    } else {
        plus3.src = "assets/images/icon-plus.svg";
    }
});
drop4.addEventListener("click", ()=>{
    console.log('working');
    document.getElementById("drop-item-4").classList.toggle("open");
    if(plus4.src.match("assets/images/icon-plus.svg")){
        plus4.src = "assets/images/icon-minus.svg";
    } else {
        plus4.src = "assets/images/icon-plus.svg";
    }
});