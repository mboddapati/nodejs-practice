
function Employees()
{
    var employees = [
        {
            name: 'John',
            age: 21,
            title: 'Dev'
        },
        {
            name: 'Adam',
            age: 35,
            title: 'Dev'
        },
        {
            name: 'Pery',
            age: 18,
            title: 'QA'
        },
        {
            name: 'Thomas',
            age: 55,
            title: 'Manager'
        }
    ];
           
    var a = employees.map(function(person){
        return person.name;
    });
    return a;
}


var x = Employees();
console.log(x);