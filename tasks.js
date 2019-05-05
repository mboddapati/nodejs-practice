function taskDetails()
{
    var tasks = [
 
        {
       
          'name'     : 'Write for Envato Tuts+',
       
          'duration' : 120
       
        },
       
        {
       
          'name'     : 'Work out',
       
          'duration' : 60
       
        },
       
        {
       
          'name'     : 'Procrastinate on Duolingo',
       
          'duration' : 240
       
        }
       
      ];

      var a = [];

      for (var i = 0; i < tasks.length; i++)
      {
          a.push(tasks[i]);
      }
      console.log(a);

      var b = [];

      tasks.forEach(function (task)
      {
          b.push(task.name);
      });
      console.log(b);

      var c = tasks.map(function (task1)
      {
          return task1.name;
      });
      console.log(c);

      var d = tasks.filter(function (task2)
      {
          return task2.name;
      });
      console.log(d);

     var e = tasks.filter(task3 => task3.name);
     console.log(e);

}

taskDetails()