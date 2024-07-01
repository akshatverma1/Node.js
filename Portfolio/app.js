let github=  document.querySelector("#githubIcon");
let mail = document.querySelector("#mailIcon");
let linkdin = document.querySelector("#linkdinIcon");
github.addEventListener("click",()=>{
    let a="https://github.com/akshatverma1";
    console.log(a);
    location.href=a;
})
mail.addEventListener("click",()=>{
    let b ="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTGmvTwjJdpDXplcvNHjvtvPGmLhrkzWGCBqqVTNTnjDDDgnDdnchCcnxSxtTJmVsxJqPBv";
    location.href=b;
})
linkdin.addEventListener("click",()=>{
    let c = "https://www.linkedin.com/in/akshat-verma-7baab7221/";
    location.href=c;
})

let textChanger = document.querySelector("#devEdit");
let str = ["Web","Android","Software"];
setInterval(()=>{
    textChanger.innerHTML=str[0];
},2000);
setInterval(()=>{
    textChanger.innerHTML=str[1];
},4000);
setInterval(()=>{
    textChanger.innerHTML=str[2];
},8000);
let project = document.querySelector(".projectList");
let onkaam =  document.querySelector(".onkaam");
let onkM = document.querySelector("#onkaamMaterial");
project.addEventListener("click",()=>{
});

let rroomsLive = document.querySelector("#rroomsLive");
rroomsLive.addEventListener("click",()=>{
    let l = "https://play.google.com/store/apps/details?id=com.rooms.rrooms";
    location.href = l;
})