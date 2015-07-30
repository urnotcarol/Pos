var Scanner = require('./model/scanner.js');
var Cart = require('./model/cart.js');
var Pos = require('./model/pos.js');


function printReceipt(inputs) {
  var sc1 = new Scanner();
  var car1 = new Cart();
  var pos1 = new Pos();

  for (var i = 0; i < inputs.length; i++) {
    car1.addItem(sc1.scanTag(inputs[i]));
  }

  pos1.print(car1);
}

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

printReceipt(inputs);
