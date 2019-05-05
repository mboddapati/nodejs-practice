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

    var a = [];
    for (var i = 0; i < employees.length; i++)
    {
        a.push(employees[i].name);
    }
    console.log(a);


    var b =[];
    employees.forEach(function(emp)
    {
        b.push(emp.name);
    });
    console.log(b);

    var c = employees.map(function(emp)
    {
        return emp.name;
    });
    console.log(c);

    var d = employees.map((emp) => emp.name);
    console.log(d);

}

Employees()