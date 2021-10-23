const text=document.querySelector(".font")
text.style.fontFamily="Arial, sans-serif";
text.style.textAlign="center";
text.style.listStyle="inside"

const text3=document.querySelector("#nickname")
text3.innerHTML="arwa"

const text4=document.querySelector("#favorite")
text4.innerHTML="dog"

const text5=document.querySelector("#hometown")
text5.innerHTML="albaha"

const list=document.querySelectorAll("li")
list.forEach(li => {
li.classList.add("listitem")
    
});

const color=document.querySelectorAll(".font ul li")
color.forEach(li=> {
li.style.color="dodgerblue";
    
});
