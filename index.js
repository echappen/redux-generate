#! /usr/bin/env node

// command: redux-generate request get resetPassword

const generateRequest = require('./src/request.js').generateRequest

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
  if ( index === 2 && val === 'request') {
    generateRequest(array[3], array[4])
  }
});
