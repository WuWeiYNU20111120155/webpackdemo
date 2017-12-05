//var $= require('./jquery-3.0.0.js')
var $= require('jquery')
module.exports = (function() {
    function Expose($target, callback) {
        this.$target = $target
        this.callback = callback
        this.checkShow()
        this.bind()
    }

    Expose.prototype.bind = function() {
        var _this = this
        $(window).on('scroll', function() {
            _this.checkShow()
        });
    }

    Expose.prototype.checkShow = function() {
        var offsetTop = this.$target.offset().top;
        var nodeHeight = this.$target.height();
        var scrrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var _this = this;
        if (offsetTop + nodeHeight > scrrollTop && offsetTop < windowHeight + scrrollTop) {
            //this.$target.data('showed', true);
            _this.callback(_this.$target)
            return true;
        }
        return false;
    }
    return Expose
})()