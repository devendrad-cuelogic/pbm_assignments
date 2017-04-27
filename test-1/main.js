var enteredColorName  = "";

var colors = [ "ALICEBLUE", "DARKOLIVEGREEN", "INDIGO", "MEDIUMPURPLE", "PURPLE", "ANTIQUEWHITE", "DARKORANGE", "IVORY", "MEDIUMSEAGREEN", "RED", "AQUA", "DARKORCHID", "KHAKI", "MEDIUMSLATEBLUE", "ROSYBROWN", "AQUAMARINE", "DARKRED", "LAVENDER", "MEDIUMSPRINGGREEN", "ROYALBLUE", "AZURE", "DARKSALMON", "LAVENDERBLUSH", "MEDIUMTURQUOISE", "SADDLEBROWN", "BEIGE", "DARKSEAGREEN", "LAWNGREEN", "MEDIUMVIOLETRED", "SALMON", "BISQUE", "DARKSLATEBLUE", "LEMONCHIFFON", "MIDNIGHTBLUE", "SANDYBROWN", "BLACK", "DARKSLATEGRAY", "LIGHTBLUE", "MINTCREAM", "SEAGREEN", "BLANCHEDALMOND", "DARKTURQUOISE", "LIGHTCORAL", "MISTYROSE", "SEASHELL", "BLUE", "DARKVIOLET", "LIGHTCYAN", "MOCCASIN", "SIENNA", "BLUEVIOLET", "DEEPPINK", "LIGHTGOLDENRODYELLOW", "NAVAJOWHITE", "SILVER", "BROWN", "DEEPSKYBLUE", "LIGHTGRAY", "NAVY", "SKYBLUE", "BURLYWOOD", "DIMGRAY", "LIGHTGREEN", "OLDLACE", "SLATEBLUE", "CADETBLUE", "DODGERBLUE", "LIGHTPINK", "OLIVE", "SLATEGRAY", "CHARTREUSE", "FIREBRICK", "LIGHTSALMON", "OLIVEDRAB", "SNOW", "CHOCOLATE", "FLORALWHITE", "LIGHTSEAGREEN", "ORANGE", "SPRINGGREEN", "CORAL", "FORESTGREEN", "LIGHTSKYBLUE", "ORANGERED", "STEELBLUE", "CORNFLOWERBLUE", "FUCHSIA", "LIGHTSLATEGRAY", "ORCHID", "TAN", "CORNSILK", "GAINSBORO", "LIGHTSTEELBLUE", "PALEGOLDENROD", "TEAL", "CRIMSON", "GHOSTWHITE", "LIGHTYELLOW", "PALEGREEN", "THISTLE", "CYAN", "GOLD", "LIME", "PALETURQUOISE", "TOMATO", "DARKBLUE", "GOLDENROD", "LIMEGREEN", "PALEVIOLETRED", "TURQUOISE", "DARKCYAN", "GRAY", "LINEN", "PAPAYAWHIP", "VIOLET", "DARKGOLDENROD", "GREEN", "MAGENTA", "PEACHPUFF", "WHEAT", "DARKGRAY", "GREENYELLOW", "MAROON", "PERU", "WHITE", "DARKGREEN", "HONEYDEW", "MEDIUMAQUAMARINE", "PINK", "WHITESMOKE", "DARKKHAKI", "HOTPINK", "MEDIUMBLUE", "PLUM", "YELLOW", "DARKMAGENTA", "INDIANRED", "MEDIUMORCHID", "POWDERBLUE", "YELLOWGREEN" ];

$(document).keydown(function(e) {
        // if keyCode is within alphanumneric code
        if (e.keyCode >= 65 && e.keyCode <= 90) {
        	enteredColorName +=  String.fromCharCode(e.keyCode);
        	if (checkForColor(enteredColorName)) {
        		changeBackgronudColor(enteredColorName);
        	}
        }
});


function checkForColor(inputColor) {
        var mistmatch = false;
        for (var i = 0 ; i <= colors.length - 1; i++) {
                var mistmatch = colors[i].startsWith(inputColor);
                if (mistmatch) {
                        break;
                }
        }
        if (!mistmatch) {
                enteredColorName = "";
        }
	var result = colors.indexOf(inputColor.toString()) > 0;
	return result;
}

function changeBackgronudColor(color) {
	$(document.body).css("background-color", color.toLowerCase());
	enteredColorName = "";
}


