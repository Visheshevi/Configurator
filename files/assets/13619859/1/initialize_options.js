var InitializeOptions = pc.createScript('initializeOptions');

InitializeOptions.attributes.add('grp_width',{type:'number'}); // set width
InitializeOptions.attributes.add('child_height',{type:'number'}); // set height
InitializeOptions.attributes.add('shadow_element',{type:'entity'}); // Shadow element to give a feel of a 3D text box
InitializeOptions.attributes.add('shadowColor',{type:'string'}); // Shadow color
InitializeOptions.attributes.add('opacity',{type:'number',title:'Opacity'}); // Opacity of shadow


// initialize code called once per entity
InitializeOptions.prototype.initialize = function() {
    // set width
    this.entity.element.width = this.grp_width;
    this.entity.element.height = this.child_height * this.entity.findByTag('first_gen').length;
    this.openUp();    
    this.init_shadow();
};

// update code called every frame
InitializeOptions.prototype.update = function(dt) {
    
};

InitializeOptions.prototype.openUp = function(event){
    var child_list = this.entity.findByTag('first_gen');
    this.expand_children(child_list);
    
    // console.log(this.entity.findByTag('first_gen'));
    // console.log(this.entity.element.height);
    
};

InitializeOptions.prototype.expand_children = function(child_list){
    var temp_entity = new pc.Entity();
    var prev_position = new pc.Vec3();
    prev_position.x = 0;
    prev_position.y = 0;
    prev_position.z = 0;
    for(var i =0;i<child_list.length;i++){
        temp_entity = child_list[i];
        temp_entity.element.width = this.grp_width;
        temp_entity.element.height = this.child_height;
        this.set_child_position(temp_entity,prev_position);
        prev_position.y -= this.child_height;
    }
    
};

InitializeOptions.prototype.set_child_position = function(child_entity,prev_position){
    child_entity.setLocalPosition(prev_position.x,prev_position.y,prev_position.z);
    
};

// Initialize the shadow of the options bar
InitializeOptions.prototype.init_shadow = function(){
    this.shadow_element.enabled = true;
    this.shadow_element.element.color.fromString = this.shadowColor;
    this.shadow_element.element.width = this.grp_width + 5;
    this.shadow_element.element.height = this.entity.element.height+5;
    this.shadow_element.element.opacity = this.opacity;
};
// swap method called for script hot-reloading
// inherit your script state here
// InitializeOptions.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/