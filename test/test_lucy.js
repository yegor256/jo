var a = require('assert');
var lucy = require('../src/lucy');

describe('lucy', function() {
  it('mocks the console for logging', function() {
    var fake = {
      printed: "",
      log: function (text) {
        this.printed = text;
      }
    };
    lucy.hello("Louise", "fr", fake);
    a.strictEqual("Bon jour, Louise", fake.printed);
  });
});
