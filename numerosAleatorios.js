var num1=Math.floor(Math.random()*20)+1;
var num2=Math.floor(Math.random()*20)+1;
var num3=Math.floor(Math.random()*20)+1;
var i,contador;
console.log(num1 + " " + num2 + " " + num3);
if(num1>num2)
 if(num1>num3)
   console.log("mayor--> " + num1);
    else 
      console.log("mayor--> " + num3);
else 
  if(num2>num3)
   console.log("mayor--> " + num2);
    else
     console.log("mayor--> " + num3)
