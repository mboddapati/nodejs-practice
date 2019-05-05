function ModifyEmployee(employee,newEmployee)
{
    
    employee.push(newEmployee);
    
    return employee;
}

var newEmployee = {
    ID : 4,
    Name : 'Larry',
    IsActive : true
  };
var employee = [{
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
}

];

var x = ModifyEmployee(employee,newEmployee);
console.log(x);