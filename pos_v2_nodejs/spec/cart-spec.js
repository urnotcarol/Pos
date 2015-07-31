var Cart = require('../main/model/cart.js');

describe("Cart", function() {

  var theCart = new Cart();
  theCart.addItem({
    barcode: "ITEM000001",
    count: 5
    });

  describe("addItem", function() {
    it("if the item doesn't exist in cart, create a new one", function() {
      theCart.addItem({
        barcode: "ITEM000002",
        count: 4
        });

      var result = theCart.boughtItems[1];
      expect(result.barcode).toEqual('ITEM000002');
      expect(result.count).toEqual(4);
    });

    it("if the item has existed in cart, change it's count", function() {
      theCart.addItem({
        barcode: "ITEM000001",
        count: 3
        });

      var result = theCart.boughtItems;
      expect(result[0].barcode).toEqual('ITEM000001');
      expect(result[0].count).toEqual(8);
      expect(result[1].barcode).toEqual('ITEM000002');
      expect(result[1].count).toEqual(4);
    });
  });

  describe("getTotalPrice", function() {
    it("should return correct total price", function() {
      expect(theCart.getTotalPrice()).toEqual(40);
    });
  });

  describe("getSavedMoney", function() {
    it("shoule return correcd saved money", function() {
      expect(theCart.getSavedMoney()).toEqual(6);
    });
  });
});
