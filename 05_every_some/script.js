const students = [
    {name:'Francis',grade:4},
    {name:'Martin',grade:7},
    {name:'Martha',grade:5},
 ];

 //All students should have passed the course
 
 let allStudentsPassedTheCourse = students.every(function(student){
     return student.grade>6;
 })

 //Only one student should haa passed the course

//  let allStudentsPassedTheCourse = students.some(function(student){
//     return student.grade>6;
// })


//  let allStudentsPassedTheCourse=false;

//  for(let i=0;i<students.length;i++){
//      let student=students[i];

//      if(student.grade<6){
//         allStudentsPassedTheCourse=false;
//         break;
//      }else{
//         allStudentsPassedTheCourse=true;
//      } 
//  }

 console.log(allStudentsPassedTheCourse);