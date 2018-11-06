/**
 * @module      Base
 * @description Setup global config and utilities
 */

import Constants from 'scripts/config/Constants';
import Events from 'scripts/config/Events';
import breakpointChange from 'scripts/utilities/BreakpointChange';
import resizeEndEvent from 'scripts/utilities/ResizeEndEvent';

const Base = {
	initialize() {
		console.log('Base initialize');
		this._initEvents();
	},

	_initEvents() {
		breakpointChange();
		resizeEndEvent();

		// Demo module communication
		window.addEventListener(Events.BREAKPOINT_CHANGE, () => {
			console.log('Base breakpoint: ', Constants.currentBreakpoint);
		});
	},
};

document.addEventListener('DOMContentLoaded', function(event) {
	Base.initialize();
});
