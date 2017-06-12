![cf](https://i.imgur.com/7v5ASc8.png) DSA 06: Hash Tables and Doubly Linked Lists
======

# Binary Search Tree
This repository contains the static and prototype methods of a Hash Table comprised of an array of Double Linked Lists. The objective of this structure is to architect a means by which handle collisions at a given Hash Table index.

Prototypes:
* `.hash(key)` converts a string into a number that will index your buckets
* `.set(key, value)` stores a value in the hashed keys bucket
* `.get(key)` looks in the hashed keys bucket and returns the value of the node containing the key, or * null if not found
* `.remove(key)` removes the dll node node containing the key

## Install and Use Data Structure
In terminal tab, enter:
1. `npm install` to install application resources.
2. `node index.js` to run for bst object, minimum, and maximum.

## Run Test
In terminal tab, enter:
1. `npm install` to install application resources.
2. `npm run test` to run tests using jasmine.
