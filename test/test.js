"use strict";

const { assert } = require("chai");
const error = require("../index.js");

describe("errors", () => {

  it("should create Error instances", () => {
    const name = "HttpStatusError";
    const E = error.E(name);
    const instance = new E();

    assert.instanceOf(instance, Error);
    assert.equal(instance.name, name);
    console.error(instance);
  });

  it("should create Error subclass instances", () => {
    const name = "OutObBoundsError";
    const E = error.E(name, RangeError);
    const instance = new E();

    assert.instanceOf(instance, Error);
    assert.instanceOf(instance, RangeError);
    assert.instanceOf(instance, E);
    assert.equal(instance.name, name);
  });

  it("should load errors in the registry", () => {
    require("./samples.js");
    const {
      FirstError,
      SecondError,
    } = error.codes;
  });

});
