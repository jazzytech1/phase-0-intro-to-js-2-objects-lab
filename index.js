// Write your solution in this file!
/*let employee = {
name: "Jazzy",
streetAddress:"Harlem"
}

  function updateEmployeeWithKeyAndValue (employee,key,value){
      let newObject = {
          ...employee
        
      };
      newObject[key]= value;
      return newObject;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
  let newObject = {
    ...employee
  
};
employee[key]= value;
      return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newObject = {
        ...employee
      
    };
    delete newObject[key];
    return newObject;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    let newObject = {
        ...employee
      
    };
    delete employee[key];
    return employee;
}
  */




const employee = {
name:"Kennedy Small" }
streetAddress: {
    street:"129 West 147th Street"
    apt: "#24F"
    city:"New York"
    state:"NY"
    zipCode:"10030" }
function updateEmployeeWithKeyAndValue (employee,key,value){
    const newEmployee = {...employee};
    newEmployee [key]=value;
    return newEmployee
    }
    function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value){
        employee [key]=value;
        return employee   
}
function deleteFromEmployeeByKey (employee,key){
    const newEmployee = {...employee};  
    delete newEmployee[key];
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}

   
    

    

        
    


    
    





