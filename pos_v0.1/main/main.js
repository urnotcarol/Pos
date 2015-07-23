function add_count_as_key(inputs) {

  inputs.forEach(function(val) {
    val.count = 1;
  });

  return inputs;
}

function collect_same_goods(inputs) {
  inputs = add_count_as_key(inputs);
  var added_goods = [];

  inputs.forEach(function(val) {
    var exist_goods = added_goods.filter(function(item) {
      return item.name === val.name;
    });

    if(exist_goods.length === 0) {
      added_goods.push(val);
    }
    else {
      exist_goods[0].count++;
    }
  });

  return added_goods;
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
  var added_goods = collect_same_goods(inputs);
  var total_price = get_total_price(added_goods);
  show_final_bill(added_goods, total_price);
}
