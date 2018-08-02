var Zoom = pc.createScript('zoom');

// initialize code called once per entity
Zoom.prototype.initialize = function() {
    this.targetFov = 35;
};

// update code called every frame
Zoom.prototype.update = function(dt) {
    
    // if(this.app.mouse.hasEvent(pc.MouseEvent)){
    //     if()
    // }
    
    if (this.app.keyboard.wasPressed(pc.KEY_SPACE) ) {
        if (this.targetFov == 10) {
            this.targetFov = 35;
        } else {
            this.targetFov = 10;
        }
    }

    var fov = this.entity.camera.fov;
    if (fov < this.targetFov) {
        fov += (10 * dt);
        if (fov > this.targetFov) {
            fov = this.targetFov;
        }
    }

    if (fov > this.targetFov) {
        fov -= (10 * dt);
        if (fov < this.targetFov) {
            fov = this.targetFov;
        }
    }
    this.entity.camera.fov = fov;
};

// swap method called for script hot-reloading
// inherit your script state here
// Zoom.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/