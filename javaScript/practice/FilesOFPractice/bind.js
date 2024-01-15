// function account(accountNumber,name,type,balance,active){
//   let accountDetails = {};

//   accountDetails.accountNumber = accountNumber;
//   accountDetails.name = name;
//   accountDetails.type = type;
//   accountDetails.balance = balance;
//   accountDetails.active = active;

// 	accountDetails.printAccountDetails = function () {
//     console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
//   }

//   return accountDetails;
// }

// let vivekAccount = account(1290337843, 'Vivek', 'Savings', 90000, true)

// console.log(vivekAccount) 
// /*
// {
//   accountNumber: 1290337843,
//   name: 'Vivek',
//   type: 'Savings',
//   balance: 90000,
//   active: true
// }
// */

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