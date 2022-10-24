const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([7, 5, 6]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");