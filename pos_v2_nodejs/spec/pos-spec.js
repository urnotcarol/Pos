var Scanner = require('../main/model/scanner.js');
var Cart = require('../main/model/cart.js');
var Pos = require('../main/model/pos.js');

dateDigitToString = function(num) {
  return num < 10 ? '0' + num : num;
};

var currentDate = new Date(),
  year = dateDigitToString(currentDate.getFullYear()),
  month = dateDigitToString(currentDate.getMonth() + 1),
  date = dateDigitToString(currentDate.getDate()),
  hour = dateDigitToString(currentDate.getHours()),
  minute = dateDigitToString(currentDate.getMinutes()),
  second = dateDigitToString(currentDate.getSeconds()),
  formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

describe("Pos", function() {
  describe("print", function() {
    it("should print correct information", function() {
      spyOn(console, 'log');

      var sc1 = new Scanner();
      var car1 = new Cart();
      var pos1 = new Pos();

      var inputs = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',
        'ITEM000005'
      ];

      for (var i = 0; i < inputs.length; i++) {
        car1.addItem(sc1.scanTag(inputs[i]));
      }
      pos1.print(car1);

      var expectText =
        '***<没钱赚商店>收据***\n' +
        '打印时间：' + formattedDateString + '\n' +
        '----------------------\n' +
        '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
        '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
        '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        '名称：雪碧，数量：1瓶\n' +
        '名称：方便面，数量：1袋\n' +
        '----------------------\n' +
        '总计：51.00(元)\n' +
        '节省：7.50(元)\n' +
        '**********************';

      expect(console.log).toHaveBeenCalledWith(expectText);
    });
  });
});






























/****<没钱赚商店>收据***
打印时间：2015年07月31日 14:58:48
----------------------
名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)
名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)
名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)
----------------------
挥泪赠送商品：
名称：雪碧，数量：1瓶
名称：方便面，数量：1袋
----------------------
总计：51.00(元)
节省：7.50(元)
**********************
*/
