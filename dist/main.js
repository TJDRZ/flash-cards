/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://flash-cards/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root,\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  max-width: 100vw;\\n  min-height: 100vh;\\n  box-sizing: border-box;\\n  line-height: 2.5rem;\\n  background-color: #333;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: flex-start;\\n  gap: 0.5rem;\\n  width: 100%;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 50rem;\\n  height: 25rem;\\n  padding: 1rem;\\n  text-align: center;\\n  font-size: 1.2rem;\\n  background-color: #888;\\n  border: solid black 1px;\\n  border-radius: 0.2rem;\\n  cursor: pointer;\\n}\\n\\np:nth-child(odd) {\\n  color: #fff;\\n}\\n\\nbutton {\\n  font-size: inherit;\\n  cursor: pointer;\\n}\\n\\n.next {\\n  width: 8rem;\\n  height: 4rem;\\n}\\n\\n@media screen and (max-width: 900px) {\\n  :root {\\n    font-size: 12px;\\n  }\\n}\\n\\n@media screen and (max-width: 650px) {\\n  :root {\\n    font-size: 8px;\\n  }\\n}\\n\\n@media screen and (max-width: 450px) {\\n  :root {\\n    font-size: 6px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://flash-cards/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://flash-cards/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://flash-cards/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://flash-cards/./src/styles/reset.css?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://flash-cards/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://flash-cards/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://flash-cards/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://flash-cards/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://flash-cards/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://flash-cards/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://flash-cards/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _json_ports_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/ports.json */ \"./src/json/ports.json\");\n/* harmony import */ var _json_wireless_standards_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/wireless-standards.json */ \"./src/json/wireless-standards.json\");\n/* harmony import */ var _json_cables_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/cables.json */ \"./src/json/cables.json\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n\n\n// Set-up\n\nconst cardElement = document.querySelector(\".card\");\nconst nextButton = document.querySelector(\".next\");\n\nlet cards = \"Welcome to TJDRZ's Comptia A+ Flash Cards!\";\ncardElement.textContent = cards;\n\n// Nav Study Area Buttons\n\ndocument.querySelector(\".ports\").addEventListener(\"click\", () => {\n  cards = Object.entries(_json_ports_json__WEBPACK_IMPORTED_MODULE_0__);\n  drawCard();\n});\n\ndocument.querySelector(\".wireless-standards\").addEventListener(\"click\", () => {\n  cards = Object.entries(_json_wireless_standards_json__WEBPACK_IMPORTED_MODULE_1__);\n  drawCard();\n});\n\ndocument.querySelector(\".cables\").addEventListener(\"click\", () => {\n  cards = Object.entries(_json_cables_json__WEBPACK_IMPORTED_MODULE_2__);\n  drawCard();\n});\n\n// Draws and Flips\n\nlet currentCardIndex = 0;\nlet drawnCards = [];\n\ncardElement.addEventListener(\"click\", () => {\n  cardElement.innerText = \"\";\n  for (let entry in cards[currentCardIndex][1]) {\n    const pElement = document.createElement(\"p\");\n    pElement.innerText = `- ${cards[currentCardIndex][1][entry]}`;\n    cardElement.appendChild(pElement);\n  }\n});\n\nnextButton.addEventListener(\"click\", () => {\n  drawCard();\n});\n\nfunction drawCard() {\n  if (drawnCards.length === cards.length) {\n    drawnCards = [];\n    drawCard();\n  } else if (drawnCards.includes(currentCardIndex)) {\n    currentCardIndex = randomNumber(1, cards.length);\n    drawCard();\n  } else {\n    cardElement.innerText = cards[currentCardIndex][0];\n    drawnCards.push(currentCardIndex);\n  }\n}\n\nfunction randomNumber(min, max) {\n  return Math.round(Math.random() * (max - min));\n}\n\n\n//# sourceURL=webpack://flash-cards/./src/index.js?");

/***/ }),

/***/ "./src/json/cables.json":
/*!******************************!*\
  !*** ./src/json/cables.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"Category 5e (enhanced)\":{\"1\":\"Maximum Supported Ethernet Standard: 100BASE-TX, 1000BASE-T\",\"2\":\"Maximum Supported Distance: 100 meters\"},\"Category 6\":{\"1\":\"Maximum Supported Ethernet Standard: 10GBASE-T\",\"2\":\"Maximum Supported Distance: 37 to 55 meters\"},\"Category 6A (augmented)\":{\"1\":\"Maximum Supported Ethernet Standard: 10GBASE-T\",\"2\":\"Maximum Supported Distance: 100 meters\"},\"Plenum-rated cable\":{\"1\":\"Traditional cable jacket; Polyvinyl chloride (PVC)\",\"2\":\"Fire-rated cable jacket; Fluorinated ethylene polymer (FEP) or low-smoke polyvinyl chloride (PVC)\",\"3\":\"Plenum-rated cable may not be as flexible; May not have the same bend radius\",\"4\":\"Worst-case planning; Important concerns for any structure\"},\"Copper Shielding Abbreviations\":{\"1\":\"U = Unshielded\",\"2\":\"S = Braided shielding\",\"3\":\"F = Foil shielding\",\"4\":\"Braided shielding around the entire cable and foil around the pairs is S/FTP\",\"5\":\"Foil around the cable and no shielding around the pairs is F/UTP\"},\"Coaxial cables\":{\"1\":\"Two or more forms share a common axis\",\"2\":\"RG-6 used in television/digital cable; high-speed Internet over cable\",\"3\":\"RG-59 used as patch cables; Not designed for long distances\"},\"TIA/EIA 568A\":{\"1\":\"White and Green\",\"2\":\"Green\",\"3\":\"White and Orange\",\"4\":\"Blue\",\"5\":\"White and Blue\",\"6\":\"Orange\",\"7\":\"White and Brown\",\"8\":\"Brown\"},\"TIA/EIA 568B\":{\"1\":\"White and Orange\",\"2\":\"Orange\",\"3\":\"White and Green\",\"4\":\"Blue\",\"5\":\"White and Blue\",\"6\":\"Green\",\"7\":\"White and Brown\",\"8\":\"Brown\"},\"Fiber cables\":{\"1\":\"Transmission by light; The visible spectrum\",\"2\":\"No RF signal; Very difficult to monitor or tap\",\"3\":\"Signal slow to degrade; Transmission over long distances\",\"4\":\"Immune to radio interference - There’s no RF\",\"5\":\"Multi-mode Fiber; Short-range communication, up to 2 km\",\"6\":\"Single-mode Fiber; Long-range communication, up to 100 km\"},\"Video cables\":{\"1\":\"VGA (Video Graphics Array); AKA DB-15 or DE-15; Analog / Not digital; Image degrades after 5-10 meters\",\"2\":\"HDMI (High-Definition Multimedia Interface; All digital / Not analog; ~20 meters before losing signal\",\"3\":\"DisplayPort; Royalty-free; Data sent in packets; Compatible with HDMI and DVI\",\"4\":\"DVI (Digital Visual Interface); Single-link: 3.7Gbps (HDTV at 60fps); Dual-link: 7.4Gbps (HDTV at 85fps); DVI-A (Analog); DVI-D (Digital); DVI-I (Integrated; Digital and Analog in same connector)\"},\"Multipurpose cables (1)\":{\"1\":\"Lightning: Apple proprietary; 8-pin digital; Higher power output, can be plugged in either way, simple design, durable - all vs Micro-USB\",\"2\":\"Thunderbolt: High-speed serial connector based on Mini DisplayPort standard; • v1-Two channels 10 Gbit/s per channel, 20 Gbit/s total throughput, Mini DisplayPort connector; • v2-20 Gbit/s aggregated channels, Mini DisplayPort connector; • v3-40 Gbit/s aggregated throughput; USB-C connector; • Maximum 3 meters (copper), 60 meters (optical), daisy-chain up to 6 devices\"},\"Multipurpose cables (2)\":{\"1\":\"USB (Universal Serial Bus); • USB 1.1-Low speed: 1.5 megabits per second, 3 meters, Full speed: 12 megabits per second, 5 meters; • USB 2.0-480 megabits per second, 5 meters; • USB 3.0-SuperSpeed, 5 gigabits per second, ~3 meters, Standard does not specify a cable length\",\"2\":\"USB 3.1 and USB 3.2: USB 3.1-Released July 2013, SuperSpeed+, 10 Gbit/sec; USB 3.2-Released September 2017, SuperSpeed+ over a USB-C connector, 10 Gbit/sec and 20 Gbit/sec\",\"3\":\"USB-C: replaces all USB\"},\"SATA drive cables\":{\"1\":\"SATA (Serial AT Attachment)\",\"2\":\"SATA Revision 1.0: SATA 1.5 Gbit/s, 1 meter\",\"3\":\"SATA Revision 2.0: SATA 3.0 Gbit/s, 1 meter\",\"4\":\"SATA Revision 3.0: SATA 6.0 Gbit/s, 1 meter\",\"5\":\"SATA Revision 3.2: SATA 16 Gbit/s, 1 meter\"}}');\n\n//# sourceURL=webpack://flash-cards/./src/json/cables.json?");

/***/ }),

/***/ "./src/json/ports.json":
/*!*****************************!*\
  !*** ./src/json/ports.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"FTP - File Transfer Protocol\":{\"1\":\"tcp/20 (active mode data), tcp/21 (control)\",\"2\":\"Transfers files between systems\",\"3\":\"Authenticates with a username and password; Some systems use a generic/anonymous login\",\"4\":\"Full-featured functionality, such as list, add, delete, etc.\"},\"SSH - Secure Shell\":{\"1\":\"Encrypted communication link - tcp/22\",\"2\":\"Encrypted console access\",\"3\":\"Looks and acts the same as Telnet\"},\"Telnet\":{\"1\":\"Telnet – Telecommunication Network - tcp/23\",\"2\":\"Insecure console access\",\"3\":\"Login to devices remotely\",\"4\":\"In-the-clear communication\",\"5\":\"Not the best choice for production systems\"},\"SMTP - Simple Mail Transfer Protocol\":{\"1\":\"Server to server email transfer - tcp/25\",\"2\":\"Also used to send mail from a device to a mail server\",\"3\":\"Commonly configured on mobile devices and email clients\",\"4\":\"Other protocols are used for clients to receive email (IMAP, POP3)\"},\"DNS - Domain Name System\":{\"1\":\"Converts names to IP addresses - udp/53\",\"2\":\"These are very critical resources\",\"3\":\"Usually multiple DNS servers are in production\"},\"HTTP and HTTPS\":{\"1\":\"Hypertext Transfer Protocol - tcp/80\",\"2\":\"Communication in the browser and by no other applications\",\"3\":\"In the clear or encrypted - HTTPS - tcp/443\",\"4\":\"HTTPS is supported by nearly all web servers and clients\"},\"POP / IMAP\":{\"1\":\"Receive emails from an email server; Authenticate and transfer\",\"2\":\"POP3 - Post Office Protocol version 3 - tcp/110\",\"3\":\"POP3 has basic mail transfer functionality\",\"4\":\"IMAP4 - Internet Message Access Protocol v4 - tcp/143\",\"5\":\"Includes management of email inbox from multiple clients\"},\"RDP - Remote Desktop Protocol\":{\"1\":\"Share a desktop from a remote location over tcp/3389\",\"2\":\"Graphical display of remote devices\",\"3\":\"Remote Desktop Services on many Windows versions\",\"4\":\"Can connect to an entire desktop or just an application\",\"5\":\"Clients for Windows, macOS, Linux, Unix, iPhone, Android, and others\"},\"SMB - Server Message Block\":{\"1\":\"Protocol used by Microsoft Windows for file sharing, printer sharing; Also called CIFS (Common Internet File System)\",\"2\":\"Direct over tcp/445 (NetBIOS-less); Direct SMB communication over TCP without the NetBIOS transport\",\"3\":\"Using NetBIOS over TCP/IP with the following:\",\"4\":\"• udp/137 - NetBIOS name services (nbname); Register, remove, and find Windows services by name\",\"5\":\"• udp/138 - NetBIOS datagram service (nbdatagram); Windows connectionless data transfer\",\"6\":\"• tcp/139 - NetBIOS session service (nbsession); Windows connection-oriented data transfer\"},\"AFP (Apple Filing Protocol)\":{\"1\":\"File transfer services in macOS - tcp/548\",\"2\":\"File management - Copy, move, delete files\",\"3\":\"Works with SLP (Service Location Protocol) - tcp/427 and udp/427 (Populates the list of available devices); Find Mac OS services by name\"},\"DHCP - Dynamic Host Configuration Protocol\":{\"1\":\"Automated configuration of IP address, subnet mask and other options\",\"2\":\"udp/67, udp/68\",\"3\":\"Requires a DHCP server\",\"4\":\"Server, appliance, integrated into a SOHO router, etc.\",\"5\":\"Dynamic / pooled - IP addresses are assigned in real-time from a pool; Each system is given a lease and must renew at set intervals\",\"6\":\"DHCP reservation - Addresses are assigned by MAC address in the DHCP server; Quickly manage addresses from one location\"},\"LDAP (Lightweight Directory Access Protocol)\":{\"1\":\"tcp/389\",\"2\":\"Store and retrieve information in a network directory\",\"3\":\"Commonly used in Microsoft Active Directory\"},\"SNMP - Simple Network Management Protocol\":{\"1\":\"Gather statistics from network devices- Queries: udp/161, Traps: udp/162\",\"2\":\"v1 – The original: Structured tables, in-the-clear\",\"3\":\"v2 – A good step ahead: Data type enhancements; Bulk transfers, still in-the-clear\",\"4\":\"v3 – A secure standard: Message integrity; Authentication, encryption\"}}');\n\n//# sourceURL=webpack://flash-cards/./src/json/ports.json?");

/***/ }),

/***/ "./src/json/wireless-standards.json":
/*!******************************************!*\
  !*** ./src/json/wireless-standards.json ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"Wireless Standards\":{\"1\":\"Wireless networking (802.11)\",\"2\":\"Managed by the IEEE LAN/MAN Standards Committee (IEEE 802)\",\"3\":\"Many updates over time; Check with IEEE for the latest\",\"4\":\"The Wi-Fi trademark; Wi-Fi Alliance handles interoperability testing\"},\"802.11a\":{\"1\":\"One of the original 802.11 wireless standards; October 1999\",\"2\":\"Operates in the 5 GHz range\",\"3\":\"54 megabits per second (Mbit/s)\",\"4\":\"Smaller range than 802.11b - Higher frequency is absorbed by objects in the way; Many rules-of-thumb calculate 1/3rd the range of 802.11b or 802.11g\"},\"802.11b\":{\"1\":\"Also an original 802.11 standard - October 1999\",\"2\":\"Operates in the 2.4 GHz range\",\"3\":\"11 megabits per second (Mbit/s)\",\"4\":\"Better range than 802.11a (Less absorption problems); More frequency conflict (Baby monitors, cordless phones, microwave ovens, Bluetooth\"},\"802.11g\":{\"1\":\"An “upgrade” to 802.11b - June 2003\",\"2\":\"Operates in the 2.4 GHz range\",\"3\":\"54 megabits per second (Mbit/s) (Same as 802.11a (but a little bit less throughput))\",\"4\":\"Backwards-compatible with 802.11b\",\"5\":\"Same frequency conflict problems as 802.11b\"},\"802.11n\":{\"1\":\"The update to 802.11g, 802.11b, and 802.11a - October 2009\",\"2\":\"Operates at 5 GHz and/or 2.4 GHz; 40 MHz channel widths\",\"3\":\"600 megabits per second (Mbit/s); 40 MHz mode and 4 antennas\",\"4\":\"802.11n uses MIMO - Multiple-input multiple-output; Multiple transmit and receive antennas\"},\"802.11ac\":{\"1\":\"Approved in January 2014; Significant improvements over 802.11n\",\"2\":\"Operates in the 5 GHz band; Less crowded, more frequencies (up to 160 MHz channel bandwidth)\",\"3\":\"Increased channel bonding - Larger bandwidth usage\",\"4\":\"Denser signaling modulation - Faster data transfers\",\"5\":\"Eight MU-MIMO streams - Twice as many streams as 802.11n; Nearly 7 gigabits per second\"}}');\n\n//# sourceURL=webpack://flash-cards/./src/json/wireless-standards.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;