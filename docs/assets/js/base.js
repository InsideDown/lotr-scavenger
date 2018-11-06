webpackJsonp([1],{

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(348);
module.exports = __webpack_require__(351);


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _Constants=__webpack_require__(52);var _Constants2=_interopRequireDefault(_Constants);var _Events=__webpack_require__(47);var _Events2=_interopRequireDefault(_Events);var _BreakpointChange=__webpack_require__(349);var _BreakpointChange2=_interopRequireDefault(_BreakpointChange);var _ResizeEndEvent=__webpack_require__(350);var _ResizeEndEvent2=_interopRequireDefault(_ResizeEndEvent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * @module      Base
 * @description Setup global config and utilities
 */var Base={initialize:function initialize(){console.log('Base initialize');this._initEvents();},_initEvents:function _initEvents(){(0,_BreakpointChange2.default)();(0,_ResizeEndEvent2.default)();// Demo module communication
window.addEventListener(_Events2.default.BREAKPOINT_CHANGE,function(){console.log('Base breakpoint: ',_Constants2.default.currentBreakpoint);});}};document.addEventListener('DOMContentLoaded',function(event){Base.initialize();});

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(exports,"__esModule",{value:true});var _Constants=__webpack_require__(52);var _Constants2=_interopRequireDefault(_Constants);var _Events=__webpack_require__(47);var _Events2=_interopRequireDefault(_Events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * BreakpointChange
 * @description  Create pseudo 'breakpointChange' event
 */var BreakpointChange=function BreakpointChange(){var $elIndicator=$('<div></div>',{'id':'breakpoint-indicator'}).appendTo($('body'));var zIndex=$elIndicator.css('z-index');var updateConstants=function updateConstants(){_Constants2.default.currentBreakpoint=_Constants2.default.breakpoints[zIndex];_Constants2.default.isMobileView=_Constants2.default.currentBreakpoint==='mobile'?true:false;_Constants2.default.isTabletView=_Constants2.default.currentBreakpoint==='tablet'?true:false;_Constants2.default.isDesktopView=_Constants2.default.currentBreakpoint==='desktop'?true:false;};updateConstants();window.addEventListener('resize',function(event){var newZI=$elIndicator.css('z-index');if(newZI!==zIndex){zIndex=newZI;updateConstants();var customResizeEvent=new CustomEvent(_Events2.default.BREAKPOINT_CHANGE,{breakpoint:_Constants2.default.breakpoints[zIndex],mobile:_Constants2.default.isMobileView,tablet:_Constants2.default.isTabletView,desktop:_Constants2.default.isDesktopView});window.dispatchEvent(customResizeEvent);// $.event.trigger(Events.BREAKPOINT_CHANGE, {
// 	breakpoint: Constants.breakpoints[zIndex],
// 	mobile: Constants.isMobileView,
// 	tablet: Constants.isTabletView,
// 	desktop: Constants.isDesktopView
// });
}});};exports.default=BreakpointChange;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Events=__webpack_require__(47);var _Events2=_interopRequireDefault(_Events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var ResizeEndEvent=function ResizeEndEvent(){var resizeTimer=void 0;var delay=100;window.addEventListener('resize',function(event){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){var resizeEvent=new Event(_Events2.default.WINDOW_RESIZE_END);window.dispatchEvent(resizeEvent);//$.event.trigger(Events.WINDOW_RESIZE_END);
},delay);});};/**
 * ResizeEndEvent
 * @description  Broadcasts a pseudo 'resizeEnd' event
 */exports.default=ResizeEndEvent;

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1541513388616
      var cssReload = require("../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});/**
 * Events
 * @description  Defines global application events
 */var Events={WINDOW_RESIZE_END:'onWindowResizeEnd',BREAKPOINT_CHANGE:'onBreakpointChange'};exports.default=Events;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});/**
 * Constants
 * @description  Defines application constants
 */var Constants={isMobileView:null,isTabletView:null,isDesktopView:null,currentBreakpoint:null,breakpoints:{1:'mobile',2:'tablet',3:'desktop'}};exports.default=Constants;

/***/ })

},[347]);