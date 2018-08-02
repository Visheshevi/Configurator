var SecGenHandler = pc.createScript('secGenHandler');

SecGenHandler.attributes.add('expand_flag',{type:'boolean'});
SecGenHandler.attributes.add('Rhino_part',{type:'entity',title:'Rhino_entity'});
SecGenHandler.attributes.add('current_color',{type:'asset',assetType:'texture', title:'Rhino_color'});

var entity_list;
var temp_entity = new pc.Entity();


// initialize code called once per entity
SecGenHandler.prototype.initialize = function() {
    this.disable_entity();
    this.setColor(this.current_color);
    this.entity.element.on(pc.EVENT_MOUSEDOWN,this.onMouseDown,this);
};


// Set Color of the button to current color
SecGenHandler.prototype.setColor = function(color){
    var e = new pc.Entity();
    e = this.entity.findByName('btn_current_color');
    e.element.texture = color.resource;
};

// Disable the sub parts of the entity
SecGenHandler.prototype.disable_entity = function(){
    entity_list = this.entity.findByTag('second_gen');
    for(var i = 0;i<entity_list.length;i++){
        temp_entity = entity_list[i];
        if(temp_entity.tags.has('exception')){
            temp_entity.enabled = true;
        }
        else{
            temp_entity.enabled = false ;
        }
    }
};


// Enable/Disable second gen controls
SecGenHandler.prototype.onMouseDown = function(event){
    if(this.expand_flag === false){
        this.make_visible();
        this.expand_flag = true;
    }
    else if(this.expand_flag === true){
        this.make_invisible();  
        this.expand_flag = false;
    }
};

SecGenHandler.prototype.make_visible = function(){
    entity_list = this.entity.findByTag('second_gen');
    for(var i = 0;i<entity_list.length;i++){
        temp_entity = entity_list[i];
        if(temp_entity.tags.has('exception')){
            temp_entity.enabled = false;
        }
        else{
            temp_entity.enabled = true;
        }
    }
};

SecGenHandler.prototype.make_invisible = function(){
    entity_list = this.entity.findByTag('second_gen');
    for(var i = 0;i<entity_list.length;i++){
        temp_entity = entity_list[i];
        if(temp_entity.tags.has('exception')){
            temp_entity.enabled = true;
        }
        else{
            temp_entity.enabled = false;
        }
    }
};
