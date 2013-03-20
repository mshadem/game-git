function getWindowHeight() {
    var windowHeight = 0;
    if (typeof(window.innerHeight) == 'number') {
        windowHeight = window.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body && document.body.clientHeight) {
                windowHeight = document.body.clientHeight;
            };
        };
    };
    return windowHeight;
};

function setContent(aName) {
    var contentElement = document.getElementById(aName);
    contentElement.style.height = GAME_HEIGHT + 'px';
    contentElement.style.width = GAME_WIDTH + 'px';
    contentElement.style.margin = 'auto';

    if (document.getElementById) {
        var windowHeight = getWindowHeight();
        if (windowHeight > 0) {
            var contentHeight = contentElement.offsetHeight;
            if (windowHeight - contentHeight > 0) {
                contentElement.style.position = 'relative';
                contentElement.style.top = ((windowHeight / 2) - (contentHeight / 2)) + 'px';
            } else {
                contentElement.style.position = 'static';
            };
        };
    };
};

function disableSelection(element) {
    if (typeof element.onselectstart != 'undefined') {
        element.onselectstart = function() { return false; };
    } else if (typeof element.style.MozUserSelect != 'undefined') {
        element.style.MozUserSelect = 'none';
    } else {
        element.onmousedown = function() { return false; };
    }
}
