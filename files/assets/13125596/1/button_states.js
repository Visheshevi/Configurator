var ButtonStates = pc.createScript('buttonStates');


ButtonStates.attributes.add('blue_mat', {
    type: 'asset',
    assetType: 'material'
});

ButtonStates.attributes.add('current_color',{
    type:'entity',
    title:'Current Color'
});


ButtonStates.attributes.add('color_image',{
    type:'asset',
    assetType:'texture',
    title:'color_texture'
});

ButtonStates.attributes.add('Rhino_model',{type:'entity',title:'rhinoModel'});

// initialize code called once per entity
ButtonStates.prototype.initialize = function() {
    // Get the original button texture
    this.originalTexture = this.entity.element.textureAsset;
    this.hovered = false;
    // this.entity.element.on('mouseenter', this.onEnter, this);
    this.entity.element.on('mousedown', this.onPress, this);
    // this.entity.element.on('mouseleave', this.onLeave, this);
};

ButtonStates.prototype.onPress = function (event) {
    var num_items = (this.Rhino_model.findByTag('changes_color')).length;
    var list = this.Rhino_model.findByTag('changes_color');
    var i;
    var e = new pc.Entity();
    for(i = 0;i< num_items;i++){
        e = list[i];
        e.model.meshInstances[0].material =this.blue_mat.resource;
    }
    // Change color of btn_current_color
    this.current_color.element.texture = this.color_image.resource;
};
