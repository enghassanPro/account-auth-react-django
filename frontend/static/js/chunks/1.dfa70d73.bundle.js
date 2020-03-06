(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./frontend/src/Pages/Registration/Login/Login.js":
/*!********************************************************!*\
  !*** ./frontend/src/Pages/Registration/Login/Login.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../static/css/style.css */ \"./frontend/static/css/style.css\");\n/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _static_css_custom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../static/css/custom.css */ \"./frontend/static/css/custom.css\");\n/* harmony import */ var _static_css_custom_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_css_custom_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-facebook-login */ \"./node_modules/react-facebook-login/dist/facebook-login-with-button.js\");\n/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_instagram_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-instagram-login */ \"./node_modules/react-instagram-login/dist/instagram-login.js\");\n/* harmony import */ var react_instagram_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_instagram_login__WEBPACK_IMPORTED_MODULE_6__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\nvar Login = /*#__PURE__*/function (_Component) {\n  _inherits(Login, _Component);\n\n  function Login() {\n    var _getPrototypeOf2;\n\n    var _temp, _this;\n\n    _classCallCheck(this, Login);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {\n      content: \"\"\n    }, _this.checkboxHandler = function () {\n      if (_this.state.content === \"\") _this.setState({\n        content: 'url(../../../../static/images/tick.png)'\n      });else _this.setState({\n        content: \"\"\n      });\n    }, _temp));\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      var submitForm = this.props.submitForm;\n      var hideError = this.props.hideError;\n      var googleAuth = this.props.googleAuth; // const { facebookAuth } = this.props\n\n      var checkboxStyle = {\n        content: this.state.content\n      };\n      var styles = {\n        border: 'none',\n        width: \"35px\",\n        height: \"35px\",\n        textAlign: \"center\",\n        lineHeight: \"35px\",\n        display: \"block\",\n        borderRadius: \"50%\",\n        cursor: \"pointer\"\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"w3layouts-main\",\n        style: {\n          backgroundImage: \"url('../../../../static/images/bg.jpg')\"\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bg-layer\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"alert alert-success msg-done\",\n        style: {\n          display: this.props.success ? \"block\" : \"none\"\n        },\n        role: \"alert\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"alert-heading\"\n      }, this.props.success)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"alert alert-danger msg-done\",\n        style: {\n          display: this.props.errorMsg ? \"block\" : \"none\"\n        },\n        role: \"alert\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"alert-heading\"\n      }, this.props.errorMsg)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"alert alert-warning msg-warn\",\n        style: {\n          display: this.props.warning ? \"block\" : \"none\"\n        },\n        role: \"alert\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"alert-heading\"\n      }, this.props.warning, \"\\xA0\\xA0\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"button\",\n        className: \"btn btn-primary\",\n        onClick: this.props.warningHandler\n      }, \"Activate Now\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"alert alert-warning msg-warn\",\n        style: {\n          display: this.props.warnmail ? \"block\" : \"none\"\n        },\n        role: \"alert\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"alert-heading\"\n      }, this.props.warnmail, \"\\xA0\\xA0\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: this.props.warningactive,\n        className: \"btn btn-primary\"\n      }, \"Confirm Now\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-main\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"main-icon\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"fa fa-eercast\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-left-bottom\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        action: \"#\",\n        method: \"post\",\n        onSubmit: submitForm\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"err-msg\",\n        style: {\n          display: this.props.errorValidation['username'] ? \"block\" : \"none\"\n        }\n      }, this.props.errorValidation['username'] ? this.props.errorValidation['username'] : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"icon1\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"fa fa-user\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"username\",\n        placeholder: \"Username\",\n        onChange: hideError,\n        autoFocus: true\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"err-msg\",\n        style: {\n          display: this.props.errorValidation['password'] ? \"block\" : \"none\"\n        }\n      }, this.props.errorValidation['password'] ? this.props.errorValidation['password'] : \"\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"icon1\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"fa fa-lock\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"password\",\n        name: \"password\",\n        placeholder: \"Password\",\n        onChange: hideError\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"login-check\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        className: \"checkbox\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        onClick: this.checkboxHandler,\n        type: \"checkbox\",\n        name: \"remember\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        style: checkboxStyle\n      })), \" Keep me logged in\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bottom\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"submit\",\n        className: \"btn\"\n      }, \"Login\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"links\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/reset-password\"\n      }, \"Forgot Password?\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"right\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/register\"\n      }, \"New User? Register\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"clear\"\n      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"social\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"or login using : \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_facebook_login__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        appId: \"505927166703208\",\n        callback: this.props.facebook,\n        cssClass: \"facebook\",\n        fields: \"name,id,email,picture\" // buttonStyle={{ background: \"#3b5998\", ...styles }}\n        ,\n        textButton: \"\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"fa fa-facebook\"\n        })\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        clientId: \"88908238165-1dbfhr8esj6hneb98hb88b5p114jtdt5.apps.googleusercontent.com\",\n        onSuccess: this.props.google,\n        onFailure: function onFailure(er) {\n          return console.log(er);\n        },\n        render: function render(er) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n            className: \"google\",\n            onClick: er.onClick\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n            className: \"fa fa-google-plus\"\n          }));\n        } // callBack={(res) => console.log(res)}\n\n      })))))));\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./frontend/src/Pages/Registration/Login/Login.js?");

/***/ }),

/***/ "./frontend/src/Pages/Registration/Login/LoginBuilder.js":
/*!***************************************************************!*\
  !*** ./frontend/src/Pages/Registration/Login/LoginBuilder.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ \"./frontend/src/Pages/Registration/Login/Login.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _validation_validtion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validation/validtion */ \"./frontend/src/validation/validtion.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar LoginBuilder = /*#__PURE__*/function (_Component) {\n  _inherits(LoginBuilder, _Component);\n\n  function LoginBuilder() {\n    var _getPrototypeOf2;\n\n    var _temp, _this;\n\n    _classCallCheck(this, LoginBuilder);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginBuilder)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {\n      error: {},\n      errorMsg: '',\n      redirect: {\n        push: false,\n        to: ''\n      },\n      facebook_appId: '',\n      google_clientId: '',\n      success: '',\n      warning: '',\n      user: {},\n      linkWarn: '',\n      warnmail: ''\n    }, _this.formHandler = function (data) {\n      data.preventDefault();\n\n      var extract = _this.extractDataForm(data.target.elements); // validate the extract data\n\n\n      var validate = _this.validationForm(extract);\n\n      if (validate === true) {\n        _this.postRequest(extract);\n      } else _this.setState({\n        error: validate\n      });\n    }, _this.extractDataForm = function (data) {\n      var arr = {};\n\n      for (var i = 0; i < 2; i++) {\n        arr[data[i].name] = data[i].value;\n      }\n\n      return arr;\n    }, _this.validationForm = function (data) {\n      var error = {};\n      Object.keys(data).map(function (field) {\n        if (data[field] == '') error[field] = 'This Field is required';else if (field == 'password') {\n          if (data[field].length < 5) error[field] = 'Password should be greater than 5 character';\n        } else {\n          if (!Object(_validation_validtion__WEBPACK_IMPORTED_MODULE_3__[\"inputText\"])(data[field], false, false, true)) error[field] = 'Invalid username should be contains alpha,number,_,- only!';\n        }\n      });\n      if (Object.entries(error).length === 0) return true;\n      return error;\n    }, _this.postRequest = function (data) {\n      if (Object.entries(_this.state.error).length === 0) axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/auth/login', data).then(function (result) {\n        _this.setState({\n          redirect: {\n            push: true,\n            to: \"/\"\n          }\n        });\n      })[\"catch\"](function (error) {\n        Object.keys(error.response.data).map(function (err) {\n          if (err == 'password' || err == 'username') {\n            var _error = {};\n            _error[err] = error.response.data[err];\n\n            _this.setState({\n              error: _error\n            });\n          } else {\n            if (err == 'login') {\n              _this.setState({\n                warning: error.response.data[err],\n                user: {\n                  \"username\": data['username']\n                }\n              });\n            } else {\n              _this.setState({\n                errorMsg: error.response.data[err]\n              });\n\n              setTimeout(function () {\n                return _this.setState({\n                  errorMsg: ''\n                });\n              }, 5000);\n            }\n          }\n        });\n      });\n    }, _this.activateAccount = function () {\n      _this.setState({\n        warning: ''\n      });\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/auth/send/activate\", _objectSpread({}, _this.state.user)).then(function (result) {\n        _this.setState({\n          success: result.data['success']\n        });\n\n        setTimeout(function () {\n          return _this.setState({\n            success: ''\n          });\n        }, 4000);\n\n        _this.setState({\n          warnmail: \"For Heroku Authorization can't send mail for some problem you can click here to Activate your Email  \",\n          linkWarn: result.data.activate\n        });\n      })[\"catch\"](function (error) {\n        Object.keys(error.response.data).map(function (err) {\n          _this.setState({\n            warning: '',\n            errorMsg: error.response.data[err]\n          });\n\n          setTimeout(function () {\n            return _this.setState({\n              errorMsg: ''\n            });\n          }, 5000);\n        });\n      });\n    }, _this.hideError = function (ev) {\n      _this.setState({\n        warning: ''\n      });\n\n      var name = ev.target.name;\n\n      if (_this.state.error[name]) {\n        var cp = _this.state.error;\n        delete cp[name];\n\n        _this.setState({\n          error: cp\n        });\n      }\n\n      return;\n    }, _this.socialLogin = function (data) {\n      _this.setState({\n        redirect: {\n          push: true,\n          to: '/'\n        }\n      });\n    }, _temp));\n  }\n\n  _createClass(LoginBuilder, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.title = \"Login\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return this.state.redirect.push ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"], {\n        to: this.state.redirect.to\n      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        errorValidation: this.state.error,\n        errorMsg: this.state.errorMsg,\n        hideError: function hideError(ev) {\n          return _this2.hideError(ev);\n        },\n        submitForm: function submitForm(ev) {\n          return _this2.formHandler(ev);\n        },\n        warning: this.state.warning,\n        success: this.state.success,\n        google: this.socialLogin,\n        facebook: this.socialLogin,\n        warningHandler: this.activateAccount,\n        warningactive: this.state.linkWarn,\n        warnmail: this.state.warnmail\n      });\n    }\n  }]);\n\n  return LoginBuilder;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginBuilder);\n\n//# sourceURL=webpack:///./frontend/src/Pages/Registration/Login/LoginBuilder.js?");

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
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/style-loader/dist/cjs.js):\\nValidationError: Invalid options object. Style Loader has been initialized using an options object that does not match the API schema.\\n - options has an unknown property 'modules'. These properties are valid:\\n   object { injectType?, attributes?, insert?, base?, esModule? }\\n    at validate (/root/Desktop/python/projects/store/node_modules/schema-utils/dist/validate.js:85:11)\\n    at Object.loader (/root/Desktop/python/projects/store/node_modules/style-loader/dist/index.js:22:28)\");\n\n//# sourceURL=webpack:///./frontend/static/css/custom.css?");

/***/ }),

/***/ "./frontend/static/css/style.css":
/*!***************************************!*\
  !*** ./frontend/static/css/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/style-loader/dist/cjs.js):\\nValidationError: Invalid options object. Style Loader has been initialized using an options object that does not match the API schema.\\n - options has an unknown property 'modules'. These properties are valid:\\n   object { injectType?, attributes?, insert?, base?, esModule? }\\n    at validate (/root/Desktop/python/projects/store/node_modules/schema-utils/dist/validate.js:85:11)\\n    at Object.loader (/root/Desktop/python/projects/store/node_modules/style-loader/dist/index.js:22:28)\");\n\n//# sourceURL=webpack:///./frontend/static/css/style.css?");

/***/ })

}]);