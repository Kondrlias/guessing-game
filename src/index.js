class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.current = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.current = Math.round((min + max) / 2);
  }

  guess() {
    return this.current;
  }

  lower() {
    this.max = this.current;
    this.current = Math.round((this.min + this.max) / 2);
  }

  greater() {
    this.min = this.current;
    this.current = Math.round((this.min + this.max) / 2);
  }
}
module.exports = GuessingGame;
