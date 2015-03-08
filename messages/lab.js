function parse(){
  var req = new XMLHttpRequest();
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
            console.log(data[i]);   
}
