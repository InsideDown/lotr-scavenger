webpackJsonp([2],{

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(354);
module.exports = __webpack_require__(355);


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _Constants=__webpack_require__(94);var _Constants2=_interopRequireDefault(_Constants);var _Events=__webpack_require__(64);var _Events2=_interopRequireDefault(_Events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * @module      Home
 * @description Functionality specific to the homepage
 */var Home={initialize:function initialize(){console.log('Home initialize');// Demo module communication
window.addEventListener(_Events2.default.BREAKPOINT_CHANGE,function(){console.log('Home breakpoint: ',_Constants2.default.currentBreakpoint);});}};document.addEventListener('DOMContentLoaded',function(event){Home.initialize();});

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1541801131122
      var cssReload = require("../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},[353]);