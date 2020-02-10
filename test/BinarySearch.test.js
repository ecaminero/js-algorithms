const BinarySearch = require('../src/BinarySearch');
const test = require('unit.js');

const numberElement = 100000000;
const longArray = [...Array(numberElement).keys()]

const shortArray = [1,2,3,4,5,6,7,8,9,10];

// Logs
Log = (...args) => console.log('LOG => ', ...args);

describe('BinarySearch', function () {
  it('Can I search the last number into short list?', function () {
    const elementToSearch = shortArray[shortArray.length-2];
    const item = BinarySearch(shortArray, elementToSearch);
    test
      .number(elementToSearch).is(item);
  });

  it('Can I search the random number into list?', function () {
    const randomNumber = Math.floor(Math.random() * shortArray.length-1) + 1
    const elementToSearch = shortArray[randomNumber];
    const item = BinarySearch(shortArray, elementToSearch);
    test
      .number(elementToSearch).is(item);
  });

  it(`Can I search the last number into list of ${numberElement} elements`, function () {
    const randomNumber = Math.floor(Math.random() * longArray.length-1) + 1
    const elementToSearch = longArray[randomNumber];
    const item = BinarySearch(longArray, elementToSearch);
    test
      .number(elementToSearch).is(item);
  });


});



[...Array(10).keys()]