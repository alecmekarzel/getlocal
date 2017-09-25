const { assert } = require('chai')
const getlocal = require('../src/index')

describe('getlocal()', function() {
	const localip = getlocal()

	it('is a string', function() {
		var expression = typeof localip === 'string'

		assert(expression, 'result is not a string')
	})

	it('is an IPv4 address', function() {
		var regex = /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/ig
		var expression = regex.test(localip)

		assert(expression, 'result is not an IPv4 address')
	})

})
