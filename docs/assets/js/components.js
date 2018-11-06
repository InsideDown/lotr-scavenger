webpackJsonp([2],{

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(353);
module.exports = __webpack_require__(356);


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _Constants=__webpack_require__(52);var _Constants2=_interopRequireDefault(_Constants);var _Events=__webpack_require__(47);var _Events2=_interopRequireDefault(_Events);var _Carousel=__webpack_require__(354);var _Carousel2=_interopRequireDefault(_Carousel);var _VendorTest=__webpack_require__(355);var _VendorTest2=_interopRequireDefault(_VendorTest);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * @module      Components
 * @description Init all generic widgets (carousels, modals, etc)
 */var Components={initialize:function initialize(){console.log('Componentss initialize');// Demo module communication
window.addEventListener(_Events2.default.BREAKPOINT_CHANGE,function(){console.log('Components breakpoint: ',_Constants2.default.currentBreakpoint);});this._initCarousels();this._initVendorTest();},_initCarousels:function _initCarousels(){new _Carousel2.default();},_initVendorTest:function _initVendorTest(){new _VendorTest2.default();}};document.addEventListener('DOMContentLoaded',function(event){Components.initialize();});

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Carousel
 *
 * @description This is supposed to be a carousel widget.
 */var Carousel=function(){function Carousel(){_classCallCheck(this,Carousel);this.initialize();}//uses slick carousel that is automatically bundled into the vendor.js file - could also try bundling on the fly here via require to save space
_createClass(Carousel,[{key:'initialize',value:function initialize(){$('.single-item').slick({infinite:true});}}]);return Carousel;}();exports.default=Carousel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * VendorTest
 *
 * @description This is to test including vendor files from node_modules that aren't an npm package.
 */var VendorTest=function(){function VendorTest(){_classCallCheck(this,VendorTest);this.initialize();}_createClass(VendorTest,[{key:"initialize",value:function initialize(){console.log('VendorTest initialize');Draggable.create("#draggable",{onClick:function onClick(){console.log("clicked");},onDragEnd:function onDragEnd(){console.log("drag ended");}});}}]);return VendorTest;}();exports.default=VendorTest;

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1541513388617
      var cssReload = require("../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},[352]);