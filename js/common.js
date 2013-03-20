var GAME_INTERVAL = 0;

var MAIN_MENU;
var VS_MENU;
var RACE_SEL_MENU;
var OPENED_MENU = null;

window.onload = function () {         
    setContent("game_area");

    var labels = document.getElementsByTagName('label');
    for (var i = 0; i < labels.length; i++) {
        disableSelection(labels[i]);
        labels[i].style.cursor = 'pointer';
    };
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        disableSelection(divs[i]);
    };

    START_SCREEN = document.getElementById('start_screen');
    OPENED_MENU = START_SCREEN;
    MAIN_MENU = document.getElementById('main_menu');
    VS_MENU = document.getElementById('vs_menu');
    RACE_SEL_MENU = document.getElementById('race_sel_menu');

    START_SCREEN.style.display = 'block';
    setTimeout(function () {
            document.getElementById('game_area').style.backgroundImage = 'url(images/bg.jpg)';     
            openMainMenu ();  
            document.getElementById('friends_panel').style.display = 'block';
        }, 2000);
    
    loadImgaes([]);
    
    VK.init(function() {
     // API initialization succeeded
    });
}
function openMainMenu (aClick) {
    if (aClick) {
        buttonClick ();
    };           
    if (OPENED_MENU != null) {
        $(OPENED_MENU).fadeOut('slow', 'swing', function () {
             $(MAIN_MENU).fadeIn('slow');
            OPENED_MENU = MAIN_MENU;   
        });
    } else {
        $(MAIN_MENU).fadeIn('slow');
        OPENED_MENU = MAIN_MENU;
    };
};

function buttonClick () {
    document.getElementById('button_sound').play ();
};

function switchMenu (MENU) {   
    if (MENU != null) {
        if (OPENED_MENU != null) {
            $(OPENED_MENU).slideUp('slow');
        };
        $(MENU).slideDown('slow');
        OPENED_MENU = MENU;
        buttonClick ();
    };
};

function render () {

};

var COMMON_OBJECTS = [];
var BACKGROUNDS = [];