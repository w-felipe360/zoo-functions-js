const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(
    (element) =>
      element.firstName === employeeName || element.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
