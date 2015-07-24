function objectify_barcodes(inputs) {
  var BARCODE_START_POS = 0;
  var BARCODE_END_POS = 10;
  var COUNT_POS = 11;
  return inputs.map(function(val) {
    var number = 1;
    if (/\-/.test(val)) {
      number = parseInt(val.slice(COUNT_POS));
    }
    return {
      barcode: val.slice(BARCODE_START_POS, BARCODE_END_POS),
      count: number
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
      exist_barcodes[0].count += val.count;
    }
  });

  return result;
}

function get_discount_info(added_barcodes, all_promotions) {

  added_barcodes.forEach(function(val) {
    val.discounted_count = val.count;
  });

  added_barcodes.forEach(function(val) {
    all_promotions[0].barcodes.forEach(function(item) {
      if (val.barcode === item) {
        val.discounted_count = val.count - (val.count - (val.count % 3)) / 3;
      }
    });
  });
  return added_barcodes;
}

function match_goods_info(allItems, discounted_barcodes) {
  allItems.forEach(function(item) {
    discounted_barcodes.forEach(function(val) {
      if (val.barcode === item.barcode) {
        val.name = item.name;
        val.unit = item.unit;
        val.price = item.price;
      }
    });
  });
  return discounted_barcodes;
}

function show_final_info(final_goods) {
  var total_price = 0;
  var discounted_total_price = 0;

  final_goods.forEach(function(val) {
    total_price += val.price * val.count;
    discounted_total_price += val.price * val.discounted_count;
  });

  var outputs = "***<没钱赚商店>收据***" + '\n';

  final_goods.forEach(function(val) {
    outputs +=
    "名称：" + val.name + "，" +
    "数量：" + val.count + val.unit + "，" +
    "单价：" + (val.price).toFixed(2) + "(元)，" +
    "小计：" + (val.price * val.discounted_count).toFixed(2) + "(元)" + '\n';
  });

  outputs += "----------------------" + '\n' +
    "挥泪赠送商品：" + '\n';

  final_goods.forEach(function(val) {
    if (val.count !== val.discounted_count) {
      outputs +=
        "名称：" + val.name + "，" +
        "数量：" + (val.count - val.discounted_count) + val.unit + '\n';
    }
  });

  outputs +=
    "----------------------" + '\n' +
    "总计：" + discounted_total_price.toFixed(2) + "(元)" + '\n' +
    "节省：" + (total_price - discounted_total_price).toFixed(2) + "(元)" + '\n' +
    "**********************";
  console.log(outputs);
}

function printReceipt(inputs) {
  var allItems = loadAllItems();
  var all_promotions = loadPromotions();
  var barcodes_as_objects = objectify_barcodes(inputs);
  var added_barcodes = collect_same_barcodes(barcodes_as_objects);
  console.log(added_barcodes);
  var discounted_barcodes = get_discount_info(added_barcodes, all_promotions);
  var final_goods = match_goods_info(allItems, discounted_barcodes);
  show_final_info(final_goods);
}
