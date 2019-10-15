
// to store month name
var month = ["Jan" , "Feb", "March", "April", "May", "June", "July" , "Aug", "Sep", "Oct", "Nov", "Dec"];
// to store day name
var day =["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

// to set time 
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var myDate = day[today.getDay()] + " Day , " + month[today.getMonth()] + " " + today.getDate() + " , " + today.getFullYear();
    document.getElementById('myTime').innerHTML ="<h3 style='margin:0'>" + h+"<span class='timeBlink'>:</span>"+m+"<span class='timeBlink'>:</span>"+s+"</h3><br><h6 style='margin:0'>"+myDate+"</h6>";
    var t = setTimeout(function(){startTime()},500);
} // end function checkTime()

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
} // end method checkTime()



