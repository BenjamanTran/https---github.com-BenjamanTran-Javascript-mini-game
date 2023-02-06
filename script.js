var door1=document.getElementById("door1");
var door2=document.getElementById("door2");
var door3=document.getElementById("door3");
var playAgain=document.getElementById("playAgain");
var gamePlay=document.getElementById("gamePlay");
var current=document.getElementById("currentStreak");
var bestStreak=document.getElementById("bestStreak");
var ro="./images/robot.svg";
var beach="./images/beach.svg";
var space="./images/space.svg";
var check=[];
var a=check.length;
var scores=[];
var sum=0;
var best=[0];
var best1=0;
var imgEl=["./images/beach.svg","./images/space.svg","./images/robot.svg"];
var shuffleArray=function(array){
    for(var i=array.length-1;i>0;i--){
        var j=Math.floor(Math.random()*(i+1));
        var temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
};
shuffleArray(imgEl);
var onDoor1Click=function(){
    door1.src=imgEl[0];
    if(imgEl[0]===ro){
        check.push(0);
    }
    else if(imgEl[0]===beach){
        check.push(1);
    }
    else if(imgEl[0]===space){
        check.push(2);
    }
};
var onDoor2Click=function(){
    
    
    door2.src=imgEl[1];
    if(imgEl[1]===ro){
        check.push(0);
    }
    else if(imgEl[1]===beach){
        check.push(1);
    }
    else if(imgEl[1]===space){
        check.push(2);
    }
};
var onDoor3Click=function(){
   
    door3.src=imgEl[2];
    if(imgEl[2]===ro){
        check.push(0);
    }
    else if(imgEl[2]===beach){
        check.push(1);
    }
    else if(imgEl[2]===space){
        check.push(2);
    }
};
var play=function(){
    shuffleArray(imgEl);
    check.splice(0,check.length);
    door1.src="./images/closed_door.svg";
    door2.src="./images/closed_door.svg";
    door3.src="./images/closed_door.svg";
    
};

var game=function(){
    
    var a=check.length;
    door1.addEventListener("click",onDoor1Click);
    door2.addEventListener("click",onDoor2Click);
    door3.addEventListener("click",onDoor3Click);
    playAgain.addEventListener("click",play);
    if(check[a-1]===0 && a>2 && check[a-2]!==0 && check[a-3]!==0){
        playAgain.innerText=("YOU WIN!!!");
        scores.push(1);
    }
    else{
        playAgain.innerText=("Better luck next time!!!");
    }
    if(check[a-1]!==0 && a>2){  
        scores.push(0);
    }
    for(var i=0;i<scores.length;i++){
        if(scores[i]===1){
            sum=sum+1;
            best.push(sum);
            
        }
        else{
            sum=0;
        }
        
    }  
    /*for(var y=0;y<best.length;y++){
        if(best[y+1]-best[y]>0){
            bestStreak.innerText=best[y+1];
        }
        else{
            bestStreak.innerText=best[y];
        }
    }*/
    
    var largest = Math.max.apply(Math, best); // tìm bestStreak
    bestStreak.innerText= largest;
    console.log(check);
    current.innerText=sum;
    
   
};

gamePlay.addEventListener("click",game);



