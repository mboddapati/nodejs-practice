function ReverseArray()
{
    var result;
    var a = [34, 23, 98];
    for (var i = 0; i < a.length; i++)
    {
        a.reverse();
    }
    return a;
}

var x = ReverseArray();
console.log(x);