//ms. pacman location
var pacx = 30;
var pacy = 30;
var pacWidth = 30;
var pacHeight = 30;
var orientation = 0;
var colOrient = 0;
var gameWidth = 698;
var gameHeight = 203;
var collision = false;


function init() {
    var canvas = document.getElementById('game_canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.addEventListener("load", draw , false);
    img.src = 'pacman10-hp-sprite.png';
    
    
    //event listener for arrow keys
    window.addEventListener('keydown', xkey, true);
    
    
    function xkey(evt){
        
        switch (evt.keyCode){
            //a arrow
            case 65:
                orientation = 0;
                colOrient = 2;
                //change color on collide edge
                if (pacx - 10 <= 0 || (pacx - 10) >= (gameWidth - pacWidth) ){
                    alert('AHHH');
                    collision = !collision;
                }
                    
                pacx = ((pacx -10) > 0 ? pacx - 10:0);
                pacx = ((pacx) < (gameWidth - pacWidth)  ? pacx:(gameWidth - pacWidth));
                break;
            //d arrow
            case 68:
                orientation = 1;
                colOrient = 3;
                if (pacx + 10 <= 0 || (pacx + 10) >= (gameWidth - pacWidth) ){
                    alert('AHHH');
                    collision = !collision;
                }
                pacx = (pacx < canvas.width ? pacx + 10: 0);
                pacx = ((pacx) < (gameWidth - pacWidth) ? pacx:(gameWidth - pacWidth));
                break;
            //w arrow
            case 87:
                orientation = 2;
                colOrient = 0;
                if (pacy - 10 <= 0 || (pacy - 10) >= (gameHeight - pacHeight) ){
                    alert('AHHH');
                    collision = !collision;
                }
                pacy = ((pacy -10) > 0 ? pacy - 10:0);
                pacy = ((pacy) < (gameHeight - pacHeight) ? pacy:(gameHeight - pacHeight));
                break;
            //s arrow
            case 83:
                orientation = 3;
                colOrient = 1;
                if (pacy + 10 <= 0 || (pacy +10) >= (gameHeight - pacHeight) ){
                    alert('AHHH');
                    collision = !collision;
                }
                pacy = (pacy < canvas.width ? pacy + 10: 0);
                pacy = ((pacy) < (gameHeight - pacHeight) ?pacy:(gameHeight - pacHeight));
                break;
                
                
        }
        draw();
    }
    
    function draw() {
        //draw background
        ctx.drawImage(img, 320, 0, 465, 135, 0, 0, gameWidth, gameHeight);
         //draw different sprite on collision
        if (collision) {
            ctx.drawImage(img, 40*colOrient, 80, 20, 20, pacx, pacy, 30, 30);
        }
        else{
             ctx.drawImage(img, 80, 20*orientation, 20, 20, pacx, pacy, 30, 30);  
        }
}
    
    
    
    
}