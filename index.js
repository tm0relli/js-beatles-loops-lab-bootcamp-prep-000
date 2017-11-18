function theBeatlesPlay(musicianArray, instrumentArray) {
  var newArray = [];
  for (var m = 0; m < musicianArray.length; m++) {
    newArray.push(`${musicianArray[m]} plays ${instrumentArray[m]}`);
  }
  return newArray;
}


function johnLennonFacts(arrayOfFacts) {
  var newArray = [], i = 0;
  while (i < arrayOfFacts.length) {
    newArray.push(arrayOfFacts[i] += '!!!');
    i++;
  }
  return newArray;
}
