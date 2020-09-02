module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/overview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/overview.js":
/*!***************************!*\
  !*** ./pages/overview.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import logo from '../assets/images/logo.png';

class Overview extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      discount: '10%',
      enabled: false
    });

    _defineProperty(this, "handleSubmit", () => {
      this.setState({
        discount: this.state.discount
      });
      console.log('submission', this.state);
    });

    _defineProperty(this, "handleChange", field => {
      return value => this.setState({
        [field]: value
      });
    });

    _defineProperty(this, "handleToggle", () => {
      this.setState(({
        enabled
      }) => {
        return {
          enabled: !enabled
        };
      });
    });
  }

  render() {
    const {
      discount,
      enabled
    } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled';
    return __jsx("section", {
      className: "m-0 newcass"
    }, __jsx("div", {
      className: "top-header"
    }, __jsx("div", {
      className: "left-area"
    }, __jsx("img", {
      src: '../assets/images/logo.png',
      alt: "logo"
    }), " ", __jsx("label", null, "Aero / "), " ", __jsx("h5", null, "Overview")), __jsx("div", {
      className: "right-area"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Learn More"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Settings"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      submit: true
    }, "Manage buttons"))), __jsx("section", {
      className: "container"
    }, __jsx("div", {
      className: "dflex stylish-area"
    }, __jsx("img", {
      src: '../assets/images/logo.png',
      alt: "logo"
    }), __jsx("div", {
      className: "heading-para"
    }, __jsx("h5", null, "Welcome to Aero."), __jsx("p", null, "With Aero you can improve your store's navigation and shopping experience. Aero can get your customers to the right places quicker and alleviate soem of the pain when nevigating. You can create link tp important pages, promotes specific products/collections and much more."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
      className: "polories-layout"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Manage",
      description: "Craete and Manage button links."
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0"
    }, __jsx("label", {
      className: "margin0 bold-text"
    }, "Craete and Manage button links for your store."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      submit: true
    }, "Manage"))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Settings",
      description: "Aero settings"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0"
    }, __jsx("label", {
      className: "margin0 bold-text"
    }, "Control Aero's appearance and global settings inculding visibility."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Settings"))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Installation ",
      description: "Check current theme for Aero."
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0"
    }, __jsx("label", {
      className: "margin0 bold-text"
    }, "Just switched theme or experiencing issues with Aero? Click teh sync button to check and reinstall"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Sync"))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Knowledge Base ",
      description: "View support documents"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0"
    }, __jsx("label", {
      className: "margin0 bold-text"
    }, "want to learn more about Aero and how it works? Visit the Knowledge Base."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "View"))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Request Support"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0"
    }, __jsx("label", {
      className: "margin0 bold-text"
    }, "If you still having issues with Aero working with your store and have checked the learn More section, you can request support."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Request"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Overview);

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvb3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvcG9sYXJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiT3ZlcnZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwiZW5hYmxlZCIsInNldFN0YXRlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGQiLCJ2YWx1ZSIsInJlbmRlciIsImNvbnRlbnRTdGF0dXMiLCJ0ZXh0U3RhdHVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7Q0FFQTs7QUFFRSxNQUFNQSxR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QVMsRUFBQztBQUFmLE9BQ0U7QUFBTyxlQUFTLEVBQUM7QUFBakIsNEdBREYsRUFFRSxNQUFDLHVEQUFEO0FBQVEsWUFBTTtBQUFkLGNBRkYsQ0FERixDQURGLENBSkYsQ0E5QkYsRUE0Q0UsTUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0UsV0FBSyxFQUFDLGlCQURSO0FBRUUsaUJBQVcsRUFBQztBQUZkLE9BSUUsTUFBQyxxREFBRDtBQUFNLGVBQVM7QUFBZixPQUNFLE1BQUMscURBQUQsUUFDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBTyxlQUFTLEVBQUM7QUFBakIsbUZBREYsRUFFRSxNQUFDLHVEQUFEO0FBQVEsWUFBTTtBQUFkLGNBRkYsQ0FERixDQURGLENBSkYsQ0E1Q0YsRUEwREUsTUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0UsV0FBSyxFQUFDO0FBRFIsT0FHRSxNQUFDLHFEQUFEO0FBQU0sZUFBUztBQUFmLE9BQ0UsTUFBQyxxREFBRCxRQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFPLGVBQVMsRUFBQztBQUFqQix3SUFERixFQUVFLE1BQUMsdURBQUQ7QUFBUSxZQUFNO0FBQWQsaUJBRkYsQ0FERixDQURGLENBSEYsQ0ExREYsQ0FWQSxDQVpGLENBREY7QUFrR0Q7O0FBOUdvQzs7QUFrSXhCSix1RUFBZixFOzs7Ozs7Ozs7OztBQ3RJRiw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9vdmVydmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvb3ZlcnZpZXcuanNcIik7XG4iLCJpbXBvcnQge0J1dHRvbixDYXJkLEZvcm0sTGF5b3V0LFBhZ2UsfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XHJcbi8vIGltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnO1xyXG4gIFxyXG4gIGNsYXNzIE92ZXJ2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBkaXNjb3VudDogJzEwJScsXHJcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIFxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGlzY291bnQsIGVuYWJsZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgY29udGVudFN0YXR1cyA9IGVuYWJsZWQgPyAnRGlzYWJsZScgOiAnRW5hYmxlJztcclxuICAgICAgICBjb25zdCB0ZXh0U3RhdHVzID0gZW5hYmxlZCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCc7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibS0wIG5ld2Nhc3NcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtYXJlYVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Jy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnfSBhbHQ9XCJsb2dvXCIgLz4gPGxhYmVsPkFlcm8gLyA8L2xhYmVsPiA8aDU+T3ZlcnZpZXc8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc3VibWl0PkxlYXJuIE1vcmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+U2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5NYW5hZ2UgYnV0dG9uczwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGZsZXggc3R5bGlzaC1hcmVhXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17Jy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXBhcmFcIj5cclxuICAgICAgICAgICAgICAgIDxoNT5XZWxjb21lIHRvIEFlcm8uPC9oNT5cclxuICAgICAgICAgICAgICAgIDxwPldpdGggQWVybyB5b3UgY2FuIGltcHJvdmUgeW91ciBzdG9yZSdzIG5hdmlnYXRpb24gYW5kIHNob3BwaW5nIGV4cGVyaWVuY2UuIEFlcm8gY2FuIGdldCB5b3VyIGN1c3RvbWVycyB0byB0aGUgcmlnaHQgcGxhY2VzIHF1aWNrZXIgYW5kIGFsbGV2aWF0ZSBzb2VtIG9mIHRoZSBwYWluIHdoZW4gbmV2aWdhdGluZy4gWW91IGNhbiBjcmVhdGUgbGluayB0cCBpbXBvcnRhbnQgcGFnZXMsIHByb21vdGVzIHNwZWNpZmljIHByb2R1Y3RzL2NvbGxlY3Rpb25zIGFuZCBtdWNoIG1vcmUuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwicG9sb3JpZXMtbGF5b3V0XCI+XHJcblxyXG4gICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICB0aXRsZT1cIk1hbmFnZVwiXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJDcmFldGUgYW5kIE1hbmFnZSBidXR0b24gbGlua3MuXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4wIGJvbGQtdGV4dFwiPkNyYWV0ZSBhbmQgTWFuYWdlIGJ1dHRvbiBsaW5rcyBmb3IgeW91ciBzdG9yZS48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+TWFuYWdlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWVybyBzZXR0aW5nc1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN0eWxlIG1hcmdpbjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMCBib2xkLXRleHRcIj5Db250cm9sIEFlcm8ncyBhcHBlYXJhbmNlIGFuZCBnbG9iYWwgc2V0dGluZ3MgaW5jdWxkaW5nIHZpc2liaWxpdHkuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN1Ym1pdD5TZXR0aW5nczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICB0aXRsZT1cIkluc3RhbGxhdGlvbiBcIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ2hlY2sgY3VycmVudCB0aGVtZSBmb3IgQWVyby5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdHlsZSBtYXJnaW4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjAgYm9sZC10ZXh0XCI+SnVzdCBzd2l0Y2hlZCB0aGVtZSBvciBleHBlcmllbmNpbmcgaXNzdWVzIHdpdGggQWVybz8gQ2xpY2sgdGVoIHN5bmMgYnV0dG9uIHRvIGNoZWNrIGFuZCByZWluc3RhbGw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3VibWl0PlN5bmM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJLbm93bGVkZ2UgQmFzZSBcIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVmlldyBzdXBwb3J0IGRvY3VtZW50c1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN0eWxlIG1hcmdpbjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMCBib2xkLXRleHRcIj53YW50IHRvIGxlYXJuIG1vcmUgYWJvdXQgQWVybyBhbmQgaG93IGl0IHdvcmtzPyBWaXNpdCB0aGUgS25vd2xlZGdlIEJhc2UuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN1Ym1pdD5WaWV3PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiUmVxdWVzdCBTdXBwb3J0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4wIGJvbGQtdGV4dFwiPklmIHlvdSBzdGlsbCBoYXZpbmcgaXNzdWVzIHdpdGggQWVybyB3b3JraW5nIHdpdGggeW91ciBzdG9yZSBhbmQgaGF2ZSBjaGVja2VkIHRoZSBsZWFybiBNb3JlIHNlY3Rpb24sIHlvdSBjYW4gcmVxdWVzdCBzdXBwb3J0LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+UmVxdWVzdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXNzaW9uJywgdGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCh7IGVuYWJsZWQgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgZW5hYmxlZDogIWVuYWJsZWQgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9