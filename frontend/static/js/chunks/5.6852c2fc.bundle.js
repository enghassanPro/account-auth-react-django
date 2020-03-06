(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./frontend/src/Pages/Registration/ResetPassword/ResetPassword/ResetPassword.js":
/*!**************************************************************************************!*\
  !*** ./frontend/src/Pages/Registration/ResetPassword/ResetPassword/ResetPassword.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResetPassword; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../static/css/style.css */ \"./frontend/static/css/style.css\");\n/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _static_css_custom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../static/css/custom.css */ \"./frontend/static/css/custom.css\");\n/* harmony import */ var _static_css_custom_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_css_custom_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar ResetPassword = /*#__PURE__*/function (_Component) {\n  _inherits(ResetPassword, _Component);\n\n  function ResetPassword() {\n    _classCallCheck(this, ResetPassword);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ResetPassword).apply(this, arguments));\n  }\n\n  _createClass(ResetPassword, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          submitForm = _this$props.submitForm,\n          hideError = _this$props.hideError;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"w3layouts-main\",\n        style: {\n          backgroundImage: \"url('../../../../static/images/bg.jpg')\"\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bg-layer\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"alert alert-success msg-done\",\n        style: {\n          display: this.props.success ? \"block\" : \"none\"\n        },\n        role: \"alert\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"alert-heading\"\n      }, this.props.success)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"alert alert-danger msg-done\",\n        style: {\n          display: this.props.errorMsg ? \"block\" : \"none\"\n        },\n        role: \"alert\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"alert-heading\"\n      }, this.props.errorMsg)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Reset Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-main\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"main-icon\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"fa fa-eercast\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-left-bottom\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        action: \"#\",\n        method: \"post\",\n        onSubmit: submitForm\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"err-msg\",\n        style: {\n          display: this.props.errorValidation['password'] ? \"block\" : \"none\"\n        }\n      }, this.props.errorValidation['password'] ? this.props.errorValidation['password'] : \"\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"icon1\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"fa fa-envelope\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"password\",\n        name: \"password\",\n        placeholder: \"Password\",\n        onChange: hideError,\n        autoFocus: true\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"err-msg\",\n        style: {\n          display: this.props.errorValidation['password1'] ? \"block\" : \"none\"\n        }\n      }, this.props.errorValidation['password1'] ? this.props.errorValidation['password1'] : \"\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"icon1\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"fa fa-envelope\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"password\",\n        name: \"password1\",\n        placeholder: \"Confirm Password\",\n        onChange: hideError,\n        autoFocus: true\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bottom\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"submit\",\n        className: \"btn\"\n      }, \"Reset Password\")))))));\n    }\n  }]);\n\n  return ResetPassword;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./frontend/src/Pages/Registration/ResetPassword/ResetPassword/ResetPassword.js?");

/***/ }),

/***/ "./frontend/src/Pages/Registration/ResetPassword/ResetPassword/ResetPasswordBuilder.js":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/Pages/Registration/ResetPassword/ResetPassword/ResetPasswordBuilder.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResetPasswordBuilder; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ResetPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword */ \"./frontend/src/Pages/Registration/ResetPassword/ResetPassword/ResetPassword.js\");\n/* harmony import */ var _validation_validtion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../validation/validtion */ \"./frontend/src/validation/validtion.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar ResetPasswordBuilder = /*#__PURE__*/function (_Component) {\n  _inherits(ResetPasswordBuilder, _Component);\n\n  function ResetPasswordBuilder() {\n    var _getPrototypeOf2;\n\n    var _temp, _this;\n\n    _classCallCheck(this, ResetPasswordBuilder);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResetPasswordBuilder)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {\n      error: {},\n      errorMsg: '',\n      redirect: {\n        push: false,\n        to: ''\n      },\n      user_id: ''\n    }, _this.formHandler = function (data) {\n      data.preventDefault();\n\n      var extract = _this.extractDataForm(data.target.elements); // validate the extract data\n\n\n      var validate = _this.validationForm(extract);\n\n      if (validate === true) {\n        _this.postRequest(extract);\n      } else _this.setState({\n        error: validate\n      });\n    }, _this.extractDataForm = function (data) {\n      var arr = {};\n      arr['password'] = data['password'].value;\n      arr['password1'] = data['password1'].value;\n      return arr;\n    }, _this.validationForm = function (data) {\n      var error = {};\n      if (data['password'] == '') error['password'] = 'This Field is required';else if (data['password1'] == '') error['password1'] = 'This Field is required';else if (!Object(_validation_validtion__WEBPACK_IMPORTED_MODULE_2__[\"password\"])(data['password'], data['password1'])) error['password1'] = 'Password didn\\'t match';else if (!error['password']) if (data['password'].length < 5) error['password'] = 'Password should be greater than 5 character';\n      if (Object.entries(error).length === 0) return true;\n      return error;\n    }, _this.postRequest = function (data) {\n      if (Object.entries(_this.state.error).length === 0) axios__WEBPACK_IMPORTED_MODULE_3___default.a.put('/auth/reset-password/' + _this.state.user_id, data).then(function (result) {\n        _this.setState({\n          success: result.data.success\n        });\n\n        setTimeout(function () {\n          return _this.setState({\n            success: '',\n            redirect: {\n              push: true,\n              to: \"/login\"\n            }\n          });\n        }, 4000);\n      })[\"catch\"](function (error) {\n        Object.keys(error.response.data).map(function (err) {\n          if (err == 'password') {\n            var _error = {};\n            _error[err] = error.response.data[err];\n\n            _this.setState({\n              error: _error\n            });\n          } else {\n            _this.setState({\n              errorMsg: error.response.data[err]\n            });\n\n            setTimeout(function () {\n              return _this.setState({\n                errorMsg: ''\n              });\n            }, 5000);\n          }\n        });\n      });\n    }, _this.hideError = function (ev) {\n      var name = ev.target.name;\n\n      if (_this.state.error[name]) {\n        var cp = _this.state.error;\n        delete cp[name];\n\n        _this.setState({\n          error: cp\n        });\n      }\n\n      return;\n    }, _temp));\n  }\n\n  _createClass(ResetPasswordBuilder, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      document.title = \"Reset Password\"; // console.log(this.props.match.params.token)\n\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"/auth/verify\", {\n        \"token\": this.props.match.params.token\n      }).then(function (result) {\n        _this2.setState({\n          user_id: result.data.id\n        });\n      })[\"catch\"](function (error) {\n        Object.keys(error.response.data).map(function (err) {\n          _this2.setState({\n            redirect: {\n              push: true,\n              to: \"/login\"\n            }\n          });\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return this.state.redirect.push ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"], {\n        to: this.state.redirect.to\n      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResetPassword__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        errorValidation: this.state.error,\n        errorMsg: this.state.errorMsg,\n        hideError: function hideError(ev) {\n          return _this3.hideError(ev);\n        },\n        submitForm: function submitForm(ev) {\n          return _this3.formHandler(ev);\n        },\n        success: this.state.success\n      });\n    }\n  }]);\n\n  return ResetPasswordBuilder;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./frontend/src/Pages/Registration/ResetPassword/ResetPassword/ResetPasswordBuilder.js?");

/***/ })

}]);