var snoop = $("#snoop");

snoop.animate({textIndent: 0}, {
	step: function(now,fx) {
		$(this).css('-webkit-transform','rotate('+now+'deg)'); 
	},
	duration:5000
},'linear');