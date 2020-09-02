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
        className: "img-replacer mr-5"
      }), " ", __jsx("label", {
        className: "mb-0 font-weight-500"
      }, "Facebook messanger")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        submit: true
      }, "Connect")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("div", {
        className: "form-style margin0"
      }, __jsx("div", {
        className: "img-name"
      }, __jsx("div", {
        className: "img-replacer mr-5"
      }), " ", __jsx("label", {
        className: "mb-0 font-weight-500"
      }, "Slack")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        submit: true
      }, "Connect")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("div", {
        className: "form-style margin0"
      }, __jsx("div", {
        className: "img-name"
      }, __jsx("div", {
        className: "img-replacer mr-5"
      }), " ", __jsx("label", {
        className: "mb-0 font-weight-500"
      }, "Drift")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyJdLCJuYW1lcyI6WyJBbm5vdGF0ZWRMYXlvdXQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBOztJQUVRQSxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGNBQVEsRUFBRSxLQURKO0FBRU5DLGFBQU8sRUFBRTtBQUZILEs7O3VOQXNPTyxZQUFNO0FBQ25CLFlBQUtDLFFBQUwsQ0FBYztBQUNaRixnQkFBUSxFQUFFLE1BQUtHLEtBQUwsQ0FBV0g7QUFEVCxPQUFkOztBQUdBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtGLEtBQS9CO0FBQ0QsSzs7dU5BRWMsVUFBQ0csS0FBRCxFQUFXO0FBQ3hCLGFBQU8sVUFBQ0MsS0FBRDtBQUFBLGVBQVcsTUFBS0wsUUFBTCwrRkFBaUJJLEtBQWpCLEVBQXlCQyxLQUF6QixFQUFYO0FBQUEsT0FBUDtBQUNELEs7O3VOQUVjLFlBQU07QUFDakIsWUFBS0wsUUFBTCxDQUFjLGdCQUFpQjtBQUFBLFlBQWRELE9BQWMsUUFBZEEsT0FBYztBQUM3QixlQUFPO0FBQUVBLGlCQUFPLEVBQUUsQ0FBQ0E7QUFBWixTQUFQO0FBQ0QsT0FGRDtBQUdELEs7Ozs7Ozs7NkJBL09NO0FBQUEsd0JBQ3lCLEtBQUtFLEtBRDlCO0FBQUEsVUFDR0gsUUFESCxlQUNHQSxRQURIO0FBQUEsVUFDYUMsT0FEYixlQUNhQSxPQURiO0FBRUwsVUFBTU8sYUFBYSxHQUFHUCxPQUFPLEdBQUcsU0FBSCxHQUFlLFFBQTVDO0FBQ0EsVUFBTVEsVUFBVSxHQUFH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QUU0QztBQUFPLGlCQUFTLEVBQUM7QUFBakIsaUJBRjVDLENBREYsRUFLRSxNQUFDLHVEQUFEO0FBQVEsY0FBTTtBQUFkLG1CQUxGLENBREYsQ0FERixDQWZKLEVBMEJJLE1BQUMscURBQUQ7QUFBTSxpQkFBUztBQUFmLFNBQ0UsTUFBQyxxREFBRCxRQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQUZGLE9BRTRDO0FBQU8saUJBQVMsRUFBQztBQUFqQixpQkFGNUMsQ0FERixFQUtFLE1BQUMsdURBQUQ7QUFBUSxjQUFNO0FBQWQsbUJBTEYsQ0FERixDQURGLENBMUJKLENBL0lBLEVBc0xFO0FBQUksaUJBQVMsRUFBQztBQUFkLFFBdExGLEVBd0xFLE1BQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNFLGFBQUssRUFBQyxhQURSO0FBRUUsbUJBQVcsRUFBQztBQUZkLFNBSUEsTUFBQyxxREFBRDtBQUFNLGlCQUFTO0FBQWYsU0FDRSxNQUFDLHFEQUFELFFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFPLGlCQUFTLEVBQUM7QUFBakIsMkRBREYsRUFFRSxNQUFDLHVEQUFEO0FBQVMsY0FBTTtBQUFmLGtCQUZGLENBREYsQ0FERixDQUpBLENBeExGLENBRkEsQ0FYRixDQURGO0FBeU5EOzs7O0VBck8yQlMsNENBQUssQ0FBQ0MsUzs7QUF5UHJCWiw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LjFkZDZmYTBjMGNiNDkxZWIzYTQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1dHRvbixDYXJkLEZvcm0sTGF5b3V0LH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xyXG4vLyBpbXBvcnQgbG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG4gIFxyXG4gIGNsYXNzIEFubm90YXRlZExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgZGlzY291bnQ6ICcxMCUnLFxyXG4gICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICBcclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRpc2NvdW50LCBlbmFibGVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRTdGF0dXMgPSBlbmFibGVkID8gJ0Rpc2FibGUnIDogJ0VuYWJsZSc7XHJcbiAgICAgICAgY29uc3QgdGV4dFN0YXR1cyA9IGVuYWJsZWQgPyAnZW5hYmxlZCcgOiAnZGlzYWJsZWQnO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm0tMCBuZXdjYXNzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWFyZWFcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9eycuLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJ30gYWx0PVwibG9nb1wiIC8+IDxsYWJlbD5BZXJvIC8gPC9sYWJlbD4gPGg1PlNldHRpbmdzPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtYXJlYVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN1Ym1pdD5TZXR0aW5nczwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PlNhdmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInBvbG9yaWVzLWxheW91dFwiPlxyXG5cclxuICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJHbG9iYWwgU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTWFuYWdlIGhvdyBBZXJvIHdpbGwgYXBwZWFyIGFjcm9zcyB5b3VyIHN0aXJlLlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN0eWxlIG1hcmdpbjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMCBib2xkLXRleHRcIj5HbG9iYWwgU3RhdGUuIEFlcm8gaXMgY3VycmVudGx5IGRlYWN0aXZlZCBhY3Jvc3MgeW91ciBzdG9yZS48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+RW5hYmxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiR2xvYmFsIERpc3BsYXkgU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ3VzdG9taXplIHRoZSBwb3N0aW9uIGFuZCBzdHlsZSBvZiBBZXJvIGluIHJlbGF0aW9uIHRvIHlvdXIgc3RvcmVcIlxyXG5cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMCBkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjAgYm9sZC10ZXh0IGQtYmxvY2sgbWItM1wiPkZsb2F0aW5nIFdpZGdldDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJXaWRnZXQtY292ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qb3N0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy0xMDAgXCIgcGxhY2Vob2xkZXI9XCJCb290b20gUmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy11cC1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgdXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyBkb3duXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPkJ1dHRvbiBDb2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItY2lyY2xlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiM1QzZBQzQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGV4YS12YWx1ZVwiPmhleDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgSWNvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImlucHV0U3RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj5mYXMgZmEtdHJvcGh5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkl0ZW1zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlByb2R1Y3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+SWNvbiBDb2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItY2lyY2xlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiM1QzZBQzQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGV4YS12YWx1ZVwiPmhleDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3cgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFyZ2luIFRvcDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMTAwIFwiIHBsYWNlaG9sZGVyPVwiMTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy11cC1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgdXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyBkb3duXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFyZ2luIEJvdHRvbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMTAwIFwiIHBsYWNlaG9sZGVyPVwiMTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy11cC1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgdXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyBkb3duXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFyZ2luIExlZnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEwMCBcIiBwbGFjZWhvbGRlcj1cIjEwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctdXAtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IHVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hcmdpbiBSaWdodDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMTAwIFwiIHBsYWNlaG9sZGVyPVwiMTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy11cC1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgdXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyBkb3duXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXktM1wiPkxhYmVsczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+Rm9udCBDb2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItY2lyY2xlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiM1QzZBQzQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGV4YS12YWx1ZVwiPmhleDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+QmFja2dyb3VuZCBDb2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItY2lyY2xlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiM1QzZBQzQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGV4YS12YWx1ZVwiPmhleDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWNoZWNrIHJlbGF0aXZlLWNoZWtib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJleGFtcGxlQ2hlY2sxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZXhhbXBsZUNoZWNrMVwiPkhpZGUgTGFiZWxlcz88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImQtYmxvY2tcIj5DdXN0b20gQ3NzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwidGV4dC1hcmVhXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm1pZGRsZS1saW5lXCIgLz5cclxuXHJcbiAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICB0aXRsZT1cIkludGVncmF0aW9uc1wiXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJNYW5hZ2UgaXRlZ3JhdGlvbnMgZm9yIEFlcm8uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9tZXNzYW5nZXIucG5nXCIgY2xhc3NOYW1lPVwibXItNVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcmVwbGFjZXIgbXItNVwiPjwvZGl2PiA8bGFiZWwgY2xhc3NOYW1lPVwibWItMCBmb250LXdlaWdodC01MDBcIj5GYWNlYm9vayBtZXNzYW5nZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3VibWl0PkNvbm5lY3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9tZXNzYW5nZXIucG5nXCIgY2xhc3NOYW1lPVwibXItNVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcmVwbGFjZXIgbXItNVwiPjwvZGl2PiA8bGFiZWwgY2xhc3NOYW1lPVwibWItMCBmb250LXdlaWdodC01MDBcIj5TbGFjazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQ+Q29ubmVjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdHlsZSBtYXJnaW4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vYXNzZXRzL21lc3Nhbmdlci5wbmdcIiBjbGFzc05hbWU9XCJtci01XCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1yZXBsYWNlciBtci01XCI+PC9kaXY+IDxsYWJlbCBjbGFzc05hbWU9XCJtYi0wIGZvbnQtd2VpZ2h0LTUwMFwiPkRyaWZ0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN1Ym1pdD5Db25uZWN0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj4gXHJcblxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWlkZGxlLWxpbmVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJNYW5hZ2UgUGxhblwiXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJNYW5hZ2UgeW91ciBjdXJyZW50IEFlcm8gUGxhbi5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdHlsZSBtYXJnaW4wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4wIGJvbGQtdGV4dFwiPllvdSBhcmUgY3VycmVudGx5IHN1YnNjcmliZSB0byBhIFByZW1pbXVtIFBsYW4uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgc3VibWl0Pk1hbmFnZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcblxyXG5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGlzY291bnQ6IHRoaXMuc3RhdGUuZGlzY291bnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VibWlzc2lvbicsIHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICByZXR1cm4gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyBlbmFibGVkIH0pID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IGVuYWJsZWQ6ICFlbmFibGVkIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEFubm90YXRlZExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9