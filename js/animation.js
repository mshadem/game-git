Animation = function (aFrameSize) {
//private
    var img = new Image();
    var numFrames = 0;
    var currentFrame = 0;
    var frameSize = aFrameSize;
    var returnAnim = false;
    var initialized = false;
    var paused = false;
//public
    this.withReturn = false;
//public methods
    this.init = function (aImage) {                                         //Initialization
        if (aImage != null && !initialized) {
            img = aImage;
            numFrames = img.width / frameSize - 1;
            initialized = true;
        };
    };    
    this.draw = function (aContext, aX, aY, aSide, aReverse) {              //Drawing
        if (initialized && !paused) {
            if (aSide == SIDE_LEFT) {
                aContext.drawImage(img, frameSize * currentFrame, 0, frameSize, frameSize, aX, aY, frameSize, frameSize); 
            };                 
            if (aSide == SIDE_RIGHT) {
                var indent = 680 - X;
                aContext.save();
                aContext.translate(GAME_WIDTH + 610, 0);
                aContext.scale(-1, 1);
                aContext.drawImage(img, frameSize * currentFrame, 0, frameSize, frameSize, aX + indent * 2, aY, frameSize, frameSize); 
                aContext.restore ();
            };                           
            if (this.withReturn) {
                if (currentFrame == numFrames)
                  returnAnim = true;
                if (currentFrame == 0)
                  returnAnim = false;
                if (! returnAnim) {	
                  if (currentFrame < numFrames)		
                    currentFrame++;
                } else {
                  if (currentFrame > 0)
                    currentFrame--;
                };	    
            } else {
                if (! aReverse) {
                    if (currentFrame == numFrames) {
                        currentFrame = 0;
                    };
                    currentFrame++;       
                } else {
                    if (currentFrame == 0) {
                        currentFrame = numFrames;
                    };
                    currentFrame--;              
                };
            };   
        };
    };   
    this.setCurrentFrame (aCurrentFrame) {                              //Set current frame
        paused = true;
        if (aCurrentFrame != null && aCurrentFrame <= numFrames && aCurrentFrame > -1) {
            currentFrame = aCurrentFrame;
        };
        paused = false;        
    };  
    this.rewind () {                                                    //Rewind
        paused = true;
        this.setCurrentFrame(0);
        paused = false;            
    };
};