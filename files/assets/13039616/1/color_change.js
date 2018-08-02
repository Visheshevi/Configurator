var ColorChange = pc.createScript('colorChange');

ColorChange.attributes.add('redMaterial', {
    type: 'asset',
    assetType: 'material'
});

ColorChange.attributes.add('whiteMaterial', {
    type: 'asset',
    assetType: 'material'
});

// initialize code called once per entity
ColorChange.prototype.initialize = function() {
    // Use on() to listen for events on the keyboard device.
    // Arguments are:
    // 1) The event name to listen for
    // 2) The callback function to call when the event fires
    // 3) (optional) The value to use for 'this' in the callback function

    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    this.app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);
    
};

// update code called every frame
ColorChange.prototype.update = function(dt) {
    
};
/*
* Event handler called when key is pressed
*/
ColorChange.prototype.onKeyDown = function (event) {
    // Check event.key to detect which key has been pressed
    if (event.key === pc.KEY_A && this.redMaterial) {
        this.entity.model.meshInstances[0].material = this.redMaterial.resource;
    }

    // When the space bar is pressed this scrolls the window.
    // Calling preventDefault() on the original browser event stops this.
    event.event.preventDefault();
};

/*
* Event handler called when key is released
*/
ColorChange.prototype.onKeyUp = function (event) {
    // Check event.key to detect which key has been pressed
    if (event.key === pc.KEY_A && this.whiteMaterial) {
        this.entity.model.meshInstances[0].material = this.whiteMaterial.resource;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// ColorChange.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/