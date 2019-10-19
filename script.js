

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.getElementsByTagName("li");





function toggleOff (event){
    if (event.target.tagName === "LI" ){
        event.target.classList.toggle("done");
    }

}


ul.addEventListener("click",toggleOff);




function inputLength(){
    return input.value.length;
}


function createListElement(){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);  
        input.value = "";
         var btn = document.createElement("button");
         btn.appendChild(document.createTextNode("Delete"));
         li.appendChild(btn);
         btn.onclick = removeParent;

}

function addListAfterClick(){
      if(inputLength()>0){
        createListElement();  
      }
}


function addListAfterPress(event){
    if(inputLength()>0 && event.keyCode === 13){
      createListElement();  
    }
}



function listLength(){
    return listItem.length;
}


function deleteBtn(){
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    listItem[i].appendChild(btn);
    btn.onclick=removeParent;
}


for (i = 0; i < listLength(); i++){
    deleteBtn();
}


function removeParent(ev){
    ev.target.parentNode.remove();

}


button.addEventListener("click",addListAfterClick);


input.addEventListener("keypress",addListAfterPress);

