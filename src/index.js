var $= require('jquery')
 require('./css/style.css')
const Carousel =require('./js/com/carousel.js')
const Expose = require('./js/com/expose.js')
const GoTop = require('./js/com/gotop.js')
const WaterFallLayout =require('./js/com/waterfall.js')

new GoTop()
Carousel.init($('.lunbo'))
new WaterFallLayout()


new Expose($('#home'), function(node) {
    $('#header .nav-bar li').eq(0).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')

})
new Expose($('#service'), function(node) {
    $('#header .nav-bar li').eq(1).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')

})
new Expose($('#memory'), function(node) {
    $('#header .nav-bar li').eq(2).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')

})
new Expose($('#about'), function(node) {
    $('#header .nav-bar li').eq(3).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')
})
new Expose($('#team'), function(node) {
    $('#header .nav-bar li').eq(4).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')
})
new Expose($('#contact'), function(node) {
    $('#header .nav-bar li').eq(5).addClass('nav-bar-active').siblings().removeClass('nav-bar-active')
})




