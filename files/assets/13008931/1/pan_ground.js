var PanGround = pc.createScript('panGround');

// initialize code called once per entity
PanGround.prototype.initialize = function() {
    
};

// update code called every frame
PanGround.prototype.update = function(dt) {
    if(this.app.keyboard.isPressed(pc.KEY_LEFT)){
        this.entity.rotateLocal(0,-2,0);
    }
    else if(this.app.keyboard.isPressed(pc.KEY_RIGHT)){
        this.entity.rotateLocal(0,2,0);
    }
    
    if(this.app.keyboard.isPressed(pc.KEY_UP)){
        this.entity.translateLocal(2,0,0);
    }
    if(this.app.keyboard.isPressed(pc.KEY_DOWN)){
        this.entity.translateLocal(-2,0,0);
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// PanGround.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/