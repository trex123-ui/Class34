var ball;
var  database
var positiondatabase
function setup(){
    createCanvas(500,500);
    database =firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var location=database.ref("ball/postion")
    location.on("value",readOp,showerr)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readOp(data)
{ positiondatabase = data.val();
 ball.x=positiondatabase.x;
 ball.y=positiondatabase.y 
}
function showerr()
{ console.log("error"); 
}
function changePosition(x,y)
{ database.ref("ball/postion")
.set({ x:ball.x+x,
 y:ball.y+y})
 }
