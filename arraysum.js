function SumArray()
{
    var sum = 0;
    var a = [235, 765, 823];
    for (var i = 0; i < a.length; i++)
    {
       sum += a[i];
    }
    return sum;
}

var x = SumArray();
console.log(x);