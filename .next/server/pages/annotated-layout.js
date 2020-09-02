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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
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

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import logo from '../assets/images/logo.png';



class AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
    }), " ", __jsx("label", null, "Aero / "), " ", __jsx("h5", null, "Settings")), __jsx("div", {
      className: "right-area"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Settings"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      submit: true
    }, "Save"))), __jsx("section", {
      className: "container"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
      className: "polories-layout"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Global Settings",
      description: "Manage how Aero will appear across your stire."
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0"
    }, __jsx("label", {
      className: "margin0 bold-text"
    }, "Global State. Aero is currently deactived across your store."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      submit: true
    }, "Enable"))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Global Display Settings",
      description: "Customize the postion and style of Aero in relation to your store"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0 d-block"
    }, __jsx("label", {
      className: "margin0 bold-text d-block mb-3"
    }, "Floating Widget"), __jsx("div", {
      className: "Widget-covers"
    }, __jsx("div", {
      className: "form-row"
    }, __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("label", null, "Postion"), __jsx("div", {
      className: "w-100 relative"
    }, __jsx("input", {
      className: "w-100 ",
      placeholder: "Bootom Right"
    }), __jsx("div", {
      className: "arrow-up-down"
    }, __jsx("div", {
      className: "arrow up"
    }), __jsx("div", {
      className: "arrow down"
    })))), __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("label", null, "Button Color"), __jsx("div", {
      className: "colo-picker"
    }, __jsx("span", {
      className: "color-circle"
    }), __jsx("label", null, "#5C6AC4"), __jsx("span", {
      className: "hexa-value"
    }, "hex"))), __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("label", null, "Select Icon"), __jsx("select", {
      id: "inputState",
      className: "form-control"
    }, __jsx("option", {
      selected: ""
    }, "fas fa-trophy"), __jsx("option", null, "Items"), __jsx("option", null, "Product"))), __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("label", null, "Icon Color"), __jsx("div", {
      className: "colo-picker"
    }, __jsx("span", {
      className: "color-circle"
    }), __jsx("label", null, "#5C6AC4"), __jsx("span", {
      className: "hexa-value"
    }, "hex")))), __jsx("div", {
      className: "form-row mt-4"
    }, __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("label", null, "Margin Top"), __jsx("div", {
      className: "w-100 relative"
    }, __jsx("input", {
      className: "w-100 ",
      placeholder: "10"
    }), __jsx("div", {
      className: "arrow-up-down"
    }, __jsx("div", {
      className: "arrow up"
    }), __jsx("div", {
      className: "arrow down"
    })))), __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("label", null, "Margin Bottom"), __jsx("div", {
      className: "w-100 relative"
    }, __jsx("input", {
      className: "w-100 ",
      placeholder: "10"
    }), __jsx("div", {
      className: "arrow-up-down"
    }, __jsx("div", {
      className: "arrow up"
    }), __jsx("div", {
      className: "arrow down"
    })))), __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("label", null, "Margin Left"), __jsx("div", {
      className: "w-100 relative"
    }, __jsx("input", {
      className: "w-100 ",
      placeholder: "10"
    }), __jsx("div", {
      className: "arrow-up-down"
    }, __jsx("div", {
      className: "arrow up"
    }), __jsx("div", {
      className: "arrow down"
    })))), __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("label", null, "Margin Right"), __jsx("div", {
      className: "w-100 relative"
    }, __jsx("input", {
      className: "w-100 ",
      placeholder: "10"
    }), __jsx("div", {
      className: "arrow-up-down"
    }, __jsx("div", {
      className: "arrow up"
    }), __jsx("div", {
      className: "arrow down"
    }))))), __jsx("h5", {
      className: "my-3"
    }, "Labels"), __jsx("div", {
      className: "form-row"
    }, __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("label", null, "Font Color"), __jsx("div", {
      className: "colo-picker"
    }, __jsx("span", {
      className: "color-circle"
    }), __jsx("label", null, "#5C6AC4"), __jsx("span", {
      className: "hexa-value"
    }, "hex"))), __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("label", null, "Background Color"), __jsx("div", {
      className: "colo-picker"
    }, __jsx("span", {
      className: "color-circle"
    }), __jsx("label", null, "#5C6AC4"), __jsx("span", {
      className: "hexa-value"
    }, "hex"))), __jsx("div", {
      className: "form-group col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "form-group form-check relative-chekbox"
    }, __jsx("input", {
      type: "checkbox",
      className: "form-check-input",
      id: "exampleCheck1"
    }), __jsx("label", {
      className: "form-check-label",
      for: "exampleCheck1"
    }, "Hide Labeles?"))), __jsx("div", {
      className: "form-group col-lg-12 col-md-12"
    }, __jsx("label", {
      className: "d-block"
    }, "Custom Css"), __jsx("textarea", {
      className: "text-area"
    })))))))), __jsx("hr", {
      className: "middle-line"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Integrations",
      description: "Manage itegrations for Aero."
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0"
    }, __jsx("div", {
      className: "img-name"
    }, __jsx("div", {
      className: "img-replacer mr-5"
    }), " ", __jsx("label", {
      className: "mb-0 font-weight-500"
    }, "Facebook messanger")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Connect")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0"
    }, __jsx("div", {
      className: "img-name"
    }, __jsx("div", {
      className: "img-replacer mr-5"
    }), " ", __jsx("label", {
      className: "mb-0 font-weight-500"
    }, "Slack")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Connect")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0"
    }, __jsx("div", {
      className: "img-name"
    }, __jsx("div", {
      className: "img-replacer mr-5"
    }), " ", __jsx("label", {
      className: "mb-0 font-weight-500"
    }, "Drift")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Connect"))))), __jsx("hr", {
      className: "middle-line"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Manage Plan",
      description: "Manage your current Aero Plan."
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
      className: "form-style margin0"
    }, __jsx("label", {
      className: "margin0 bold-text"
    }, "You are currently subscribe to a Premimum Plan."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true
    }, "Manage"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJBbm5vdGF0ZWRMYXlvdXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwiZW5hYmxlZCIsInNldFN0YXRlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGQiLCJ2YWx1ZSIsInJlbmRlciIsImNvbnRlbnRTdGF0dXMiLCJ0ZXh0U3RhdHVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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MUJKLENBL0lBLEVBc0xFO0FBQUksZUFBUyxFQUFDO0FBQWQsTUF0TEYsRUF3TEUsTUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0UsV0FBSyxFQUFDLGFBRFI7QUFFRSxpQkFBVyxFQUFDO0FBRmQsT0FJQSxNQUFDLHFEQUFEO0FBQU0sZUFBUztBQUFmLE9BQ0UsTUFBQyxxREFBRCxRQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFPLGVBQVMsRUFBQztBQUFqQix5REFERixFQUVFLE1BQUMsdURBQUQ7QUFBUyxZQUFNO0FBQWYsZ0JBRkYsQ0FERixDQURGLENBSkEsQ0F4TEYsQ0FGQSxDQVhGLENBREY7QUF5TkQ7O0FBck8yQzs7QUF5UC9CSiw4RUFBZixFOzs7Ozs7Ozs7OztBQzlQRiw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzXCIpO1xuIiwiaW1wb3J0IHtCdXR0b24sQ2FyZCxGb3JtLExheW91dCx9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcclxuLy8gaW1wb3J0IGxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuICBcclxuICBjbGFzcyBBbm5vdGF0ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGRpc2NvdW50OiAnMTAlJyxcclxuICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkaXNjb3VudCwgZW5hYmxlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjb250ZW50U3RhdHVzID0gZW5hYmxlZCA/ICdEaXNhYmxlJyA6ICdFbmFibGUnO1xyXG4gICAgICAgIGNvbnN0IHRleHRTdGF0dXMgPSBlbmFibGVkID8gJ2VuYWJsZWQnIDogJ2Rpc2FibGVkJztcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtLTAgbmV3Y2Fzc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyd9IGFsdD1cImxvZ29cIiAvPiA8bGFiZWw+QWVybyAvIDwvbGFiZWw+IDxoNT5TZXR0aW5nczwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWFyZWFcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+U2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5TYXZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJwb2xvcmllcy1sYXlvdXRcIj5cclxuXHJcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiR2xvYmFsIFNldHRpbmdzXCJcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk1hbmFnZSBob3cgQWVybyB3aWxsIGFwcGVhciBhY3Jvc3MgeW91ciBzdGlyZS5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdHlsZSBtYXJnaW4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjAgYm9sZC10ZXh0XCI+R2xvYmFsIFN0YXRlLiBBZXJvIGlzIGN1cnJlbnRseSBkZWFjdGl2ZWQgYWNyb3NzIHlvdXIgc3RvcmUuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PkVuYWJsZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICB0aXRsZT1cIkdsb2JhbCBEaXNwbGF5IFNldHRpbmdzXCJcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkN1c3RvbWl6ZSB0aGUgcG9zdGlvbiBhbmQgc3R5bGUgb2YgQWVybyBpbiByZWxhdGlvbiB0byB5b3VyIHN0b3JlXCJcclxuXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN0eWxlIG1hcmdpbjAgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4wIGJvbGQtdGV4dCBkLWJsb2NrIG1iLTNcIj5GbG9hdGluZyBXaWRnZXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2lkZ2V0LWNvdmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UG9zdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMTAwIFwiIHBsYWNlaG9sZGVyPVwiQm9vdG9tIFJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctdXAtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID5CdXR0b24gQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sby1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4jNUM2QUM0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhleGEtdmFsdWVcIj5oZXg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IEljb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJpbnB1dFN0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+ZmFzIGZhLXRyb3BoeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JdGVtczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Qcm9kdWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPkljb24gQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sby1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4jNUM2QUM0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhleGEtdmFsdWVcIj5oZXg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hcmdpbiBUb3A8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEwMCBcIiBwbGFjZWhvbGRlcj1cIjEwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctdXAtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hcmdpbiBCb3R0b208L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEwMCBcIiBwbGFjZWhvbGRlcj1cIjEwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctdXAtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hcmdpbiBMZWZ0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy0xMDAgXCIgcGxhY2Vob2xkZXI9XCIxMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LXVwLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyB1cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYXJnaW4gUmlnaHQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEwMCBcIiBwbGFjZWhvbGRlcj1cIjEwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctdXAtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm15LTNcIj5MYWJlbHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPkZvbnQgQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sby1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4jNUM2QUM0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhleGEtdmFsdWVcIj5oZXg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPkJhY2tncm91bmQgQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sby1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4jNUM2QUM0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhleGEtdmFsdWVcIj5oZXg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVjayByZWxhdGl2ZS1jaGVrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiZXhhbXBsZUNoZWNrMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImV4YW1wbGVDaGVjazFcIj5IaWRlIExhYmVsZXM/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJkLWJsb2NrXCI+Q3VzdG9tIENzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHQtYXJlYVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtaWRkbGUtbGluZVwiIC8+XHJcblxyXG4gICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJJbnRlZ3JhdGlvbnNcIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTWFuYWdlIGl0ZWdyYXRpb25zIGZvciBBZXJvLlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN0eWxlIG1hcmdpbjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCIuLi9hc3NldHMvbWVzc2FuZ2VyLnBuZ1wiIGNsYXNzTmFtZT1cIm1yLTVcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXJlcGxhY2VyIG1yLTVcIj48L2Rpdj4gPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTAgZm9udC13ZWlnaHQtNTAwXCI+RmFjZWJvb2sgbWVzc2FuZ2VyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN1Ym1pdD5Db25uZWN0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN0eWxlIG1hcmdpbjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCIuLi9hc3NldHMvbWVzc2FuZ2VyLnBuZ1wiIGNsYXNzTmFtZT1cIm1yLTVcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXJlcGxhY2VyIG1yLTVcIj48L2Rpdj4gPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTAgZm9udC13ZWlnaHQtNTAwXCI+U2xhY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3VibWl0PkNvbm5lY3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9tZXNzYW5nZXIucG5nXCIgY2xhc3NOYW1lPVwibXItNVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcmVwbGFjZXIgbXItNVwiPjwvZGl2PiA8bGFiZWwgY2xhc3NOYW1lPVwibWItMCBmb250LXdlaWdodC01MDBcIj5EcmlmdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+Q29ubmVjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+IFxyXG5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm1pZGRsZS1saW5lXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiTWFuYWdlIFBsYW5cIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTWFuYWdlIHlvdXIgY3VycmVudCBBZXJvIFBsYW4uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMCBib2xkLXRleHRcIj5Zb3UgYXJlIGN1cnJlbnRseSBzdWJzY3JpYmUgdG8gYSBQcmVtaW11bSBQbGFuLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gIHN1Ym1pdD5NYW5hZ2U8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRpc2NvdW50OiB0aGlzLnN0YXRlLmRpc2NvdW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pc3Npb24nLCB0aGlzLnN0YXRlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcclxuICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgZW5hYmxlZCB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyBlbmFibGVkOiAhZW5hYmxlZCB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9