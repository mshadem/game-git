GameObject = function () {
//private
    var animations = [];
    var fSide = SIDE_LEFT;    
    var fCurrentAnimation = null;
//public
    this.hex = null;
//public methods
    this.addAnim = function (aImage, aFrameSize) {
        if (aImage != null && aFrameSize != null) {
            var anim = new Animation (aFrameSize);
            anim.init (aImage);
            animations.push(anim);
            if (animations.length == 1) {
                fCurrentAnimation = animations[0];
            };
        };
    };
    this.draw = function (aContext, aReversed) {
        aReverse = aReverse || false;
        if (fCurrentAnimation != null) {
            fCurrentAnimation.draw(aContext, this.hex.X, this.hex.Y, fSide, aReversed);
        };
    };
//getters  
    this.animation = function(aAnim) {
        if (aAnim != null && aAnim > -1 && aAnim <= animations.length - 1) {
            return animations[aAnim];
        } else {
            return null;
        };
    };
    this.side = function () {
        return fSide;
    };
    this.X = function () {
        this.hex.X
    };
    this.Y = function () {
        this.hex.Y
    };   
//    this.currentAnimation = function () {
//        return fCurrentAnimation;
//    };    
};
//setters
    this.setSide = function (aSide) {
        if (aSide == SIDE_LEFT || aSide == SIDE_RIGHT && aSide != fSide) {
            fSide = aSide;
        };
    };
    this.setCurrentAnimation = function (aAnim) {
        if (aAnim != null && aAnim > -1 && aAnim <= animations.length - 1) {
            if (fCurrentAnimation != animations[aAnim]) {
                fCurrentAnimation = animations[aAnim];
            };
        };
    };    