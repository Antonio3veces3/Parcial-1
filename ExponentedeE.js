function ExponenteE(x)
{
    var sumatoria=1, factorial=1, exponente=1,resultado=0;
    for(var i=1; i<=x;i++)
    {
        factorial*=i;
        resultado=(Math.pow(x,i)/factorial);
        sumatoria+=resultado;
    }
    return sumatoria;
}
console.log("Resultado: "+ExponenteE(10));