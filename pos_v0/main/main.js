//TODO: Please write code in this file.
function printReceipt(inputs) {
  var total_price = 0;

  inputs.forEach(function(val) {
    total_price += val.price * val.count;
  });

  var outputs = "***<没钱赚商店>收据***" + '\n';

  inputs.forEach(function(val) {
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
