/**
 * ResizeEndEvent
 * @description  Broadcasts a pseudo 'resizeEnd' event
 */

import Events from 'scripts/config/Events';

const ResizeEndEvent = function() {
	let resizeTimer;
	let delay = 100;

	window.addEventListener('resize', function(event) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			var resizeEvent = new Event(Events.WINDOW_RESIZE_END);
			window.dispatchEvent(resizeEvent);
			//$.event.trigger(Events.WINDOW_RESIZE_END);
		}, delay);
	});
};

export default ResizeEndEvent;
