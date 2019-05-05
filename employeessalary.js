function Employees()
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

   var y = (employees.map((emp) => emp.salary)).reduce(function (salary, salarySum)
   {
       return salarySum + salary;
   }, 0);


 return y;

}

var a = Employees();
console.log(a);