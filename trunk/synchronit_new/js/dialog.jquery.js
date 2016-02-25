(function($) {
	$.widget("synchronit.dialog", {

		options : {
			style : {
				width : '60%',
				top : '20%',
				position : 'fixed',
				left : '20%',
				zIndex : 101
			},
			fadeInTime : 500,
			fadeOutTime : 500,
			easeIn : 'easeOutCubic',
			easeOut : 'easeOutCubic',
			backdrop : true,
			backdropOpacity : 0.7,
			dialogClass : ""

		},
		open : function() {
			var $elem = this.element;
			var $dialogContainer = $elem.parents('.dialog:eq(0)');
			$dialogContainer.css(this.options.style);
			$dialogContainer.css('opacity', 0);
			$dialogContainer.css('display', 'block');

			$dialogContainer.animate({
				opacity : 1.0
			}, this.options.fadeInTime, this.options.easeIn);
			this._showBackdrop(this.options.style.zIndex);
			if (this.options.scrollToPosition) {
				$('body, html').animate({
					scrollTop : Math.max(0, this.options.top - 30)
				}, 'slow');
			}

		},
		_getDialogZIndex : function() {
			var maxZIndex = this.options.style.zIndex;

			maxZIndex += 5;
			return maxZIndex;
		},
		_showBackdrop : function(dialogZIndex) {
			if (this.options.backdrop) {
				var $backdrop = $("#dialog-shadow");
				if (!$backdrop.is(':visible')) {
					var backdropZIndex = dialogZIndex - 1;
					var backdropOpactiy = this.options.backdropOpacity;

					$backdrop.css('opacity', 0);
					$backdrop.css('display', 'block');
					$backdrop.css('zIndex', backdropZIndex);

					$backdrop.animate({
						opacity : backdropOpactiy
					}, this.options.fadeInTime, this.options.easeIn);

				}
			}
		},

		close : function() {
			if (this.options.beforeClose && !this.options.beforeClose()) {
				return;
			}
			var $elem = this.element;

			var $dialogContainer = $elem.parents('.dialog:eq(0)');
			var $backdrop = $("#dialog-shadow");
			$backdrop.animate({
				opacity : 0.0
			}, this.options.fadeOutTime, this.options.easeOut);
			var onClose = this.options.onClose;
			var destroyOnClose = this.options.destroyOnClose;
			$dialogContainer.animate({
				opacity : 0.0
			}, this.options.fadeOutTime, this.options.easeOut, function() {
				$dialogContainer.css('display', 'none');
				$backdrop.css('display', 'none');
				if (onClose) {
					onClose();
				}
				if (destroyOnClose) {
					$dialogContainer.remove();
					$backdrop.remove();
				}
			});

		},
		isOpen : function() {

		},
		_create : function() {
			var $elem = this.element;

			if (!$elem.parent() || $elem.parent().length === 0) {
				$("body").append($elem);
			}
			if ($elem.data('dialog-class')) {
				this.options.dialogClass = $elem.data('dialog-class');
			}
			$elem.wrap("<div class='dialog " + this.options.dialogClass
					+ "' />");

			var $container = $elem.parent();
			$elem.wrap('<div class="contentContainer dialog-content" />');
			$elem.append('<div class="dialog-close-button"><i class="glyphicons remove"></i></div>');
			var $close = $container.find(".dialog-close-button");
			
			var that = this;
			$close.off('click.dialog');
			$close.on('click.dialog', function() {
				that.close();
			});
			if ($(".dialog-shadow").length === 0) {
				$("body").append(
						"<div id='dialog-shadow' class='dialog-shadow' />");
			}
			// this.open();
		}
	});

})(jQuery);
