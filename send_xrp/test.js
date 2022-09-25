const xrpl = require('xrpl');

async function main() {
	const morgan = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
	
	await morgan.connect();
	const response = await morgan.request({
		"command": "account_info",
		"account": "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe",
		"ledger_index": "validated"
	});
	
	console.log(response);
	
	morgan.disconnect();

}
main();
