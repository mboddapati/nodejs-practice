/*function Mine()
{
    
    var a = [
        ['X', 'O', 'O'],
        ['O', 'X', 'O'],
        ['X', 'O', 'O']
        ];
        
        for (var i = 0; i < a.length; i++)
        {
            for (var j = 0; j < a[i].length; j++)
            {
             if (a[i][j] == 'X')
             {
              console.log(i,j);   
             }
            }
        }
}

Mine();*/

var array1 = ['12','1','10','19','100'];
var array2 = ['12','10','19','1','2','4','12','5','8'];
var o = {};
for(var i in array1) {
    o[array1[i]] = 1;
}
for(var i in array2) {
    if(o[array2[i]] != undefined)
    {
        o[array2[i]] = 0;
    } 
    else{
        o[array2[i]] = 1;
    }
}
var array3 = [];
for(var i in o) {
    if(o[i] == 1) {
        array3.push(i);
    }
}

  console.log(array3);
