

const city = document.getElementById("city");
displayScreen(city.value);
city.addEventListener("keypress", function(e) {
    if(e.key == 'Enter'){
        displayScreen(city.value)
    }
});
//Nova York -1
//Porto Alegre 0
//Moscow +6
//Las Vegas -4
//roma +5
//paris +5
//Oslo +5
//madrid +5
//lisbon +5
//Cairo +6
//joanesburgo +5



