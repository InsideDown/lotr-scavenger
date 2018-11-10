webpackJsonp([2],{

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(354);
module.exports = __webpack_require__(356);


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _Constants=__webpack_require__(95);var _Constants2=_interopRequireDefault(_Constants);var _Events=__webpack_require__(64);var _Events2=_interopRequireDefault(_Events);var _ScavengerHunt=__webpack_require__(355);var _ScavengerHunt2=_interopRequireDefault(_ScavengerHunt);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Home={initialize:function initialize(){console.log('Home initialize');// Demo module communication
window.addEventListener(_Events2.default.BREAKPOINT_CHANGE,function(){console.log('Home breakpoint: ',_Constants2.default.currentBreakpoint);});}};/**
 * @module      Home
 * @description Functionality specific to the homepage
 */document.addEventListener('DOMContentLoaded',function(event){Home.initialize();new _ScavengerHunt2.default();});

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * VendorTest
 *
 * @description This is to test including vendor files from node_modules that aren't an npm package.
 *///import Constants from 'scripts/config/Constants';
var ScavengerHunt=function(){function ScavengerHunt(){_classCallCheck(this,ScavengerHunt);this.ui={};console.log($);this.initialize();}_createClass(ScavengerHunt,[{key:"checkGeolocation",value:function checkGeolocation(){if(navigator.geolocation){console.log("geolocaiton allowed");}}},{key:"initialize",value:function initialize(){this.checkGeolocation();}}]);return ScavengerHunt;}();exports.default=ScavengerHunt;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1541884927722
      var cssReload = require("../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},[353]);