var InsertEntityIntoPicture = pc.createScript('insertEntityIntoPicture');

// InsertEntityIntoPicture.attributes.add('Rhino_model',{type:'entity',title:'rhinoModel'});

var mainModel = this;
var flag = true;

// initialize code called once per entity
InsertEntityIntoPicture.prototype.initialize = function() {
    this.app.mouse.disableContextMenu();
    this.app.keyboard.on(pc.EVENT_KEYDOWN,this.onKeyboardPress,this);
};


// Method to hide and unhide the equipment by key press 
InsertEntityIntoPicture.prototype.onKeyboardPress = function(event){
    var num_items = (this.entity.findByTag('can_be_hidden'));
    var i;
    if(event.key === pc.KEY_A){
        if(flag){
            for(i = 0;i<num_items.length;i++){
                num_items[i].model.hide();
            }
            flag = false;
        }
        else{
            for(i = 0 ;i<num_items.length;i++){
                num_items[i].model.show();
            }
            flag = true;
        }
    }
        
};
