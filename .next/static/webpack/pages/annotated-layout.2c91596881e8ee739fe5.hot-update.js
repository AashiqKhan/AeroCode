webpackHotUpdate_N_E("pages/annotated-layout",{

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // import logo from '../assets/images/logo.png';



var AnnotatedLayout = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AnnotatedLayout, _React$Component);

  var _super = _createSuper(AnnotatedLayout);

  function AnnotatedLayout() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnnotatedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      discount: '10%',
      enabled: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function () {
      _this.setState({
        discount: _this.state.discount
      });

      console.log('submission', _this.state);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (field) {
      return function (value) {
        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
      };
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleToggle", function () {
      _this.setState(function (_ref) {
        var enabled = _ref.enabled;
        return {
          enabled: !enabled
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnnotatedLayout, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          discount = _this$state.discount,
          enabled = _this$state.enabled;
      var contentStatus = enabled ? 'Disable' : 'Enable';
      var textStatus = enabled ? 'enabled' : 'disabled';
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
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        submit: true
      }, "Settings"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true,
        submit: true
      }, "Save"))), __jsx("section", {
        className: "container"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
        className: "polories-layout"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].AnnotatedSection, {
        title: "Global Settings",
        description: "Manage how Aero will appear across your stire."
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("div", {
        className: "form-style margin0"
      }, __jsx("label", {
        className: "margin0 bold-text"
      }, "Global State. Aero is currently deactived across your store."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true,
        submit: true
      }, "Enable"))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].AnnotatedSection, {
        title: "Global Display Settings",
        description: "Customize the postion and style of Aero in relation to your store"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("div", {
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
        "for": "exampleCheck1"
      }, "Hide Labeles?"))), __jsx("div", {
        className: "form-group col-lg-12 col-md-12"
      }, __jsx("label", {
        className: "d-block"
      }, "Custom Css"), __jsx("textarea", {
        className: "text-area"
      })))))))), __jsx("hr", {
        className: "middle-line"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].AnnotatedSection, {
        title: "Integrations",
        description: "Manage itegrations for Aero."
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("div", {
        className: "form-style margin0"
      }, __jsx("div", {
        className: "img-name"
      }, __jsx("div", {
        className: "img-replacer"
      }), " ", __jsx("label", null, "Facebook messanger")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        submit: true
      }, "Connect")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("div", {
        className: "form-style margin0"
      }, __jsx("div", {
        className: "img-name"
      }, __jsx("div", {
        className: "img-replacer"
      }), " ", __jsx("label", null, "Slack")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        submit: true
      }, "Connect")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("div", {
        className: "form-style margin0"
      }, __jsx("div", {
        className: "img-name"
      }, __jsx("div", {
        className: "img-replacer"
      }), " ", __jsx("label", null, "Drift")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        submit: true
      }, "Connect"))))), __jsx("hr", {
        className: "middle-line"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].AnnotatedSection, {
        title: "Manage Plan",
        description: "Manage your current Aero Plan."
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("div", {
        className: "form-style margin0"
      }, __jsx("label", {
        className: "margin0 bold-text"
      }, "You are currently subscribe to a Premimum Plan."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true,
        submit: true
      }, "Manage"))))))));
    }
  }]);

  return AnnotatedLayout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyJdLCJuYW1lcyI6WyJBbm5vdGF0ZWRMYXlvdXQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBOztJQUVRQSxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGNBQVEsRUFBRSxLQURKO0FBRU5DLGFBQU8sRUFBRTtBQUZILEs7O3VOQXNPTyxZQUFNO0FBQ25CLFlBQUtDLFFBQUwsQ0FBYztBQUNaRixnQkFBUSxFQUFFLE1BQUtHLEtBQUwsQ0FBV0g7QUFEVCxPQUFkOztBQUdBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtGLEtBQS9CO0FBQ0QsSzs7dU5BRWMsVUFBQ0csS0FBRCxFQUFXO0FBQ3hCLGFBQU8sVUFBQ0MsS0FBRDtBQUFBLGVBQVcsTUFBS0wsUUFBTCwrRkFBaUJJLEtBQWpCLEVBQXlCQyxLQUF6QixFQUFYO0FBQUEsT0FBUDtBQUNELEs7O3VOQUVjLFlBQU07QUFDakIsWUFBS0wsUUFBTCxDQUFjLGdCQUFpQjtBQUFBLFlBQWRELE9BQWMsUUFBZEEsT0FBYztBQUM3QixlQUFPO0FBQUVBLGlCQUFPLEVBQUUsQ0FBQ0E7QUFBWixTQUFQO0FBQ0QsT0FGRDtBQUdELEs7Ozs7Ozs7NkJBL09NO0FBQUEsd0JBQ3lCLEtBQUtFLEtBRDlCO0FBQUEsVUFDR0gsUUFESCxlQUNHQSxRQURIO0FBQUEsVUFDYUMsT0FEYixlQUNhQSxPQURiO0FBRUwsVUFBTU8sYUFBYSxHQUFHUCxPQUFPLEdBQUcsU0FBSCxHQUFlLFFBQTVDO0FBQ0EsVUFBTVEsVUFBVSxHQUFH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TUFBQyx1REFBRDtBQUFRLGNBQU07QUFBZCxtQkFMRixDQURGLENBREYsQ0FmSixFQTBCSSxNQUFDLHFEQUFEO0FBQU0saUJBQVM7QUFBZixTQUNFLE1BQUMscURBQUQsUUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFGRixPQUV1Qyw2QkFGdkMsQ0FERixFQUtFLE1BQUMsdURBQUQ7QUFBUSxjQUFNO0FBQWQsbUJBTEYsQ0FERixDQURGLENBMUJKLENBL0lBLEVBc0xFO0FBQUksaUJBQVMsRUFBQztBQUFkLFFBdExGLEVBd0xFLE1BQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNFLGFBQUssRUFBQyxhQURSO0FBRUUsbUJBQVcsRUFBQztBQUZkLFNBSUEsTUFBQyxxREFBRDtBQUFNLGlCQUFTO0FBQWYsU0FDRSxNQUFDLHFEQUFELFFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFPLGlCQUFTLEVBQUM7QUFBakIsMkRBREYsRUFFRSxNQUFDLHVEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLGNBQU07QUFBdEIsa0JBRkYsQ0FERixDQURGLENBSkEsQ0F4TEYsQ0FGQSxDQVhGLENBREY7QUF5TkQ7Ozs7RUFyTzJCUyw0Q0FBSyxDQUFDQyxTOztBQXlQckJaLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuMmM5MTU5Njg4MWU4ZWU3MzlmZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnV0dG9uLENhcmQsRm9ybSxMYXlvdXQsUGFnZSx9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcclxuLy8gaW1wb3J0IGxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuICBcclxuICBjbGFzcyBBbm5vdGF0ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGRpc2NvdW50OiAnMTAlJyxcclxuICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkaXNjb3VudCwgZW5hYmxlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjb250ZW50U3RhdHVzID0gZW5hYmxlZCA/ICdEaXNhYmxlJyA6ICdFbmFibGUnO1xyXG4gICAgICAgIGNvbnN0IHRleHRTdGF0dXMgPSBlbmFibGVkID8gJ2VuYWJsZWQnIDogJ2Rpc2FibGVkJztcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtLTAgbmV3Y2Fzc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyd9IGFsdD1cImxvZ29cIiAvPiA8bGFiZWw+QWVybyAvIDwvbGFiZWw+IDxoNT5TZXR0aW5nczwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWFyZWFcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+U2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5TYXZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJwb2xvcmllcy1sYXlvdXRcIj5cclxuXHJcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiR2xvYmFsIFNldHRpbmdzXCJcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk1hbmFnZSBob3cgQWVybyB3aWxsIGFwcGVhciBhY3Jvc3MgeW91ciBzdGlyZS5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdHlsZSBtYXJnaW4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjAgYm9sZC10ZXh0XCI+R2xvYmFsIFN0YXRlLiBBZXJvIGlzIGN1cnJlbnRseSBkZWFjdGl2ZWQgYWNyb3NzIHlvdXIgc3RvcmUuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PkVuYWJsZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICB0aXRsZT1cIkdsb2JhbCBEaXNwbGF5IFNldHRpbmdzXCJcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkN1c3RvbWl6ZSB0aGUgcG9zdGlvbiBhbmQgc3R5bGUgb2YgQWVybyBpbiByZWxhdGlvbiB0byB5b3VyIHN0b3JlXCJcclxuXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN0eWxlIG1hcmdpbjAgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4wIGJvbGQtdGV4dCBkLWJsb2NrIG1iLTNcIj5GbG9hdGluZyBXaWRnZXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2lkZ2V0LWNvdmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UG9zdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMTAwIFwiIHBsYWNlaG9sZGVyPVwiQm9vdG9tIFJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctdXAtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID5CdXR0b24gQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sby1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4jNUM2QUM0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhleGEtdmFsdWVcIj5oZXg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IEljb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJpbnB1dFN0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+ZmFzIGZhLXRyb3BoeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JdGVtczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Qcm9kdWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPkljb24gQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sby1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4jNUM2QUM0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhleGEtdmFsdWVcIj5oZXg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hcmdpbiBUb3A8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEwMCBcIiBwbGFjZWhvbGRlcj1cIjEwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctdXAtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hcmdpbiBCb3R0b208L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEwMCBcIiBwbGFjZWhvbGRlcj1cIjEwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctdXAtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hcmdpbiBMZWZ0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy0xMDAgXCIgcGxhY2Vob2xkZXI9XCIxMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LXVwLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyB1cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYXJnaW4gUmlnaHQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEwMCBcIiBwbGFjZWhvbGRlcj1cIjEwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctdXAtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm15LTNcIj5MYWJlbHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPkZvbnQgQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sby1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4jNUM2QUM0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhleGEtdmFsdWVcIj5oZXg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPkJhY2tncm91bmQgQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sby1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4jNUM2QUM0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhleGEtdmFsdWVcIj5oZXg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVjayByZWxhdGl2ZS1jaGVrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiZXhhbXBsZUNoZWNrMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImV4YW1wbGVDaGVjazFcIj5IaWRlIExhYmVsZXM/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJkLWJsb2NrXCI+Q3VzdG9tIENzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHQtYXJlYVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtaWRkbGUtbGluZVwiIC8+XHJcblxyXG4gICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJJbnRlZ3JhdGlvbnNcIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTWFuYWdlIGl0ZWdyYXRpb25zIGZvciBBZXJvLlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN0eWxlIG1hcmdpbjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCIuLi9hc3NldHMvbWVzc2FuZ2VyLnBuZ1wiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcmVwbGFjZXJcIj48L2Rpdj4gPGxhYmVsPkZhY2Vib29rIG1lc3NhbmdlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+Q29ubmVjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdHlsZSBtYXJnaW4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vYXNzZXRzL21lc3Nhbmdlci5wbmdcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXJlcGxhY2VyXCI+PC9kaXY+IDxsYWJlbD5TbGFjazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+Q29ubmVjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdHlsZSBtYXJnaW4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vYXNzZXRzL21lc3Nhbmdlci5wbmdcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXJlcGxhY2VyXCI+PC9kaXY+IDxsYWJlbD5EcmlmdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+Q29ubmVjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+IFxyXG5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm1pZGRsZS1saW5lXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiTWFuYWdlIFBsYW5cIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTWFuYWdlIHlvdXIgY3VycmVudCBBZXJvIFBsYW4uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMCBib2xkLXRleHRcIj5Zb3UgYXJlIGN1cnJlbnRseSBzdWJzY3JpYmUgdG8gYSBQcmVtaW11bSBQbGFuLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+TWFuYWdlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuXHJcblxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXNzaW9uJywgdGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCh7IGVuYWJsZWQgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgZW5hYmxlZDogIWVuYWJsZWQgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=