var gridster;

			$(function() {
				gridtster = $(".gridster > ul").gridster({
					widget_margins: [10, 10], 
					widget_base_dimensions: [190, 210],
					min_cols: 6
				}).data('gridster');
			});