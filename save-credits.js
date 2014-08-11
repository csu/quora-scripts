var public_key = "",
private_key = "";

window.open("https://data.sparkfun.com/input/" + public_key + "?private_key=" + private_key + "&credits=" + $('.user_credit_row > .side_col > .credit_number').text());