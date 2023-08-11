let Hour=new Audio("hour.wav");
let Minute=new Audio("minute2.mp3");
let Second=new Audio("minuter.wav");

setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation= 30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    // while(srotaion){
    //     Second.play();
    // }
    hour.style.transform =`rotate(${hrotation}deg)`
    minute.style.transform =`rotate(${mrotation}deg)`
    second.style.transform =`rotate(${srotation}deg)`
},1000)
setInterval(()=>{
    Hour.play();
},3600000)
setInterval(()=>{
    Second.play();
},1000)
setInterval(()=>{
    Minute2.play();
},12000)