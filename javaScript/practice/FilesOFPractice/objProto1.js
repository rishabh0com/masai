
// make objectCreator2 DRY
// invoke objectCreator1 inside objectCreator2 in such a way that property1 to property5 are attached to the object b in objectCreator2
// You do not need to create a protoype chain
// you are expected to copy them / attach them to the new object b

// this function has capability of attaching 5 properties to an obj
function objectCreator1() {
    let a = {}
  
    a.property1 = 1
    a.property2 = 2
    a.property3 = 3
    a.property4 = 4
    a.property5 = 5
  
    return a
  }
  
  function objectCreator2() {
    let b = {}
  
    b = objectCreator1()
    b.property6 = 6
    b.property7 = 7
  
  
    return b
  }
  
  console.log(objectCreator1())
  console.log(objectCreator2())