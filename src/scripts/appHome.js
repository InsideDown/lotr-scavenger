/**
 * @module      Home
 * @description Functionality specific to the homepage
 */

import Constants from 'scripts/config/Constants';
import Events from 'scripts/config/Events';

const Home = {
	initialize() {
		console.log('Home initialize');

		// Demo module communication
		window.addEventListener(Events.BREAKPOINT_CHANGE, () => {
			console.log('Home breakpoint: ', Constants.currentBreakpoint);
		});
	},
};

document.addEventListener('DOMContentLoaded', function(event) {
	Home.initialize();
});
