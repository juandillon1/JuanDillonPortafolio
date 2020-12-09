export const SCRIPT = "Modernizr.load({ " +
    "test: Modernizr.csstransforms3d && Modernizr.csstransitions, " +
    "yep: ['http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', '../assets/cards/js/jquery.hoverfold.js']," +
    "nope: '../assets/cards/css/fallback.css'," +
    "callback: function(url, result, key) {" +
    "" +
    "    if (url === '../assets/cards/js/jquery.hoverfold.js') {" +
            "$('#grid').hoverfold();" +
        "}" +
    "}" +
"});" +
"Modernizr.load({" +
    "test: Modernizr.csstransforms3d && Modernizr.csstransitions," +
    "yep: ['http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', '../assets/cards/js/jquery.hoverfold.js']," +
    "nope: '../assets/cards/css/fallback.css'," +
    "callback: function(url, result, key) {" +
    "" +
        "if (url === '../assets/cards/js/jquery.hoverfold.js') {" +
            "$('#grid2').hoverfold();" +
        "}" +
    "}" +
"});"