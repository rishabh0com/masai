// // .call & .apply are used to invoke a function & set the value of the this keyword 
// // inside of the function

// // .bind is used to create a function & set the value of the this keyword 
// // inside of the newly created function

 /*var person1 = {
     name: "John",
   }
   var person2 = {
     name: "Jill",
   }
   function myName() {
     console.log(this.name);
   
   myName.call(person1); // takes in the value of this keyword as the first argument
 // prints John
   myName.call(person2); // Prints Jill */
  // console.log(person1.name)

let student = {
    id : 43
}

function stCall (age){
    console.log(this.id)
    console.log(age)
}

stCall.call(student,18)

//creat own code
// help of function

/* let employee = {  // naam : "Rishabh"
 }
 
 function print(age,city){  // console.log(this.naam + " age is " + age," lives in " + city);
 }
 
 print.call(employee,20,"kanpur");*/

//help of only objet

/*let student = {
    naam : "Rishabh",

    account : function(acN,city){
        console.log(this.naam + " a/c is " + acN + " and city is " + city);
    }

}

student.account(12232,"kanpur") */