// bufferArray.js
//
// Kevin Trowbridge

// MaxMSP Javascript docs: http://www.cycling74.com/docs/max5/vignettes/js/javascriptinmax.html
// This page -- is the source of most of this code: http://cycling74.com/docs/max5/tutorials/max-tut/javascriptchapter02.html

// inlets and outlets
inlets = 1;

// global variables
var numFlames = 0;

// Maxobj variables for scripting
var input;
var output;

//var theScales = new Array(128);
var thePacks = new Array(128);
var route;
var receiveBufferSampleRate;
var receivemasterOnOff;
var metro;

// methods start here

// sliders -- generates and binds the sliders in the max patch
function sliders(val)
{

    if(arguments.length) // bail if no arguments
    {
        // parse arguments
        a = arguments[0];

        // safety check for number of sliders
        if(a<0) a = 0; // too few sliders, set to 0
        if(a>128) a = 128; // too many sliders, set to 128

        // delete the old generated elements based on their position in the patch ...
        // all generated objects are between y=350 and y=500 ...
        e = this.patcher.firstobject;
        do {
          nextObj = e.nextobject;
          if (e.rect[1] > 350 && e.rect[1] < 500){
            this.patcher.remove(e);
          }
          e = nextObj;
        } while ( e != null );

        // ...in with the new
        numFlames = a; // update our global number of sliders to the new value
        if(numFlames) {

          var routeArray = new Array();
          var s = new String();
          for(i=0; i<numFlames; i++)
          {
            s = (i + 101);
            routeArray[i] = s;
          }

          input = this.patcher.newdefault(175, 356, "r", "bufferInput");
          route = this.patcher.newdefault(175, 380, "route", routeArray);
          this.patcher.connect(input, 0, route, 0);

          receivemasterOnOff = this.patcher.newdefault(61,380,"r", "masterEnable"); // +fh

          receiveBufferSampleRate = this.patcher.newdefault(61, 415, "r", "bufferSampleRate");
          metro = this.patcher.newdefault(61, 445, "metro", 25);

          this.patcher.connect(receivemasterOnOff, 0, metro, 0);  //+fh

          this.patcher.connect(receiveBufferSampleRate, 0, metro, 1);
          output = this.patcher.newdefault(175, 495, "send", "bufferOutput");
        }

        for(k=0;k<a;k++)
        {
            thePacks[k] = this.patcher.newdefault(175+(k*100), 470, "pack", k + 101, "i");
            this.patcher.connect(route, k, thePacks[k], 1);
            this.patcher.connect(metro, 0, thePacks[k], 0);
            this.patcher.connect(thePacks[k], 0, output, 0);
        }

        metro.message("bang");
    }

    else // complain about arguments
    {
        post("sliders message needs arguments");
        post();
    }
}