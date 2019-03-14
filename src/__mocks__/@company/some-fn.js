const sid = require('shortid');
sid.v4 = jest.fn();
module.exports = sid;
