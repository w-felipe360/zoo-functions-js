const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui

  const empregadosFilt = employees.filter((empregados) =>
    empregados.managers.find((elemento) => elemento === id));
  return empregadosFilt.length > 0;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    const empregadinhos = employees.filter((element) =>
      element.managers.includes(managerId));
    return empregadinhos.map(
      (element) => `${element.firstName} ${element.lastName}`,
    );
  } catch (error) {
    return error.message;
  }
}
module.exports = { isManager, getRelatedEmployees };
