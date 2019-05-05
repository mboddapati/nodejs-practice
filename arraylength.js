function ArrayLength()
{
    var a = ['aa', 'apple', 'dog', 'cat', 'laptop', 'watch'];
    for (var i = 0; i < a.length; i++)
    {
        if (a[i].length >= 3)
        {
            console.log(a[i]);
        }
    }
}

ArrayLength()