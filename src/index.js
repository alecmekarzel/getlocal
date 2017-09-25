#!/usr/bin/env node

// NOTE: this script will be used when the user imports/requires

const os = require('os')

module.exports = function getlocal() {
	var interfaces = os.networkInterfaces()
	var result

	Object.keys(interfaces).forEach(function(ifname) {
		interfaces[ifname].forEach(function(iface) {
			if ("IPv4" === iface.family && iface.internal === false) result = iface.address
		})
	})

	return result
}
