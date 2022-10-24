# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bstolb/lotide`

**Require it:**

`const _ = require('@bstolb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: a function that asserts if two arrays are equal
* `assertEqual`: a function that asserts is two values are equal
* `eqArrays`: a function that compares two arrays
* `head`: a function that returns the first element of an array
* `tail`: a function that returns every element aside from the first of an array
* `middle`: a function that returns the middle element(elements if array is even) of an array