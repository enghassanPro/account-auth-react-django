(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./frontend/src/Pages/errors/Error_404.js":
/*!************************************************!*\
  !*** ./frontend/src/Pages/errors/Error_404.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_css_style_404_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/css/style_404.css */ \"./frontend/static/css/style_404.css\");\n/* harmony import */ var _static_css_style_404_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_404_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Error404 = /*#__PURE__*/function (_Component) {\n  _inherits(Error404, _Component);\n\n  function Error404() {\n    _classCallCheck(this, Error404);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Error404).apply(this, arguments));\n  }\n\n  _createClass(Error404, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.title = \"Page Not Found\";\n    }\n  }, {\n    key: \"goBackHandler\",\n    value: function goBackHandler() {\n      this.props.history.goBack();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"class\": \"main\",\n        style: {\n          background: \"url('../../../static/images/4.png') no-repeat 0px 0px\"\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"class\": \"text\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"class\": \"left\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"404\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"class\": \"right\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"SORRY!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"The Page You Are Looking For Was Not Found\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        onClick: this.goBackHandler\n      }, \"Go Back\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"class\": \"clear\"\n      })));\n    }\n  }]);\n\n  return Error404;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error404);\n\n//# sourceURL=webpack:///./frontend/src/Pages/errors/Error_404.js?");

/***/ }),

/***/ "./frontend/static/css/style_404.css":
/*!*******************************************!*\
  !*** ./frontend/static/css/style_404.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style_404.css */ \"./node_modules/css-loader/dist/cjs.js?!./frontend/static/css/style_404.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./frontend/static/css/style_404.css?");

/***/ }),

/***/ "./frontend/static/images/4.png":
/*!**************************************!*\
  !*** ./frontend/static/images/4.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/static/images/4.png\");\n\n//# sourceURL=webpack:///./frontend/static/images/4.png?");

/***/ }),

/***/ "./frontend/static/images/5.png":
/*!**************************************!*\
  !*** ./frontend/static/images/5.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/static/images/5.png\");\n\n//# sourceURL=webpack:///./frontend/static/images/5.png?");

/***/ }),

/***/ "./frontend/static/images/arrow.png":
/*!******************************************!*\
  !*** ./frontend/static/images/arrow.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/static/images/arrow.png\");\n\n//# sourceURL=webpack:///./frontend/static/images/arrow.png?");

/***/ }),

/***/ "./frontend/static/images/carrow.png":
/*!*******************************************!*\
  !*** ./frontend/static/images/carrow.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/static/images/carrow.png\");\n\n//# sourceURL=webpack:///./frontend/static/images/carrow.png?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./frontend/static/css/style_404.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./frontend/static/css/style_404.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/4.png */ \"./frontend/static/images/4.png\");\n/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/arrow.png */ \"./frontend/static/images/arrow.png\");\n/* harmony import */ var _images_carrow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/carrow.png */ \"./frontend/static/images/carrow.png\");\n/* harmony import */ var _images_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/5.png */ \"./frontend/static/images/5.png\");\n// Imports\n\n\n\n\n\n\nvar exports = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_4_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_arrow_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_carrow_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_5_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n// Module\nexports.push([module.i, \"body {\\r\\n\\tpadding: 0;\\r\\n\\tmargin: 0;\\r\\n\\tbackground: #FFF;\\r\\n\\tfont-family: 'Open Sans', sans-serif;\\r\\n}\\r\\nbody a {\\r\\n\\ttransition: 0.5s all;\\r\\n\\t-webkit-transition: 0.5s all;\\r\\n\\t-moz-transition: 0.5s all;\\r\\n\\t-o-transition: 0.5s all;\\r\\n\\t-ms-transition: 0.5s all;\\r\\n\\ttext-decoration: none;\\r\\n}\\r\\nbody a:hover {\\r\\n\\ttext-decoration: none;\\r\\n}\\r\\nbody a:focus, a:hover {\\r\\n\\ttext-decoration: none;\\r\\n}\\r\\ninput[type=\\\"button\\\"], input[type=\\\"submit\\\"] {\\r\\n\\ttransition: 0.5s all;\\r\\n\\t-webkit-transition: 0.5s all;\\r\\n\\t-moz-transition: 0.5s all;\\r\\n\\t-o-transition: 0.5s all;\\r\\n\\t-ms-transition: 0.5s all;\\r\\n}\\r\\nh1, h2, h3, h4, h5, h6 {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\ttext-align: center;\\r\\n\\tfont-family: 'Raleway', sans-serif;\\r\\n}\\r\\np {\\r\\n\\tmargin:0;\\r\\n}\\r\\nul {\\r\\n\\tmargin:0;\\r\\n\\tpadding:0;\\r\\n}\\r\\nlabel {\\r\\n\\tmargin:0;\\r\\n}\\r\\na:focus, a:hover {\\r\\n\\ttext-decoration: none;\\r\\n\\toutline: none\\r\\n}\\r\\nimg {\\r\\n\\twidth: 100%;\\r\\n}\\r\\n.style_404__clear--3ZtWY{\\r\\n\\tclear:both;\\r\\n}\\r\\n/*-- //Reset Code --*/\\r\\n.style_404__main--3jbbl{\\r\\nbackground:url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat 0px 0px;\\r\\nbackground-size:cover;\\r\\nmin-height:799px;\\r\\n}\\r\\n.style_404__text--nNvpB{\\r\\n\\twidth:50%;\\r\\n\\tmargin:0 auto;\\r\\n\\tpadding-top:330px;\\r\\n}\\r\\n.style_404__left--2G8lX{\\r\\n\\tfloat:left;\\r\\n\\twidth:49%;\\r\\n\\r\\n}\\r\\n.style_404__left--2G8lX h2{\\r\\n\\tfont-size:140px;\\r\\n\\tcolor:#000;\\r\\n\\t\\r\\n}\\r\\n.style_404__right--1OW8S {\\r\\n    float: left;\\r\\n    width: 46%;\\r\\n    padding-left: 4%;\\r\\n\\tborder-left:1px solid #000;\\r\\n}\\r\\n.style_404__right--1OW8S h3{\\r\\n\\tfont-size:40px;\\r\\n\\tpadding-bottom:10px;\\r\\n\\ttext-align:left;\\r\\n}\\r\\n.style_404__right--1OW8S h4{\\r\\n\\tfont-size:20px;\\r\\n\\ttext-align:left;\\r\\n\\twidth:88%;\\r\\n}\\r\\n.style_404__right--1OW8S img {\\r\\n    width: 13%;\\r\\n    padding-left: 10px;\\r\\n}\\r\\n.style_404__right--1OW8S a{\\r\\n\\t    color: #000;\\r\\n    border: 2px solid #000;\\r\\n    padding: 8px 34px 8px 15px;\\r\\n    display: inline-block;\\r\\n    margin-top: 10px;\\r\\n    font-size: 16px;\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat 97px 10px;\\r\\n    background-size: 10%;\\r\\n}\\r\\n.style_404__right--1OW8S a:hover{\\r\\n\\tcolor:#b76b24;\\r\\n\\t\\tborder:2px solid #b76b24;\\r\\n\\t\\t background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat 97px 10px;\\r\\n\\t\\t   background-size: 10%;\\r\\n}\\r\\n.style_404__footer--3kZr3 {\\r\\n    padding-top: 264px;\\r\\n    width: 100%;\\r\\n    text-align: center;\\r\\n}\\r\\n.style_404__footer--3kZr3 p{\\r\\n\\tcolor:#000;\\r\\n\\tfont-size:16px;\\r\\n}\\r\\n.style_404__footer--3kZr3 a{\\r\\n\\tcolor:#000;\\r\\n}\\r\\n.style_404__footer--3kZr3 a:hover{\\r\\n\\tcolor:#fff;\\r\\n}\\r\\n\\r\\n@media (max-width: 1600px){\\r\\n\\t.style_404__text--nNvpB{\\r\\n\\t\\twidth:50%;\\r\\n\\t\\tmargin:0 auto;\\r\\n\\t\\tpadding-top:340px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 1440px){\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\tpadding-top: 300px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 1366px){\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\tpadding-top: 275px;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX h2{\\r\\n\\t\\tfont-size:130px;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S h4 {\\r\\n\\t\\tfont-size: 19px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (max-width: 1280px){\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\tpadding-top: 270px;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX h2{\\r\\n\\t\\tfont-size:120px;\\r\\n\\t\\tpadding-left:20px;\\r\\n\\t}\\r\\n\\t\\r\\n}\\r\\n@media (max-width: 1080px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tmin-height: 598px;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\tpadding-top: 218px;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX h2 {\\r\\n\\t\\tfont-size: 110px;\\r\\n\\t\\tpadding-top:10px;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S h4 {\\r\\n\\t\\tfont-size: 16px;\\r\\n\\t}\\r\\n\\t\\r\\n\\t.style_404__footer--3kZr3 {\\r\\n\\t\\tpadding-top: 188px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 1024px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\r\\n\\t\\tmin-height: 674px;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\tpadding-top: 207px;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX {\\r\\n\\t\\tfloat: left;\\r\\n\\t\\twidth: 55%;\\r\\n\\t}\\r\\n\\t/*-- agileits --*/\\r\\n\\t.style_404__left--2G8lX h2 {\\r\\n\\t\\tfont-size: 105px;\\r\\n\\t\\tpadding-left:70px;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S {\\r\\n\\t\\tfloat: left;\\r\\n\\t\\twidth: 35%;\\r\\n\\t\\tpadding-left: 4%;\\r\\n\\t\\tborder-left: 1px solid #000;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S h3 {\\r\\n\\t\\tfont-size: 38px;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S a{\\r\\n\\t\\tfont-size:14px;\\r\\n\\t}\\r\\n\\t.style_404__footer--3kZr3 {\\r\\n\\t\\tpadding-top: 170px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 991px){\\r\\n\\t.style_404__left--2G8lX {\\r\\n\\t\\twidth: 59%;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S {\\r\\n\\t\\twidth: 32%;\\r\\n\\t\\tpadding-left: 3%;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S h4 {\\r\\n\\t\\tfont-size: 15px;\\r\\n\\t\\twidth:100%;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 900px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tmin-height: 600px;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\tpadding-top: 180px;\\r\\n\\t}\\r\\n\\r\\n\\t.style_404__left--2G8lX {\\r\\n\\t\\twidth: 55%;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX h2 {\\r\\n\\t\\tfont-size: 100px;\\r\\n\\t\\tpadding:15px 0px 0px 53px;\\r\\n\\t\\t\\r\\n\\t}\\r\\n\\t/*-- w3layouts--*/\\r\\n\\t.style_404__right--1OW8S {\\r\\n\\t\\twidth: 41%;\\r\\n   }\\r\\n\\t.style_404__right--1OW8S h4 {\\r\\n\\t\\twidth: 97%;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 800px){\\r\\n    .style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat -46px 0px;\\r\\n\\t\\tbackground-size:cover;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 768px){\\r\\n    .style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat -354px 0px;\\r\\n\\t\\tmin-height: 929px;\\r\\n\\t\\tbackground-size:cover;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\twidth:65%;\\r\\n\\t\\tpadding-top: 325px;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX{\\r\\n\\t\\twidth:50%;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX h2 {\\r\\n\\t\\tfont-size: 100px;\\r\\n\\t\\tpadding: 15px 0px 0px 0px;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S{\\r\\n\\t\\twidth:46%;\\r\\n\\t}\\r\\n\\t.style_404__footer--3kZr3 {\\r\\n\\t\\tpadding-top: 250px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 736px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat -215px 0px;\\r\\n\\t\\tmin-height: 715px;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\twidth: 65%;\\r\\n\\t\\tpadding-top: 241px;\\r\\n\\t}\\r\\n\\t.style_404__footer--3kZr3 {\\r\\n\\tpadding-top: 200px;\\r\\n\\t/*-- agileits --*/\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 667px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat -143px 0px;\\r\\n\\t\\tmin-height: 586px;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\twidth: 64%;\\r\\n\\t\\tpadding-top: 180px;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S h4 {\\r\\n\\t\\twidth: 93%;\\r\\n\\t}\\r\\n\\t.style_404__footer--3kZr3 {\\r\\n\\t\\tpadding-top: 168px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 600px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat -175px 0px;\\r\\n\\t\\tmin-height: 586px;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 568px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat -184px 0px;\\r\\n\\t\\tmin-height: 565px;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\twidth: 65%;\\r\\n\\t\\tpadding-top: 174px;\\r\\n\\t}\\r\\n\\t.style_404__footer--3kZr3 {\\r\\n\\t\\tpadding-top: 100px;\\r\\n\\t}\\r\\n\\t.style_404__footer--3kZr3 p {\\r\\n\\t\\tcolor: #000;\\r\\n\\t\\tfont-size: 14px;\\r\\n\\t\\tline-height:25px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 480px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat -238px 0px;\\r\\n\\t\\tmin-height: 600px;\\r\\n\\t\\t/*-- w3layouts --*/\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\twidth: 83%;\\r\\n\\t\\tpadding-top: 182px;\\r\\n\\t}\\r\\n\\t.style_404__footer--3kZr3 {\\r\\n\\t\\tpadding-top: 132px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 414px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat -83px -79px;\\r\\n\\t\\tbackground-size: 123%;\\r\\n\\t\\tmin-height: 672px;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tpadding-top: 165px;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tfloat: none;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX h2 {\\r\\n\\t\\tfont-size: 100px;\\r\\n\\t\\tpadding: 17px 0px 0px 0px;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S {\\r\\n\\t\\twidth: 39%;\\r\\n\\t\\tfloat: none;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tpadding-left:0px;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S h4 {\\r\\n\\t\\twidth: 100%;\\r\\n\\t}\\t\\r\\n\\t.style_404__footer--3kZr3 {\\r\\n\\t\\tpadding-top: 100px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 384px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat -81px -79px;\\r\\n\\t\\tbackground-size: 128%;\\r\\n\\t\\tmin-height: 672px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 375px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat -97px -129px;\\r\\n\\t\\tmin-height: 603px;\\r\\n\\t\\tbackground-size: 136%;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tpadding-top: 127px;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tfloat: none;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX h2 {\\r\\n\\t\\tfont-size: 100px;\\r\\n\\t\\tpadding: 0px 0px 0px 0px;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S {\\r\\n\\t\\twidth: 39%;\\r\\n\\t\\tfloat: none;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S h4 {\\r\\n\\t\\twidth: 100%;\\r\\n\\t}\\r\\n\\t.style_404__footer--3kZr3 {\\r\\n\\t    padding-top: 113px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 320px){\\r\\n\\t.style_404__main--3jbbl {\\r\\n\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat -87px -110px;\\r\\n\\t\\tbackground-size: 136%;\\r\\n\\t\\tmin-height: 503px;\\r\\n\\t}\\r\\n\\t.style_404__text--nNvpB {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tpadding-top: 92px;\\r\\n\\t}\\r\\n\\t.style_404__left--2G8lX h2 {\\r\\n\\t\\tfont-size: 85px;\\r\\n\\t\\tpadding: 0px 0px 0px 0px;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S {\\r\\n\\t\\twidth: 50%;\\r\\n\\t\\ttext-align: center;\\r\\n\\t}\\r\\n\\t.style_404__right--1OW8S h4 {\\r\\n\\t\\ttext-align: center;\\r\\n\\t}\\r\\n\\t.style_404__footer--3kZr3 {\\r\\n\\t\\tpadding-top: 106px;\\r\\n\\t}\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"style_404.css\"],\"names\":[],\"mappings\":\"AAAA;CACC,UAAU;CACV,SAAS;CACT,gBAAgB;CAChB,oCAAoC;AACrC;AACA;CACC,oBAAoB;CACpB,4BAA4B;CAC5B,yBAAyB;CACzB,uBAAuB;CACvB,wBAAwB;CACxB,qBAAqB;AACtB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,oBAAoB;CACpB,4BAA4B;CAC5B,yBAAyB;CACzB,uBAAuB;CACvB,wBAAwB;AACzB;AACA;CACC,SAAS;CACT,UAAU;CACV,kBAAkB;CAClB,kCAAkC;AACnC;AACA;CACC,QAAQ;AACT;AACA;CACC,QAAQ;CACR,SAAS;AACV;AACA;CACC,QAAQ;AACT;AACA;CACC,qBAAqB;CACrB;AACD;AACA;CACC,WAAW;AACZ;AACA;CACC,UAAU;AACX;AACA,qBAAqB;AACrB;AACA,oEAAmD;AACnD,qBAAqB;AACrB,gBAAgB;AAChB;AACA;CACC,SAAS;CACT,aAAa;CACb,iBAAiB;AAClB;AACA;CACC,UAAU;CACV,SAAS;;AAEV;AACA;CACC,eAAe;CACf,UAAU;;AAEX;AACA;IACI,WAAW;IACX,UAAU;IACV,gBAAgB;CACnB,0BAA0B;AAC3B;AACA;CACC,cAAc;CACd,mBAAmB;CACnB,eAAe;AAChB;AACA;CACC,cAAc;CACd,eAAe;CACf,SAAS;AACV;AACA;IACI,UAAU;IACV,kBAAkB;AACtB;AACA;KACK,WAAW;IACZ,sBAAsB;IACtB,0BAA0B;IAC1B,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;IACf,uEAA0D;IAC1D,oBAAoB;AACxB;AACA;CACC,aAAa;EACZ,wBAAwB;GACvB,uEAA2D;KACzD,oBAAoB;AACzB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,kBAAkB;AACtB;AACA;CACC,UAAU;CACV,cAAc;AACf;AACA;CACC,UAAU;AACX;AACA;CACC,UAAU;AACX;;AAEA;CACC;EACC,SAAS;EACT,aAAa;EACb,iBAAiB;CAClB;AACD;AACA;CACC;EACC,kBAAkB;CACnB;AACD;AACA;CACC;EACC,kBAAkB;CACnB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;IACb;AACJ;;AAEA;CACC;EACC,kBAAkB;CACnB;CACA;EACC,eAAe;EACf,iBAAiB;CAClB;;AAED;AACA;CACC;EACC,iBAAiB;CAClB;CACA;EACC,kBAAkB;CACnB;CACA;EACC,gBAAgB;EAChB,gBAAgB;CACjB;CACA;EACC,eAAe;CAChB;;CAEA;EACC,kBAAkB;CACnB;AACD;AACA;CACC;;EAEC,iBAAiB;CAClB;CACA;EACC,kBAAkB;CACnB;CACA;EACC,WAAW;EACX,UAAU;CACX;CACA,iBAAiB;CACjB;EACC,gBAAgB;EAChB,iBAAiB;CAClB;CACA;EACC,WAAW;EACX,UAAU;EACV,gBAAgB;EAChB,2BAA2B;CAC5B;CACA;EACC,eAAe;CAChB;CACA;EACC,cAAc;CACf;CACA;EACC,kBAAkB;CACnB;AACD;AACA;CACC;EACC,UAAU;CACX;CACA;EACC,UAAU;EACV,gBAAgB;CACjB;CACA;EACC,eAAe;EACf,UAAU;CACX;AACD;AACA;CACC;EACC,iBAAiB;CAClB;CACA;EACC,kBAAkB;CACnB;;CAEA;EACC,UAAU;CACX;CACA;EACC,gBAAgB;EAChB,yBAAyB;;CAE1B;CACA,iBAAiB;CACjB;EACC,UAAU;GACT;CACF;EACC,UAAU;CACX;AACD;AACA;IACI;EACF,uEAAsD;EACtD,qBAAqB;CACtB;AACD;AACA;IACI;EACF,wEAAuD;EACvD,iBAAiB;EACjB,qBAAqB;CACtB;CACA;EACC,SAAS;EACT,kBAAkB;CACnB;CACA;EACC,SAAS;CACV;CACA;EACC,gBAAgB;EAChB,yBAAyB;CAC1B;CACA;EACC,SAAS;CACV;CACA;EACC,kBAAkB;CACnB;AACD;AACA;CACC;EACC,wEAAuD;EACvD,iBAAiB;EACjB,sBAAsB;CACvB;CACA;EACC,UAAU;EACV,kBAAkB;CACnB;CACA;CACA,kBAAkB;CAClB,iBAAiB;CACjB;AACD;AACA;CACC;EACC,wEAAuD;EACvD,iBAAiB;EACjB,sBAAsB;CACvB;CACA;EACC,UAAU;EACV,kBAAkB;CACnB;CACA;EACC,UAAU;CACX;CACA;EACC,kBAAkB;CACnB;AACD;AACA;CACC;EACC,wEAAuD;EACvD,iBAAiB;EACjB,sBAAsB;CACvB;AACD;AACA;CACC;EACC,wEAAuD;EACvD,iBAAiB;EACjB,sBAAsB;CACvB;CACA;EACC,UAAU;EACV,kBAAkB;CACnB;CACA;EACC,kBAAkB;CACnB;CACA;EACC,WAAW;EACX,eAAe;EACf,gBAAgB;CACjB;AACD;AACA;CACC;EACC,wEAAuD;EACvD,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;CACvB;CACA;EACC,UAAU;EACV,kBAAkB;CACnB;CACA;EACC,kBAAkB;CACnB;AACD;AACA;CACC;EACC,yEAAwD;EACxD,qBAAqB;EACrB,iBAAiB;CAClB;CACA;EACC,WAAW;EACX,kBAAkB;CACnB;CACA;EACC,WAAW;EACX,WAAW;CACZ;CACA;EACC,gBAAgB;EAChB,yBAAyB;CAC1B;CACA;EACC,UAAU;EACV,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,cAAc;CACf;CACA;EACC,WAAW;CACZ;CACA;EACC,kBAAkB;CACnB;AACD;AACA;CACC;EACC,yEAAwD;EACxD,qBAAqB;EACrB,iBAAiB;CAClB;AACD;AACA;CACC;EACC,0EAAyD;EACzD,iBAAiB;EACjB,qBAAqB;CACtB;CACA;EACC,WAAW;EACX,kBAAkB;CACnB;CACA;EACC,WAAW;EACX,WAAW;CACZ;CACA;EACC,gBAAgB;EAChB,wBAAwB;CACzB;CACA;EACC,UAAU;EACV,WAAW;EACX,YAAY;EACZ,UAAU;EACV,cAAc;CACf;CACA;EACC,WAAW;CACZ;CACA;KACI,kBAAkB;CACtB;AACD;AACA;CACC;EACC,0EAAyD;EACzD,qBAAqB;EACrB,iBAAiB;CAClB;CACA;EACC,WAAW;EACX,iBAAiB;CAClB;CACA;EACC,eAAe;EACf,wBAAwB;CACzB;CACA;EACC,UAAU;EACV,kBAAkB;CACnB;CACA;EACC,kBAAkB;CACnB;CACA;EACC,kBAAkB;CACnB;AACD\",\"file\":\"style_404.css\",\"sourcesContent\":[\"body {\\r\\n\\tpadding: 0;\\r\\n\\tmargin: 0;\\r\\n\\tbackground: #FFF;\\r\\n\\tfont-family: 'Open Sans', sans-serif;\\r\\n}\\r\\nbody a {\\r\\n\\ttransition: 0.5s all;\\r\\n\\t-webkit-transition: 0.5s all;\\r\\n\\t-moz-transition: 0.5s all;\\r\\n\\t-o-transition: 0.5s all;\\r\\n\\t-ms-transition: 0.5s all;\\r\\n\\ttext-decoration: none;\\r\\n}\\r\\nbody a:hover {\\r\\n\\ttext-decoration: none;\\r\\n}\\r\\nbody a:focus, a:hover {\\r\\n\\ttext-decoration: none;\\r\\n}\\r\\ninput[type=\\\"button\\\"], input[type=\\\"submit\\\"] {\\r\\n\\ttransition: 0.5s all;\\r\\n\\t-webkit-transition: 0.5s all;\\r\\n\\t-moz-transition: 0.5s all;\\r\\n\\t-o-transition: 0.5s all;\\r\\n\\t-ms-transition: 0.5s all;\\r\\n}\\r\\nh1, h2, h3, h4, h5, h6 {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\ttext-align: center;\\r\\n\\tfont-family: 'Raleway', sans-serif;\\r\\n}\\r\\np {\\r\\n\\tmargin:0;\\r\\n}\\r\\nul {\\r\\n\\tmargin:0;\\r\\n\\tpadding:0;\\r\\n}\\r\\nlabel {\\r\\n\\tmargin:0;\\r\\n}\\r\\na:focus, a:hover {\\r\\n\\ttext-decoration: none;\\r\\n\\toutline: none\\r\\n}\\r\\nimg {\\r\\n\\twidth: 100%;\\r\\n}\\r\\n.clear{\\r\\n\\tclear:both;\\r\\n}\\r\\n/*-- //Reset Code --*/\\r\\n.main{\\r\\nbackground:url('../images/4.png') no-repeat 0px 0px;\\r\\nbackground-size:cover;\\r\\nmin-height:799px;\\r\\n}\\r\\n.text{\\r\\n\\twidth:50%;\\r\\n\\tmargin:0 auto;\\r\\n\\tpadding-top:330px;\\r\\n}\\r\\n.left{\\r\\n\\tfloat:left;\\r\\n\\twidth:49%;\\r\\n\\r\\n}\\r\\n.left h2{\\r\\n\\tfont-size:140px;\\r\\n\\tcolor:#000;\\r\\n\\t\\r\\n}\\r\\n.right {\\r\\n    float: left;\\r\\n    width: 46%;\\r\\n    padding-left: 4%;\\r\\n\\tborder-left:1px solid #000;\\r\\n}\\r\\n.right h3{\\r\\n\\tfont-size:40px;\\r\\n\\tpadding-bottom:10px;\\r\\n\\ttext-align:left;\\r\\n}\\r\\n.right h4{\\r\\n\\tfont-size:20px;\\r\\n\\ttext-align:left;\\r\\n\\twidth:88%;\\r\\n}\\r\\n.right img {\\r\\n    width: 13%;\\r\\n    padding-left: 10px;\\r\\n}\\r\\n.right a{\\r\\n\\t    color: #000;\\r\\n    border: 2px solid #000;\\r\\n    padding: 8px 34px 8px 15px;\\r\\n    display: inline-block;\\r\\n    margin-top: 10px;\\r\\n    font-size: 16px;\\r\\n    background: url('../images/arrow.png') no-repeat 97px 10px;\\r\\n    background-size: 10%;\\r\\n}\\r\\n.right a:hover{\\r\\n\\tcolor:#b76b24;\\r\\n\\t\\tborder:2px solid #b76b24;\\r\\n\\t\\t background: url('../images/carrow.png') no-repeat 97px 10px;\\r\\n\\t\\t   background-size: 10%;\\r\\n}\\r\\n.footer {\\r\\n    padding-top: 264px;\\r\\n    width: 100%;\\r\\n    text-align: center;\\r\\n}\\r\\n.footer p{\\r\\n\\tcolor:#000;\\r\\n\\tfont-size:16px;\\r\\n}\\r\\n.footer a{\\r\\n\\tcolor:#000;\\r\\n}\\r\\n.footer a:hover{\\r\\n\\tcolor:#fff;\\r\\n}\\r\\n\\r\\n@media (max-width: 1600px){\\r\\n\\t.text{\\r\\n\\t\\twidth:50%;\\r\\n\\t\\tmargin:0 auto;\\r\\n\\t\\tpadding-top:340px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 1440px){\\r\\n\\t.text {\\r\\n\\t\\tpadding-top: 300px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 1366px){\\r\\n\\t.text {\\r\\n\\t\\tpadding-top: 275px;\\r\\n\\t}\\r\\n\\t.left h2{\\r\\n\\t\\tfont-size:130px;\\r\\n\\t}\\r\\n\\t.right h4 {\\r\\n\\t\\tfont-size: 19px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (max-width: 1280px){\\r\\n\\t.text {\\r\\n\\t\\tpadding-top: 270px;\\r\\n\\t}\\r\\n\\t.left h2{\\r\\n\\t\\tfont-size:120px;\\r\\n\\t\\tpadding-left:20px;\\r\\n\\t}\\r\\n\\t\\r\\n}\\r\\n@media (max-width: 1080px){\\r\\n\\t.main {\\r\\n\\t\\tmin-height: 598px;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\tpadding-top: 218px;\\r\\n\\t}\\r\\n\\t.left h2 {\\r\\n\\t\\tfont-size: 110px;\\r\\n\\t\\tpadding-top:10px;\\r\\n\\t}\\r\\n\\t.right h4 {\\r\\n\\t\\tfont-size: 16px;\\r\\n\\t}\\r\\n\\t\\r\\n\\t.footer {\\r\\n\\t\\tpadding-top: 188px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 1024px){\\r\\n\\t.main {\\r\\n\\t\\r\\n\\t\\tmin-height: 674px;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\tpadding-top: 207px;\\r\\n\\t}\\r\\n\\t.left {\\r\\n\\t\\tfloat: left;\\r\\n\\t\\twidth: 55%;\\r\\n\\t}\\r\\n\\t/*-- agileits --*/\\r\\n\\t.left h2 {\\r\\n\\t\\tfont-size: 105px;\\r\\n\\t\\tpadding-left:70px;\\r\\n\\t}\\r\\n\\t.right {\\r\\n\\t\\tfloat: left;\\r\\n\\t\\twidth: 35%;\\r\\n\\t\\tpadding-left: 4%;\\r\\n\\t\\tborder-left: 1px solid #000;\\r\\n\\t}\\r\\n\\t.right h3 {\\r\\n\\t\\tfont-size: 38px;\\r\\n\\t}\\r\\n\\t.right a{\\r\\n\\t\\tfont-size:14px;\\r\\n\\t}\\r\\n\\t.footer {\\r\\n\\t\\tpadding-top: 170px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 991px){\\r\\n\\t.left {\\r\\n\\t\\twidth: 59%;\\r\\n\\t}\\r\\n\\t.right {\\r\\n\\t\\twidth: 32%;\\r\\n\\t\\tpadding-left: 3%;\\r\\n\\t}\\r\\n\\t.right h4 {\\r\\n\\t\\tfont-size: 15px;\\r\\n\\t\\twidth:100%;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 900px){\\r\\n\\t.main {\\r\\n\\t\\tmin-height: 600px;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\tpadding-top: 180px;\\r\\n\\t}\\r\\n\\r\\n\\t.left {\\r\\n\\t\\twidth: 55%;\\r\\n\\t}\\r\\n\\t.left h2 {\\r\\n\\t\\tfont-size: 100px;\\r\\n\\t\\tpadding:15px 0px 0px 53px;\\r\\n\\t\\t\\r\\n\\t}\\r\\n\\t/*-- w3layouts--*/\\r\\n\\t.right {\\r\\n\\t\\twidth: 41%;\\r\\n   }\\r\\n\\t.right h4 {\\r\\n\\t\\twidth: 97%;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 800px){\\r\\n    .main {\\r\\n\\t\\tbackground: url('../images/4.png') no-repeat -46px 0px;\\r\\n\\t\\tbackground-size:cover;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 768px){\\r\\n    .main {\\r\\n\\t\\tbackground: url('../images/4.png') no-repeat -354px 0px;\\r\\n\\t\\tmin-height: 929px;\\r\\n\\t\\tbackground-size:cover;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\twidth:65%;\\r\\n\\t\\tpadding-top: 325px;\\r\\n\\t}\\r\\n\\t.left{\\r\\n\\t\\twidth:50%;\\r\\n\\t}\\r\\n\\t.left h2 {\\r\\n\\t\\tfont-size: 100px;\\r\\n\\t\\tpadding: 15px 0px 0px 0px;\\r\\n\\t}\\r\\n\\t.right{\\r\\n\\t\\twidth:46%;\\r\\n\\t}\\r\\n\\t.footer {\\r\\n\\t\\tpadding-top: 250px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 736px){\\r\\n\\t.main {\\r\\n\\t\\tbackground: url('../images/4.png') no-repeat -215px 0px;\\r\\n\\t\\tmin-height: 715px;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\twidth: 65%;\\r\\n\\t\\tpadding-top: 241px;\\r\\n\\t}\\r\\n\\t.footer {\\r\\n\\tpadding-top: 200px;\\r\\n\\t/*-- agileits --*/\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 667px){\\r\\n\\t.main {\\r\\n\\t\\tbackground: url('../images/4.png') no-repeat -143px 0px;\\r\\n\\t\\tmin-height: 586px;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\twidth: 64%;\\r\\n\\t\\tpadding-top: 180px;\\r\\n\\t}\\r\\n\\t.right h4 {\\r\\n\\t\\twidth: 93%;\\r\\n\\t}\\r\\n\\t.footer {\\r\\n\\t\\tpadding-top: 168px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 600px){\\r\\n\\t.main {\\r\\n\\t\\tbackground: url('../images/4.png') no-repeat -175px 0px;\\r\\n\\t\\tmin-height: 586px;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 568px){\\r\\n\\t.main {\\r\\n\\t\\tbackground: url('../images/4.png') no-repeat -184px 0px;\\r\\n\\t\\tmin-height: 565px;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\twidth: 65%;\\r\\n\\t\\tpadding-top: 174px;\\r\\n\\t}\\r\\n\\t.footer {\\r\\n\\t\\tpadding-top: 100px;\\r\\n\\t}\\r\\n\\t.footer p {\\r\\n\\t\\tcolor: #000;\\r\\n\\t\\tfont-size: 14px;\\r\\n\\t\\tline-height:25px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 480px){\\r\\n\\t.main {\\r\\n\\t\\tbackground: url('../images/4.png') no-repeat -238px 0px;\\r\\n\\t\\tmin-height: 600px;\\r\\n\\t\\t/*-- w3layouts --*/\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\twidth: 83%;\\r\\n\\t\\tpadding-top: 182px;\\r\\n\\t}\\r\\n\\t.footer {\\r\\n\\t\\tpadding-top: 132px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 414px){\\r\\n\\t.main {\\r\\n\\t\\tbackground: url('../images/5.png') no-repeat -83px -79px;\\r\\n\\t\\tbackground-size: 123%;\\r\\n\\t\\tmin-height: 672px;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tpadding-top: 165px;\\r\\n\\t}\\r\\n\\t.left {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tfloat: none;\\r\\n\\t}\\r\\n\\t.left h2 {\\r\\n\\t\\tfont-size: 100px;\\r\\n\\t\\tpadding: 17px 0px 0px 0px;\\r\\n\\t}\\r\\n\\t.right {\\r\\n\\t\\twidth: 39%;\\r\\n\\t\\tfloat: none;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tpadding-left:0px;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t}\\r\\n\\t.right h4 {\\r\\n\\t\\twidth: 100%;\\r\\n\\t}\\t\\r\\n\\t.footer {\\r\\n\\t\\tpadding-top: 100px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 384px){\\r\\n\\t.main {\\r\\n\\t\\tbackground: url('../images/5.png') no-repeat -81px -79px;\\r\\n\\t\\tbackground-size: 128%;\\r\\n\\t\\tmin-height: 672px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 375px){\\r\\n\\t.main {\\r\\n\\t\\tbackground: url('../images/5.png') no-repeat -97px -129px;\\r\\n\\t\\tmin-height: 603px;\\r\\n\\t\\tbackground-size: 136%;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tpadding-top: 127px;\\r\\n\\t}\\r\\n\\t.left {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tfloat: none;\\r\\n\\t}\\r\\n\\t.left h2 {\\r\\n\\t\\tfont-size: 100px;\\r\\n\\t\\tpadding: 0px 0px 0px 0px;\\r\\n\\t}\\r\\n\\t.right {\\r\\n\\t\\twidth: 39%;\\r\\n\\t\\tfloat: none;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t}\\r\\n\\t.right h4 {\\r\\n\\t\\twidth: 100%;\\r\\n\\t}\\r\\n\\t.footer {\\r\\n\\t    padding-top: 113px;\\r\\n\\t}\\r\\n}\\r\\n@media (max-width: 320px){\\r\\n\\t.main {\\r\\n\\t\\tbackground: url('../images/5.png') no-repeat -87px -110px;\\r\\n\\t\\tbackground-size: 136%;\\r\\n\\t\\tmin-height: 503px;\\r\\n\\t}\\r\\n\\t.text {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tpadding-top: 92px;\\r\\n\\t}\\r\\n\\t.left h2 {\\r\\n\\t\\tfont-size: 85px;\\r\\n\\t\\tpadding: 0px 0px 0px 0px;\\r\\n\\t}\\r\\n\\t.right {\\r\\n\\t\\twidth: 50%;\\r\\n\\t\\ttext-align: center;\\r\\n\\t}\\r\\n\\t.right h4 {\\r\\n\\t\\ttext-align: center;\\r\\n\\t}\\r\\n\\t.footer {\\r\\n\\t\\tpadding-top: 106px;\\r\\n\\t}\\r\\n}\"]}]);\n// Exports\nexports.locals = {\n\t\"clear\": \"style_404__clear--3ZtWY\",\n\t\"main\": \"style_404__main--3jbbl\",\n\t\"text\": \"style_404__text--nNvpB\",\n\t\"left\": \"style_404__left--2G8lX\",\n\t\"right\": \"style_404__right--1OW8S\",\n\t\"footer\": \"style_404__footer--3kZr3\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (exports);\n\n\n//# sourceURL=webpack:///./frontend/static/css/style_404.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ })

}]);