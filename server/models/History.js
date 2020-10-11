module.exports = class History {
  constructor(item) {
    this.langs = {
      from: item.langs.from,
      to: item.langs.to,
    };
    this.phrase = item.phrase;
    this.date = Date.now();
  }
}