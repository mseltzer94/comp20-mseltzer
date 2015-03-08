var req;
function parse(){
  req = new XMLHttpRequest();
    var url = "data.json";
    console.log("parsing");
    req.open("GET", url, true);
    req.addEventListener("load", complete, false);

    req.send();  
}

function complete(evt){
         console.log("HERE!");
        data = JSON.parse(req.responseText);
         for (var i = 0; i < data.length; i++){
            var message= document.createElement("LI");
            var text = document.createTextNode(data[i].content + " " + data[i].username);
            message.appendChild(text);
            document.getElementById("messages").appendChild(message); 
         }
}
