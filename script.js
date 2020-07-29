//zadatak 1

let pocetno1 = 16;
let krajnje1 = 22;
let pocetno2 = 8;
let krajnje2 = 14;
let d = document.getElementById("ispis");
d.style.color="red";
if(pocetno1<pocetno2 && pocetno2< krajnje1){
    d.innerHTML=krajnje1-pocetno2;
    console.log(krajnje1-pocetno2);
    
}else if(pocetno1>pocetno2 && krajnje2>pocetno1){
    console.log(krajnje2 - pocetno1);
    d.innerHTML=krajnje2-pocetno1;
}else {
    console.log("ne poklapaju se");
    d.innerHTML="ne poklapaju se";
}

//zadatak2
let povrsina = 15;
let ljudi = 6;
let b = document.getElementById("ispis2");
b.style.color="blue";
if(ljudi*3 <= povrsina){
    console.log("DA");
    b.innerHTML="DA"
} else if(ljudi*3>povrsina){
    console.log(Math.trunc(((ljudi*3)-povrsina)/3));
    console.log("ne");
    b.innerHTML="NE " + "<br>" + " mora da izadje " +  Math.trunc(((ljudi*3)-povrsina)/3);  
}

//zadatak3
let datum= new Date();
let mesec = 31;
let dan = datum.getDate();
let a = document.getElementById("ispis3");
a.style.color = "green";
switch(mesec){
    case 31:
        console.log(mesec - dan + " dana");
        a.innerHTML = mesec - dan + " dana";
        break;
    case 30:
        console.log(mesec - dan  + " dana");
        a.innerHTML = mesec - dan + " dana";
        break;
    case 29:
        console.log(mesec - dan  + " dana");
        a.innerHTML = mesec - dan + " dana";
        break;
    case 28:
        console.log(mesec - dan + " dana");
        a.innerHTML = mesec - dan + " dana";
        break;
    default:
        console.log("ne postoji mesec");
        a.innerHTML = "ne postoji mesec";
}