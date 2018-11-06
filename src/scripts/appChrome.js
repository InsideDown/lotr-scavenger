/**
 * @module      Chrome
 * @description Define functionality for header/footer/navigation
 */

import testImage from 'images/subdirectory/test.gif';

import Constants from 'scripts/config/Constants';
import Events from 'scripts/config/Events';

const Chrome = {
	initialize() {
		console.log('Chrome initialize');

		// Demo module communication
		window.addEventListener(Events.BREAKPOINT_CHANGE, () => {
			console.log('Chrome breakpoint: ', Constants.currentBreakpoint);
		});

		let $container = $('<p><br />This image was added from appChrome.js</p>');
		let myImage = new Image();
		myImage.src = testImage;
		$container.prepend(myImage);
		$('.site-footer .container').prepend($container);
	},
};

document.addEventListener('DOMContentLoaded', function(event) {
	Chrome.initialize();
});
