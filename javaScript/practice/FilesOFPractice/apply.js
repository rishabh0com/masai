// apply function

let worker = {
    naam : "Ram Lal"
}

function print(age,ID){
    console.log("the age of " + this.naam + " is " + age + " and ID is " + ID);
}

print.apply(worker,[23,756435])
// in apply function you give first argument and rest argument as a Array 

let fun = print.bind(worker,[25,"e4567"]);

fun()