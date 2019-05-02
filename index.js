function incrementString (str) {
  let numbers = str.match(/[0-9]/g);
  if (numbers === null) return str + 1;
  numbers = numbers.join('');

  const numLength = numbers.length;

  const posToreplace = str.length-numLength;

  const newNum = parseInt(numbers) + 1;

  str = str.split('');
  str.splice(posToreplace, numLength, newNum);
  const res = str.join('');

  return res;
}

module.exports = incrementString;
