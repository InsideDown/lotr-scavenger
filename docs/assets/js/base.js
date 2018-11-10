webpackJsonp([1],{

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(346);
module.exports = __webpack_require__(349);


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _Constants=__webpack_require__(95);var _Constants2=_interopRequireDefault(_Constants);var _Events=__webpack_require__(64);var _Events2=_interopRequireDefault(_Events);var _BreakpointChange=__webpack_require__(347);var _BreakpointChange2=_interopRequireDefault(_BreakpointChange);var _ResizeEndEvent=__webpack_require__(348);var _ResizeEndEvent2=_interopRequireDefault(_ResizeEndEvent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * @module      Base
 * @description Setup global config and utilities
 */var Base={initialize:function initialize(){console.log('Base initialize');this._initEvents();},_initEvents:function _initEvents(){(0,_BreakpointChange2.default)();(0,_ResizeEndEvent2.default)();// Demo module communication
window.addEventListener(_Events2.default.BREAKPOINT_CHANGE,function(){console.log('Base breakpoint: ',_Constants2.default.currentBreakpoint);});}};document.addEventListener('DOMContentLoaded',function(event){Base.initialize();});

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(exports,"__esModule",{value:true});var _Constants=__webpack_require__(95);var _Constants2=_interopRequireDefault(_Constants);var _Events=__webpack_require__(64);var _Events2=_interopRequireDefault(_Events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * BreakpointChange
 * @description  Create pseudo 'breakpointChange' event
 */var BreakpointChange=function BreakpointChange(){var $elIndicator=$('<div></div>',{'id':'breakpoint-indicator'}).appendTo($('body'));var zIndex=$elIndicator.css('z-index');var updateConstants=function updateConstants(){_Constants2.default.currentBreakpoint=_Constants2.default.breakpoints[zIndex];_Constants2.default.isMobileView=_Constants2.default.currentBreakpoint==='mobile'?true:false;_Constants2.default.isTabletView=_Constants2.default.currentBreakpoint==='tablet'?true:false;_Constants2.default.isDesktopView=_Constants2.default.currentBreakpoint==='desktop'?true:false;};updateConstants();window.addEventListener('resize',function(event){var newZI=$elIndicator.css('z-index');if(newZI!==zIndex){zIndex=newZI;updateConstants();var customResizeEvent=new CustomEvent(_Events2.default.BREAKPOINT_CHANGE,{breakpoint:_Constants2.default.breakpoints[zIndex],mobile:_Constants2.default.isMobileView,tablet:_Constants2.default.isTabletView,desktop:_Constants2.default.isDesktopView});window.dispatchEvent(customResizeEvent);// $.event.trigger(Events.BREAKPOINT_CHANGE, {
// 	breakpoint: Constants.breakpoints[zIndex],
// 	mobile: Constants.isMobileView,
// 	tablet: Constants.isTabletView,
// 	desktop: Constants.isDesktopView
// });
}});};exports.default=BreakpointChange;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Events=__webpack_require__(64);var _Events2=_interopRequireDefault(_Events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var ResizeEndEvent=function ResizeEndEvent(){var resizeTimer=void 0;var delay=100;window.addEventListener('resize',function(event){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){var resizeEvent=new Event(_Events2.default.WINDOW_RESIZE_END);window.dispatchEvent(resizeEvent);//$.event.trigger(Events.WINDOW_RESIZE_END);
},delay);});};/**
 * ResizeEndEvent
 * @description  Broadcasts a pseudo 'resizeEnd' event
 */exports.default=ResizeEndEvent;

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1541811078168
      var cssReload = require("../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});/**
 * Events
 * @description  Defines global application events
 */var Events={WINDOW_RESIZE_END:'onWindowResizeEnd',BREAKPOINT_CHANGE:'onBreakpointChange'};exports.default=Events;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});/**
 * Constants
 * @description  Defines application constants
 */var Constants={isMobileView:null,isTabletView:null,isDesktopView:null,currentBreakpoint:null,breakpoints:{1:'mobile',2:'tablet',3:'desktop'},speedClues:[{title:"The shire",quote:"some quote will go here",latitude:39.91550,longitude:-86.18744},{title:"The prancing pony",quote:"some other quote number two will live here",latitude:39.91596,longitude:-86.18763},{title:"Lothlorien",quote:"some third quote here",latitude:39.91628,longitude:-86.187588}]};exports.default=Constants;

/***/ })

},[345]);