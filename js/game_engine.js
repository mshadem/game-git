gameInstance = null;

GameEngine = function (aContext, aWidth, aHeight) {
    ctx = aContext;
    map = new Map (aContext, aWidth, aHeight);
    this.draw = function () {
        map.draw(ctx);
    };
    this.start = function () {
        setInterval(function () { gameInstance.draw() }, 1000 / FPS);
    };
    gameInstance = this;
};