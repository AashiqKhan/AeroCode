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
      }), " ", __jsx("label", null, "Facebook messanger")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        submit: true
      }, "Connect")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("div", {
        className: "form-style margin0"
      }, __jsx("div", {
        className: "img-name"
      }, __jsx("div", {
        className: "img-replacer mr-5"
      }), " ", __jsx("label", null, "Slack")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        submit: true
      }, "Connect")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("div", {
        className: "form-style margin0"
      }, __jsx("div", {
        className: "img-name"
      }, __jsx("div", {
        className: "img-replacer mr-5"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyJdLCJuYW1lcyI6WyJBbm5vdGF0ZWRMYXlvdXQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBOztJQUVRQSxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGNBQVEsRUFBRSxLQURKO0FBRU5DLGFBQU8sRUFBRTtBQUZILEs7O3VOQXNPTyxZQUFNO0FBQ25CLFlBQUtDLFFBQUwsQ0FBYztBQUNaRixnQkFBUSxFQUFFLE1BQUtHLEtBQUwsQ0FBV0g7QUFEVCxPQUFkOztBQUdBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtGLEtBQS9CO0FBQ0QsSzs7dU5BRWMsVUFBQ0csS0FBRCxFQUFXO0FBQ3hCLGFBQU8sVUFBQ0MsS0FBRDtBQUFBLGVBQVcsTUFBS0wsUUFBTCwrRkFBaUJJLEtBQWpCLEVBQXlCQyxLQUF6QixFQUFYO0FBQUEsT0FBUDtBQUNELEs7O3VOQUVjLFlBQU07QUFDakIsWUFBS0wsUUFBTCxDQUFjLGdCQUFpQjtBQUFBLFlBQWRELE9BQWMsUUFBZEEsT0FBYztBQUM3QixlQUFPO0FBQUVBLGlCQUFPLEVBQUUsQ0FBQ0E7QUFBWixTQUFQO0FBQ0QsT0FGRDtBQUdELEs7Ozs7Ozs7NkJBL09NO0FBQUEsd0JBQ3lCLEtBQUtFLEtBRDlCO0FBQUEsVUFDR0gsUUFESCxlQUNHQSxRQURIO0FBQUEsVUFDYUMsT0FEYixlQUNhQSxPQURiO0FBRUwsVUFBTU8sYUFBYSxHQUFHUCxPQUFPLEdBQUcsU0FBSCxHQUFlLFFBQTVDO0FBQ0EsVUFBTVEsVUFBVSxHQUFH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TUFBQyx1REFBRDtBQUFRLGNBQU07QUFBZCxtQkFMRixDQURGLENBREYsQ0FmSixFQTBCSSxNQUFDLHFEQUFEO0FBQU0saUJBQVM7QUFBZixTQUNFLE1BQUMscURBQUQsUUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFGRixPQUU0Qyw2QkFGNUMsQ0FERixFQUtFLE1BQUMsdURBQUQ7QUFBUSxjQUFNO0FBQWQsbUJBTEYsQ0FERixDQURGLENBMUJKLENBL0lBLEVBc0xFO0FBQUksaUJBQVMsRUFBQztBQUFkLFFBdExGLEVBd0xFLE1BQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNFLGFBQUssRUFBQyxhQURSO0FBRUUsbUJBQVcsRUFBQztBQUZkLFNBSUEsTUFBQyxxREFBRDtBQUFNLGlCQUFTO0FBQWYsU0FDRSxNQUFDLHFEQUFELFFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFPLGlCQUFTLEVBQUM7QUFBakIsMkRBREYsRUFFRSxNQUFDLHVEQUFEO0FBQVMsY0FBTTtBQUFmLGtCQUZGLENBREYsQ0FERixDQUpBLENBeExGLENBRkEsQ0FYRixDQURGO0FBeU5EOzs7O0VBck8yQlMsNENBQUssQ0FBQ0MsUzs7QUF5UHJCWiw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LjcyNDNhMjE5OTIyOGVmNDA1ZGNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1dHRvbixDYXJkLEZvcm0sTGF5b3V0LFBhZ2UsfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XHJcbi8vIGltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbiAgXHJcbiAgY2xhc3MgQW5ub3RhdGVkTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBkaXNjb3VudDogJzEwJScsXHJcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIFxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGlzY291bnQsIGVuYWJsZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgY29udGVudFN0YXR1cyA9IGVuYWJsZWQgPyAnRGlzYWJsZScgOiAnRW5hYmxlJztcclxuICAgICAgICBjb25zdCB0ZXh0U3RhdHVzID0gZW5hYmxlZCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCc7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibS0wIG5ld2Nhc3NcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtYXJlYVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Jy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnfSBhbHQ9XCJsb2dvXCIgLz4gPGxhYmVsPkFlcm8gLyA8L2xhYmVsPiA8aDU+U2V0dGluZ3M8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc3VibWl0PlNldHRpbmdzPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+U2F2ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwicG9sb3JpZXMtbGF5b3V0XCI+XHJcblxyXG4gICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICB0aXRsZT1cIkdsb2JhbCBTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJNYW5hZ2UgaG93IEFlcm8gd2lsbCBhcHBlYXIgYWNyb3NzIHlvdXIgc3RpcmUuXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYXJnaW4wIGJvbGQtdGV4dFwiPkdsb2JhbCBTdGF0ZS4gQWVybyBpcyBjdXJyZW50bHkgZGVhY3RpdmVkIGFjcm9zcyB5b3VyIHN0b3JlLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5FbmFibGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJHbG9iYWwgRGlzcGxheSBTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJDdXN0b21pemUgdGhlIHBvc3Rpb24gYW5kIHN0eWxlIG9mIEFlcm8gaW4gcmVsYXRpb24gdG8geW91ciBzdG9yZVwiXHJcblxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdHlsZSBtYXJnaW4wIGQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFyZ2luMCBib2xkLXRleHQgZC1ibG9jayBtYi0zXCI+RmxvYXRpbmcgV2lkZ2V0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldpZGdldC1jb3ZlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBvc3Rpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEwMCBcIiBwbGFjZWhvbGRlcj1cIkJvb3RvbSBSaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LXVwLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyB1cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+QnV0dG9uIENvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG8tcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1jaXJjbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IzVDNkFDNDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZXhhLXZhbHVlXCI+aGV4PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCBJY29uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaW5wdXRTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPmZhcyBmYS10cm9waHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SXRlbXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UHJvZHVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID5JY29uIENvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG8tcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1jaXJjbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IzVDNkFDNDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZXhhLXZhbHVlXCI+aGV4PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvdyBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYXJnaW4gVG9wPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy0xMDAgXCIgcGxhY2Vob2xkZXI9XCIxMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LXVwLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyB1cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYXJnaW4gQm90dG9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy0xMDAgXCIgcGxhY2Vob2xkZXI9XCIxMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LXVwLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyB1cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYXJnaW4gTGVmdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMTAwIFwiIHBsYWNlaG9sZGVyPVwiMTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy11cC1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgdXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyBkb3duXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFyZ2luIFJpZ2h0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy0xMDAgXCIgcGxhY2Vob2xkZXI9XCIxMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LXVwLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyB1cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJteS0zXCI+TGFiZWxzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID5Gb250IENvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG8tcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1jaXJjbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IzVDNkFDNDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZXhhLXZhbHVlXCI+aGV4PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID5CYWNrZ3JvdW5kIENvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG8tcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1jaXJjbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IzVDNkFDNDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZXhhLXZhbHVlXCI+aGV4PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tY2hlY2sgcmVsYXRpdmUtY2hla2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cImV4YW1wbGVDaGVjazFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJleGFtcGxlQ2hlY2sxXCI+SGlkZSBMYWJlbGVzPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZC1ibG9ja1wiPkN1c3RvbSBDc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0LWFyZWFcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWlkZGxlLWxpbmVcIiAvPlxyXG5cclxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiSW50ZWdyYXRpb25zXCJcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk1hbmFnZSBpdGVncmF0aW9ucyBmb3IgQWVyby5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdHlsZSBtYXJnaW4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vYXNzZXRzL21lc3Nhbmdlci5wbmdcIiBjbGFzc05hbWU9XCJtci01XCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1yZXBsYWNlciBtci01XCI+PC9kaXY+IDxsYWJlbD5GYWNlYm9vayBtZXNzYW5nZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3VibWl0PkNvbm5lY3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9tZXNzYW5nZXIucG5nXCIgY2xhc3NOYW1lPVwibXItNVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcmVwbGFjZXIgbXItNVwiPjwvZGl2PiA8bGFiZWw+U2xhY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3VibWl0PkNvbm5lY3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3R5bGUgbWFyZ2luMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9tZXNzYW5nZXIucG5nXCIgY2xhc3NOYW1lPVwibXItNVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcmVwbGFjZXIgbXItNVwiPjwvZGl2PiA8bGFiZWw+RHJpZnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3VibWl0PkNvbm5lY3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPiBcclxuXHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtaWRkbGUtbGluZVwiIC8+XHJcblxyXG4gICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICB0aXRsZT1cIk1hbmFnZSBQbGFuXCJcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk1hbmFnZSB5b3VyIGN1cnJlbnQgQWVybyBQbGFuLlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN0eWxlIG1hcmdpbjBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1hcmdpbjAgYm9sZC10ZXh0XCI+WW91IGFyZSBjdXJyZW50bHkgc3Vic2NyaWJlIHRvIGEgUHJlbWltdW0gUGxhbi48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uICBzdWJtaXQ+TWFuYWdlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuXHJcblxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXNzaW9uJywgdGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCh7IGVuYWJsZWQgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgZW5hYmxlZDogIWVuYWJsZWQgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=