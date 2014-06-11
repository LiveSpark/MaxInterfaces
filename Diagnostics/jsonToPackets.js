// inlets and outlets
inlets = 1;
outlets = 1;

function commands(value) {
	// expect commands in json format, like:
	// [[0,101,30],[0,102,104],[0,103,30],[0,104,104],[0,105,30],[0,106,104]]
	var commandStrings = value.match(/(\d+,\d+,\d+)+/g);	
	for(var i=0; i < commandStrings.length; i++){
		var packet = commandStrings[i].split(",");
		outlet(0, [parseInt(packet[0]), parseInt(packet[1]),parseInt(packet[2])]);
	}
}