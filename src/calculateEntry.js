const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const idades = entrants.map((element) => element.age);
  const menorDe18 = idades.filter((element2) => element2 < 18).length;
  const adultos = idades.filter(
    (element2) => element2 >= 18 && element2 < 50,
  ).length;
  const velhos = idades.filter((element2) => element2 >= 50).length;
  const objeto = { child: menorDe18, adult: adultos, senior: velhos };
  return objeto;
}
function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }

  return (
    countEntrants(entrants).child * data.prices.child
    + countEntrants(entrants).adult * data.prices.adult
    + countEntrants(entrants).senior * data.prices.senior
  );
}

module.exports = { calculateEntry, countEntrants };
