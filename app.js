const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');
/* <li>
<p>Book's name</p>
<div class="buttons">
    <button><img src="images/trash.svg" alt=""></button>
    <button><img src="images/book.svg" alt=""></button>
</div>
</li> */

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(input.value.trim() === ""){
        alert("You must enter text.");
        input.value = "";
    } else {
        const li = document.createElement('li');
        li.innerHTML = `
        <p>${input.value}</p>
            <div class="buttons">
            <button id="eliminate"><img src="images/trash.svg" alt="" id="eliminate"></button>
            <button id="read"><img src="images/book.svg" alt="" id="read"></button>
            </div>`;
        ul.append(li);
        input.value = "";
    }
});

ul.addEventListener('click', (e) => {
    if(e.target.id == "eliminate"  && e.target.tagName == "IMG"){
        const button = e.target.parentElement;
        const divButton = button.parentElement;
        const li = divButton.parentElement;
        li.remove();
    }
    else if(e.target.id == "read"  && e.target.tagName == "IMG"){
        const button = e.target.parentElement;
        const divButton = button.parentElement;
        const p = divButton.previousElementSibling;
        
        if(!(p.classList.contains("read"))){
            p.classList.add('read');
            p.style.textDecoration = "line-through"; 
        } else {
            p.classList.remove('read');
            p.style.textDecoration = "none"; 
        }
    }
});