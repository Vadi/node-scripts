var net = require('net')
var stream = require ('stream')

function RedNode(host, port) {
    this.host = host;
    this.port = port;
}

RedNode.prototype.connect = function() {
    if (this.host && this.host === '')
        throw Error('Host cannot be empty');
    if (this.port && this.port === 0)
        throw Error('Port cannot be zero');

}
