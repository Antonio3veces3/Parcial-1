function serieE(n)
{
    var factorial=1, resul=0; suma=1, num=1; 
    for(var i=1;i<=n;i++)
    {
        factorial*=i;
        resul=num/factorial;
        suma+=resul; 
    }
    return suma; 
}
console.log("Resultado: "+serieE(15)); 
