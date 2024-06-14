#! /usr/bin/env node 

import inquirer from "inquirer";
class Student {
   name:string 
   constructor (n: string) {
      this.name= n
   }
}
class person {
   static students(students: any) {
       throw new Error("Method not implemented.");
   }
   students : Student [] =[]
   addStudent(obj:Student) {
       this.students.push(obj)
   }
}

const persons = new person()
const programeStart =async (persons:person)=>{
   do{
console.log("Wellcome!");
  const ans = await inquirer.prompt({
    name:"select",
    type:"list",
    message:"whom would you like to interact with?",
    choices :["staff","student","Exit"]
  
}) 
if(ans.select == "staff"){
   console.log( "you approach the staff room.Please feel free to ask any question.");
   
}
else if (ans.select == "student"){
   const ans = await inquirer.prompt ({
       name:"student",
       type:"input",
       message:"Enter the student's name you wish to engage with:"
});
const student = persons.students.find(val => val.name == ans.student)
if(!student){
 const name = new Student(ans.student)
persons.addStudent(name)
       console.log(`Hello i m ${name.name}.Nice to meet you!`);
       console.log("New student Added");
       console.log("Current student list");
       console.log(persons.students);
   } else {
       console.log(`Hello i m ${Student.name}. Nice to see you again`);
       console.log(`Existing student list:`);
       console.log(persons.students);
   } 
   
    }
   else if (ans.select == "Exit"){
       console.log("Exiting the program...");
       process.exit()
   }  
   } while (true)
}
programeStart(persons)

