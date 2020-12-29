var secret = "007";
function getSecret () {
    var secret = "008";
    function getValue () {
        return secret;
    }
    return getValue ();
}
var result = getSecret ();
console.log (result);