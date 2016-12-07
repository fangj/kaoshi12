'use strict';

var express = require('express');
var router = express.Router();
var config = require('../config');
var tree = require('treenote/lib/server/tree-fs/tree')(config);

function remove_answer(node) {
	switch (node._data.type) {
		case "ks1/tf":
			{
				delete node._data.data.ok;
				return node;
			}
		case "ks1/choice":
			{
				var answers = node._data.data.answers || [];
				answers.map(function (answer) {
					delete answer.ok;
				});
				return node;
			}
		case "ks1/qa":
			{
				delete node._data.data.answer;
				return node;
			}
		default:
			{
				return node;
			}
	}
}
/* GET home page. */
router.post('/', function (req, res, next) {
	var qids = req.body;
	// console.log(qids);
	tree.read_nodes(qids).then(function (nodes) {
		// console.log(nodes);
		filtered_questions = nodes.map(function (node) {
			var cloneNode = JSON.parse(JSON.stringify(node));
			return remove_answer(cloneNode);
		});
		res.json(filtered_questions);
	}).catch(function (e) {
		console.error(e);
		res.status(500).end();
	});
});

module.exports = router;