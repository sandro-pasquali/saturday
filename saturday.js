'use strict';

let saturday = require('wikijs').default().page('saturday');

module.exports = {
	data : () => saturday.then(page => page.content()),
	images : () => saturday.then(page => page.images())
};