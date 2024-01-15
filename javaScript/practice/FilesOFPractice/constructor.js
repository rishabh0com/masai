// create a constructor function
function Employee(fName,lName,age,ID){
    this.name = fName;
    this.lastName = lName;
    this.age = age;
    this.ID = ID;
}

// create object from constructor function 

let employee1 = new Employee("kanta","Das",25,8967);
let employee2 = new Employee("Sumit","Singh",45,3498);

console.log(employee1,employee2);