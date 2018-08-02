var MultipleAlternativeHideUnhide = pc.createScript('multipleAlternativeHideUnhide');

// Entity attributes 1
MultipleAlternativeHideUnhide.attributes.add('object_entity_1_frt',{type:'entity',title:'OEntity1'});
MultipleAlternativeHideUnhide.attributes.add('object_entity_1_rear',{type:'entity',title:'OEntity1'});

// Entity attributes 2
MultipleAlternativeHideUnhide.attributes.add('object_entity_2_frt',{type:'entity',title:'OEntity1'});
MultipleAlternativeHideUnhide.attributes.add('object_entity_2_rear',{type:'entity',title:'OEntity1'});

// initialize code called once per entity
MultipleAlternativeHideUnhide.prototype.initialize = function() {
    this.hideEntities();
    this.entity.element.on('mousedown',this.onMouseDown,this);
};


// Hide one set of entities initially
MultipleAlternativeHideUnhide.prototype.hideEntities = function(){
    if(this.object_entity_1_frt.tags.has('can_be_hidden')){
        this.object_entity_1_frt.model.hide();
    }
    if(this.object_entity_1_rear.tags.has('can_be_hidden')){
        this.object_entity_1_rear.model.hide();
    }
    if(this.object_entity_2_frt.tags.has('can_be_hidden')){
        this.object_entity_2_frt.model.hide();
    }
    if(this.object_entity_2_rear.tags.has('can_be_hidden')){
        this.object_entity_2_rear.model.hide();
    }
};

// Mouse down event
MultipleAlternativeHideUnhide.prototype.onMouseDown = function(event){
    this.object_entity_1_frt.model.show();
    this.object_entity_1_rear.model.show();
    this.object_entity_2_frt.model.hide();
    this.object_entity_2_rear.model.hide();
};