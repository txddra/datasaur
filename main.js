/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = function(species, period, diet, status = false){
  const thisDino = {
    species: species,
    period: period,
    carnivore: diet,
    extinct: status,
  };
  return thisDino;

};

const makeSingular = function(obj){
  const thisDinoObj = {
  species: obj.species,
  period: obj.period,
  carnivore: obj.carnivore,
  extinct: obj.extinct,
};
if(thisDinoObj.species.endsWith('us')){
  thisDinoObj.species = thisDinoObj.species.slice(0,thisDinoObj.species.length-2)
}else {
  thisDinoObj.species = thisDinoObj.species}
return thisDinoObj;

}
const truncateSpecies = function(thisDino){
  
    const thisDinoObj = {
      species: thisDino.species,
      period: thisDino.period,
      carnivore: thisDino.carnivore,
      extinct: thisDino.extinct,
    }
    if (thisDinoObj.species.length > 10 ){
      thisDinoObj.species = thisDinoObj.species.slice(0,7) + "..."
      }else {
    thisDinoObj.species = thisDinoObj.species
      }
    return thisDinoObj
  }

const makeExtinct = function(thisDino){
 
  const thisDinoObj = {
    species: thisDino.species,
    period: thisDino.period,
    carnivore: thisDino.carnivore,
    extinct: thisDino.extinct,
  }
thisDinoObj.extinct = true
  
  return thisDinoObj
  
}  

const isCarnivore = function(thisDino){
  const thisDinoObj = {
    species: thisDino.species,
    period: thisDino.period,
    carnivore: thisDino.carnivore,
    extinct: thisDino.extinct,
  }
  return thisDinoObj.carnivore
}

const isExtinct = function(thisDino){
  const thisDinoObj = {
    species: thisDino.species,
    period: thisDino.period,
    carnivore: thisDino.carnivore,
    extinct: thisDino.extinct,
}
return thisDinoObj.extinct
}

const isTriassic = function(thisDino){
  const thisDinoObj = {
    species: thisDino.species,
    period: thisDino.period,
    carnivore: thisDino.carnivore,
    extinct: thisDino.extinct,
}
return thisDinoObj.period === 'Triassic'
}


const isJurassic = function(thisDino){
  const thisDinoObj = {
    species: thisDino.species,
    period: thisDino.period,
    carnivore: thisDino.carnivore,
    extinct: thisDino.extinct,
}
return thisDino.period === 'Jurassic'
}

const isCretaceous = function(thisDino){
  const thisDinoObj = {
    species: thisDino.species,
    period: thisDino.period,
    carnivore: thisDino.carnivore,
    extinct: thisDino.extinct,
}
return thisDinoObj.period === 'Cretaceous'
}

const isFirstAlphabeticallyBySpecies = function (dino, dino2) {
  if (dino.species > dino2.species) {
    return 1;
  } else if (dino.species < dino2.species) {
    return -1;
  } 
    return 0;
  }

  const extinctIsLast = function (dino, dino2) {
    if (dino.extinct > dino2.extinct) {
    return 1;
  } else if (dino.extinct < dino2.extinct) {
    return -1;
  } 
    return 0;
  }

const carnivoreIsFirst = function(dino, dino2){
  if(dino.carnivore < dino2.carnivore){
    return 1;
  }else if(dino.carnivore > dino2.carnivore){
    return -1;
  }
  return 0;
  }
// Note: the period order is:
// Triassic, THEN
// Jurassic, THEN
// Creataceous

// returns a positive number if the first dino is from the Jurassic and the second is from the Triassic. (2ms)
//     ✕ returns a positive number if the first dino is from the Cretaceous and the second is from the Triassic.
//     ✕ returns a positive number if the first dino is from the Cretaceous and the second is from the Jurassic. (1ms)
//     ✕ returns a negative number if the first dino is from the Jurassic and the second is from the Cretaceous.
//     ✕ returns a negative number if the first dino is from the Triassic and the second is from the Cretaceous. (1ms)
//     ✕ returns a negative number if the first dino is from the Triassic and the second is from the Jurassic.
//     ✕ returns 0 if the diets are the same
  const isInPeriodOrder = function(dino, dino2){
  if(dino.period === 'Jurassic' && dino2.period === 'Triassic'){
return 1;
  }else if(dino.period === 'Cretaceous' && dino2.period === 'Triassic'){
  return 1;
  }else if(dino.period === 'Cretaceous' && dino2.period === 'Jurassic'){
  return 1;
  }else if (dino.period === 'Jurassic' && dino2.period === 'Cretaceous'){
return -1;
  }else if(dino.period === 'Triassic' && dino2.period === 'Jurassic'){
    return -1;

  }else if(dino.period === 'Triassic' && dino2.period === 'Cretaceous'){
    return -1;
  }
  // }else if(dino.carnivore === true && dino2.carnivore === true)
  return 0


  }
  /***********************
 * ITERATION FUNCTIONS *
 **********************/
const singularizeDinos = function(thisDino){
  return thisDino.map(makeSingular)

}

/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
