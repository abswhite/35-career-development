'use strict';

const HashTable = require('./lib/hash-table.js');

let hashTable = new HashTable(30);

hashTable.hashKey('hello');
console.log('hashKey prototype', hashTable);
hashTable.set('hello', 'val');
console.log('set prototype', hashTable);
hashTable.get('hello');
console.log('get prototype', hashTable);
hashTable.remove('hello');
console.log('remove prototype', hashTable);
