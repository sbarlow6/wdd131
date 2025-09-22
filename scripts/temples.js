const year = document.querySelector("#year"); //grabs the element which id=year in HTML

const today = new Date();  // use the date object

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`; //I'm creating an element in HTML 

const lastmodified=document.querySelector("#lastmodified");

const today2=new Date();

const shortDate  = new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "short"}).format(today2); //The Intl.DateTimeFormat constructor lets you format dates according to locale rules.

lastmodified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
  "en-US", { dateStyle: "short" , timeStyle: "short"}
).format(today2)}</span>`;

const mainnav=document.querySelector(".navigation")
const hambutton=document.querySelector("#menu")
hambutton.addEventListener("click",()=>{
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");

});
