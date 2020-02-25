function serieIn(x,terminos)
{
    var exponente=1, denominador=1,suma=0; 
    for(var i=1; i<=terminos;i++)
    {
        suma+=(1/denominador)*(((x-1)/x)**exponente);
        exponente++;
        denominador++;
    }
    return suma; 
}
console.log(serieIn(3,40)); 