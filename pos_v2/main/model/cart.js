function Cart(collectedBarcodes) {
  this.boughtBarcodes = collectedBarcodes;
  this.boughtItems = [];
  this.totalPrice = 0;
  this.addItems();
  this.getTotalPrice();
  this.getSavedMoney();
}

Cart.prototype.addItems = function(boughtBarcodes) {
  var tempBoughtItems = this.boughtItems;

  this.boughtBarcodes.forEach(function(val) {
    var newItem = new CartItem(val.barcode, val.count);
    tempBoughtItems.push(newItem);
  });
};

Cart.prototype.getTotalPrice = function() {
  var tempTotalPrice= 0;

  this.boughtItems.forEach(function(item) {
    tempTotalPrice += item.subTotal;
  });
  this.totalPrice = tempTotalPrice;
};

Cart.prototype.getSavedMoney = function() {
  var tempSavedMoney = 0;

  this.boughtItems.forEach(function(item) {
    tempSavedMoney += item.savedMoney;
  });
  this.allSavedMoney = tempSavedMoney;
};
