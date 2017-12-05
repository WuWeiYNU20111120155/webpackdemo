//var $= require('./jquery-3.0.0.js')
var $= require('jquery')
module.exports = (function() {
    function Gotop(ct) {
        this.id = ct || 'ww-gotop';
        this.init()
        this.bind()
    }
    Gotop.prototype.init = function() {

        if ($('#ww-gotop').length > 0) {
            return;
        }
        var $goTop = $('<div id=' + this.id + '>回到顶部</div>');
        $('body').append($goTop);

        this.$goTop = $goTop;
        this.bind();

    }
    Gotop.prototype.bind = function() {
        var self = this;
        $(window).on('scroll', function(e) {
            var offsetTop = $(window).scrollTop();
            //console.log(offsetTop);
            if (offsetTop > 100) {

                self.$goTop.show();
            } else {
                self.$goTop.hide();
            }
        })
        this.$goTop.on('click', function() {
            $(window).scrollTop(0);
        });
    }
    return Gotop
})()