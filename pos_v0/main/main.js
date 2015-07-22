//TODO: Please write code in this file.
function printReceipt(inputs) {
  var total_price = 0;
  for (var i = 0; i < inputs.length; i++) {
    total_price += inputs[i].price * inputs[i].count;
  }
  var outputs = "***<没钱赚商店>收据***" + '\n' +
  "名称：" + inputs[0].name +  "，数量：" + inputs[0].count + inputs[0].unit +
  "，单价：" + inputs[0].price.toFixed(2) + "(元)，小计：" + (inputs[0].price * inputs[0].count).toFixed(2) + "(元)" + '\n' +
  "名称：" + inputs[1].name +  "，数量：" + inputs[1].count + inputs[1].unit +
  "，单价：" + inputs[1].price.toFixed(2) + "(元)，小计：" + (inputs[1].price * inputs[1].count).toFixed(2) + "(元)" + '\n' +
  "名称：" + inputs[2].name +  "，数量：" + inputs[2].count + inputs[2].unit +
  "，单价：" + inputs[2].price.toFixed(2) + "(元)，小计：" + (inputs[2].price * inputs[2].count).toFixed(2) + "(元)" + '\n' +
  "----------------------" + '\n' + "总计：" + total_price.toFixed(2) + "(元)" + '\n' +
  "**********************";
  console.log(outputs);
}
