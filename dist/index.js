/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["SimpleReactForm"] = factory(require("react"), require("prop-types"));
	else
		root["SimpleReactForm"] = factory(root["React"], root["PropType"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_prop_types__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Field.js":
/*!*********************************!*\
  !*** ./src/components/Field.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Field(_ref) {\n  var _ref$className = _ref.className,\n      className = _ref$className === void 0 ? 'col' : _ref$className,\n      id = _ref.id,\n      title = _ref.title,\n      _ref$required = _ref.required,\n      required = _ref$required === void 0 ? false : _ref$required,\n      helpText = _ref.helpText,\n      children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: ['mb-3', className].join(' '),\n    id: \"\".concat(id, \"-element\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: id,\n    className: \"form-label\"\n  }, title, \" \", !required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"form-text\"\n  }, \"(Optional)\")), children, helpText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"\".concat(id, \"-help\"),\n    className: \"form-text\"\n  }, helpText));\n}\n\nField.propTypes = {\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  helpText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Field);\n\n//# sourceURL=webpack://SimpleReactForm/./src/components/Field.js?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ \"./src/components/Section.js\");\nvar _excluded = [\"type\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nfunction Form(_ref) {\n  var id = _ref.id,\n      _ref$sections = _ref.sections,\n      sections = _ref$sections === void 0 ? [] : _ref$sections,\n      data = _ref.data,\n      updateData = _ref.updateData,\n      types = _ref.types;\n  var componentTypes = Object.assign({\n    'section': _Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, types);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    id: id\n  }, sections.map(function (_ref2, key) {\n    var _ref2$type = _ref2.type,\n        type = _ref2$type === void 0 ? 'section' : _ref2$type,\n        section = _objectWithoutProperties(_ref2, _excluded);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(componentTypes[type] || componentTypes['section'], _objectSpread({\n      data: data,\n      updateData: updateData,\n      types: types,\n      key: key\n    }, section));\n  }));\n}\n\nForm.propTypes = {\n  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),\n  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  updateData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  types: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://SimpleReactForm/./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Row.js":
/*!*******************************!*\
  !*** ./src/components/Row.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField */ \"./src/components/TextField.js\");\n/* harmony import */ var _TextareaField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextareaField */ \"./src/components/TextareaField.js\");\nvar _excluded = [\"type\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nfunction Row(_ref) {\n  var id = _ref.id,\n      _ref$fields = _ref.fields,\n      fields = _ref$fields === void 0 ? [] : _ref$fields,\n      data = _ref.data,\n      updateData = _ref.updateData,\n      types = _ref.types;\n  var componentTypes = Object.assign({\n    'text': _TextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    'textarea': _TextareaField__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, types);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row\",\n    id: id\n  }, fields.map(function (_ref2, key) {\n    var _ref2$type = _ref2.type,\n        type = _ref2$type === void 0 ? 'text' : _ref2$type,\n        field = _objectWithoutProperties(_ref2, _excluded);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(componentTypes[type] || componentTypes['text'], _objectSpread({\n      data: data,\n      updateData: updateData,\n      types: types,\n      key: key\n    }, field));\n  }));\n}\n\nRow.propTypes = {\n  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  fields: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),\n  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  updateData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  types: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);\n\n//# sourceURL=webpack://SimpleReactForm/./src/components/Row.js?");

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Row */ \"./src/components/Row.js\");\nvar _excluded = [\"type\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nfunction Section(_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      _ref$rows = _ref.rows,\n      rows = _ref$rows === void 0 ? [] : _ref$rows,\n      data = _ref.data,\n      updateData = _ref.updateData,\n      types = _ref.types;\n  var componentTypes = Object.assign({\n    'row': _Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, types);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card mb-3\",\n    id: id\n  }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card-header\"\n  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card-body\"\n  }, rows.map(function (_ref2, key) {\n    var _ref2$type = _ref2.type,\n        type = _ref2$type === void 0 ? 'row' : _ref2$type,\n        row = _objectWithoutProperties(_ref2, _excluded);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(componentTypes[type] || componentTypes['row'], _objectSpread({\n      data: data,\n      updateData: updateData,\n      types: types,\n      key: key\n    }, row));\n  })));\n}\n\nSection.propTypes = {\n  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  rows: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),\n  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  updateData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  types: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);\n\n//# sourceURL=webpack://SimpleReactForm/./src/components/Section.js?");

/***/ }),

/***/ "./src/components/TextField.js":
/*!*************************************!*\
  !*** ./src/components/TextField.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field */ \"./src/components/Field.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/* global jsonLogic */\n\n\n\nvar idCounter = 0;\n\nfunction TextField(_ref) {\n  var _ref$id = _ref.id,\n      id = _ref$id === void 0 ? \"text-field-\".concat(idCounter++) : _ref$id,\n      className = _ref.className,\n      title = _ref.title,\n      _ref$required = _ref.required,\n      required = _ref$required === void 0 ? false : _ref$required,\n      helpText = _ref.helpText,\n      _ref$visible = _ref.visible,\n      visible = _ref$visible === void 0 ? true : _ref$visible,\n      _ref$readOnly = _ref.readOnly,\n      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,\n      bindTo = _ref.bindTo,\n      data = _ref.data,\n      updateData = _ref.updateData;\n  var refs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var element = refs.current;\n    element.value = data && bindTo && data[bindTo] || '';\n\n    if (updateData) {\n      var inputHandler = function inputHandler() {\n        return void updateData(bindTo, element.value);\n      };\n\n      element.addEventListener('input', inputHandler);\n      return function () {\n        return void element.removeEventListener('input', inputHandler);\n      };\n    }\n  });\n  var visibleValue = jsonLogic && visible && _typeof(visible) === 'object' ? jsonLogic.apply(visible, data || {}) : typeof visible === 'function' ? visible(data, bindTo) : visible;\n  var readOnlyValue = jsonLogic && readOnly && _typeof(readOnly) === 'object' ? jsonLogic.apply(readOnly, data || {}) : typeof visible === 'function' ? visible(data, bindTo) : readOnly;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Field__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: [className || 'col', !visibleValue && 'd-none'].filter(Boolean).join(' '),\n    id: id,\n    title: title,\n    required: required,\n    helpText: helpText\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    name: id,\n    type: \"text\",\n    required: required,\n    readOnly: readOnlyValue,\n    className: \"form-control\",\n    id: id,\n    \"aria-describedby\": helpText && \"\".concat(id, \"-help\"),\n    ref: refs\n  }));\n}\n\nTextField.propTypes = {\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  helpText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),\n  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),\n  bindTo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  updateData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextField);\n\n//# sourceURL=webpack://SimpleReactForm/./src/components/TextField.js?");

/***/ }),

/***/ "./src/components/TextareaField.js":
/*!*****************************************!*\
  !*** ./src/components/TextareaField.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field */ \"./src/components/Field.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/* global jsonLogic */\n\n\n\nvar idCounter = 0;\n\nfunction TextareaField(_ref) {\n  var _ref$id = _ref.id,\n      id = _ref$id === void 0 ? \"textarea-field-\".concat(idCounter++) : _ref$id,\n      className = _ref.className,\n      title = _ref.title,\n      _ref$required = _ref.required,\n      required = _ref$required === void 0 ? false : _ref$required,\n      helpText = _ref.helpText,\n      rows = _ref.rows,\n      _ref$visible = _ref.visible,\n      visible = _ref$visible === void 0 ? true : _ref$visible,\n      _ref$readOnly = _ref.readOnly,\n      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,\n      bindTo = _ref.bindTo,\n      data = _ref.data,\n      updateData = _ref.updateData;\n  var refs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var element = refs.current;\n    element.value = data && bindTo && data[bindTo] || '';\n\n    if (updateData) {\n      var inputHandler = function inputHandler() {\n        return void updateData(bindTo, element.value);\n      };\n\n      element.addEventListener('input', inputHandler);\n      return function () {\n        return void element.removeEventListener('input', inputHandler);\n      };\n    }\n  });\n  var visibleValue = jsonLogic && visible && _typeof(visible) === 'object' ? jsonLogic.apply(visible, data || {}) : typeof visible === 'function' ? visible(data, bindTo) : visible;\n  var readOnlyValue = jsonLogic && readOnly && _typeof(readOnly) === 'object' ? jsonLogic.apply(readOnly, data || {}) : typeof visible === 'function' ? visible(data, bindTo) : readOnly;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Field__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: [className || 'col', !visibleValue && 'd-none'].filter(Boolean).join(' '),\n    id: id,\n    title: title,\n    required: required,\n    helpText: helpText\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    name: id,\n    type: \"text\",\n    required: required,\n    rows: rows,\n    readOnly: readOnlyValue,\n    className: \"form-control\",\n    id: id,\n    \"aria-describedby\": helpText && \"\".concat(id, \"-help\"),\n    ref: refs\n  }));\n}\n\nTextareaField.propTypes = {\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  helpText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  rows: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),\n  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),\n  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),\n  bindTo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  updateData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextareaField);\n\n//# sourceURL=webpack://SimpleReactForm/./src/components/TextareaField.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Form */ \"./src/components/Form.js\");\nvar _excluded = [\"type\", \"data\", \"updateData\", \"types\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nfunction SimpleReactForm(_ref) {\n  var _ref$type = _ref.type,\n      type = _ref$type === void 0 ? 'form' : _ref$type,\n      data = _ref.data,\n      updateData = _ref.updateData,\n      types = _ref.types,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  var componentTypes = Object.assign({\n    'form': _components_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, types);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(componentTypes[type] || componentTypes['form'], _objectSpread({\n    data: data,\n    updateData: updateData,\n    types: types\n  }, props));\n}\n\nSimpleReactForm.propTypes = {\n  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  updateData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  types: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleReactForm);\n\n//# sourceURL=webpack://SimpleReactForm/./src/index.js?");

/***/ }),

/***/ "prop-types":
/*!********************************************************************************************************!*\
  !*** external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types","root":"PropType"} ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 			// no module.id needed
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
/******/ 	return __webpack_exports__;
/******/ })()
;
});