{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 6,
			"minor" : 1,
			"revision" : 0,
			"architecture" : "x86"
		}
,
		"rect" : [ 0.0, 44.0, 946.0, 494.0 ],
		"bglocked" : 0,
		"openinpresentation" : 1,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 0,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 0,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"boxanimatetime" : 200,
		"imprint" : 0,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"boxes" : [ 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-13",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 684.0, 513.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 684.0, 547.0, 116.0, 20.0 ],
					"text" : "send numFirePixels"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "bpatcher",
					"name" : "Chainer.maxpat",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 479.0, 218.0, 348.0, 269.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 494.0, 200.5, 348.0, 269.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "bpatcher",
					"name" : "Flasher.maxpat",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 32.0, 218.0, 352.0, 269.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 75.0, 200.5, 349.0, 265.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "bpatcher",
					"name" : "HeaderControls.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 23.0, 23.0, 856.0, 178.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 28.0, 14.0, 856.0, 178.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-13", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "HeaderControls.maxpat",
				"bootpath" : "/Users/brettlevine/Documents/LiveSpark/Dev/MaxInterfaces/FirePixelSimpleControls",
				"patcherrelativepath" : "",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "Flasher.maxpat",
				"bootpath" : "/Users/brettlevine/Documents/LiveSpark/Dev/MaxInterfaces/FirePixelSimpleControls",
				"patcherrelativepath" : "",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "FirePixel.maxpat",
				"bootpath" : "/Users/brettlevine/Documents/LiveSpark/Dev/MaxInterfaces/FirePixelSimpleControls",
				"patcherrelativepath" : "",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bufferArray.js",
				"bootpath" : "/Users/brettlevine/Documents/LiveSpark/Dev/MaxInterfaces/FirePixelSimpleControls",
				"patcherrelativepath" : "",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "Addresser.maxpat",
				"bootpath" : "/Users/brettlevine/Documents/LiveSpark/Dev/MaxInterfaces/FirePixelSimpleControls",
				"patcherrelativepath" : "",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "Chainer.maxpat",
				"bootpath" : "/Users/brettlevine/Documents/LiveSpark/Dev/MaxInterfaces/FirePixelSimpleControls",
				"patcherrelativepath" : "",
				"type" : "JSON",
				"implicit" : 1
			}
 ]
	}

}
