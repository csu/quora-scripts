var public_key = "",
private_key = "";
var credits = $('.user_credit_row > .side_col > .credit_number').text();
if ((typeof credits  !== "undefined") && (credits !== "")) {
    window.open("https://data.sparkfun.com/input/" + public_key + "?private_key=" + private_key + "&credits=" + credits);
}
