$(document).ready(function() {
	$('#myContainer').multiscroll({
		sectionsColor: ['#FFF', '#FFF'],
		anchors: ['home', 'tracks'],
		menu: '#menu',
		navigation: false,
		navigationTooltips: ['Home', 'Tracks'],
		loopBottom: false,
		loopTop: false,
		sectionSelector: '.section',
		leftSelector: '.left',
		rightSelector: '.right',
	});
});

