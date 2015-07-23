function objectify_barcodes(inputs) {
  return inputs.map(function(val) {
    return {
      barcode: val,
      count: 1
    };
  });
}

function collect_same_barcodes(inputs) {
  var result = [];
  inputs.forEach(function(val) {

    var exist_barcodes = result.filter(function(item) {
      return item.barcode === val.barcode;
    });

    if (exist_barcodes.length === 0) {
      result.push(val);
    }
    else {
      exist_barcodes[0].count++;
    }
  });
  
  return result;
}

function match_goods_info(allItems, added_barcodes) {
  allItems.forEach(function(item) {
    added_barcodes.forEach(function(val) {
      if (val.barcode === item.barcode) {
        val.name = item.name;
        val.unit = item.unit;
        val.price = item.price;
      }
    });
  });
  return added_barcodes;
}

function get_total_price(inputs) {
  var total_price = 0;

  inputs.forEach(function(val) {
    total_price += val.price * val.count;
  });

  return total_price;
}

function show_final_bill(added_goods, total_price) {
  var outputs = "***<没钱赚商店>收据***" + '\n';

  added_goods.forEach(function(val) {
    outputs +=
    "名称：" + val.name + "，" +
    "数量：" + val.count + val.unit + "，" +
    "单价：" + val.price.toFixed(2) + "(元)，" +
    "小计：" + (val.price * val.count).toFixed(2) + "(元)" + '\n';
  });

  outputs +=  "----------------------" + '\n';
  outputs +=  "总计：" + total_price.toFixed(2) + "(元)" + '\n';
  outputs +=  "**********************";
  console.log(outputs);
}

function printReceipt(inputs) {
  var allItems = loadAllItems();
  var barcodes_as_objects = objectify_barcodes(inputs);
  var added_barcodes = collect_same_barcodes(barcodes_as_objects);
  var added_goods = match_goods_info(allItems, added_barcodes);
  var total_price = get_total_price(added_goods);
  show_final_bill(added_goods, total_price);
}
