'use strict';

let saturday = require('../../saturday.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return saturday.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return saturday.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


