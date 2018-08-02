var BannerOverlayInitialize = pc.createScript('bannerOverlayInitialize');

// BannerOverlayInitialize.attributes.add('banner_text',{type:'string',title:'text'});
// BannerOverlayInitialize.attributes.add('txt_equip_name',{type:'entity',title:'textbox'});
BannerOverlayInitialize.attributes.add('opacity',{type:'number',title:'Opacity'});
BannerOverlayInitialize.attributes.add('Info_text',{type:'entity'});
BannerOverlayInitialize.attributes.add('information',{type:'string'});
BannerOverlayInitialize.attributes.add('font_size',{type:'number'});
BannerOverlayInitialize.attributes.add('text_color',{type:'string'});


// initialize code called once per entity
BannerOverlayInitialize.prototype.initialize = function() {
    this.init_banner();  
    this.init_text();
};


// Initialize the height, width and opacity of the banner on top
BannerOverlayInitialize.prototype.init_banner = function(){
    this.entity.element.width = this.app.graphicsDevice.canvas.clientWidth;
    this.entity.element.height = this.app.graphicsDevice.canvas.clientHeight/9;    
    this.entity.element.color.fromString(this.text_color);
    this.entity.element.opacity = this.opacity;
};



// Initialize the text on the banner
BannerOverlayInitialize.prototype.init_text = function(){
    var e  = new pc.Entity();
    this.Info_text.enabled = true;
    e = this.Info_text;
    e.element.text = this.information;
    e.element.fontSize = this.font_size;
    var text_height = this.Info_text.element.textHeight;
    this.Info_text.element.height = text_height;
};