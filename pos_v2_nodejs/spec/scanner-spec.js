var Scanner = require('../main/model/scanner.js');

describe("Scanner", function() {
  describe("scanTag", function() {
    it("should scan a tag and return a barcode as an object", function() {
      var theScanner = new Scanner();
      var result = theScanner.scanTag('ITEM000003-2');
      expect(result).toEqual({
        barcode: 'ITEM000003',
        count: 2
      });
    });
  });
});
