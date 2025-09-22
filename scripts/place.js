const yearj=document.getElementById("year");
const today=new Date();
year.innerHTML=today.getFullYear();

const lastmodifiedj=document.getElementById("lastmodified");
const today2=new Date();
const shortDate= new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "short"}).format(today2);

lastmodified.innerHTML=shortDate;

const wchillj=document.getElementById("wchill");
const tempj=document.getElementById("temp");
const windj=document.getElementById("wind");

const tempf=parseFloat(tempj.textContent);
const windf=parseFloat(windj.textContent);



function windChill(t,w){

    if (t<=10 && w>4.8){
    const wc= 13.12+0.6215*t-11.37*(w)**0.16+0.3965*t*(w)**0.16;
    return wc.toFixed(2);
      }
      else {
        return  "N/A";
}
}
wchill.innerHTML=windChill(tempf,windf);
