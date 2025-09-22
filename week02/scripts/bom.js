const favchap=document.getElementById("favchap");
const submit=document.getElementById("submit");
const list=document.getElementById("list");



submit.addEventListener("click",function(){
    
    if (favchap.value.trim() !=='')
        {
        const li=document.createElement("li");
        li.textContent=favchap.value
        list.appendChild(li)  //ul=list  is the parent of the li element
        
        const deleteButton=document.createElement("button");
        deleteButton.textContent="❌";
        deleteButton.setAttribute("aria-label","Delete item")
        li.append(deleteButton);
            
            deleteButton.addEventListener("click", function(){
            list.removeChild(li);
            favchap.focus();
})


        favchap.value="";
        favchap.focus();
        } 
    else {alert("Please, enter a valid chapter");
        favchap.focus();
    }
});







