'use strict';

var spawn = require('child_process').spawn;
var getRawBody = require('raw-body');

// Assumes that debtags is installed and updated regularly

var debtags_process = spawn('debtags', ['search', 'interface::web']);

getRawBody(debtags_process.stdout, function(err, data) {
	if (err) throw err;
	var arr = [];
	data.toString().split('\n').forEach(function(line) {
		if (line === '') return;
		arr.push(line.split(' - ')[0]);
	});
});
