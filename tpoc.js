'use strict';

const asyncify = require('asyncawait/async');
const awaitify = require('asyncawait/await');

let timeout = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};


let outToTerminal = asyncify(function() {
  for (let c = 0; c < 20; c++) {
    console.log(c + ' mins: writing to terminal');
    awaitify(timeout(60000));
  }
});

outToTerminal();
