function fn(){
    
    var you=Math.floor(Math.random()*6)+1;
    var me=Math.floor(Math.random()*6)+1;
    
    var pic1="images/dice"+you+".png";
    var pic2="images/dice"+me+".png";
    
    document.querySelectorAll(".img")[0].setAttribute("src",pic1);
    document.querySelectorAll(".img")[1].setAttribute("src",pic2);
    
    var tmp=document.querySelector(".roll").getAttribute("onClick");
    console.log(tmp);
    if(tmp=="fn()")
    {
        document.querySelector(".roll").textContent="Play Again?";
        document.querySelector(".roll").setAttribute("onClick","window.location.reload()");
    }
    else{
        document.querySelector(".roll").setAttribute("onClick","fn()");
    }
    var player=document.querySelector("#dorkar");
    var vs=document.querySelectorAll(".versus");
    vs[0].textContent="You";
    vs[1].textContent="Computer";
    if(you>me)
    {document.querySelector("h1").innerHTML="You Win,I lose!😥";  
    player.setAttribute("src","images/lose.gif");
    player.setAttribute("class","dorkar win");
}
else if(you<me)
    {document.querySelector("h1").innerHTML="I Win,You Lose!😂";
    player.setAttribute("src","images/win.gif");
    player.setAttribute("class","dorkar win");
}else document.querySelector("h1").innerHTML="Draw!🙄";
}
    