const { species } = require('../data/zoo_data');

function returnDay()






function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined){
    const todasDatas = species.map((element) => element.availability)
    return todasDatas
  }
  return species.find((element) => element.name === scheduleTarget).availability // animal retorna dia
}


console.log(getSchedule());

module.exports = getSchedule;
