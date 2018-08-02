var MouseZoom = pc.createScript('mouseZoom');


MouseZoom.attributes.add('Rhino_model',{type:'entity',title:'rhinoModel'});
// initialize code called once per entity
MouseZoom.prototype.initialize = function() {
    this.targetFov = 85;
    this.app.mouse.on(pc.EVENT_MOUSEWHEEL,this.onMouseMove,this);
    // this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
};

// update code called every frame
MouseZoom.prototype.update = function(dt) {
    
};

MouseZoom.prototype.onMouseMove = function(dt){
    this.zooming(dt.wheel*-1);
};

MouseZoom.prototype.zooming = function(movez){
    console.log(this.entity.getLocalPosition());
    console.log(this.Rhino_model.getPosition());
    this.pos = this.entity.getLocalPosition();
    var model_entity = this.Rhino_model;
    if(this.entity.enabled){
        if((this.pos.x+movez > model_entity.getPosition().x+5 && this.pos.x+movez < model_entity.getPosition().x+15) && (this.pos.y+movez > model_entity.getPosition().y+5 && this.pos.y+movez < model_entity.getPosition().y + 15) && (this.pos.z+movez > model_entity.getPosition().z && this.pos.x+movez < model_entity.getPosition().z+15 )){
            this.pos.x += movez;
            this.pos.y += movez;
            this.pos.z += movez;
        }
    }  
    this.entity.setLocalPosition(this.pos.x, this.pos.y,this.pos.z);
          
};

// swap method called for script hot-reloading
// inherit your script state here
// MouseZoom.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/