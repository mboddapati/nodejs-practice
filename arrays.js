function Delete(employees)
{
  for (var i = 0; i < employees.length; i++)
  {
    if (employees[i].Name === oldEmployee)
    {
      employees.splice(i, 1);
    }
  }
  return employees;
}
var employees = [{
    ID : 1,
    Name : 'John',
    IsActive : false
  },
  {
    ID : 2,
    Name : 'Pam',
    IsActive : true
  },
  {
    ID : 3,
    Name : 'James',
    IsActive : true
  },
  {
    ID : 4,
    Name : 'Pam',
    IsActive : true
  }
  ];
var oldEmployee = 'Pam';
var x = Delete(employees,oldEmployee);
  console.log(x);