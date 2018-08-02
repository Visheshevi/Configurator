// Initializes various properties of the main entity in the scene
// 1. Initializes color to Rhino Orange

var EquipmentModelInitialize = pc.createScript('equipmentModelInitialize');

EquipmentModelInitialize.attributes.add('colorMat',{type:'asset',assetType:'material'});
// initialize code called once per entity
EquipmentModelInitialize.prototype.initialize = function() {
    
    // Select all the children whose color can be changed 
    var list = this.entity.findByTag('changes_color');
    var temp_entity = new pc.Entity();
    var entity;
    for(var i = 0;i<list.length;i++){
        temp_entity = list[i];
        temp_entity.model.meshInstances[0].material = this.colorMat.resource;
    }
};

// update code called every frame
EquipmentModelInitialize.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// EquipmentModelInitialize.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/