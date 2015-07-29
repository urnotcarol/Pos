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

function printReceipt(inputs) {
  var sc1 = new Scanner();
  var car1 = new Cart();
  var pos1 = new Pos();

  for (var i = 0; i < inputs.length; i++) {
    car1.addItem(sc1.scanTag(inputs[i]));
  }

  pos1.print(car1);
}
