function addtodo(){
    var input = document.getElementById("inputfield");
    var liElement = document.createElement("li");
    var liText = document.createTextNode(input.value);
    liElement.appendChild(liText);


// *******************delete**************************

    var delbtn = document.createElement("button")
    var delbtnText = document.createTextNode("Delete")
    delbtn.appendChild(delbtnText)
    delbtn.setAttribute("onclick", "deleteItem(this)")
    
    liElement.appendChild(delbtn)


// ************************edit*************************

    var editbtn = document.createElement("button")
    var editbtnText = document.createTextNode("Edit")
    editbtn.appendChild(editbtnText)
    editbtn.setAttribute("onclick", "editItem(this)")
    
    liElement.appendChild(editbtn)




    var list = document.getElementById("list");

    list.appendChild(liElement);

    list.value="";

}
function deleteall(){

    var list = document.getElementById("list");
    list.innerHTML = "";
}


function deleteItem(x){
    console.log(x.parentNode.remove());

}

function editItem(e){
    var input =  prompt("Enter updated value")
    e.parentNode.firstChild.nodeValue = input;  
}
