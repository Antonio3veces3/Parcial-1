function dado1()
{
    var num=Math.floor(Math.random()*6)+1;
    return num;
}

var play1=0, play2=0;
while(play1<100 && play2<100)
{      
    play1+=carrera();
    console.log("Player 1: "+play1);
    play2+=carrera();
    console.log("player 2: "+play2);
}
if(play1>99 && play2>99)
console.log("\nEMPATE");
else
{
    if(play1>play2)
    console.log("\nEL GANADOR ES PLAYER 1");
    else
    console.log("\nEL GANADOR ES PLAYER 2");
}

function carrera()
{
    var d=dado1(),pos=0;
    if(d%2==0)
    pos+=2;
    else
    {
        if(d==1)
        pos+=3;
        else
        pos++;
    }
    return pos;
}