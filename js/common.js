$(function() {
	$('.spoiler-link').click(function(e) {
		e.preventDefault();
		var content = '#' + e.target.id + 'Content';
		$(content).slideToggle();
	});

	document.getElementById('year').innerText = new Date().getFullYear();

	var grid = document.querySelector('.grid');

	var msnry = new Masonry(grid, {
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});

	imagesLoaded(grid).on('progress', function () {
		// layout Masonry after each image loads
		msnry.layout();
	});
});
