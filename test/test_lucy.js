const a = require('assert');
const lucy = require('../src/lucy');

describe('lucy', function() {
  it('mocks the console for logging', function() {
    const fake = {
      printed: '',
      log: function(text) {
        this.printed = text;
      },
    };
    lucy.hello('Louise', 'fr', fake);
    a.strictEqual('Bon jour, Louise', fake.printed);
  });
});
