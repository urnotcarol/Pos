var loadAllItems = require('./fn_load_all_items.js');
var loadPromotions = require('./fn_load_promotions.js');

var allItems = loadAllItems();
var promotionInfo = loadPromotions();

function discount(barcode, count) {
  promotionInfo[0].barcodes.forEach(function(val) {
    if (val === barcode) {
      discountedCount = count - (count - (count % 3)) / 3;
    }
  });
  return discountedCount;
}

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
  this.discountedCount = this.count;
  this.discountedCount = discount(this.barcode, this.count);
  return this.price * this.discountedCount;
};

CartItem.prototype.getSubSavedMoney = function() {
  this.discountedCount = this.count;
  this.discountedCount = discount(this.barcode, this.count);
  return this.price * (this.count - this.discountedCount);
};

module.exports = CartItem;
