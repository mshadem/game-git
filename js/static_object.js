STATIC_OBJECTS = [];

staticObject = function (aType, aHex) {
    this.img = new Image ();
    this.hex = aHex;
    this.img = STATIC_OBJECTS[aType];       
    this.draw = function (aContext) {
        X = this.hex.Points[0].X;
        Y = this.hex.Points[0].Y;
        aContext.drawImage(this.img, X - 25, Y - 10);            
    };
};