let nb=0;
let nb1=0;
let container1=document.querySelector(".container1");
let container2=document.querySelector(".container2");
let container3=document.querySelector(".container3");
let son1=document.getElementById("son1");
let son2=document.getElementById("son2");
son2.src="";
let p=document.querySelectorAll(".p img");
container2.classList.add("cache");
container3.classList.add("cache");
let btn=document.getElementById("btn");
let btn1=document.getElementById("btn1");
btn.addEventListener("click",()=>{
    container1.classList.add("cache");
    container2.classList.remove("cache");
    let t1=getRandomNumbers(12,0,11);
    let t2=["im1","im2","im3","im4","im5","im6","im7","im8","im9","im10","im11","im12"];
    let j;
    for(let i=0;i<12;i++){
        j=document.getElementById(t2[i]);
        j.src=t[t1[i]];
    }
    // setTimeout(function(){
    //     container2.classList.add("cache");
    // container3.classList.remove("cache");
    // },10000)
})
btn1.addEventListener("click",()=>{
    container3.classList.add("cache");
    container1.classList.remove("cache");
    son2.src="";
    son1.src="/Sons/Wii Music - Gaming Background Music (HD).mp3"

})
function getRandomNumbers(count, min, max) {
if (count > (max - min + 1)) {
throw new Error("La plage spécifiée est trop petite pour générer des nombres distincts.");
}

var numbers = [];

while (numbers.length < count) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (numbers.indexOf(randomNumber) === -1) {
    numbers.push(randomNumber);
    }
}

return numbers;
}
let t=["/Images/ananas.jpg","/Images/banane.jpg","/Images/fraise-magnum.jpg","/Images/kiwi.jpg","/Images/orange.png","/Images/orange.png","/Images/pomme.png","/Images/ananas.jpg","/Images/banane.jpg","/Images/fraise-magnum.jpg","/Images/kiwi.jpg","/Images/pomme.png"];

document.addEventListener("click",function(e){
    if(e.target.className==="p"){
        let x1=document.getElementById(e.target.getAttribute("data"));
        x1.style.display="block";   
        if(existe(e.target.getAttribute("data"),tab1)){
            e.preventDefault();
        }
        else{
            nb1++;
        tab.push(e.target.getAttribute("data"));
        tab1.push(e.target.getAttribute("data"));
        }
        if(nb1===2){
            let g=document.getElementById(tab[0]);
            let g1=document.getElementById(tab[1]);
            if(g.src!=g1.src){
                setTimeout(()=>{
                    g.style.display="none";
                    g1.style.display="none";
                },1000)
                tab1.pop();
                tab1.pop();
            }
            else{
                nb++;
            }
            tab.pop();
            tab.pop();
            nb1=0;
        }
    }
    if(nb===6){
        container2.classList.add("cache");
        container3.classList.remove("cache") ;
        let t2=["im1","im2","im3","im4","im5","im6","im7","im8","im9","im10","im11","im12"];
    for(let i=0;i<t2.length;i++){
        let y=document.getElementById(t2[i]);
        y.style.display="none";
        nb=0;
    }
    son2.src="/Sons/WIN sound effect no copyright.mp3";
    son1.src="";
    }
})
function existe(e,t){
let i=0;
while(i<t.length){
    if(t[i]===e){
        return true;
    }
    i++;
}
return false;
}
let tab=[];
let tab1=[];
function play(){
if(tab[0]===tab[1]){
    return true;
}
return false;
}
console.log(nb);