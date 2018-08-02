var BtnZoom = pc.createScript('btnZoom');

BtnZoom.attributes.add('Rhino_model',{type:'entity', title:'rhinoModel'});
BtnZoom.attributes.add('camera',{type:'entity'});
BtnZoom.attributes.add('zoom_val',{type:'number',default:1});

// initialize code called once per entity
BtnZoom.prototype.initialize = function() {
    this.entity.element.on(pc.EVENT_MOUSEDOWN,this.onMouseDown,this);
};

BtnZoom.prototype.onMouseDown = function(event){
    
    this.zooming(this.zoom_val);
};

BtnZoom.prototype.zooming = function(movez){
    this.pos = this.camera.getLocalPosition();
    var model_entity = this.Rhino_model;
    if(this.camera.enabled){
        if((this.pos.x+movez > model_entity.getPosition().x+5 && this.pos.x+movez < model_entity.getPosition().x+15) && (this.pos.y+movez > model_entity.getPosition().y+5 && this.pos.y+movez < model_entity.getPosition().y + 15) && (this.pos.z+movez > model_entity.getPosition().z+5 && this.pos.x+movez < model_entity.getPosition().z+15 )){
            this.pos.x += movez;
            this.pos.y += movez;
            this.pos.z += movez;
        }
    }  
    this.camera.setLocalPosition(this.pos.x, this.pos.y,this.pos.z);
    // console.log(this.pos);

};


// update code called every frame
BtnZoom.prototype.update = function(dt) {
    
};

// MouseZoom.prototype.initialize = function() {
//     this.targetFov = 85;
//     this.app.mouse.on(pc.EVENT_MOUSEWHEEL,this.onMouseMove,this);
//     // this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
// };




// swap method called for script hot-reloading
// inherit your script state here
// MouseZoom.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/