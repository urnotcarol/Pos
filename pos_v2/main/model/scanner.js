function Scanner() {}

Scanner.prototype.scanTag = function(tag) {
  if (/\-/.test(tag)) {
  var barcodeLen = tag.indexOf('-');
  objectifiedBarcode = {
    barcode: tag.slice(0, barcodeLen),
    count: parseInt(tag.slice(barcodeLen + 1))};
  }
  else {
    objectifiedBarcode = {
      barcode: tag,
      count: 1
    };
  }
  return objectifiedBarcode;
};
