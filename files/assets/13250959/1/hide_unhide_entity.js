var HideUnhideEntity = pc.createScript('hideUnhideEntity');

HideUnhideEntity.attributes.add('object_entity',{type:'entity',title:'OEntity'});
var flag_hide_unhide = false;

// initialize code called once per entity
HideUnhideEntity.prototype.initialize = function() {
    // TODO put this in a separate method
    if(this.object_entity.tags.has('can_be_hidden')){
        this.object_entity.model.hide();
    }
                
    this.entity.element.on('mousedown',this.onMouseDown,this);
};

HideUnhideEntity.prototype.onMouseDown = function(event){
    if(!flag_hide_unhide){
        this.object_entity.model.show();
        flag_hide_unhide = true;
    }
    else{
        this.object_entity.model.hide();
        flag_hide_unhide = false;
    }
};

// update code called every frame
HideUnhideEntity.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// HideUnhideEntity.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/
