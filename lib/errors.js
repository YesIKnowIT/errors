"use strict";

const codes = {};

function E(name, base = Error) {
  class _E extends base {
    constructor(...params) {
      super(...params);

      this.name = name;
    }

    toString() {
      return `${this.name}: ${this.message}`;
    }
  }

  return (codes[name] = _E);
}

module.exports = {
  E,
  codes,
};
