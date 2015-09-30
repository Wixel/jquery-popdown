/*!
 * Simple jQuery Popdown Plugin & Content Loader
 *
 * @author   : http://twitter.com/SeanNieuwoudt
 * @author   : http://twitter.com/wixelhq
 * @url		 : http://github.com/Wixel/jquery-popdown.git
 * @copyright: 2015 Wixel
 * @license  : MIT license
 * @version  : 1.1
 */
!function(o){o.fn.show_popdown=function(n,t){o("#popdown-opacity").length>0&&o("#popdown-opacity").remove(),opacity=o("<div />").attr("id","popdown-opacity").css({position:"absolute",top:0,left:0,width:o(document).outerWidth(!0),height:o(document).outerHeight(!0),zIndex:99998,display:"none"}),container=o('<div class="popdown-loading" />').attr("id","popdown-dialog").css({maxWidth:t.width,height:t.height,zIndex:99999,margin:"0 auto",position:"relative",display:"none"}),o("body").append(opacity),o("#popdown-opacity").fadeIn(100).append(container),o("#popdown-opacity").append(container).stop().animate({opacity:1},100,function(){o("#popdown-dialog").fadeIn(50,function(){o.get(n,function(n){o("#popdown-dialog").html(n).addClass("popdown-done").removeClass("popdown-loading"),o("html, body").animate({scrollTop:0},"fast")})})})},o.fn.close_popdown=function(){o("#popdown-opacity").length>0&&o("#popdown-dialog").stop().animate({opacity:0,height:0},200,function(){o("#popdown-opacity").remove()})},o.fn.popdown=function(n){var t={width:610,height:"auto"},n=o.extend(t,n);return o(window).resize(function(){o("#popdown-opacity").length>0&&o("#popdown-opacity").css({width:o(document).outerWidth(),height:o(document).outerHeight()})}),o(document).keyup(function(n){27===n.keyCode&&o.fn.close_popdown()}),o(document).on("click",".close-popdown",function(n){o(this).is(".close-popdown")||n.preventDefault(),o.fn.close_popdown()}),o(document).click(function(n){o(n.target).closest("#popdown-dialog").length||o("#popdown-dialog").is(":visible")&&o.fn.close_popdown()}),this.each(function(){var t=o(this);t.bind("click",function(p){t.is("a")&&p.preventDefault(),o("#popdown-opacity").is(":visible")?o.fn.close_popdown():t.data("uri")?o.fn.show_popdown(t.data("uri"),n):t.attr("href")?o.fn.show_popdown(t.attr("href"),n):alert("No popdown dialog set for this action.")})})}}(jQuery);
