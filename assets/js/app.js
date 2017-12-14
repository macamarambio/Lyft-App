$(document).ready(function() {
/*splash*/
	setTimeout(function() {
		$(".content").fadeOut(500);
		},3000);
		setTimeout(function() {
			$(".content2").fadeIn(500);
		});
});

/* Icon Select */

$(function(){
	$widget("custom.iconselectmenu",
	$.ui.selectmenu, {
		_renderItem: function (ul, item) {
			var li = $("<li"),
			wrapper = $("<div>", {text: item.label});

			if (item.disabled) {
				li.addClass("ui-state-disabled");
			}

			$("<span>", {
				style: item.element.attr("data-style"),
				"class": "ui-icon" + item.element.attr("data-class")
			})
			.appendTo(wrapper);

			return li.append(wrapper).appendTo(ul);
		}
	});

	$("#pais")
	.iconselectmenu()
	.iconselectmenu("menuWidget")
	.addClass("ui-menu-icons customicons");

})