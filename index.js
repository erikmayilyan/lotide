const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map = require('./map');
const without = require('./without');
const swapper = require('./swapper');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  map: map,
  without: without,
  swapper: swapper,
  findKey: findKey,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual
};