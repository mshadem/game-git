Map = function (aBackground, aWidth, aHeight) {
//private
    var width = aWidth;
    var height = aHeight;  
    var background = aBackground;
//public
    this.grid = getHexGridWH(aElement, width, height);
//public methods
    this.draw = function (aContext) {
        aContext.drawImage(background, 0, 0);           
        for (i in this.grid.Hexes) {
            this.grid.Hexes[i].draw(aContext);                
        };
    };   
}