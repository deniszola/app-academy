const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word1;
  let word2;
  let word3;
  let word4;
  let word5;

  const value1 = "arguments";
  const value2 = "constructor";
  const value3 = "crwth";
  const value4 = "euouae";
  const value5 = "";

  before(() => {
    word1 = new Word(value1);
    word2 = new Word(value2);
    word3 = new Word(value3);
    word4 = new Word(value4);
    word5 = new Word(value5);
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const expected1 = "word";

      expect(word1).to.have.property(expected1);
    });

    it('should set the "word" property when a new word is created', function () {
      const actual1 = word1.word;
      const expected1 = value1;

      expect(actual1).to.eql(expected1);
    });
  });

  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {
      const actual1 = word1.removeVowels();
      const actual2 = word2.removeVowels();
      const actual3 = word3.removeVowels();
      const actual4 = word4.removeVowels();
      const actual5 = word5.removeVowels();

      const expected1 = "rgmnts";
      const expected2 = "cnstrctr";
      const expected3 = "crwth";
      const expected4 = "";
      const expected5 = "";

      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
      expect(actual3).to.eql(expected3);
      expect(actual4).to.eql(expected4);
      expect(actual5).to.eql(expected5);
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const actual1 = word1.removeConsonants();
      const actual2 = word2.removeConsonants();
      const actual3 = word3.removeConsonants();
      const actual4 = word4.removeConsonants();
      const actual5 = word5.removeConsonants();

      const expected1 = "aue";
      const expected2 = "ouo";
      const expected3 = "";
      const expected4 = "euouae";
      const expected5 = "";

      expect(actual1).to.equal(expected1);
      expect(actual2).to.equal(expected2);
      expect(actual3).to.equal(expected3);
      expect(actual4).to.equal(expected4);
      expect(actual5).to.equal(expected5);
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const actual1 = word1.pigLatin();
      const actual2 = word2.pigLatin();
      const actual3 = word3.pigLatin();
      const actual4 = word4.pigLatin();
      const actual5 = word5.pigLatin();

      const expected1 = "argumentsyay";
      const expected2 = "onstructorcay";
      const expected3 = "crwth";
      const expected4 = "euouaeyay";
      const expected5 = "";

      expect(actual1).to.equal(expected1);
      expect(actual2).to.equal(expected2);
      expect(actual3).to.equal(expected3);
      expect(actual4).to.equal(expected4);
      expect(actual5).to.equal(expected5);
    });
  });
});
