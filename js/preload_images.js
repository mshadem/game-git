var doneImages = [];   

IMAGES_TYPES = ['stand', 'move', 'attack_t', 'attack_b', 'attack_tr', 'attack_br', 'hit', 'dead', 
                'aim_t', 'aim_b', 'aim_br', 'aim_tr', 'lay', 'lay_stand', 'lay_hit', 'defend'];
      
function getImagesPath (aRace, aUnitType, aImage) {
    dir = UNITS_IMG_DIR + aRace + 's/' + aUnitType + '/' + aRace + '_' + aUnitType + '_' + aImage + '.png';
    return dir;
};

function loadImgaes (aRaces) {
    var images = [];
    images.push(COMMON_IMG_DIR + 'unit_life.png');
    images.push(COMMON_IMG_DIR + 'unit_attack.png');
    images.push(COMMON_IMG_DIR + 'unit_armor.png');
    images.push(COMMON_IMG_DIR + 'explosion.png');
    images.push(COMMON_IMG_DIR + 'flash.png');
    images.push(COMMON_IMG_DIR + 'comix.png');
    images.push(COMMON_IMG_DIR + 'grenade.png');
       
    images.push(ST_OBJ_IMG_DIR + 'rock.png');
    images.push(ST_OBJ_IMG_DIR + 'water.png');
    
    images.push(BN_OBJ_IMG_DIR + 'binoculars.png');
    images.push(BN_OBJ_IMG_DIR + 'boot.png');
    images.push(BN_OBJ_IMG_DIR + 'cactus.png');
    images.push(BN_OBJ_IMG_DIR + 'chest.png');
    images.push(BN_OBJ_IMG_DIR + 'dynamite.png');
    images.push(BN_OBJ_IMG_DIR + 'fence.png');
    images.push(BN_OBJ_IMG_DIR + 'flower.png');
    images.push(BN_OBJ_IMG_DIR + 'hummer.png');
    images.push(BN_OBJ_IMG_DIR + 'mushrooms.png');
    images.push(BN_OBJ_IMG_DIR + 'time.png');
    images.push(BN_OBJ_IMG_DIR + 'well.png');
    images.push(BN_OBJ_IMG_DIR + 'surprise.png');
    
    images.push(COMMON_IMG_DIR + 'bg1.jpg');    
    
    for (i in aRaces) {
        for (j in unitsTypes) {
            if (j == SHIELD) {
                for (k = STAND; k <= DEFEND; k++) {
                    if (RACES[aRaces[i]][j] != null) {
                        images.push(getImagesPath(RACES_STR[aRaces[i]], unitsTypes[j], IMAGES_TYPES[k]));              
                    };
                };
            } else if ((j == JUGGERNAUT) || (j == SNIPER)) {
                for (k = STAND; k <= AIM_TR; k++) {
                    if (RACES[aRaces[i]][j] != null) {                
                        images.push(getImagesPath(RACES_STR[aRaces[i]], unitsTypes[j], IMAGES_TYPES[k]));   
                    };
                };            
            } else {
                for (k = STAND; k <= LAY_HIT; k++) {
                    if (RACES[aRaces[i]][j] != null) {
                        images.push(getImagesPath(RACES_STR[aRaces[i]], unitsTypes[j], IMAGES_TYPES[k]));                
                    };
                };            
            };
        };

    };

    var loadedImages = 0;    
    var postAction = function () {};
    function imageLoadPost () {
        loadedImages++;
        if (loadedImages == images.length) {
            Done (aRaces);
        };
    };
    for (var i = 0; i < images.length; i++) {
        doneImages[i] = new Image ();
        doneImages[i].src = images[i];
        doneImages[i].onload = function () {
            imageLoadPost ();
        };       
    };    
};

var imagesCounter = 0;
function addImages (aArray, aImg) {
    aArray[aImg] = doneImages[imagesCounter];
    imagesCounter++;
};  

function Done (aRaces) {
    COMMON_OBJECTS[UNIT_LIFE] = doneImages[0]; 
    COMMON_OBJECTS[UNIT_ATTACK] = doneImages[1]; 
    COMMON_OBJECTS[UNIT_ARMOR] = doneImages[2]; 
    COMMON_OBJECTS[EXPLOSION] = doneImages[3];
    COMMON_OBJECTS[FLASH] = doneImages[4];
    COMMON_OBJECTS[COMIX] = doneImages[5];
    COMMON_OBJECTS[GRENADE] = doneImages[6];
    COMMON_OBJECTS[LIGHT] = doneImages[7];
    
    STATIC_OBJECTS[ROCK] = doneImages[8];
    STATIC_OBJECTS[WATER] = doneImages[9];
   
    BONUS_OBJECTS[BINOCULARS] = doneImages[10];
    BONUS_OBJECTS[BOOT] = doneImages[11];
    BONUS_OBJECTS[CACTUS] = doneImages[12];
    BONUS_OBJECTS[CHEST] = doneImages[13];
    BONUS_OBJECTS[DYNAMITE] = doneImages[14];
    BONUS_OBJECTS[FENCE] = doneImages[15];
    BONUS_OBJECTS[FLOWER] = doneImages[16];
    BONUS_OBJECTS[HUMMER] = doneImages[17];
    BONUS_OBJECTS[MUSHROOMS] = doneImages[18];
    BONUS_OBJECTS[TIME] = doneImages[19];
    BONUS_OBJECTS[WELL] = doneImages[20];
    BONUS_OBJECTS[SURPRISE] = doneImages[21];
    
    BACKGROUNDS[BG1] = doneImages[22];    
    
    imagesCounter = 22;
    
    for (i in aRaces) {
        for (j in unitsTypes) {
            if (j == SHIELD) {
                for (k = STAND; k <= DEFEND; k++) {
                    if (RACES[aRaces[i]][j] != null) {
                        addImages(RACES[aRaces[i]][j], k);
                    };
                };
            } else if ((j == JUGGERNAUT) || (j == SNIPER)) {
                for (k = STAND; k <= AIM_TR; k++) {
                    if (RACES[aRaces[i]][j] != null) {
                        addImages(RACES[aRaces[i]][j], k); 
                    };
                };            
            } else {
                for (k = STAND; k <= LAY_HIT; k++) {
                    if (RACES[aRaces[i]][j] != null) {
                        addImages(RACES[aRaces[i]][j], k);             
                    };
                };            
            };        
        };   
    };
    
    //GAME_INTERVAL = setInterval(render, 1000 / FPS);
    //selectUnit(200); 
};