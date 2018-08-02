var DropDownHandler = pc.createScript('dropDownHandler');

DropDownHandler.attributes.add('button_1',{type:'entity'});
DropDownHandler.attributes.add('button_2',{type:'entity'});
DropDownHandler.attributes.add('button_3',{type:'entity'});

// initialize code called once per entity
DropDownHandler.prototype.initialize = function() {
    this.entity.element.on(pc.EVENT_MOUSEDOWN,this.mouseEnter,this);
    var temp_disabe = this.entity.findByTag('drop_down_group');
    this.element_state(temp_disabe,false);    
    // console.log(this.entity.findByTag('drop_down_group'));
    // console.log("vishesh");
    // console.log(this.entity.findByTag('drop_down_group_element'));
};


var isClicked = false;
var disabled_children;
var is_3_clicked = false;

DropDownHandler.prototype.mouseEnter = function(event){
    
    var temp_pos;
    if(this.entity.name == this.button_1.name){
        
        // Define a new entity for handling the color pallet
        var temp_pallet = new pc.Entity();
        temp_pallet = this.button_1.findByName('color_group');
        
        // If color pallet is not visible
        if(this.button_1.getLocalPosition().y == temp_pallet.getLocalPosition().y){
            disabled_children = this.button_1.findByTag('drop_down_group');
            this.element_state(disabled_children,true);
            temp_pos = new pc.Vec3();
            temp_pos = this.button_2.getLocalPosition();
            this.button_2.setLocalPosition(temp_pos.x,temp_pos.y-100,temp_pos.z);
            temp_pos = this.button_3.getLocalPosition();
            this.button_3.setLocalPosition(temp_pos.x,temp_pos.y-100,temp_pos.z);



            // Set the position for the drop down Menu
            temp_pallet.setLocalPosition(temp_pallet.getLocalPosition().x,temp_pallet.getLocalPosition().y-50,temp_pallet.getLocalPosition().z);
            // Set opacity
            temp_pallet.element.opacity = 0.526;        
            var children_of_the_object = temp_pallet.findByTag("color_child");
            this.children_visibility(children_of_the_object,1);
        }
        // When the button pallet is visible
        else{
            this.element_state(disabled_children,false);
            temp_pallet.element.opacity = 0;
            temp_pallet.setLocalPosition(temp_pallet.getLocalPosition().x,temp_pallet.getLocalPosition().y+50,temp_pallet.getLocalPosition().z);
            temp_pos = this.button_2.getLocalPosition();
            this.button_2.setLocalPosition(temp_pos.x,temp_pos.y+100,temp_pos.z);
            temp_pos = this.button_3.getLocalPosition();
            this.button_3.setLocalPosition(temp_pos.x,temp_pos.y+100,temp_pos.z);
            var children_of_the_object = temp_pallet.findByTag("color_child");
            this.children_visibility(children_of_the_object,0);
        }
    }
    else if(this.entity.name == this.button_2.name){
        
        //Define a new entity for handling configuration pallet
        var temp_pallet = new pc.Entity();
        temp_pallet = this.button_2.findByName('config_group');
        var btn_height = this.button_2.element.height;
        // Get position for button 2
        var btn2_position = this.button_2.getLocalPosition();
        if(!isClicked){
            disabled_children = this.button_2.findByTag('drop_down_group');
            this.element_state(disabled_children,true);
            temp_pos = new pc.Vec3();
            temp_pos = this.button_3.getLocalPosition();
            this.button_3.setLocalPosition(temp_pos.x,temp_pos.y-temp_pallet.element.height,temp_pos.z); 
            temp_pallet.setLocalPosition(btn2_position.x,temp_pallet.getLocalPosition().y-btn_height,btn2_position.z);
            temp_pallet.element.opacity = 0.526;
            isClicked = true;
        }
        else{
            this.element_state(disabled_children,false);
            temp_pos = new pc.Vec3();
            temp_pos = this.button_3.getLocalPosition();
            this.button_3.setLocalPosition(temp_pos.x,temp_pos.y+temp_pallet.element.height,temp_pos.z); 
            temp_pallet.setLocalPosition(btn2_position.x,temp_pallet.getLocalPosition().y+btn_height,btn2_position.z);
            temp_pallet.element.opacity = 0;
            isClicked = false;
        
        }
        
        
        
    }
    else if(this.entity.name == this.button_3.name){
        var height_of_button = this.button_3.element.height;
        var btn3_position = this.button_3.getLocalPosition();
        var temp_pallet = this.button_3.findByName('cost_calculator');
        if(!is_3_clicked){
            disabled_children = this.button_3.findByTag('drop_down_group');
            this.element_state(disabled_children,true);
            temp_pallet.setLocalPosition(btn3_position.x,temp_pallet.getLocalPosition().y-height_of_button,btn3_position.z);
            temp_pallet.element.opacity = 0.526;
            is_3_clicked = true;
        }
        else{
            this.element_state(disabled_children,false);
            temp_pallet.setLocalPosition(btn3_position.x,temp_pallet.getLocalPosition().y+height_of_button,btn3_position.z);
            temp_pallet.element.opacity = 0;
            is_3_clicked = false;
        }
    }
    
};

// Method for show/hide child
DropDownHandler.prototype.children_visibility = function(list,val){
    var e = new pc.Entity();
    for(var i = 0;i<list.length;i++){
        e = list[i];
        e.element.opacity = val;
    }
};

DropDownHandler.prototype.element_state = function(element,val){
    var len = element.length;
    for(var i = 0;i < len;i++){
        element[i].enabled = val;
    }
};


// DropDownHandler.prototype.mouseLeave = function(event){
//     var temp_pos;
//     if(this.entity.name == this.button_1.name){
//         temp_pos = new pc.Vec3();
//         temp_pos = this.button_2.getLocalPosition();
//         this.button_2.setLocalPosition(temp_pos.x,temp_pos.y+100,temp_pos.z);
//         temp_pos = this.button_3.getLocalPosition();
//         this.button_3.setLocalPosition(temp_pos.x,temp_pos.y+100,temp_pos.z);
//     }
//     else if(this.entity.name == this.button_2.name){
//         temp_pos = new pc.Vec3();
//         temp_pos = this.button_3.getLocalPosition();
//         this.button_3.setLocalPosition(temp_pos.x,temp_pos.y+100,temp_pos.z);
//     }
//     else{
        
//     }
    
// };



