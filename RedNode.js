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


var Command = {
    parse: function (cmd) {
	
	if (typeof cmd !== 'object')
	    throw {message:"Command should be object", name:"ObjectNotFound"};

	var commands = '';
	var command = cmd;

	if (command.key && command.value)
	    commands += '\r\n$'+ command.command.length  + '\r\n' + command.command + '\r\n$' + command.key.length + '\r\n' + 
			command.key + '\r\n$' + command.value.length + '\r\n' + command.value;
	else
	    commands += '\r\n$'+ command.command.length  + '\r\n' + command.command;

		return '*' + commands.length + commands;
    }
};

exports.testInstance = function(test) {
    test.ok(true, new RedNode(127,0,0,1));
    test.done();
}

exports.testCommandParserOutput = function(test) {
    test.throws(Command.parse("aaaa"), "ObjectNotFound");
    test.strictEqual("*1$4INFO\r\n", Command.parse({"command":"INFO"}));
    test.done();
}

exports.testCommandInfo = function(test) {
    test.done();
}
