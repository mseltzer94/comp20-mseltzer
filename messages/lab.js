function parse(){
  var req = new XMLHttpRequest();
    var url = "data.json";
    req.open("GET", url, true);
    if(req.readyState == 4 && req.status == 200) {
        console.log("HERE!");
        data = JSON.parse(req.responseText);
         for (var i = 0; i < data.length; i++){
            console.log(data[i]);
         }
    }
    req.send();  
}
