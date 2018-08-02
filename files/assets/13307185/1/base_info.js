var BaseInfo = pc.createScript('baseInfo');

BaseInfo.attributes.add('Info_text',{type:'entity'});
BaseInfo.attributes.add('information',{type:'string'});
// BaseInfo.attributes.add('Info_screen',{type:'entity'});

var e = new pc.Entity();
// initialize code called once per entity
BaseInfo.prototype.initialize = function() {
    // this.entity.element.on(pc.EVENT_MOUSEDOWN,this.onMouseDown,this);
    this.onMouseDown();
};


BaseInfo.prototype.onMouseDown = function(){
    var src = new pc.Color(1,1,0,1);
    this.entity.enabled = true;
    this.entity.element.color.fromString('#F37A20');
    this.Info_text.enabled = true;
    e = this.Info_text;
    e.element.text = this.information;
    e.element.fontSize = 14;
    var text_height = this.Info_text.element.textHeight;
    this.Info_text.element.height = text_height;
    this.entity.element.height = text_height+ 20;
};

