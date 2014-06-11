// inlets and outlets
inlets = 1;
outlets = 2;
var NUM_FIREPIXELS = 1;
var firePixelValues = new Array(NUM_FIREPIXELS);
var changedValues = new Array(NUM_FIREPIXELS);
var json = "";

function loadbang() {
	post("Initializing inletsToJson");
	for(var i=0; i < NUM_FIREPIXELS; i++) {
		firePixelValues[i] = 0;
	}	
}

function bang() { 
	var anyChanged = false;
	// construct a json message with all changed values as commands
	json = "[";
	for(var i=0; i < firePixelValues.length; i++) {
		if(changedValues[i]) {
			if(json.length > 1) {
				// if there is already at least one commands in the json, add a comma
				json += ",";
			}
			json += "[0,"+ (i+101) +","+firePixelValues[i]+"]";
			changedValues[i] = false;
			anyChanged = true;
		}
	}

	// close up the json array and output
	json += "]";
	if(anyChanged) {
		post(json+"\n");
		outlet(0, json);	
	}
}

function list(address, value) {
	var addressInt = parseInt(address); 	
	// store all values so the entire array can be visualized on outlet 1
	expandFirePixelsIfNeeded(addressInt, value);
	if(firePixelValues[addressInt] != value) {
		firePixelValues[addressInt] = value;
		changedValues[addressInt] = true;
	}
	outlet(1, firePixelValues);
}

// If an address passed in exceeds the number of FirePixels tracked
// expand the array to accommodate the new value, and set any intermediate
// values to zero
function expandFirePixelsIfNeeded(addressInt, value) {
	if(addressInt < NUM_FIREPIXELS) {
		return;
	}
	
	post("Expanding FirePixel array size to: "+(addressInt+1)+"\n");	

	// set any intermediate values between the end of the old
	// array and the new address to 0
	for(var i=firePixelValues.length; i < addressInt-1; i++) {
		firePixelValues.push(0);
		changedBooleans.push(false);
	}
		
	// adjust the global number of FirePixels
	NUM_FIREPIXELS = addressInt+1;	
}