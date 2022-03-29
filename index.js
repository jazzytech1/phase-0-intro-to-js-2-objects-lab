// Write your solution in this file!
let employee = {
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
  