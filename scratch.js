var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;

function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contains ';
  } else {
    midstring = ' does not contain ';
  }
  console.log(str + midstring + re);
}

console.log(testinput());
