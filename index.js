const employee = {
    name: "Gilmore",
    streetAddress: "125 Park ave"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmployeeWithKeyAndValue = {...employee}
    updateEmployeeWithKeyAndValue['name'] = 'Sam'
    updateEmployeeWithKeyAndValue['streetAddress'] = "11 Broadway" 
    return updateEmployeeWithKeyAndValue    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee['name'] = 'Sam'
    employee['streetAddress'] = '12 Broadway'
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const deleteFromEmployeeByKey = {...employee}
    delete deleteFromEmployeeByKey.name
    return deleteFromEmployeeByKey

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
}