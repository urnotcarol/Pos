var allItems = loadAllItems();
var promotionInfo = loadPromotions();

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
  this.attachOtherProps();
}

CartItem.prototype.attachOtherProps = function() {
  var that = this;
  allItems.forEach(function(val) {
    if (val.barcode === that.barcode) {
      that.name = val.name;
      that.price = val.price;
      that.unit = val.unit;
    }
  });
};

CartItem.prototype.getSubTotal = function() {
  var that = this;
  that.discountedCount = this.count;
  promotionInfo[0].barcodes.forEach(function(val) {
    if (val === that.barcode) {
      that.discountedCount = that.count - (that.count - (that.count % 3)) / 3;
    }
  });
  return this.price * this.discountedCount;
};

CartItem.prototype.getSubSavedMoney = function() {
  return this.price * (this.count - this.discountedCount);
};
