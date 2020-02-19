var n=1000;
function serie1(n)
{
    var sumatoria=0; 
    var numer=4; 
    var denom=1;
    for(var i=1; i<=n;i++)
    {
        sumatoria+=numer/denom;
        denom+=2;
        numer*=-1;
    }
    return sumatoria;
}
console.log("Resultado: "+serie1(n)); 