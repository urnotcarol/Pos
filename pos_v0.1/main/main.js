function collect_same_goods(inputs) {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].count = 1;
  }
  var result = [];

  inputs.forEach(function(val) {
    var exist_goods = result.filter(function(item) {
      return item.name === val.name;
    });

    if(exist_goods.length === 0) {
      result.push(val);
    }
    else {
      exist_goods[0].count++;
    }
  });
  return result;
}

function printReceipt(inputs) {
  var added_goods = collect_same_goods(inputs);
  var total_price = 0;
  for (var i = 0; i < added_goods.length; i++) {
    total_price += added_goods[i].price * added_goods[i].count;
  }
  var outputs = "***<没钱赚商店>收据***" + '\n' +
  "名称：" + added_goods[0].name +  "，数量：" + added_goods[0].count + added_goods[0].unit +
  "，单价：" + added_goods[0].price.toFixed(2) + "(元)，小计：" +
  (added_goods[0].price * added_goods[0].count).toFixed(2) + "(元)" + '\n' +
  "名称：" + added_goods[1].name +  "，数量：" + added_goods[1].count + added_goods[1].unit +
  "，单价：" + added_goods[1].price.toFixed(2) + "(元)，小计：" +
  (added_goods[1].price * added_goods[1].count).toFixed(2) + "(元)" + '\n' +
  "名称：" + added_goods[2].name +  "，数量：" + added_goods[2].count + added_goods[2].unit +
  "，单价：" + added_goods[2].price.toFixed(2) + "(元)，小计：" +
  (added_goods[2].price * added_goods[2].count).toFixed(2) + "(元)" + '\n' +
  "----------------------" + '\n' + "总计：" + total_price.toFixed(2) + "(元)" + '\n' +
  "**********************";
  console.log(outputs);
}
