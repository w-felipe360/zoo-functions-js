const data = require('../data/zoo_data');

const allIds = data.employees.map((val) => val.id);

function things(info) {
  const try2 = data.employees.filter(
    (val) => val.id === info.id,
  );
  const try1 = data.employees.find(
    (val) => val.id === info.id,
  );
  const idAnimals = try2.map((val) => val.responsibleFor.find((val2) => val2));
  const newId = try2.map((val) => val.responsibleFor.filter((val2) => val2 !== val2[0]));
  const animal1 = data.species.find((val) => val.id === idAnimals[0]);
  const animal2 = data.species.find((val) => val.id === newId[0][1]);
  const animal3 = data.species.find((val) => val.id === newId[0][2]);
  return {
    id: try1.id,
    fullName: `${try1.firstName} ${try1.lastName}`,
    species: [animal1.name, animal2.name, animal3.name],
    locations: [animal1.location, animal2.location, animal3.location],
  };
}

function things2(info) {
  const teste2 = data.employees.filter(
    (val) => val.id === info.id,
  );
  const teste1 = data.employees.find(
    (val) => val.id === info.id,
  );
  const idAnimals = teste2.map((val) => val.responsibleFor.find((val2) => val2));
  const newId = teste2.map((val) => val.responsibleFor.filter((val2) => val2 !== val2[0]));
  const animal1 = data.species.find((val) => val.id === idAnimals[0]);
  const animal2 = data.species.find((val) => val.id === newId[0][1]);
  const animal3 = data.species.find((val) => val.id === newId[0][2]);
  const animal4 = data.species.find((val) => val.id === newId[0][3]);
  return {
    id: teste1.id,
    fullName: `${teste1.firstName} ${teste1.lastName}`,
    species: [animal1.name, animal2.name, animal3.name, animal4.name],
    locations: [animal1.location, animal2.location, animal3.location, animal4.location],
  };
}

function checkName(info) {
  const tryTest = data.employees.filter(
    (val) => val.firstName === info.name || val.lastName === info.name,
  );
  const testlegal = data.employees.find(
    (val) => val.firstName === info.name || val.lastName === info.name,
  );
  const idAnimals = tryTest.map((val) => val.responsibleFor.find((val2) => val2));
  const newId = tryTest.map((val) => val.responsibleFor.filter((val2) => val2 !== val2[0]));
  const animal1 = data.species.find((val) => val.id === idAnimals[0]);
  const animal2 = data.species.find((val) => val.id === newId[0][1]);
  if (newId[0].length > 2 && newId[0].length < 4) return things(info);
  if (newId[0].length > 2) return things2(info);
  return {
    id: testlegal.id,
    fullName: `${testlegal.firstName} ${testlegal.lastName}`,
    species: [animal1.name, animal2.name],
    locations: [animal1.location, animal2.location],
  };
}

function sendId(param) {
  const teste2 = data.employees.filter(
    (element) => element.id === param.id,
  );
  const testTry = data.employees.find(
    (val) => val.id === param.id,
  );
  const idAnimals = teste2.map((val) => val.responsibleFor.find((val2) => val2));
  const newId = teste2.map((val) => val.responsibleFor.filter((val2) => val2 !== val2[0]));
  const animal1 = data.species.find((val) => val.id === idAnimals[0]);
  const animal2 = data.species.find((val) => val.id === newId[0][1]);
  if (newId[0].length > 2 && newId[0].length < 4) return things(param);
  if (newId[0].length > 2) return things2(param);
  return {
    id: testTry.id,
    fullName: `${testTry.firstName} ${testTry.lastName}`,
    species: [animal1.name, animal2.name],
    locations: [animal1.location, animal2.location],
  };
}

function returnAll() {
  const array1 = [];
  allIds.forEach((valor, index, array) => {
    const teste = `${array[index]}`;
    const objeto = {
      id: teste,
    };
    const teste2 = sendId(objeto);
    array1.push(teste2);
  });
  return array1;
}

function whatIf(info) {
  if (Object.keys(info).includes('name') && Object.keys(info).length === 1) {
    return checkName(info);
  }
  if (Object.keys(info).includes('id') && Object.keys(info).length === 1) {
    return sendId(info);
  }
}

function valEmployeesCoverage(param) {
  if (typeof param === 'undefined') return returnAll();
  const funcionario1 = data.employees.find(
    (elemento) => elemento.firstName === param.name || elemento.lastName === param.name,
  );
  const funcionario2 = data.employees.find(
    (element) => element.id === param.id,
  );
  if (funcionario1 === undefined && funcionario2 === undefined) {
    throw new Error('Informações inválidas');
  } try {
    return whatIf(param);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = valEmployeesCoverage;
