function EmployeeAge()
{
    var employees = [
        {
            name: 'John',
            age: 21,
            title: 'Dev',
            salary: 5000
        },
        {
            name: 'Adam',
            age: 35,
            title: 'Dev',
            salary: 5000
        },
        {
            name: 'Pery',
            age: 18,
            title: 'QA',
            salary: 8000
        },
        {
            name: 'Thomas',
            age: 55,
            title: 'Manager',
            salary: 10000
        }
    ];
    
    var a = employees.filter(function (employee)
    {
     return employee.age > 30 && employee.salary > 5000; 
      
     
    });
    console.log(a);
}

EmployeeAge();

