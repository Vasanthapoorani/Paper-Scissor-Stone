var random=Math.floor(Math.random()*3+1);
var buttons=document.getElementsByClassName("game");
var user=document.getElementById("user");
var system=document.getElementById("system");
var count=document.getElementById("count");
var reset=document.getElementById("reset");
var p1total=0;
var p2total=0;
var gcount=0;
var gamecount=0;
for(var i=0;i<5;i++)
{
    buttons[i].addEventListener("click",function()
 {
    var button_pressed=this.id;
    count.textContent=gcount;
     if(random==1)
     {
        if(button_pressed==1)
        {
            alert("The Player2 selected paper and so the turn is draw!!");
            gamecount++;
        }
        else if(button_pressed==2)
        {
            alert("The Player2 selected paper and so you won this turn!!");
            p1total=p1total+1;
            gamecount++;
        }
        else
        {
            alert("The Player2 selected paper and so you lost this turn!!");
            p2total=p2total+1;
            gamecount++;
        }
        
     }
    if(random==2){
        
        if(button_pressed==1)
        {
            alert("The Player2 selected scissor and so you lost this turn!!");
            p2total=p2total+1;
            gamecount++;
        }
        else if(button_pressed==2)
        {
            alert("The Player2 selected scissor and so the turn is draw!!");
            gamecount++;
        }
        else
        {
            var a="stone";
            alert("The Player2 selected scissor and so you won this turn!!");
            p1total=p1total+1;
            gamecount++;
        }
    } 
    if(random==3)
    {
        if(button_pressed==1)
        {
            alert("The Player2 selected stone and so you won this turn!!");
            p1total=p1total+1;
            gamecount++;
        }
        else if(button_pressed==2)
        {
            alert("The Player2 selected stone and so you lost this turn!!");
            p2total=p2total+1;
            gamecount++;
        }
        else
        {
            alert("The Player2 selected stone and so the turn is draw!!");
            gamecount++;
        }
    }
        
        system.textContent=p2total;
        user.textContent=p1total;
        random=Math.floor(Math.random()*3+1);
    if(gamecount==5)
    {
        gcount=gcount+1;
        i=0;
        gamecount=0;
        var dif=Math.abs(p1total-p2total);
        count.textContent=gcount;
        if(p1total>p2total){
           user.textContent=dif;
           system.textContent=0;
           p1total=dif;
           p2total=0;
        }
        else{
            system.textContent=dif;
            user.textContent=0;
            p1total=0;
            p2total=dif;
        }
    }
 });
 reset.addEventListener("click",function()
    {
        i=0;
        gcount=0;
        gamecount=0;
        p1total=0;
        p2total=0;
        user.textContent=0;
        system.textContent=0;
        count.textContent=0;
        b=(Math.floor(Math.random()*9+1)); 
    }
    ); 
}