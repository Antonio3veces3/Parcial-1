var num=Math.floor(Math.random()*10)+1;
console.log(num); 
if(num<6)
  console.log("F"); //del 1 - 5 son F
else 
  if(num<7)
    console.log("E"); //So, es 6
  else
    if(num<8)
      console.log("D"); //So, es 7
    else 
        if(num<9)
            console.log("C"); //So, es 8
        else
            if(num<10)
                console.log("B"); //So, es 9
            else
                console.log("A"); //So, es 10