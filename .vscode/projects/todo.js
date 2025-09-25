const button= document.getElementById("button");
const text = document.getElementById("text");
const list = document.getElementById("list");



function addtask(){
    const task= text.value.trim();

    if(!task){
        window.alert("Please write down a task!");
        return;

    }

    let li= document.createElement("li");
    li.textContent=text;

    let del = document.createElement("button");
    del.textContent = "DELETE";

    del.addEventListener('click', function () {
     list.removeChild(li);

    });

    li.appendChild(del);
    list.appendChild(li);













































}
