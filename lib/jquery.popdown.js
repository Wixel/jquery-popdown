/*!
 * Simple jQuery Popdown Plugin & Content Loader
 *
 * @author   : @SeanNieuwoudt
 * @url		 : http://github.com/Wixel/jquery-popdown.git
 * @copyright: 2013 Wixel
 * @license  : MIT license
 */
;(function($){
	
	/**
	 * Generate & display the popdown
	 *
	 * @param string uri (content to load)
	 * @param object options
	 * @return void
	 */
	$.fn.show_popdown = function(uri, options) {
		
		// Remove previous containers if they exist
		if($('#popdown-opacity').length > 0) {
			$('#popdown-opacity').remove();
		}
		
		// Construct the background blend
		opacity = $('<div />').attr('id', 'popdown-opacity').css({
			position: 'absolute',
			top		: 0,
			left	: 0,
			width 	: $(window).outerWidth(),
			height 	: $(window).outerHeight(),
			zIndex	: 99998,
			display : 'none'
		});

		// Construct the content container
		container = $('<div class="popdown-loading" />').attr('id', 'popdown-dialog').css({
			width   : options.width,
			height  : options.height,
			zIndex	: 99999,
			margin	: '0 auto',
			position: 'relative',
			display : 'none'
		});

		// Let's add the opacity to the doc body
		$('body').append(opacity)

		// Fade in the background blend & add content container
		$('#popdown-opacity').fadeIn(100).append(container);
		
		// Fade in the container and load the data
		$('#popdown-opacity').append(container).animate({
			opacity: 1.0
		}, 100, function(){
			$.get(uri, function(resp){	
				$('#popdown-dialog').fadeIn(300, function(){
					$('#popdown-dialog').removeClass('popdown-loading').addClass('popdown-done').html(resp);
				});
			});
		});
	}

	/**
	 * Close the popdown and remove it from the DOM
	 *
	 * @return void
	 */
	$.fn.close_popdown = function() {
		if($('#popdown-opacity').length > 0) {
			$('#popdown-dialog').animate({
				opacity:0,
				height:0
			}, 200, function(){
				$('#popdown-opacity').remove();
			});
		}		
	}

	/**
	 * Initialize the popdown plugin
	 *
	 * @return void
	 */
	$.fn.popdown = function(options) {  

		var defaults = {
			width :610,
			height:'auto'
		};

		var options = $.extend(defaults, options);

		// Re-size the opacity when the window is resized
		$(window).resize(function() {
			if($('#popdown-opacity').length > 0) {
				$('#popdown-opacity').css({
					width : $(window).outerWidth(),
					height: $(window).outerHeight()
				});
			}		
		});		

		// Bind the document ESC key
		$(document).keyup(function(e){
			if(e.keyCode === 27) {
				$.fn.close_popdown();
			}
		});
		
		// General element to close the popdown
		$(document).on('click', '.close-popdown', function(e){
			if($(this).is('a')) {
				e.preventDefault();
			}
			$.fn.close_popdown();
		});

		// Bind to each matching element
		return this.each(function() {  

			var self = $(this);

			self.bind('click', function(e){
				
				if(self.is('a')) {
					e.preventDefault();
				}

				if($('#popdown-opacity').is(':visible')) {
					$.fn.close_popdown();
				} else {
					if(self.data('uri')) {
						$.fn.show_popdown(self.data('uri'), options);
					} else if(self.attr('href')) {
						$.fn.show_popdown(self.attr('href'), options);
					} else {
						// @TODO: Notify that there is no page to load
					}
				}
			});
		}); 		
	};  	
})(jQuery);