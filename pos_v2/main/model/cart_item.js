function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
  this.discountedCount = count;
  this.attachPromotionInfo();
  this.attachpProps();
}

CartItem.prototype.attachPromotionInfo = function() {
  thisBarcode = this.barcode;
  thisCount = this.count;

  promotionInfo[0].barcodes.forEach(function(val) {
    if (val === thisBarcode) {
      thisDiscountedcount = thisCount - (thisCount - (thisCount % 3)) / 3;
    }
  });

  this.discountedCount = thisDiscountedcount;
};

CartItem.prototype.attachpProps = function() {

  allItems.forEach(function(val) {
    if (val.barcode === thisBarcode) {
      thisName = val.name;
      thisPrice = val.price;
    }
  });

  this.name = thisName;
  this.price = thisPrice;
  this.subTotal = this.price * this.discountedCount;
  this.savedMoney = this.price * (this.count - this.discountedCount);
};
