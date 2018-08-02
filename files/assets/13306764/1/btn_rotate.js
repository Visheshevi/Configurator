var BtnRotate = pc.createScript('btnRotate');

// BtnRotate.attributes.add('camera',{type:'entity'});
BtnRotate.attributes.add('Rhino_model',{type:'entity'});
BtnRotate.attributes.add('orbitSensitivity', {
    type: 'number', 
    default: 0.3, 
    title: 'Orbit Sensitivity', 
    description: 'How fast the camera moves around the orbit. Higher is faster'
});
BtnRotate.attributes.add('direction',{type:'number'});
// initialize code called once per entity
BtnRotate.prototype.initialize = function() {
    this.entity.element.on(pc.EVENT_MOUSEDOWN,this.onMouseDown,this);
};

BtnRotate.prototype.onMouseDown = function(event){
    this.Rhino_model.rotate(10*this.direction,0,0);
};

BtnRotate.prototype.update = function(){
    
};