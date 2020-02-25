function coseno(x,terminos)
{
    var exponente=0, suma=0, negacion=1; 
    for(var i=1; i<=terminos;i++)
    {
        var factorial=1;
        for(var j=1; j<=exponente;j++)
        {
            factorial*=j;
        }
        suma+= negacion*(x**exponente/factorial);
        exponente+=2; 
        negacion*=-1;
    }
    return suma; 
}
console.log("Resultado: "+coseno(3,15));