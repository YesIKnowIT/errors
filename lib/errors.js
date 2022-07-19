"use strict";

const codes = {};

function E(name, base = Error) {
  class _E extends base {
    constructor(message, options=undefined) {
      super(message,options);

      if (options)
        Object.assign(this, options);

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
