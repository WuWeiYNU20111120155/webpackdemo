//var $= require('./jquery-3.0.0.js')
var $= require('jquery')
function  _Carousel($ct) {
    this.$ct = $ct
    this.init()
    this.autoPlay()
    this.bind()

}
_Carousel.prototype.init = function() {
    this.$imgs = $('.lunbo >li')
    this.$pre = $('.pre')
    this.$next = $('.next')
    this.imgCount = this.$imgs.length
    this.$firstImg = this.$imgs.first().clone()
    this.$lastImg = this.$imgs.last().clone()
    this.$bullets = $('.bullet>li')
    this.interval = ''
    this.isPlay = false
    this.imgWidth = this.$imgs.width()
    this.curIndex = 0
    this.$ct.append(this.$firstImg)
    this.$ct.prepend(this.$lastImg)
    this.$ct.width((this.imgCount + 2) * this.imgWidth)
    this.$ct.css({ 'left': -this.imgWidth + 'px' })
}
_Carousel.prototype.bind = function() {
    _this = this
    this.$ct.mouseover(function(event) {
        clearInterval(_this.interval)
    });
    this.$ct.mouseleave(function(event) {
        _this.autoPlay()
    });
    this.$next.click(function(e) {
        e.preventDefault()
        _this.playNext(1)

    })
    this.$pre.click(function(e) {
        e.preventDefault()
        _this.playPre(1)

    })
    this.$bullets.click(function() {
        clearInterval(_this.interval)
        var index = $(this).index()
        if (index > _this.curIndex) {
            _this.playNext(index - _this.curIndex)
        } else if (index < _this.curIndex) {
            _this.playPre(_this.curIndex - index)
        }
    })
}




_Carousel.prototype.playNext = function(inval) {
    if (this.isPlay) {
        console.log('还在执行呢')
        return
    }
    var _this = this
    this.isPlay = true
    this.curIndex += inval
    this.$ct.animate({ left: '-=' + inval * this.imgWidth + 'px' }, 800, function() {
        if (_this.curIndex === _this.imgCount) {
            _this.curIndex = 0
            _this.$ct.css({ 'left': -_this.imgWidth + 'px' })

        }
        _this.setBullet()
        _this.isPlay = false
        console.log(_this.curIndex)
    })

}

_Carousel.prototype.playPre = function(inval) {
    var _this = this
    if (this.isPlay) {
        console.log('还在执行呢')
        return
    }
    this.isPlay = true
    this.curIndex -= inval
    this.$ct.animate({ left: '+=' + inval * this.imgWidth + 'px' }, 800, function() {
        if (_this.curIndex < 0) {
            _this.curIndex = _this.imgCount - 1
            _this.$ct.css({ 'left': -_this.imgCount * _this.imgWidth + 'px' })
        }
        _this.setBullet()
        _this.isPlay = false
        console.log(_this.curIndex)
    })

}

_Carousel.prototype.setBullet = function() {
    this.$bullets.removeClass('bullet-active').eq(this.curIndex).addClass('bullet-active')
}

_Carousel.prototype.autoPlay = function() {
    _this = this
    if (this.isPlay) {
        console.log('还在zz执行呢')
        return
    }
    this.interval = setInterval(function() {
        _this.playNext(1)
    }, 1000)
}
module.exports = (function() {
    return {
        init: function($ct) {
            $ct.each(function(index, el) {
                new _Carousel($(el))
            })
        }
    }
})()
