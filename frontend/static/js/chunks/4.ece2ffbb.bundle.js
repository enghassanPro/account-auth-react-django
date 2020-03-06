(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./frontend/src/Pages/Registration/ResetPassword/ResetPasswordMail/ResetPasswordSend.js":
/*!**********************************************************************************************!*\
  !*** ./frontend/src/Pages/Registration/ResetPassword/ResetPasswordMail/ResetPasswordSend.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResetPasswordSend; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../static/css/style.css */ \"./frontend/static/css/style.css\");\n/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _static_css_custom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../static/css/custom.css */ \"./frontend/static/css/custom.css\");\n/* harmony import */ var _static_css_custom_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_css_custom_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar ResetPasswordSend = /*#__PURE__*/function (_Component) {\n  _inherits(ResetPasswordSend, _Component);\n\n  function ResetPasswordSend() {\n    _classCallCheck(this, ResetPasswordSend);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ResetPasswordSend).apply(this, arguments));\n  }\n\n  _createClass(ResetPasswordSend, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          submitForm = _this$props.submitForm,\n          hideError = _this$props.hideError;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"w3layouts-main\",\n        style: {\n          backgroundImage: \"url('../../../../static/images/bg.jpg')\"\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bg-layer\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"alert alert-success msg-done\",\n        style: {\n          display: this.props.success ? \"block\" : \"none\"\n        },\n        role: \"alert\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"alert-heading\"\n      }, this.props.success)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"alert alert-warning msg-warn\",\n        style: {\n          display: this.props.warning ? \"block\" : \"none\"\n        },\n        role: \"alert\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"alert-heading\"\n      }, this.props.warning, \"\\xA0\\xA0\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: this.props.warningHandler,\n        className: \"btn btn-primary\"\n      }, \"Reset Password\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"alert alert-danger msg-done\",\n        style: {\n          display: this.props.errorMsg ? \"block\" : \"none\"\n        },\n        role: \"alert\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"alert-heading\"\n      }, this.props.errorMsg)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Reset Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-main\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"main-icon\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"fa fa-eercast\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-left-bottom\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        action: \"#\",\n        method: \"post\",\n        onSubmit: submitForm\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"err-msg\",\n        style: {\n          display: this.props.errorValidation['email'] ? \"block\" : \"none\"\n        }\n      }, this.props.errorValidation['email'] ? this.props.errorValidation['email'] : \"\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"icon1\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"fa fa-envelope\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"email\",\n        name: \"email\",\n        placeholder: \"Email\",\n        onChange: hideError,\n        autoFocus: true\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bottom\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"submit\",\n        className: \"btn\"\n      }, \"Reset Password\")))))));\n    }\n  }]);\n\n  return ResetPasswordSend;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./frontend/src/Pages/Registration/ResetPassword/ResetPasswordMail/ResetPasswordSend.js?");

/***/ }),

/***/ "./frontend/src/Pages/Registration/ResetPassword/ResetPasswordMail/ResetPasswordSendBuilder.js":
/*!*****************************************************************************************************!*\
  !*** ./frontend/src/Pages/Registration/ResetPassword/ResetPasswordMail/ResetPasswordSendBuilder.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResetPasswordSendBuilder; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ResetPasswordSend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPasswordSend */ \"./frontend/src/Pages/Registration/ResetPassword/ResetPasswordMail/ResetPasswordSend.js\");\n/* harmony import */ var _validation_validtion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../validation/validtion */ \"./frontend/src/validation/validtion.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar ResetPasswordSendBuilder = /*#__PURE__*/function (_Component) {\n  _inherits(ResetPasswordSendBuilder, _Component);\n\n  function ResetPasswordSendBuilder() {\n    var _getPrototypeOf2;\n\n    var _temp, _this;\n\n    _classCallCheck(this, ResetPasswordSendBuilder);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResetPasswordSendBuilder)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {\n      error: {},\n      errorMsg: '',\n      redirect: {\n        push: false,\n        to: ''\n      },\n      warning: '',\n      linkWarn: ''\n    }, _this.formHandler = function (data) {\n      data.preventDefault();\n\n      var extract = _this.extractDataForm(data.target.elements); // validate the extract data\n\n\n      var validate = _this.validationForm(extract);\n\n      if (validate === true) {\n        _this.postRequest(extract);\n      } else _this.setState({\n        error: validate\n      });\n    }, _this.extractDataForm = function (data) {\n      var arr = {};\n      arr['email'] = data['email'].value;\n      return arr;\n    }, _this.validationForm = function (data) {\n      var error = {};\n      if (data['email'] == '') error['email'] = 'This Field is required';else if (!Object(_validation_validtion__WEBPACK_IMPORTED_MODULE_2__[\"email\"])(data['email'])) error['email'] = 'Invalid email should be contains alpha, number, - , _ , . , @ only like fo@fo.fo';\n      if (Object.entries(error).length === 0) return true;\n      return error;\n    }, _this.postRequest = function (data) {\n      if (Object.entries(_this.state.error).length === 0) axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/auth/reset-password', data).then(function (result) {\n        _this.setState({\n          success: result.data.success\n        });\n\n        setTimeout(function () {\n          return _this.setState({\n            success: ''\n          });\n        }, 4000);\n\n        _this.setState({\n          warning: \"For Heroku Authorization can't send mail for some problem you can click here to reset Password  \",\n          linkWarn: result.data.activate\n        });\n      })[\"catch\"](function (error) {\n        Object.keys(error.response.data).map(function (err) {\n          if (err == 'username') {\n            var _error = {};\n            _error[err] = error.response.data[err];\n\n            _this.setState({\n              error: _error\n            });\n          } else {\n            _this.setState({\n              errorMsg: error.response.data[err]\n            });\n\n            setTimeout(function () {\n              return _this.setState({\n                errorMsg: ''\n              });\n            }, 5000);\n          }\n        });\n      });\n    }, _this.hideError = function (ev) {\n      var name = ev.target.name;\n\n      if (_this.state.error[name]) {\n        var cp = _this.state.error;\n        delete cp[name];\n\n        _this.setState({\n          error: cp\n        });\n      }\n\n      return;\n    }, _temp));\n  }\n\n  _createClass(ResetPasswordSendBuilder, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.title = \"Reset Password\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return this.state.redirect.push ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"], {\n        to: this.state.redirect.to\n      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResetPasswordSend__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        errorValidation: this.state.error,\n        errorMsg: this.state.errorMsg,\n        hideError: function hideError(ev) {\n          return _this2.hideError(ev);\n        },\n        submitForm: function submitForm(ev) {\n          return _this2.formHandler(ev);\n        },\n        success: this.state.success,\n        warning: this.state.warning,\n        warningHandler: this.state.linkWarn\n      });\n    }\n  }]);\n\n  return ResetPasswordSendBuilder;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./frontend/src/Pages/Registration/ResetPassword/ResetPasswordMail/ResetPasswordSendBuilder.js?");

/***/ }),

/***/ "./frontend/src/validation/validtion.js":
/*!**********************************************!*\
  !*** ./frontend/src/validation/validtion.js ***!
  \**********************************************/
/*! exports provided: email, password, inputText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"email\", function() { return email; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"password\", function() { return password; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputText\", function() { return inputText; });\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"./node_modules/validator/index.js\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\nvar email = function email(value) {\n  var reg = /[a-zA-Z0-9_\\-.]+@[a-z]+\\.[a-z]+$/;\n  if (_typeof(value) !== String) value = String(value);\n  return reg.exec(value);\n};\nvar password = function password(_password, password1) {\n  return validator__WEBPACK_IMPORTED_MODULE_0___default.a.equals(_password, password1);\n};\nvar inputText = function inputText(value) {\n  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var alphaNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var alphaNumSpec = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var regAlpha = /[a-zA-z]+$/;\n  var regAlphanum = /[a-zA-Z]+$/;\n  var regAlphanumSpec = /[a-zA-Z0-9_-]+$/;\n  if (_typeof(value) !== String) value = String(value);\n  if (alpha) return regAlpha.exec(value);else if (alphaNum) return regAlphanum.exec(value);else if (alphaNumSpec) return regAlphanumSpec.exec(value);\n  return false;\n};\n\n//# sourceURL=webpack:///./frontend/src/validation/validtion.js?");

/***/ }),

/***/ "./frontend/static/css/custom.css":
/*!****************************************!*\
  !*** ./frontend/static/css/custom.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./custom.css */ \"./node_modules/css-loader/dist/cjs.js?!./frontend/static/css/custom.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./frontend/static/css/custom.css?");

/***/ }),

/***/ "./frontend/static/css/style.css":
/*!***************************************!*\
  !*** ./frontend/static/css/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./frontend/static/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./frontend/static/css/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./frontend/static/css/custom.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./frontend/static/css/custom.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nValidationError: Invalid options object. CSS Loader has been initialized using an options object that does not match the API schema.\\n - options has an unknown property 'localIdentName'. These properties are valid:\\n   object { url?, import?, modules?, sourceMap?, importLoaders?, localsConvention?, onlyLocals?, esModule? }\\n    at validate (/root/Desktop/python/projects/store/node_modules/schema-utils/dist/validate.js:85:11)\\n    at Object.loader (/root/Desktop/python/projects/store/node_modules/css-loader/dist/index.js:34:28)\");\n\n//# sourceURL=webpack:///./frontend/static/css/custom.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./frontend/static/css/style.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./frontend/static/css/style.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nValidationError: Invalid options object. CSS Loader has been initialized using an options object that does not match the API schema.\\n - options has an unknown property 'localIdentName'. These properties are valid:\\n   object { url?, import?, modules?, sourceMap?, importLoaders?, localsConvention?, onlyLocals?, esModule? }\\n    at validate (/root/Desktop/python/projects/store/node_modules/schema-utils/dist/validate.js:85:11)\\n    at Object.loader (/root/Desktop/python/projects/store/node_modules/css-loader/dist/index.js:34:28)\");\n\n//# sourceURL=webpack:///./frontend/static/css/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ })

}]);