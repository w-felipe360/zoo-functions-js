const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species
    .find((element) => element.name === animal)
    .residents.every((ell) => ell.age >= age);
}

module.exports = getAnimalsOlderThan;
