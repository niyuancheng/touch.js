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

/***/ "./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/registry.npmmirror.com+less-loader@11.1.0_less@4.0.0+webpack@5.75.0/node_modules/less-loader/dist/cjs.js!./test/main.less":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/registry.npmmirror.com+less-loader@11.1.0_less@4.0.0+webpack@5.75.0/node_modules/less-loader/dist/cjs.js!./test/main.less ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#box {\\n  width: 100px;\\n  height: 100px;\\n  background-color: antiquewhite;\\n  border-radius: 10px;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.info {\\n  width: 500px;\\n  background-color: blueviolet;\\n  color: #fff;\\n  margin: 0 auto;\\n  text-align: center;\\n}\\nhtml,\\nbody {\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: cadetblue;\\n  overflow: hidden;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ntouch.js/./test/main.less?./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/registry.npmmirror.com+less-loader@11.1.0_less@4.0.0+webpack@5.75.0/node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ntouch.js/./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \****************************************************************************************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ntouch.js/./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./test/main.less":
/*!************************!*\
  !*** ./test/main.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_registry_npmmirror_com_less_loader_11_1_0_less_4_0_0_webpack_5_75_0_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../node_modules/.pnpm/registry.npmmirror.com+less-loader@11.1.0_less@4.0.0+webpack@5.75.0/node_modules/less-loader/dist/cjs.js!./main.less */ \"./node_modules/.pnpm/registry.npmmirror.com+css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/registry.npmmirror.com+less-loader@11.1.0_less@4.0.0+webpack@5.75.0/node_modules/less-loader/dist/cjs.js!./test/main.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_pnpm_registry_npmmirror_com_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_registry_npmmirror_com_less_loader_11_1_0_less_4_0_0_webpack_5_75_0_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_registry_npmmirror_com_less_loader_11_1_0_less_4_0_0_webpack_5_75_0_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_registry_npmmirror_com_less_loader_11_1_0_less_4_0_0_webpack_5_75_0_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_pnpm_registry_npmmirror_com_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_registry_npmmirror_com_less_loader_11_1_0_less_4_0_0_webpack_5_75_0_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ntouch.js/./test/main.less?");

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ntouch.js/./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ntouch.js/./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ntouch.js/./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ntouch.js/./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ntouch.js/./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ntouch.js/./node_modules/.pnpm/registry.npmmirror.com+style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./package/events/FastSlide.ts":
/*!*************************************!*\
  !*** ./package/events/FastSlide.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fastSlide\": () => (/* binding */ fastSlide)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./package/utils/index.ts\");\n\r\nfunction fastSlide(ctx, event, listener, options) {\r\n    let lastTime = 0;\r\n    let startTime = 0;\r\n    // 初始的x,y坐标\r\n    let x = 0, y = 0;\r\n    let lastPos = { x: 0, y: 0 };\r\n    let startPos = { x: 0, y: 0 };\r\n    let speed = [];\r\n    ctx.addEventListener(\"touchstart\", (e) => {\r\n        if (e.touches.length > 1)\r\n            return;\r\n        lastTime = Date.now();\r\n        startTime = Date.now();\r\n        startPos = {\r\n            x: e.touches[0].clientX,\r\n            y: e.touches[0].clientY,\r\n        };\r\n        lastPos = {\r\n            x: e.touches[0].clientX,\r\n            y: e.touches[0].clientY,\r\n        };\r\n        (x = lastPos.x), (y = lastPos.y);\r\n    });\r\n    ctx.addEventListener(\"touchmove\", (e) => {\r\n        if (e.touches.length > 1)\r\n            return;\r\n        e.preventDefault();\r\n        let now = Date.now();\r\n        if (now - lastTime >= 10) {\r\n            let distance = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.computeDistance)(e.touches[0].clientX, lastPos.x, e.touches[0].clientY, lastPos.y);\r\n            speed.push(distance / (now - lastTime));\r\n            lastPos = {\r\n                x: e.touches[0].clientX,\r\n                y: e.touches[0].clientY,\r\n            };\r\n            lastTime = now;\r\n        }\r\n    });\r\n    ctx.addEventListener(\"touchend\", (e) => {\r\n        if (e.touches.length > 1)\r\n            return;\r\n        let sum = 0;\r\n        let index = 1;\r\n        lastTime = Date.now();\r\n        console.log(speed);\r\n        for (let i = speed.length - 1; i >= 0; i--) {\r\n            if (speed[i] > speed[i - 1]) {\r\n                sum += speed[i] - speed[i - 1];\r\n                index++;\r\n            }\r\n            else\r\n                break;\r\n        }\r\n        let dx = lastPos.x - x;\r\n        let dy = lastPos.y - y;\r\n        if ((sum / index) * 100 >= 10 && speed[speed.length - 1] >= 20) {\r\n            if ((dx <= 0 && event === \"fastSlideLeft\") ||\r\n                (dx >= 0 && event === \"fastSlideRight\") ||\r\n                (dy >= 0 && event === \"fastSlideDown\") ||\r\n                (dy <= 0 && event === \"fastSlideTop\") ||\r\n                event === \"fastSlide\") {\r\n                let ev = Object.assign(Object.assign({}, e), { startPos: startPos, endPos: lastPos, interval: lastTime - startTime, lastSpeed: speed[speed.length - 1] });\r\n                if (listener instanceof Function) {\r\n                    listener(ev);\r\n                }\r\n                else {\r\n                    listener.handleEvent(ev);\r\n                }\r\n            }\r\n        }\r\n        speed = [];\r\n        lastPos = { x: 0, y: 0 };\r\n        startPos = { x: 0, y: 0 };\r\n        lastTime = 0;\r\n        startTime = 0;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/events/FastSlide.ts?");

/***/ }),

/***/ "./package/events/MoveOrSwipe.ts":
/*!***************************************!*\
  !*** ./package/events/MoveOrSwipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveOrSwipe\": () => (/* binding */ moveOrSwipe)\n/* harmony export */ });\nfunction moveOrSwipe(ctx, event, listener, options) {\r\n    let isMove = false;\r\n    let pos = {\r\n        x: 0,\r\n        y: 0,\r\n    };\r\n    let dx = 0, dy = 0;\r\n    ctx.addEventListener(\"touchstart\", (e) => {\r\n        if (e.touches.length > 1)\r\n            return;\r\n        pos.x = e.touches[0].clientX;\r\n        pos.y = e.touches[0].clientY;\r\n    });\r\n    ctx.addEventListener(\"touchmove\", (e) => {\r\n        if (e.touches.length > 1)\r\n            return;\r\n        isMove = true;\r\n        e.preventDefault();\r\n        let x = e.touches[0].clientX;\r\n        let y = e.touches[0].clientY;\r\n        dx = x - pos.x;\r\n        dy = y - pos.y;\r\n        if ((event === \"moveLeft\" && dx < 0) ||\r\n            (event === \"moveRight\" && dx > 0) ||\r\n            (event === \"moveTop\" && dy < 0) ||\r\n            (event === \"moveDown\" && dy > 0) ||\r\n            event === \"move\") {\r\n            let ev = Object.assign(Object.assign({}, e), { startPos: pos, deltaX: dx, deltaY: dy });\r\n            if (listener instanceof Function) {\r\n                listener(ev);\r\n            }\r\n            else {\r\n                listener.handleEvent(ev);\r\n            }\r\n        }\r\n    });\r\n    ctx.addEventListener(\"touchend\", (e) => {\r\n        if (e.touches.length > 1)\r\n            return;\r\n        let end = {\r\n            x: pos.x + dx,\r\n            y: pos.y + dy,\r\n        };\r\n        if (isMove &&\r\n            ((event === \"swipeLeft\" && dx < 0) ||\r\n                (event === \"swipeRight\" && dx > 0) ||\r\n                (event === \"swipeTop\" && dy < 0) ||\r\n                (event === \"swipeDown\" && dy > 0) ||\r\n                event === \"swipe\")) {\r\n            let ev = Object.assign(Object.assign({}, e), { startPos: pos, endPos: end });\r\n            if (listener instanceof Function) {\r\n                listener(ev);\r\n            }\r\n            else {\r\n                listener.handleEvent(ev);\r\n            }\r\n        }\r\n        isMove = false;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/events/MoveOrSwipe.ts?");

/***/ }),

/***/ "./package/events/PintchOrRotate.ts":
/*!******************************************!*\
  !*** ./package/events/PintchOrRotate.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pintchOrRotate\": () => (/* binding */ pintchOrRotate)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./package/utils/index.ts\");\n\r\nfunction pintchOrRotate(ctx, event, listener, options) {\r\n    let prevV = { x: 0, y: 0 };\r\n    let v1, v2;\r\n    let scale = 1;\r\n    ctx.addEventListener(\"touchstart\", (e) => {\r\n        if (e.touches.length > 1) {\r\n            v1 = e.touches[0];\r\n            v2 = e.touches[1];\r\n            prevV = {\r\n                x: v2.clientX - v1.clientX,\r\n                y: v2.clientY - v1.clientY,\r\n            };\r\n        }\r\n    });\r\n    ctx.addEventListener(\"touchmove\", (e) => {\r\n        e.preventDefault();\r\n        if (e.touches.length > 1) {\r\n            let v1 = e.touches[0];\r\n            let v2 = e.touches[1];\r\n            let V = {\r\n                x: v2.clientX - v1.clientX,\r\n                y: v2.clientY - v1.clientY,\r\n            };\r\n            //利用前后的向量模比计算放大或缩小的倍数\r\n            scale = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.computeVectorLen)(V) / (0,_utils__WEBPACK_IMPORTED_MODULE_0__.computeVectorLen)(prevV);\r\n            if (event === \"pintch\") {\r\n                let ev = Object.assign(Object.assign({}, e), { scale: scale });\r\n                if (listener instanceof Function) {\r\n                    listener(ev);\r\n                }\r\n                else {\r\n                    listener.handleEvent(ev);\r\n                }\r\n            }\r\n            // 计算出拖动时旋转的角度\r\n            let angle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.computeAngle)(prevV, V);\r\n            if (event === \"rotate\") {\r\n                let ev = Object.assign(Object.assign({}, e), { angle });\r\n                if (listener instanceof Function) {\r\n                    listener(ev);\r\n                }\r\n                else {\r\n                    listener.handleEvent(ev);\r\n                }\r\n            }\r\n        }\r\n    });\r\n    ctx.addEventListener(\"touchend\", (e) => {\r\n        //ToDo\r\n        // 只要最初的两个手指离开一个就行\r\n        if ([...e.touches].indexOf(v1) === -1 ||\r\n            [...e.touches].indexOf(v2) === -1) {\r\n            if (event === \"pintchOver\") {\r\n                let ev = Object.assign(Object.assign({}, e), { scale });\r\n                if (listener instanceof Function) {\r\n                    listener(ev);\r\n                }\r\n                else {\r\n                    listener.handleEvent(ev);\r\n                }\r\n            }\r\n        }\r\n        prevV = { x: 0, y: 0 };\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/events/PintchOrRotate.ts?");

/***/ }),

/***/ "./package/events/SingleOrDoubleOrLongTap.ts":
/*!***************************************************!*\
  !*** ./package/events/SingleOrDoubleOrLongTap.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"singleOrDoubleOrLongTap\": () => (/* binding */ singleOrDoubleOrLongTap)\n/* harmony export */ });\nfunction singleOrDoubleOrLongTap(ctx, event, listener, options) {\r\n    let tapTimer = null;\r\n    let longTapTimer = null;\r\n    let lastTapEndTime = -1;\r\n    let isMove = false;\r\n    let startTime = 0;\r\n    let isDoubleTap = false;\r\n    let betweenTime = 0;\r\n    ctx.addEventListener(\"touchstart\", (e) => {\r\n        if (e.touches.length > 1)\r\n            return;\r\n        startTime = Date.now();\r\n        if (event === \"longTap\") {\r\n            longTapTimer = window.setTimeout(() => {\r\n                // ToDo,触发长按事件\r\n            }, 800);\r\n        }\r\n        // 如果lastTapEndTime不小于0的话则表明上一次也发生过点击事件且上一次的单击事件的监听器还未触发，说明两次点击间隔很短，\r\n        // 但是为了区别是双击还是单击，在第二次点击发生时判断开始点击的时间和上一次点击结束的时间，\r\n        // 如果间隔很短，说明是双击，此时不应该触发单击事件;如果距离上一次点击间隔很长，表明此次点击是单击\r\n        if (lastTapEndTime > 0 && startTime - lastTapEndTime < 150) {\r\n            window.clearTimeout(tapTimer);\r\n            betweenTime = startTime - lastTapEndTime;\r\n            tapTimer = null;\r\n            lastTapEndTime = -1;\r\n            isDoubleTap = true;\r\n        }\r\n    });\r\n    ctx.addEventListener(\"touchmove\", (e) => {\r\n        if (e.touches.length > 1)\r\n            return;\r\n        isMove = true;\r\n        e.preventDefault();\r\n        if (longTapTimer) {\r\n            window.clearTimeout(longTapTimer);\r\n            longTapTimer = null;\r\n        }\r\n    });\r\n    ctx.addEventListener(\"touchend\", (e) => {\r\n        if (e.touches.length > 1)\r\n            return;\r\n        let interval = Date.now() - startTime;\r\n        if (longTapTimer) {\r\n            window.clearTimeout(longTapTimer);\r\n            longTapTimer = null;\r\n        }\r\n        if (interval < 150 && !isMove) {\r\n            if (event === \"singleTap\" && isDoubleTap === false) {\r\n                tapTimer = window.setTimeout(() => {\r\n                    let ev = Object.assign(Object.assign({}, e), { interval });\r\n                    if (listener instanceof Function) {\r\n                        listener(ev);\r\n                    }\r\n                    else {\r\n                        listener.handleEvent(ev);\r\n                    }\r\n                }, 150);\r\n            }\r\n            else if (event === \"doubleTap\" && isDoubleTap === true) {\r\n                tapTimer = window.setTimeout(() => {\r\n                    let ev = Object.assign(Object.assign({}, e), { interval: betweenTime });\r\n                    if (listener instanceof Function) {\r\n                        listener(ev);\r\n                    }\r\n                    else {\r\n                        listener.handleEvent(ev);\r\n                    }\r\n                });\r\n            }\r\n            lastTapEndTime = Date.now();\r\n        }\r\n        isMove = false;\r\n        isDoubleTap = false;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/events/SingleOrDoubleOrLongTap.ts?");

/***/ }),

/***/ "./package/index.ts":
/*!**************************!*\
  !*** ./package/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListener\": () => (/* binding */ addEventListener),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"wrap\": () => (/* reexport safe */ _wrap_wrap__WEBPACK_IMPORTED_MODULE_9__.wrap)\n/* harmony export */ });\n/* harmony import */ var _override_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./override/createElement */ \"./package/override/createElement.ts\");\n/* harmony import */ var _override_getElementsByClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./override/getElementsByClassName */ \"./package/override/getElementsByClassName.ts\");\n/* harmony import */ var _override_getElementById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./override/getElementById */ \"./package/override/getElementById.ts\");\n/* harmony import */ var _override_getElementsByTagName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./override/getElementsByTagName */ \"./package/override/getElementsByTagName.ts\");\n/* harmony import */ var _events_SingleOrDoubleOrLongTap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/SingleOrDoubleOrLongTap */ \"./package/events/SingleOrDoubleOrLongTap.ts\");\n/* harmony import */ var _events_MoveOrSwipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/MoveOrSwipe */ \"./package/events/MoveOrSwipe.ts\");\n/* harmony import */ var _events_FastSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/FastSlide */ \"./package/events/FastSlide.ts\");\n/* harmony import */ var _events_PintchOrRotate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/PintchOrRotate */ \"./package/events/PintchOrRotate.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ \"./package/types/index.ts\");\n/* harmony import */ var _wrap_wrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wrap/wrap */ \"./package/wrap/wrap.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst fn = HTMLElement.prototype.addEventListener;\r\nfunction addEventListener(event, listener, options) {\r\n    let ctx = this;\r\n    switch (event) {\r\n        case \"singleTap\":\r\n        case \"doubleTap\":\r\n        case \"longTap\":\r\n            (0,_events_SingleOrDoubleOrLongTap__WEBPACK_IMPORTED_MODULE_4__.singleOrDoubleOrLongTap)(ctx, event, listener, options);\r\n            break;\r\n        case \"swipe\":\r\n        case \"swipeLeft\":\r\n        case \"swipeRight\":\r\n        case \"swipeTop\":\r\n        case \"swipeDown\":\r\n        case \"move\":\r\n        case \"moveLeft\":\r\n        case \"moveRight\":\r\n        case \"moveTop\":\r\n        case \"moveDown\":\r\n            (0,_events_MoveOrSwipe__WEBPACK_IMPORTED_MODULE_5__.moveOrSwipe)(ctx, event, listener, options);\r\n            break;\r\n        case \"fastSlide\":\r\n        case \"fastSlideLeft\":\r\n        case \"fastSlideRight\":\r\n        case \"fastSlideTop\":\r\n        case \"fastSlideDown\":\r\n            (0,_events_FastSlide__WEBPACK_IMPORTED_MODULE_6__.fastSlide)(ctx, event, listener, options);\r\n            break;\r\n        case \"pintch\":\r\n        case \"pintchOver\":\r\n        case \"rotate\":\r\n            (0,_events_PintchOrRotate__WEBPACK_IMPORTED_MODULE_7__.pintchOrRotate)(ctx, event, listener, options);\r\n            break;\r\n        default:\r\n            if (ctx === document.body) {\r\n                fn.call(window.document.body, event, listener, options);\r\n            }\r\n            else {\r\n                fn.call(ctx, event, listener, options);\r\n            }\r\n    }\r\n}\r\nlet body = Object.create(window.document.body);\r\nbody.addEventListener = addEventListener;\r\nlet document = { body: body };\r\ndocument.createElement = _override_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement;\r\ndocument.getElementById = _override_getElementById__WEBPACK_IMPORTED_MODULE_2__.getElementById;\r\ndocument.getElementsByClassName = _override_getElementsByClassName__WEBPACK_IMPORTED_MODULE_1__.getElementsByClassName;\r\ndocument.getElementsByTagName = _override_getElementsByTagName__WEBPACK_IMPORTED_MODULE_3__.getElementsByTagName;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document);\r\n\r\n\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/index.ts?");

/***/ }),

/***/ "./package/override/createElement.ts":
/*!*******************************************!*\
  !*** ./package/override/createElement.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./package/index.ts\");\n\r\nlet fn1 = Document.prototype.createElement;\r\n// 此函数为重载实现\r\nfunction createElement(tagName, options) {\r\n    let dom = fn1.call(window.document, tagName, options);\r\n    let prototype = dom.__proto__;\r\n    let proto = Object.create(prototype);\r\n    proto.addEventListener = ___WEBPACK_IMPORTED_MODULE_0__.addEventListener;\r\n    Object.setPrototypeOf(dom, proto);\r\n    Object.setPrototypeOf(proto, prototype);\r\n    return dom;\r\n}\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/override/createElement.ts?");

/***/ }),

/***/ "./package/override/getElementById.ts":
/*!********************************************!*\
  !*** ./package/override/getElementById.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElementById\": () => (/* binding */ getElementById)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./package/index.ts\");\n\r\nlet fn2 = Document.prototype.getElementById;\r\nfunction getElementById(elementId) {\r\n    let dom = fn2.call(window.document, elementId) || null;\r\n    if (dom === null)\r\n        return null;\r\n    if (dom.__proto__ instanceof HTMLElement) {\r\n        let proto = Object.create(dom.__proto__);\r\n        proto.addEventListener = ___WEBPACK_IMPORTED_MODULE_0__.addEventListener;\r\n        Object.setPrototypeOf(dom, proto);\r\n    }\r\n    else {\r\n        // do nothing    \r\n    }\r\n    return dom;\r\n}\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/override/getElementById.ts?");

/***/ }),

/***/ "./package/override/getElementsByClassName.ts":
/*!****************************************************!*\
  !*** ./package/override/getElementsByClassName.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElementsByClassName\": () => (/* binding */ getElementsByClassName)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./package/index.ts\");\n\r\nlet fn3 = Document.prototype.getElementsByClassName;\r\nfunction getElementsByClassName(classNames) {\r\n    let doms = fn3.call(window.document, classNames);\r\n    doms.forEach(dom => {\r\n        if (dom.__proto__ instanceof HTMLElement) {\r\n            let proto = Object.create(dom.__proto__);\r\n            proto.addEventListener = ___WEBPACK_IMPORTED_MODULE_0__.addEventListener;\r\n            Object.setPrototypeOf(dom, proto);\r\n        }\r\n        else {\r\n            // do nothing    \r\n        }\r\n    });\r\n    return doms;\r\n}\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/override/getElementsByClassName.ts?");

/***/ }),

/***/ "./package/override/getElementsByTagName.ts":
/*!**************************************************!*\
  !*** ./package/override/getElementsByTagName.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElementsByTagName\": () => (/* binding */ getElementsByTagName)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./package/index.ts\");\n\r\nlet fn3 = Document.prototype.getElementsByTagName;\r\nfunction getElementsByTagName(qualifiedName) {\r\n    let doms = fn3.call(window.document, qualifiedName);\r\n    doms.forEach(dom => {\r\n        if (dom.__proto__ instanceof HTMLElement) {\r\n            let proto = Object.create(dom.__proto__);\r\n            proto.addEventListener = ___WEBPACK_IMPORTED_MODULE_0__.addEventListener;\r\n            Object.setPrototypeOf(dom, proto);\r\n        }\r\n        else {\r\n            // do nothing    \r\n        }\r\n    });\r\n    return doms;\r\n}\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/override/getElementsByTagName.ts?");

/***/ }),

/***/ "./package/types/index.ts":
/*!********************************!*\
  !*** ./package/types/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n;\r\n;\r\n\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/types/index.ts?");

/***/ }),

/***/ "./package/utils/index.ts":
/*!********************************!*\
  !*** ./package/utils/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computeAngle\": () => (/* binding */ computeAngle),\n/* harmony export */   \"computeDistance\": () => (/* binding */ computeDistance),\n/* harmony export */   \"computeVectorLen\": () => (/* binding */ computeVectorLen)\n/* harmony export */ });\nfunction computeDistance(x1, y1, x2, y2) {\r\n    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));\r\n}\r\nfunction computeVectorLen(v) {\r\n    return Math.sqrt(v.x * v.x + v.y * v.y);\r\n}\r\n// 计算两个向量之间的角度\r\nfunction computeAngle(v1, v2) {\r\n    let lv1 = computeVectorLen(v1);\r\n    let lv2 = computeVectorLen(v2);\r\n    let angle = 0;\r\n    let l = (lv1 * lv2);\r\n    if (l) {\r\n        let cosVal = (v1.x * v2.x + v1.y * v2.y) / l;\r\n        angle = Math.acos(Math.min(cosVal, 1)); //得到两个向量的夹角\r\n        angle = v1.x * v2.y - v2.x * v1.y > 0 ? -angle : angle; //得到夹角的方向（顺时针逆时针）\r\n        return angle * 180 / Math.PI;\r\n    }\r\n    return 0;\r\n}\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/utils/index.ts?");

/***/ }),

/***/ "./package/wrap/wrap.ts":
/*!******************************!*\
  !*** ./package/wrap/wrap.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrap\": () => (/* binding */ wrap)\n/* harmony export */ });\nfunction wrap(dom) {\r\n    let prototype = dom.__proto__;\r\n    let proto = Object.create(prototype);\r\n    proto.addEventListener = addEventListener;\r\n    Object.setPrototypeOf(dom, proto);\r\n    Object.setPrototypeOf(proto, prototype);\r\n    return dom;\r\n}\r\n\n\n//# sourceURL=webpack://ntouch.js/./package/wrap/wrap.ts?");

/***/ }),

/***/ "./test/main.ts":
/*!**********************!*\
  !*** ./test/main.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _package_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package/index */ \"./package/index.ts\");\n/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.less */ \"./test/main.less\");\n\r\n\r\n_package_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"video\");\r\nlet pos = _package_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementById(\"pos\");\r\nlet size = _package_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementById(\"size\");\r\nlet angles = _package_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementById(\"angle\");\r\n(angles === null || angles === void 0 ? void 0 : angles.children[0]).innerText = \"default\";\r\nlet box = _package_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementById(\"box\");\r\nbox.addEventListener(\"singleTap\", (e) => {\r\n    console.log(e.interval, \"单击成功\");\r\n});\r\nbox.addEventListener(\"doubleTap\", (e) => {\r\n    console.log(e.interval, \"双击成功\");\r\n});\r\nlet left = box.getBoundingClientRect().left;\r\nlet top = box.getBoundingClientRect().top;\r\n(pos === null || pos === void 0 ? void 0 : pos.children[0].children[0]).innerText = left + \"\";\r\n(pos === null || pos === void 0 ? void 0 : pos.children[1].children[0]).innerText = top + \"\";\r\n(size === null || size === void 0 ? void 0 : size.children[0]).innerText = box.clientWidth + \"\";\r\n(size === null || size === void 0 ? void 0 : size.children[1]).innerText = box.clientHeight + \"\";\r\nlet width = box.clientWidth;\r\nlet height = box.clientHeight;\r\nbox.addEventListener(\"move\", (e) => {\r\n    let dx = e.deltaX;\r\n    let dy = e.deltaY;\r\n    box.style.left = left + dx + \"px\";\r\n    box.style.top = top + dy + \"px\";\r\n    (pos === null || pos === void 0 ? void 0 : pos.children[0].children[0]).innerText = left + dx + \"\";\r\n    (pos === null || pos === void 0 ? void 0 : pos.children[1].children[0]).innerText = top + dy + \"\";\r\n});\r\nbox.addEventListener(\"swipe\", (e) => {\r\n    console.log(\"滑动结束\", e.endPos);\r\n    left = box.getBoundingClientRect().left;\r\n    top = box.getBoundingClientRect().top;\r\n});\r\nbox.addEventListener(\"pintch\", (e) => {\r\n    var _a;\r\n    let scale = e.scale;\r\n    box.style.width = width * scale + \"px\";\r\n    box.style.height = height * scale + \"px\";\r\n    ((_a = _package_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementById(\"scale\")) === null || _a === void 0 ? void 0 : _a.children[0]).innerText = scale + \"\";\r\n    (size === null || size === void 0 ? void 0 : size.children[0]).innerText = box.clientWidth + \"\";\r\n    (size === null || size === void 0 ? void 0 : size.children[1]).innerText = box.clientHeight + \"\";\r\n});\r\nbox.addEventListener(\"pintchOver\", (e) => {\r\n    width = box.clientWidth;\r\n    height = box.clientHeight;\r\n});\r\nbox.addEventListener(\"rotate\", (e) => {\r\n    let angle = e.angle;\r\n    (angles === null || angles === void 0 ? void 0 : angles.children[0]).innerText = angle + \"\";\r\n    let center = e.touches[0];\r\n    let dx = center.clientX - parseInt(box.style.left);\r\n    let dy = center.clientY - parseInt(box.style.top);\r\n    // box.style.transformOrigin = `${dx/box.clientWidth*100}% ${dy/box.clientHeight*100}%`\r\n    box.style.transform = `rotate${angle}deg`;\r\n});\r\n\n\n//# sourceURL=webpack://ntouch.js/./test/main.ts?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./test/main.ts");
/******/ 	
/******/ })()
;