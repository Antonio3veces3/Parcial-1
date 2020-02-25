function seno(x,terminos)
{  
    var exponente=1, suma=0, negador=1;
    for(var i=1; i<=terminos; i++)
    {
        var factorial=1;
        for(var j=1; j<=exponente;j++)  
        factorial*=j;
        suma+= negador*(Math.pow(x,exponente)/factorial);
        exponente+=2; 
        negador*=-1;
    }
    return suma; 
}
console.log("Resultado"+seno(3,15)); 