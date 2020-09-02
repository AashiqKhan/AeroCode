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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/manage.js");
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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/manage.js":
/*!*************************!*\
  !*** ./pages/manage.js ***!
  \*************************/
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
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons */ "react-icons");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import logo from '../assets/images/logo.png';



class Manage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
      className: "top-header mb-0"
    }, __jsx("div", {
      className: "left-area"
    }, __jsx("img", {
      src: '../assets/images/logo.png',
      alt: "logo"
    }), " ", __jsx("label", null, "Aero / "), " ", __jsx("h5", null, "Manage"))), __jsx("div", {
      className: "top-header new-headline"
    }, __jsx("div", {
      className: "left-area"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Learn More")), __jsx("div", {
      className: "right-area"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Settings"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      submit: true
    }, "Dashboard"))), __jsx("section", {
      className: "container"
    }, __jsx("div", {
      className: "stylish-area"
    }, __jsx("h5", null, "Add a link"), __jsx("p", null, "Below you can select the links that will appear when the button widget is clicked in your store. You can choose to link the product, collections, pages, blogs. blog posts and custom URLs.")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-row"
    }, __jsx("div", {
      className: "form-group col-lg-3 col-md-3"
    }, __jsx("label", null, "Title"), __jsx("input", {
      type: "text",
      className: "form-control",
      id: "",
      placeholder: "e.g - Sales Items"
    })), __jsx("div", {
      className: "form-group col-lg-3 col-md-3"
    }, __jsx("label", null, "Link Type"), __jsx("select", {
      id: "inputState",
      className: "form-control"
    }, __jsx("option", {
      selected: ""
    }, "Product"), __jsx("option", null, "Items"), __jsx("option", null, "Product"))), __jsx("div", {
      className: "form-group col-lg-6 col-md-6"
    }, __jsx("label", {
      for: "exampleFormControlFile1"
    }, "Link"), __jsx("div", {
      className: "search-products"
    }, __jsx("input", {
      type: "text",
      className: "newinput",
      id: "",
      placeholder: "Search Products"
    }), __jsx("button", null, "Browse"), __jsx("input", {
      type: "file",
      className: "form-control-file",
      id: "",
      placeholder: "Search Products"
    })))), __jsx("div", {
      className: "form-row mt-4"
    }, __jsx("div", {
      className: "form-group col-lg-2 col-md-3"
    }, __jsx("label", null, "Button Color"), __jsx("div", {
      className: "colo-picker"
    }, __jsx("span", {
      className: "color-circle"
    }), __jsx("label", null, "#5C6AC4"), __jsx("span", {
      className: "hexa-value"
    }, "hex"))), __jsx("div", {
      className: "form-group col-lg-2 col-md-3"
    }, __jsx("label", null, "Select Icon"), __jsx("select", {
      id: "inputState",
      className: "form-control"
    }, __jsx("option", {
      selected: ""
    }, "fas fa-trophy"), __jsx("option", null, "Items"), __jsx("option", null, "Product"))), __jsx("div", {
      className: "form-group col-lg-2 col-md-3"
    }, __jsx("label", null, "Icon Color"), __jsx("div", {
      className: "colo-picker"
    }, __jsx("span", {
      className: "color-circle"
    }), __jsx("label", null, "#5C6AC4"), __jsx("span", {
      className: "hexa-value"
    }, "hex"))), __jsx("div", {
      className: "form-group col-lg-6 col-md-3 text-right button-bottom"
    }, __jsx("button", {
      type: "submit",
      className: "Polaris-Button Polaris-Button--primary"
    }, __jsx("span", {
      className: "Polaris-Button__Content"
    }, __jsx("span", {
      className: "Polaris-Button__Text"
    }, "Add Link"))))))), __jsx("hr", {
      className: "middle-line"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "stylish-area border-bottom-0"
    }, __jsx("div", {
      className: "floating-left"
    }, __jsx("h5", null, "Floating Add to Cart"), __jsx("p", null, "Enable the powerful floating Add to Cart."), __jsx("p", null, "This appears on Product Pages.")), __jsx("div", {
      className: "floating-right"
    }, __jsx("label", {
      className: "pro"
    }, "Requires the ", __jsx("i", null, "Pro"), " plan."), __jsx("button", {
      type: "submit",
      className: "Polaris-Button Polaris-Button--primary"
    }, __jsx("span", {
      className: "Polaris-Button__Content"
    }, __jsx("span", {
      className: "Polaris-Button__Text"
    }, "Enable"))))))), __jsx("hr", {
      className: "middle-line"
    }), __jsx("div", {
      className: "w-100 manage-links"
    }, __jsx("h5", {
      className: "header-tittle mb-3"
    }, "Manage Links"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "stylish-area border-bottom-0"
    }, __jsx("div", {
      className: "repeating-structure"
    }, __jsx("div", {
      className: "link-type"
    }, __jsx("span", {
      className: "blue-circle mr-5"
    }), __jsx("span", {
      className: "link-span mr-5"
    }, "Link Type"), __jsx("label", null, "Link Name")), __jsx("div", {
      className: "short-type"
    }, __jsx("button", {
      className: "buttons enable mr-5"
    }, "Enabled"), __jsx("div", {
      className: "increment-wrapper mr-5"
    }, __jsx("label", {
      className: "mb-0 mr-3"
    }, "Sort"), __jsx("div", {
      className: "arrow-up-down"
    }, __jsx("div", {
      className: "arrow up"
    }), __jsx("div", {
      className: "arrow down"
    }))), __jsx("div", {
      className: "action"
    }, __jsx("button", {
      className: "btn button dropdown-toggle"
    }, "Actions")))), __jsx("div", {
      className: "repeating-structure"
    }, __jsx("div", {
      className: "link-type"
    }, __jsx("span", {
      className: "blue-circle mr-5"
    }), __jsx("span", {
      className: "link-span mr-5"
    }, "Link Type"), __jsx("label", null, "Link Name")), __jsx("div", {
      className: "short-type"
    }, __jsx("button", {
      className: "buttons enable mr-5"
    }, "Enabled"), __jsx("div", {
      className: "increment-wrapper mr-5"
    }, __jsx("label", {
      className: "mb-0 mr-3"
    }, "Sort"), __jsx("div", {
      className: "arrow-up-down"
    }, __jsx("div", {
      className: "arrow up"
    }), __jsx("div", {
      className: "arrow down"
    }))), __jsx("div", {
      className: "action"
    }, __jsx("button", {
      className: "btn button dropdown-toggle"
    }, "Actions")))), __jsx("div", {
      className: "repeating-structure"
    }, __jsx("div", {
      className: "link-type"
    }, __jsx("span", {
      className: "blue-circle mr-5"
    }), __jsx("span", {
      className: "link-span mr-5"
    }, "Link Type"), __jsx("label", null, "Link Name")), __jsx("div", {
      className: "short-type"
    }, __jsx("button", {
      className: "buttons enable diable mr-5"
    }, "Enabled"), __jsx("div", {
      className: "increment-wrapper mr-5"
    }, __jsx("label", {
      className: "mb-0 mr-3"
    }, "Sort"), __jsx("div", {
      className: "arrow-up-down"
    }, __jsx("div", {
      className: "arrow up"
    }), __jsx("div", {
      className: "arrow down"
    }))), __jsx("div", {
      className: "action"
    }, __jsx("button", {
      className: "btn button dropdown-toggle"
    }, "Actions"))))))), __jsx("div", {
      className: "text-right mt-4"
    }, __jsx("button", {
      type: "submit",
      className: "Polaris-Button Polaris-Button--primary delete-link"
    }, __jsx("span", {
      className: "Polaris-Button__Content"
    }, __jsx("span", {
      className: "Polaris-Button__Text"
    }, "Delete Link ")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Manage);

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

/***/ }),

/***/ "react-icons":
/*!******************************!*\
  !*** external "react-icons" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFuYWdlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zXCIiXSwibmFtZXMiOlsiTWFuYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJyZW5kZXIiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9tYW5hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL21hbmFnZS5qc1wiKTtcbiIsImltcG9ydCB7QnV0dG9uLENhcmQsRm9ybSxMYXlvdXQsUGFnZSx9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG4vLyBpbXBvcnQgbG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJztcclxuaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tIFwicmVhY3QtaWNvbnNcIjtcclxuICBcclxuICBjbGFzcyBNYW5hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGRpc2NvdW50OiAnMTAlJyxcclxuICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkaXNjb3VudCwgZW5hYmxlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjb250ZW50U3RhdHVzID0gZW5hYmxlZCA/ICdEaXNhYmxlJyA6ICdFbmFibGUnO1xyXG4gICAgICAgIGNvbnN0IHRleHRTdGF0dXMgPSBlbmFibGVkID8gJ2VuYWJsZWQnIDogJ2Rpc2FibGVkJztcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtLTAgbmV3Y2Fzc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtaGVhZGVyIG1iLTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWFyZWFcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9eycuLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJ30gYWx0PVwibG9nb1wiIC8+IDxsYWJlbD5BZXJvIC8gPC9sYWJlbD4gPGg1Pk1hbmFnZTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1oZWFkZXIgbmV3LWhlYWRsaW5lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+TGVhcm4gTW9yZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+U2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PkRhc2hib2FyZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3R5bGlzaC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxoNT5BZGQgYSBsaW5rPC9oNT5cclxuICAgICAgICAgICAgPHA+QmVsb3cgeW91IGNhbiBzZWxlY3QgdGhlIGxpbmtzIHRoYXQgd2lsbCBhcHBlYXIgd2hlbiB0aGUgYnV0dG9uIHdpZGdldCBpcyBjbGlja2VkIGluIHlvdXIgc3RvcmUuIFlvdSBjYW4gY2hvb3NlIHRvIGxpbmsgdGhlIHByb2R1Y3QsIGNvbGxlY3Rpb25zLCBwYWdlcywgYmxvZ3MuIGJsb2cgcG9zdHMgYW5kIGN1c3RvbSBVUkxzLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCA+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwiZS5nIC0gU2FsZXMgSXRlbXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkxpbmsgVHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJpbnB1dFN0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPlByb2R1Y3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkl0ZW1zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Qcm9kdWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGUxXCI+TGluazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibmV3aW5wdXRcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFByb2R1Y3RzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+QnJvd3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWZpbGVcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFByb2R1Y3RzXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3cgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0yIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCA+QnV0dG9uIENvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IzVDNkFDNDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGV4YS12YWx1ZVwiPmhleDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IEljb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaW5wdXRTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj5mYXMgZmEtdHJvcGh5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JdGVtczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UHJvZHVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0yIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCA+SWNvbiBDb2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sby1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1jaXJjbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiM1QzZBQzQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhleGEtdmFsdWVcIj5oZXg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTYgY29sLW1kLTMgdGV4dC1yaWdodCBidXR0b24tYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIlBvbGFyaXMtQnV0dG9uIFBvbGFyaXMtQnV0dG9uLS1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUG9sYXJpcy1CdXR0b25fX0NvbnRlbnRcIj48c3BhbiBjbGFzc05hbWU9XCJQb2xhcmlzLUJ1dHRvbl9fVGV4dFwiPkFkZCBMaW5rPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWlkZGxlLWxpbmVcIiAvPlxyXG5cclxuICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHlsaXNoLWFyZWEgYm9yZGVyLWJvdHRvbS0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PkZsb2F0aW5nIEFkZCB0byBDYXJ0PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPHA+RW5hYmxlIHRoZSBwb3dlcmZ1bCBmbG9hdGluZyBBZGQgdG8gQ2FydC48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRoaXMgYXBwZWFycyBvbiBQcm9kdWN0IFBhZ2VzLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvXCI+UmVxdWlyZXMgdGhlIDxpPlBybzwvaT4gcGxhbi48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJQb2xhcmlzLUJ1dHRvbiBQb2xhcmlzLUJ1dHRvbi0tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlBvbGFyaXMtQnV0dG9uX19Db250ZW50XCI+PHNwYW4gY2xhc3NOYW1lPVwiUG9sYXJpcy1CdXR0b25fX1RleHRcIj5FbmFibGU8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm1pZGRsZS1saW5lXCIgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIG1hbmFnZS1saW5rc1wiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdHRsZSBtYi0zXCI+TWFuYWdlIExpbmtzPC9oNT5cclxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHlsaXNoLWFyZWEgYm9yZGVyLWJvdHRvbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwZWF0aW5nLXN0cnVjdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay10eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibHVlLWNpcmNsZSBtci01XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluay1zcGFuIG1yLTVcIj5MaW5rIFR5cGU8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxpbmsgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9ydC10eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9ucyBlbmFibGUgbXItNVwiPkVuYWJsZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmNyZW1lbnQtd3JhcHBlciBtci01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTAgbXItM1wiPlNvcnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctdXAtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyB1cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyBkb3duXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBkcm9wZG93bi10b2dnbGVcIj5BY3Rpb25zPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdGluZy1zdHJ1Y3R1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmx1ZS1jaXJjbGUgbXItNVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmstc3BhbiBtci01XCI+TGluayBUeXBlPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MaW5rIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnQtdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbnMgZW5hYmxlIG1yLTVcIj5FbmFibGVkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5jcmVtZW50LXdyYXBwZXIgbXItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTNcIj5Tb3J0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LXVwLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgdXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gZHJvcGRvd24tdG9nZ2xlXCI+QWN0aW9uczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdGluZy1zdHJ1Y3R1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmx1ZS1jaXJjbGUgbXItNVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmstc3BhbiBtci01XCI+TGluayBUeXBlPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MaW5rIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnQtdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbnMgZW5hYmxlIGRpYWJsZSBtci01XCI+RW5hYmxlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluY3JlbWVudC13cmFwcGVyIG1yLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMCBtci0zXCI+U29ydDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy11cC1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIGRyb3Bkb3duLXRvZ2dsZVwiPkFjdGlvbnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiUG9sYXJpcy1CdXR0b24gUG9sYXJpcy1CdXR0b24tLXByaW1hcnkgZGVsZXRlLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlBvbGFyaXMtQnV0dG9uX19Db250ZW50XCI+PHNwYW4gY2xhc3NOYW1lPVwiUG9sYXJpcy1CdXR0b25fX1RleHRcIj5EZWxldGUgTGluayA8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRpc2NvdW50OiB0aGlzLnN0YXRlLmRpc2NvdW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pc3Npb24nLCB0aGlzLnN0YXRlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcclxuICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgZW5hYmxlZCB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyBlbmFibGVkOiAhZW5hYmxlZCB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBNYW5hZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9