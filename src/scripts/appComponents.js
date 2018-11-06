/**
 * @module      Components
 * @description Init all generic widgets (carousels, modals, etc)
 */

import Constants from 'scripts/config/Constants';
import Events from 'scripts/config/Events';

import Carousel from 'scripts/widgets/Carousel';
import VendorTest from 'scripts/widgets/VendorTest';

const Components = {
	initialize() {
		console.log('Componentss initialize');

		// Demo module communication
		window.addEventListener(Events.BREAKPOINT_CHANGE, () => {
			console.log('Components breakpoint: ', Constants.currentBreakpoint);
		});

		this._initCarousels();
		this._initVendorTest();
	},

	_initCarousels() {
		new Carousel();
	},

	_initVendorTest() {
		new VendorTest();
	},
};

document.addEventListener('DOMContentLoaded', function(event) {
	Components.initialize();
});
