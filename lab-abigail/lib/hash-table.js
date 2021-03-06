'use strict'

const DBL = require('./dbl-linked-list.js');

const HashTable = module.exports = function(size=8192) {
  this.size = size
  this.buckets = [...Array(this.size)]
  for (let i = 0; i < this.buckets.length; i++) {
    this.buckets[i] = new DBL();
  }
}

HashTable.prototype.hashKey = function(key) {
  if(!key) throw new Error('key required for hash to function... derp')
  let hash = key.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0) % this.size
  // NOTE This is where you would need to handle any key collissions, and implement a linked list

  return hash
}

HashTable.prototype.set = function(key, dbl) {
  this.buckets[this.hashKey(key)] = dbl
}

HashTable.prototype.get = function(key) {
  return this.buckets[this.hashKey(key)]
}

HashTable.prototype.remove = function(key) {
  let address = this.hashKey(key)
  this.buckets[address] ? delete this.buckets[address] : new Error('invalid key')
}
