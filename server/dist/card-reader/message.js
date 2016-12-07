"use strict";

module.exports = {
	beep: beep
};

var BEEP = new Buffer([0xaa, 0xff, 0x07, 0x02, 0x01, 0x02, 0x01]);

function beep() {
	return BEEP;
}