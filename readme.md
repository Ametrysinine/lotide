# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Ametrysinine/lotide`

**Require it:**

`const _ = require('@Ametrysinine/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* ``: description
* ``: description
* ``: description

* `assertArraysEqual`: Prints console message stating if arrays are equal
* `assertEqual`: Prints console message stating if values are equal
* `assertObjectsEqual`: Prints console message stating if objects are equal
* `countLetters`: Counts number of each letter in a string
* `countOnly`: Counts number of specified items in an array
* `eqArrays`: Returns true if arrays are equal, false if not
* `eqObjects`: Returns true if objects are equal, false if not
* `findKey`: Returns first key in object where callback fn() is true
* `findKeyByValue`: Returns first key in object with property matching value
* `flatten`: Turns one-deep nested array into not-nested array
* `head`: Returns first value in array
* `letterPositions`: Returns positions of letters in a string
* `map`: Creates new array based on callback function
* `middle`: Returns array containing middle 1 (for odd-lengthed arrays) or 2 (for even-lengthed arrays) values in an array
* `tail`: Returns array, without its first value
* `takeUntil`: Returns slice of an array, starting at the beginning and ending before specified item
* `without`: Returns input array, without items specified in blocklist