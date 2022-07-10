class Word {
  constructor(word) {
    this.word = word;
  }

  removeVowels() {
    const vowels = "aeiouAEIOU";
    let newWord = "";

    for (let i = 0; i < this.word.length; i++) {
      const char = this.word[i];

      if (!vowels.includes(char)) newWord += char;
    }

    return newWord;
  }

  removeConsonants() {
    const vowels = "aeiouAEIOU";
    let newWord = "";

    for (let i = 0; i < this.word.length; i++) {
      const char = this.word[i];

      if (vowels.includes(char)) newWord += char;
    }

    return newWord;
  }

  pigLatin() {
    const vowels = "aeiouAEIOU";

    if (vowels.includes(this.word[0])) return this.word + "yay";

    for (let i = 0; i < this.word.length; i++) {
      const char = this.word[i];

      if (vowels.includes(char)) {
        const first_half = this.word.slice(0, i);
        const second_half = this.word.slice(i);

        return second_half + first_half + "ay";
      }
    }

    return this.word;
  }
}

module.exports = { Word };
