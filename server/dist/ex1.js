"use strict";

require("babel-polyfill");
var p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000, "one");
});

function u() {
  var a;
  return regeneratorRuntime.async(function u$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(p1);

        case 2:
          a = _context.sent;

          console.log(a);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
}

u();

//babel ex1.js -o ex1-output.js
//node ex1-output.js