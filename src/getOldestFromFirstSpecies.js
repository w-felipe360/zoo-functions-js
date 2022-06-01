const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empregados = employees.find((element) => element.id === id)
 return empregados.responsibleFor.find((elemento) => elemento)
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
