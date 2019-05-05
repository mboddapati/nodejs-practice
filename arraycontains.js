function ArrayContains()
{
    var a = [5, 2];
    for (var i = 0; i < a.length; i++)
    {
        if (a[i] === 1 || a[i] === 3)
        {
            return true;
        }

        else 
        {
            return false;
        }
    }
}

var x = ArrayContains();
console.log(x);