"use strict";

module.exports = {
	parse: parse
};
function parse(rdata) {
	// console.log("rdata",rdata);
	switch (rdata[2]) {//前2位是命令头,第三位是命令字
		//接收到刷卡信息
		case 0x01:
			return {
				type: "cr/card", //card-reader/读卡信息
				data: {
					// ip:rdata.slice(1,5).join('.'),
					// reader:LE(rdata.slice(5,7)),
					// seq:LE(rdata.slice(7,9)),
					cardID: "" + BE(rdata.slice(4))
				}
			};
		default:
			return {};
	}
}

/**
 * 小端数据解析
 */
function LE(arr) {
	return arr.reduceRight(function (prev, curr) {
		return prev * 256 + curr;
	});
}

/**
 * 大端数据解析
 */
function BE(arr) {
	return arr.reduce(function (prev, curr) {
		return prev * 256 + curr;
	});
}