
// myParseFloat(str , radix)
// to return converted floating point decimal from others .
// alternative to parseInt(str , radix)
function myParseFloat(str, radix) {
    var parts = str.split(".");
    if ( parts.length > 1 ) {
        return parseInt(parts[0], radix) + parseInt(parts[1], radix) / Math.pow(radix, parts[1].length);
    }
    return parseInt(parts[0], radix);
} // end myParseFloat()

// base conversion dec hex octal binary
function numberSys(base){
    
    // retrieve value
    var getD = document.getElementById("d").value;
    var getH = document.getElementById("h").value;
    var getO = document.getElementById("o").value;
    var getB = document.getElementById("b").value;
    
    if (base == "D") {
        document.getElementById("h").value=(+getD).toString(16).toUpperCase();
        document.getElementById("o").value = (+getD).toString(8);
        document.getElementById("b").value = (+getD).toString(2);
    } else if(base == "H")  { 
        var intDfH = myParseFloat(getH, 16);
        document.getElementById("d").value = intDfH;
        document.getElementById("o").value = intDfH.toString(8);
        document.getElementById("b").value = intDfH.toString(2);
    } else if(base == "O")  { 
        var intDfO = myParseFloat(getO, 8);
        document.getElementById("d").value = intDfO;
        document.getElementById("h").value = intDfO.toString(16).toUpperCase();
        document.getElementById("b").value = intDfO.toString(2);
    } else if(base == "B")  { 
        var intDfB = myParseFloat(getB, 2);
        document.getElementById("d").value = intDfB;
        document.getElementById("h").value = intDfB.toString(16).toUpperCase();
        document.getElementById("o").value = intDfB.toString(8);
    }
    
} // end numberSys()



