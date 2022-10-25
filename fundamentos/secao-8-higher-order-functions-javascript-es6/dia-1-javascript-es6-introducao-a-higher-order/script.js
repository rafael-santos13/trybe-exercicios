const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
}

const newEmployees = (callBack) => {
    const employees = {
      id1: callBack('Rafael Ferreira'), 
      id2: callBack('Sophia Martins'), 
      id3: callBack('Fabrício dos Santos'),
    }
    return employees;
  };
  console.log(newEmployees(employeeGenerator));
