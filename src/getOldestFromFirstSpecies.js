const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empregado = data.employees.find((element) => element.id === id).responsibleFor;
  const animais = data.species.find((elemento) => elemento.id === empregado[0]);
  const reduzidos = animais.residents.reduce((acc, cur) => {
    if (acc > cur.age) return acc;
    return cur.age;
  }, 0);
  const animalrray = data.species.filter((elemento) => elemento.id === empregado[0]);
  const final = animalrray.map((element) => element.residents);
  const legal = final[0].find((element) => element.age === reduzidos);
  return [`${legal.name}`, `${legal.sex}`, legal.age];
}
module.exports = getOldestFromFirstSpecies;
