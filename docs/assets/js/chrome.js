webpackJsonp([3],{

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(358);
module.exports = __webpack_require__(360);


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {var _test=__webpack_require__(359);var _test2=_interopRequireDefault(_test);var _Constants=__webpack_require__(52);var _Constants2=_interopRequireDefault(_Constants);var _Events=__webpack_require__(47);var _Events2=_interopRequireDefault(_Events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Chrome={initialize:function initialize(){console.log('Chrome initialize');// Demo module communication
window.addEventListener(_Events2.default.BREAKPOINT_CHANGE,function(){console.log('Chrome breakpoint: ',_Constants2.default.currentBreakpoint);});var $container=$('<p><br />This image was added from appChrome.js</p>');var myImage=new Image();myImage.src=_test2.default;$container.prepend(myImage);$('.site-footer .container').prepend($container);}};/**
 * @module      Chrome
 * @description Define functionality for header/footer/navigation
 */document.addEventListener('DOMContentLoaded',function(event){Chrome.initialize();});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = "/assets/images/subdirectory/test.gif";

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1541513127912
      var cssReload = require("../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},[357]);