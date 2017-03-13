/**
* Project: kanNotify
* Author: Kan (454831746@qq.com)
* Website: https://github.com/waterbeside/kanNotify
*/

(function($){
    $.kanNotify = {
        defaults : {
            position:{"right":5,"bottom":50}
            ,fade : false 
            ,fade_out_speed: 1000
            ,auto_dismiss:4000
            ,allow_dismiss : true 
            ,wrapperWidth : "auto"
            ,iconDefault : {'info':'fa-info-circle','error':'fa-exclamation-circle','success':'fa-check-circle','warning':'fa-warning','default':'fa-chevron-circle-right','debug':'fa-bug'}
        },
        options :{},
        timer :[],
        response:{},
        setting:function(options){
            this.defaults =  $.extend({}, this.defaults, options);
        },
        add:function(params){
            
            this.options = $.extend({}, this.defaults, params);
            var msg = this.options.msg ; 
            var msgType = typeof(this.options.type) != 'undefined' ?  this.options.type :'default'  ;
            var iconDefault = this.options.iconDefault 
            
            var icon = typeof(this.options.icon) != 'undefined' ? this.options.icon : iconDefault[msgType] ;
            //console.log(iconArray['default'])
            var iconHtml = " <i class=\"fa "+icon+"\"></i>" ;
            var msgStr = iconHtml + msg ;
            var qid = Math.floor(Math.random()*9999999);
            var itemId = "kan-notify-item-"+ qid;
            var $domItem = this._domConstruct(itemId,msgStr) ;
            if (!isNaN(this.options.wrapperWidth)){
                $domItem.width(this.options.wrapperWidth);
            };
            if(this.options.allow_dismiss){
                $domCloseBtn = this._domCloseBtn();
                $domCloseBtn.appendTo($domItem).click(function(){
                    $.kanNotify.close(itemId,false)
                })
            }
            $domItem.addClass("kan-notify-item-"+msgType).show();
            if(!isNaN(this.options.position.left)){$domItem.css({"float":"left"})}
            if(!isNaN(this.options.position.right)){$domItem.css({"float":"right"})}
            if(this.options.auto_dismiss>0){
                var retention_time = this.options.auto_dismiss ;
                this.timer['_item_timer'+qid] = setTimeout(function(){$.kanNotify.close(itemId,$.kanNotify.options.fade)},retention_time)
            }
            this.response = {
                'qid':qid
                ,'itemId':itemId
                ,'type': msgType
            }
            if(this.options.callback){ this.options.callback(this.response); }else{ return(this.response); }

        },
        //DOM
        //構造DOM外層:wrapper
        _domWrapper:function(){
            if($('#kan-notify-wrapper').length == 0){
                var $wrapper = $("<div id=\"kan-notify-wrapper\" class=\"kan-notify-wrapper\"></div>") ;
                $wrapper.appendTo('body').css({'position':'fixed'});
                if(!isNaN(this.options.position.top)){
                    var pTop = this.options.position.top ;
                    $wrapper.css({'top':pTop});
                }
                if(!isNaN(this.options.position.bottom)){
                    var pBottom = this.options.position.bottom ;
                    $wrapper.css({'bottom':pBottom});
                }
                if(!isNaN(this.options.position.left)){
                    var pLeft = this.options.position.left ;
                    $wrapper.css({'left':pLeft});
                }
                if(!isNaN(this.options.position.right)){
                    var pRight = this.options.position.right ;
                    $wrapper.css({'right':pRight});
                }
                return $wrapper;
            }
        },
        //關閉按鈕
        _domCloseBtn:function(){
             $domCloseBtn = $("<a class=\"kan-notify-close\" href=\"javascript:void(0);\">×</a>");
             return $domCloseBtn;
        },
        //構造DOM元素:item
        _domConstruct:function(id, str){
            this._domWrapper();
            var $domItem = $("<div class=\"kan-notify-item\" id=\""+id+"\" ></div>").html(str).hide().appendTo($('#kan-notify-wrapper'));
            return $domItem;

        },
        close : function(itemId,fade){
            if(fade){
                //console.log(this.options.fade_out_speed)
                $("#"+itemId).fadeOut(this.options.fade_out_speed)
                setTimeout(function(){
                    $("#"+itemId).remove()
                },this.options.fade_out_speed)
            }else{
                $("#"+itemId).remove(); 
            }
            
        },
        closeAll : function(){
            $(".kan-notify-item").remove();      
        }
        
    }

})(jQuery);