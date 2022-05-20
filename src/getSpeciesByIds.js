const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return ids;
  }
  return species.filter((element) => ids.some((id) => id === element.id));
}
module.exports = getSpeciesByIds;
