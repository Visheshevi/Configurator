var AlternativeHideElements = pc.createScript('alternativeHideElements');

AlternativeHideElements.attributes.add('object_entity_1',{type:'entity',title:'OEntity1'});
AlternativeHideElements.attributes.add('object_entity_2',{type:'entity',title:'OEntity2'});

var alternative_flag = false;

// initialize code called once per entity
AlternativeHideElements.prototype.initialize = function() {
    if(this.object_entity_1.tags.has('can_be_hidden')){
        this.object_entity_1.model.hide();
    }
    if(this.object_entity_2.tags.has('can_be_hidden')){
        this.object_entity_2.model.hide();
    }
    this.entity.element.on('mousedown',this.onMouseDown,this);
};

AlternativeHideElements.prototype.onMouseDown = function(event){
      if(!alternative_flag){
          this.object_entity_1.model.show();
          this.object_entity_2.model.hide();
          alternative_flag = true;
      }
      else{
          this.object_entity_2.model.show();
          this.object_entity_1.model.hide();
          alternative_flag = false;
      }
};


