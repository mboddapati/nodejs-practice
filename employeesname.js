function EmployeesName()
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
    for (var i = 0; i < employees.length;i++)
    {
        if (employees[i].title === 'Dev')
        {
            a.push(employees[i].name)
        }
    }
    console.log(a);
    
        var b = [];
        employees.forEach(function (person)
        {
            if (person.title === 'Dev')
            b.push(person.name);
        });
        console.log(b);

        var c = employees.map(function (person)
        {
            if (person.title === 'Dev')
            {
                return person.name;
            }
        });
        console.log(c);
        
        var d = employees.filter(function (person)
        {
            return person.title === 'Dev';
        });
        var x = [];
        for (var i = 0; i < d.length; i++)
        {
            x.push(d[i].name);
        }
        console.log(x);
    
}

EmployeesName()
