"use strict";

const { E } = require("../lib/errors.js");

E("FirstError");
E("SecondError", TypeError);
