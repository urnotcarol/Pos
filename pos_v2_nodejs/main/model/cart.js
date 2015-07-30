var CartItem = require('./cart_item.js');

function Cart() {
  this.boughtItems = [];
}

Cart.prototype.addItem = function(objectifiedBarcode) {
  var existBarcode = this.boughtItems.filter(function(item) {
    return item.barcode === objectifiedBarcode.barcode;
  });

  if (existBarcode.length === 0) {
    this.boughtItems.push(new CartItem(objectifiedBarcode.barcode, objectifiedBarcode.count));
  }
  else {
    this.boughtItems.forEach(function(item) {
      if (item.barcode === objectifiedBarcode.barcode) {
        item.count += objectifiedBarcode.count;
      }
    });
  }
};

Cart.prototype.getTotalPrice = function() {
  var totalPrice = 0;
  this.boughtItems.forEach(function(item) {
    totalPrice += item.getSubTotal();
  });
  return totalPrice;
};

Cart.prototype.getSavedMoney = function() {
  var savedMoney = 0;
  this.boughtItems.forEach(function(item) {
    savedMoney += item.getSubSavedMoney();
  });
  return savedMoney;
};

module.exports = Cart;
