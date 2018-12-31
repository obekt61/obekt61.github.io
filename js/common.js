$(function() {


	$('.spoiler-link').click(function(e) {

		e.preventDefault();
		var content = '#' + e.target.id + 'Content';
		$(content).slideToggle();
		
	});

	// Custom JS

});
