function CheckArray()
{
    var a = [234, 973, 234];
    for (var i = 0; i < a.length; i++)
    {
        if (a[0] === a[2])
            {
                 return true;
            }
        else 
            {
                return false;
            }
    }
}

var x = CheckArray();
console.log(x);