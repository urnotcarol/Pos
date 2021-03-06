var CartItem = require('../main/model/cart_item.js');

describe("CartItem", function() {
  var theCartItem = new CartItem("ITEM000005", 6);

  describe("attachOtherProps", function() {
    it("should return correct props", function(){
      expect(theCartItem.barcode).toEqual('ITEM000005');
      expect(theCartItem.count).toEqual(6);
      expect(theCartItem.name).toEqual('方便面');
      expect(theCartItem.price).toEqual(4.5);
      expect(theCartItem.unit).toEqual('袋');
    });
  });

  describe("getSubTotal", function() {
    it("should return correct subtotal of an item", function() {
      var result = theCartItem.getSubTotal();
      expect(result).toEqual(18);
    });
  });

  describe("getSavedMoney", function() {
    it("should return correct saved money of an item", function() {
      var result = theCartItem.getSubSavedMoney();
      expect(result).toEqual(9);
    });
  });
});
