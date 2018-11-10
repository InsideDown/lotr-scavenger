/**
 * Constants
 * @description  Defines application constants
 */

const Constants = {
	isMobileView: null,
	isTabletView: null,
	isDesktopView: null,

	currentBreakpoint: null,

	breakpoints: {
		1: 'mobile',
		2: 'tablet',
		3: 'desktop'
	},

	speedClues: [
		{
			title: "The shire",
			quote: "some quote will go here",
			latitude: 39.91550,
			longitude: -86.18744
		},
		{
			title: "The prancing pony",
			quote: "some other quote number two will live here",
			latitude: 39.91596,
			longitude: -86.18763
		},
		{
			title: "Lothlorien",
			quote: "some third quote here",
			latitude: 39.91628,
			longitude: -86.187588
		}
	]
};

export default Constants;
