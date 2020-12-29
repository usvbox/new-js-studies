window.onload = function () {
    var count = 0;
    var message = "You clicked me ";
    document.getElementById("clickme").onclick = function () {
        count++;
        document.getElementById ("message").innerHTML = message + count + " times!";
    };
};
