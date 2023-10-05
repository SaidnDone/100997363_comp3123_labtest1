function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject("Input is not an array");
        return;
      }
  
      const filteredAndLowercasedWords = mixedArray
        .filter(item => typeof item === 'string')
        .map(word => word.toLowerCase());
  
      if (filteredAndLowercasedWords.length === 0) {
        reject("No strings found in the array");
      } else {
        resolve(filteredAndLowercasedWords);
      }
    });
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.error(error);
    });
  