export class Storage {
  constructor(defaultState) {
    this.defaultState = defaultState;
    this.state = { ...defaultState };
  }

  setItem(key, value) {
    this.state[key] = value;
  }

  getItem(key) {
    return this.state[key];
  }

  getState() {
    return this.state;
  }

  reset() {
    this.state = { ...this.defaultState };
  }
}
