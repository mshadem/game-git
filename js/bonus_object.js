MINE = -1; BINOCULARS = 0; BOOT = 1; CACTUS = 2; CHEST = 3; DYNAMITE = 4; FENCE = 5; FLOWER = 6; 
HUMMER = 7; MUSHROOMS = 8; TIME = 19; WELL = 10; SURPRISE = 11;

BONUS_OBJECTS = [];

bonusObject = function (aType, aHex) {
    this.numFrames = 5;
    this.type = aType;
    this.currentFrame = getRandomInt(0, 5);   
    this.frameSize = FRAME_SIZE;
    this.img = new Image ();
    this.imgLight = new Image ();   
    this.imgLight.src = 'images/bonus_obj/light.png';   
    this.lightNumFrames = 11;
    this.lightCurrentFrame = getRandomInt(0, 11);       
    this.hex = aHex;
    reverseAnim = false;
    this.img = BONUS_OBJECTS[aType];       

    this.draw = function (aContext) {
        X = this.hex.Points[0].X;
        Y = this.hex.Points[0].Y;
        aContext.drawImage(this.img, this.frameSize * this.currentFrame, 0, this.frameSize, this.frameSize,
                        X - 25, Y - 10, this.frameSize, this.frameSize);    
        if (this.currentFrame == this.numFrames)
            reverseAnim = true;
        if (this.currentFrame == 0)
            reverseAnim = false;
        if (! reverseAnim) {	
            if (this.currentFrame < this.numFrames)		
                this.currentFrame++;
        } else {
            if (this.currentFrame > 0)
                this.currentFrame--;
        };	   

        aContext.drawImage(this.imgLight, this.frameSize * this.lightCurrentFrame, 0, this.frameSize, this.frameSize,
                X - 25, Y - 10, this.frameSize, this.frameSize);    
        if (this.lightCurrentFrame == this.lightNumFrames) {
            this.lightCurrentFrame = 0;
        };
        this.lightCurrentFrame++;       
    };
};