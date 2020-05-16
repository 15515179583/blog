    (function ($) {
         $.fn.extend({
             roll: function (options) {
                 var defaults = {
                     speed: 1
                 };
                 var options = $.extend(defaults, options);
                 var speed = (document.all) ? options.speed : Math.max(1, options.speed - 1);
                 if ($(this) == null) return;
                 var $container = $(this);
                 var $content = this.children(".content_small_tip")//$(".content_small_tip");
                 var init_left = $container.width();
                 $content.css({ left: parseInt(init_left) + "px" });
                 var This = this;
                 var time = setInterval(function () { This.move($container, $content, speed); }, 20); //setInterval会改变this指向，即使加了This=this，也要用匿名函数封装

                 $container.bind("mouseover", function () {
                     clearInterval(time);
                 });
                 $container.bind("mouseout", function () {
                     time = setInterval(function () { This.move($container, $content, speed); }, 20);
                 });
                 // setTimeout(function () { $("#container").slideUp(); }, 30000);  //毫秒单位，显示30s后消失
                 return this;
             },
             move: function ($container, $content, speed) {
                 var container_width = $container.width();
                 var content_width = $content.width();
                 if (parseInt($content.css("left")) + content_width > 0) {
                     $content.css({ left: parseInt($content.css("left")) - speed + "px" });
                     $content.css({color:"#8fabd8"})//改变字体颜色
                 }
                 else {
                     $content.css({ left: parseInt(container_width) + "px" });
                     $content.css({color:"#8fabd8"})//改变字体颜色
                 }
             }
         });
     })(jQuery);
     //插件的调用$("#yourId").roll({speed:#yourSpeed});
     /*$(document).ready(
         function () {
             let message = $(".message")
             message.children(".container_small_tip").eq(0).roll({ speed: 2 });
             message.children(".container_small_tip").eq(1).roll({ speed: 4 });
         }
     );
*/