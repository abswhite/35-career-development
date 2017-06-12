'use strict';

const HashTable = require('../lib/hash-table.js');
const faker = require('faker');
const expect = require('chai').expect;


describe('Hash Table Module', function() {
  before(done => {
    this.fakeKeys = [...Array(100)].map(key => key = faker.hacker.phrase());
    done();
  });

  after(done => {
    delete this.fakeKeys;
    done();
  });

  beforeEach(done => {
    this.hashTable = new HashTable();
    done();
  });

  afterEach(done => {
    this.hashTable = null;
    done();
  });

  describe('Instantiate a new Hash Table', () => {
    it('should instantiate a new empty hash table', done => {
      expect(this.hashTable).to.not.be.null;
      expect(this.hashTable).to.be.instanceOf(Object, HashTable);
      done();
    });

    it('should have a default size of 8192', done => {
      expect(this.hashTable.buckets.length).to.equal(8192);
      done();
    });

    it('should create a new hash table with a specified size of 1024', done => {
      this.hashTable = new HashTable(1024);
      expect(this.hashTable.buckets.length).to.equal(1024);
      done();
    });

    it('should have default bucket property with assigned array', done => {
      expect(this.hashTable.buckets).to.be.instanceOf(Array);
      done();
    });
  });

  describe('Hash a key for the Hash Table', () => {
    it('should hash a key', done => {
      let expectHash = this.hashTable.hashKey('hashkey test');
      let actualHash = 1229;
      expect(expectHash).to.equal(actualHash);
      done();
    });

    it('should always hash a key to less than 8192', done => {
      this.fakeKeys.forEach(key => {
        expect(this.hashTable.hashKey(key)).to.be.lessThan(8192);
      });
      done();
    });
  });

  describe('Set Value to the Hash Table', () => {
    it('should add a new value to the hash table', done => {
      let expectKey = this.hashTable.hashKey('hashkey test');
      this.hashTable.set('hashkey test', 'test value');
      expect(this.hashTable.buckets[expectKey]).to.equal('test value');
      done();
    });
  });

  describe('Get value in Hash Table', () => {
    it('should retrieve a value from the hash tab;e by it\'s key', done => {
      this.hashTable.set('test key', 'test val');
      let expectVal = 'test val';
      let actualVal = this.hashTable.get('test key');

      expect(expectVal).to.equal(actualVal);
      done();
    });
  });

  describe('Remove value from Hash Table', () => {
    it('shoud remove an item from the hash table', done => {
      this.hashTable.set('test key', 'test val');

      let expectKey = this.hashTable.hashKey('test key');
      let expectVal = 'test val';
      let actualVal = this.hashTable.get('test key');

      expect(expectVal).to.equal(actualVal);

      this.hashTable.remove('test key');

      expect(this.hashTable.buckets[expectKey]).to.be.undefined;
      done();
    });
  });
});
