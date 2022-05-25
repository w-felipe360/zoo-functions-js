const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const objFinal = {};
    species.forEach((element) => {
      objFinal[element.name] = element.residents.length;
    });
    return objFinal;
  }

  const animaisMagicos = species.find(
    (element) => element.name === animal.specie,
  );
  if (animal.sex !== undefined) {
    const sexo = animaisMagicos.residents.filter(
      (elemento) => elemento.sex === animal.sex,
    );
    return sexo.length;
  }
  return animaisMagicos.residents.length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'male' }));
module.exports = countAnimals;
