var InitializeLayout = pc.createScript('initializeLayout');

InitializeLayout.attributes.add('tag',{type:'string'});

// initialize code called once per entity
InitializeLayout.prototype.initialize = function() {
    
    // Find local position of parent to adjust the position of the children accordingly
    var entity_pos = new pc.Vec3();
    entity_pos = this.entity.getLocalPosition();
    var child_pos = new pc.Vec3();
    child_pos = this.updatePosition(entity_pos);
    var child_entity = new pc.Entity();
    child_entity = this.entity.findByTag(this.tag);
    child_entity[0].setLocalPosition(child_pos.x,child_pos.y,child_pos.z);
};

// update code called every frame
InitializeLayout.prototype.update = function(dt) {
    
};


// Get the updated position of the Child
InitializeLayout.prototype.updatePosition = function(entity_pos){
    var temp_child_pos = new pc.Vec3();
    temp_child_pos.x = entity_pos.x;
    temp_child_pos.y = - this.entity.element.height; // takes the local position which is related to its parent and not to the whole group
    temp_child_pos.z = entity_pos.z;
    return temp_child_pos;
};
