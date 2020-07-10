/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  color: white;\n  background: #333; }\n\n.text-center {\n  text-align: center; }\n\nform {\n  max-width: 500px;\n  margin: 0 auto; }\n  form .form-group {\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 10px; }\n    form .form-group label {\n      flex-basis: auto;\n      padding: 5px 0; }\n    form .form-group input, form .form-group select, form .form-group textarea {\n      flex-basis: 100%; }\n    form .form-group input[type=checkbox] {\n      margin: 8px;\n      flex-basis: auto; }\n    form .form-group button#submit {\n      margin: 0 auto; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Form_1 = __webpack_require__(/*! ./component/Form */ "./src/component/Form.ts");
class App {
    renderForm(form) {
        document.body.append(form.render());
    }
    init() {
        const form = new Form_1.Form();
        this.renderForm(form);
        form.fieldListener();
        form.getValue();
    }
}
exports.App = App;


/***/ }),

/***/ "./src/component/FieldLabel.ts":
/*!*************************************!*\
  !*** ./src/component/FieldLabel.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FieldLabel {
    constructor(label) {
        this.label = label;
    }
    render() {
        let el = document.createElement('label');
        el.innerHTML = this.label;
        return el;
    }
}
exports.FieldLabel = FieldLabel;


/***/ }),

/***/ "./src/component/FieldTypes.ts":
/*!*************************************!*\
  !*** ./src/component/FieldTypes.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldTypes;
(function (FieldTypes) {
    FieldTypes["Text"] = "text";
    FieldTypes["Textarea"] = "textarea";
    FieldTypes["Date"] = "date";
    FieldTypes["Email"] = "email";
    FieldTypes["Select"] = "select";
    FieldTypes["Checkbox"] = "checkbox";
})(FieldTypes = exports.FieldTypes || (exports.FieldTypes = {}));


/***/ }),

/***/ "./src/component/Form.ts":
/*!*******************************!*\
  !*** ./src/component/Form.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InputField_1 = __webpack_require__(/*! ./fields/InputField */ "./src/component/fields/InputField.ts");
const EmailField_1 = __webpack_require__(/*! ./fields/EmailField */ "./src/component/fields/EmailField.ts");
const SelectField_1 = __webpack_require__(/*! ./fields/SelectField */ "./src/component/fields/SelectField.ts");
const CheckboxField_1 = __webpack_require__(/*! ./fields/CheckboxField */ "./src/component/fields/CheckboxField.ts");
const TextAreaField_1 = __webpack_require__(/*! ./fields/TextAreaField */ "./src/component/fields/TextAreaField.ts");
const FieldTypes_1 = __webpack_require__(/*! ./FieldTypes */ "./src/component/FieldTypes.ts");
class Form {
    constructor() {
        this.fields = [];
        this.formElement = this.createFormElement();
        this.submitBtn = this.createSubmitButton();
    }
    getDataContainer() {
        const dataContainer = document.createElement('div');
        dataContainer.id = 'data-container';
        this.fields.forEach((field) => {
            let row = document.createElement('p');
            row.innerHTML = field.value;
            dataContainer.append(row);
        });
        return dataContainer;
    }
    setFieldData(fieldsArray) {
        fieldsArray.forEach((field) => {
            this.fields.push(field);
            this.formElement.append(field.render());
        });
    }
    getValue() {
        this.submitBtn.addEventListener('click', () => {
            document.body.append(this.getDataContainer());
        });
    }
    formFields() {
        const optionFields = [
            'Informatyka',
            'Psychologia',
            'Zarządzanie',
            'Ekonometria'
        ];
        return [
            new InputField_1.InputField('Imię', 'name'),
            new InputField_1.InputField('Nazwisko', 'surname'),
            new EmailField_1.EmailField('E-Mail', 'email'),
            new SelectField_1.SelectField('Wybrany kierunek studiów', 'profession', optionFields),
            new CheckboxField_1.CheckboxField('Czy preferujesz e-learning?', 'elearning'),
            new TextAreaField_1.TextAreaField('Uwagi', 'desc'),
        ];
    }
    render() {
        this.setFieldData(this.formFields());
        this.formElement.append(this.submitBtn);
        return this.formElement;
    }
    createSubmitButton() {
        let btn = document.createElement('button');
        btn.id = 'submit';
        btn.textContent = 'Pobierz wyniki';
        btn.type = 'button';
        return btn;
    }
    createFormElement() {
        return document.createElement('form');
    }
    fieldListener() {
        this.fields.forEach((field) => {
            let key = this.formElement.querySelector(`[name=${field.name}]`);
            key.addEventListener('change', () => {
                switch (field.type) {
                    case FieldTypes_1.FieldTypes.Select:
                        field.value = key.querySelector('option:checked').textContent;
                        break;
                    case FieldTypes_1.FieldTypes.Checkbox:
                        field.value = key.checked ? 'Tak' : 'Nie';
                        break;
                    default:
                        field.value = key.value;
                }
            });
        });
    }
}
exports.Form = Form;


/***/ }),

/***/ "./src/component/fields/BaseField.ts":
/*!*******************************************!*\
  !*** ./src/component/fields/BaseField.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FieldTypes_1 = __webpack_require__(/*! ../FieldTypes */ "./src/component/FieldTypes.ts");
const FieldLabel_1 = __webpack_require__(/*! ../FieldLabel */ "./src/component/FieldLabel.ts");
class BaseField {
    constructor(label, name) {
        this.name = '';
        this.type = FieldTypes_1.FieldTypes.Text;
        this.value = '';
        this.label = new FieldLabel_1.FieldLabel(label).render();
        this.name = name;
    }
    render() {
        return this.createField(this.createInput(), this.label);
    }
    createInput() {
        let el = document.createElement('input');
        el.type = this.getType();
        el.name = this.getName();
        el.value = this.getValue();
        return el;
    }
    createField(input, label) {
        let div = document.createElement('div');
        div.className = 'form-group';
        div.append(label);
        div.append(input);
        return div;
    }
    getType() {
        return this.type;
    }
    getValue() {
        return this.value;
    }
    getName() {
        return this.name;
    }
}
exports.BaseField = BaseField;


/***/ }),

/***/ "./src/component/fields/CheckboxField.ts":
/*!***********************************************!*\
  !*** ./src/component/fields/CheckboxField.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseField_1 = __webpack_require__(/*! ./BaseField */ "./src/component/fields/BaseField.ts");
const FieldTypes_1 = __webpack_require__(/*! ../FieldTypes */ "./src/component/FieldTypes.ts");
class CheckboxField extends BaseField_1.BaseField {
    constructor(label, name) {
        super(label, name);
        this.type = FieldTypes_1.FieldTypes.Checkbox;
        this.value = 'Nie';
    }
}
exports.CheckboxField = CheckboxField;


/***/ }),

/***/ "./src/component/fields/EmailField.ts":
/*!********************************************!*\
  !*** ./src/component/fields/EmailField.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseField_1 = __webpack_require__(/*! ./BaseField */ "./src/component/fields/BaseField.ts");
const FieldTypes_1 = __webpack_require__(/*! ../FieldTypes */ "./src/component/FieldTypes.ts");
class EmailField extends BaseField_1.BaseField {
    constructor(label, name) {
        super(label, name);
        this.type = FieldTypes_1.FieldTypes.Email;
    }
}
exports.EmailField = EmailField;


/***/ }),

/***/ "./src/component/fields/InputField.ts":
/*!********************************************!*\
  !*** ./src/component/fields/InputField.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseField_1 = __webpack_require__(/*! ./BaseField */ "./src/component/fields/BaseField.ts");
class InputField extends BaseField_1.BaseField {
    constructor(label, name) {
        super(label, name);
    }
}
exports.InputField = InputField;


/***/ }),

/***/ "./src/component/fields/SelectField.ts":
/*!*********************************************!*\
  !*** ./src/component/fields/SelectField.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseField_1 = __webpack_require__(/*! ./BaseField */ "./src/component/fields/BaseField.ts");
const FieldTypes_1 = __webpack_require__(/*! ../FieldTypes */ "./src/component/FieldTypes.ts");
class SelectField extends BaseField_1.BaseField {
    constructor(label, name, options = ['Brak']) {
        super(label, name);
        this.type = FieldTypes_1.FieldTypes.Select;
        this.options = [];
        this.options = options;
        this.value = this.options[0];
    }
    setOptions(select) {
        this.options.forEach((option, index) => {
            let opt = document.createElement('option');
            opt.value = index.toString();
            opt.text = option;
            select.append(opt);
        });
    }
    createInput() {
        let el = document.createElement(this.getType());
        el.name = this.getName();
        this.setOptions(el);
        return el;
    }
}
exports.SelectField = SelectField;


/***/ }),

/***/ "./src/component/fields/TextAreaField.ts":
/*!***********************************************!*\
  !*** ./src/component/fields/TextAreaField.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FieldTypes_1 = __webpack_require__(/*! ../FieldTypes */ "./src/component/FieldTypes.ts");
const BaseField_1 = __webpack_require__(/*! ./BaseField */ "./src/component/fields/BaseField.ts");
class TextAreaField extends BaseField_1.BaseField {
    constructor(label, name, height = "150px") {
        super(label, name);
        this.type = FieldTypes_1.FieldTypes.Textarea;
        this.height = '';
        this.height = height;
    }
    createInput() {
        let el = document.createElement(this.getType());
        el.name = this.getName();
        el.style.height = this.height;
        return el;
    }
}
exports.TextAreaField = TextAreaField;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./main.scss */ "./src/main.scss");
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
const app = new app_1.App();
app.init();


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRmllbGRMYWJlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0ZpZWxkVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Gb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvZmllbGRzL0Jhc2VGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2ZpZWxkcy9DaGVja2JveEZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvZmllbGRzL0VtYWlsRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9maWVsZHMvSW5wdXRGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2ZpZWxkcy9TZWxlY3RGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2ZpZWxkcy9UZXh0QXJlYUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzPzRlNTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7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Qy9CRCwrRkFBMkM7QUFDM0Msa0dBQXNDO0FBRXRDLE1BQWEsYUFBYyxTQUFRLHFCQUFTO0lBSXhDLFlBQVksS0FBYSxFQUFFLElBQVksRUFBRSxTQUFpQixPQUFPO1FBQzdELEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFKaEIsU0FBSSxHQUFXLHVCQUFVLENBQUMsUUFBUSxDQUFDO1FBQ2hDLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFJMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLEVBQUUsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNsRSxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTlCLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztDQUNKO0FBaEJELHNDQWdCQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELDBEQUFxQjtBQUNyQiwrREFBNEI7QUFFNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQ0pYLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsaU1BQThGOztBQUVoSTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogIzMzMzsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5mb3JtIHtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcbiAgZm9ybSAuZm9ybS1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICBmb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcXG4gICAgICBmbGV4LWJhc2lzOiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDVweCAwOyB9XFxuICAgIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQsIGZvcm0gLmZvcm0tZ3JvdXAgc2VsZWN0LCBmb3JtIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlOyB9XFxuICAgIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIG1hcmdpbjogOHB4O1xcbiAgICAgIGZsZXgtYmFzaXM6IGF1dG87IH1cXG4gICAgZm9ybSAuZm9ybS1ncm91cCBidXR0b24jc3VibWl0IHtcXG4gICAgICBtYXJnaW46IDAgYXV0bzsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBGb3JtfSBmcm9tIFwiLi9jb21wb25lbnQvRm9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyRm9ybShmb3JtOiBGb3JtKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZm9ybS5yZW5kZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtKCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyRm9ybShmb3JtKTtcclxuICAgICAgICBmb3JtLmZpZWxkTGlzdGVuZXIoKTtcclxuXHJcbiAgICAgICAgZm9ybS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBGaWVsZExhYmVsIHtcclxuICAgIHByb3RlY3RlZCBsYWJlbDogc3RyaW5nXHJcblxyXG4gICAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IEhUTUxMYWJlbEVsZW1lbnQge1xyXG4gICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5sYWJlbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gRmllbGRUeXBlcyB7XHJcbiAgICBUZXh0ID0gJ3RleHQnLFxyXG4gICAgVGV4dGFyZWEgPSAndGV4dGFyZWEnLFxyXG4gICAgRGF0ZSA9ICdkYXRlJyxcclxuICAgIEVtYWlsID0gJ2VtYWlsJyxcclxuICAgIFNlbGVjdCA9ICdzZWxlY3QnLFxyXG4gICAgQ2hlY2tib3ggPSAnY2hlY2tib3gnXHJcbn0iLCJpbXBvcnQge0lGaWVsZH0gZnJvbSBcIi4uL2ludGVyZmFjZS9JRmllbGRcIjtcclxuaW1wb3J0IHtJbnB1dEZpZWxkfSBmcm9tIFwiLi9maWVsZHMvSW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQge0Jhc2VGaWVsZH0gZnJvbSBcIi4vZmllbGRzL0Jhc2VGaWVsZFwiO1xyXG5pbXBvcnQge0VtYWlsRmllbGR9IGZyb20gXCIuL2ZpZWxkcy9FbWFpbEZpZWxkXCI7XHJcbmltcG9ydCB7U2VsZWN0RmllbGR9IGZyb20gXCIuL2ZpZWxkcy9TZWxlY3RGaWVsZFwiO1xyXG5pbXBvcnQge0NoZWNrYm94RmllbGR9IGZyb20gXCIuL2ZpZWxkcy9DaGVja2JveEZpZWxkXCI7XHJcbmltcG9ydCB7VGV4dEFyZWFGaWVsZH0gZnJvbSBcIi4vZmllbGRzL1RleHRBcmVhRmllbGRcIjtcclxuaW1wb3J0IHtGaWVsZFR5cGVzfSBmcm9tIFwiLi9GaWVsZFR5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSB7XHJcbiAgICBwcm90ZWN0ZWQgZm9ybUVsZW1lbnQ6IEhUTUxGb3JtRWxlbWVudDtcclxuICAgIHB1YmxpYyBmaWVsZHM6IElGaWVsZFtdID0gW107XHJcbiAgICBwdWJsaWMgc3VibWl0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZvcm1FbGVtZW50ID0gdGhpcy5jcmVhdGVGb3JtRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnRuID0gdGhpcy5jcmVhdGVTdWJtaXRCdXR0b24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0RGF0YUNvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRhdGFDb250YWluZXIuaWQgPSAnZGF0YS1jb250YWluZXInO1xyXG5cclxuICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgICAgIGRhdGFDb250YWluZXIuYXBwZW5kKHJvdyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRGaWVsZERhdGEoZmllbGRzQXJyYXk6IEJhc2VGaWVsZFtdKTogdm9pZCB7XHJcbiAgICAgICAgZmllbGRzQXJyYXkuZm9yRWFjaCgoZmllbGQ6IEJhc2VGaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5hcHBlbmQoZmllbGQucmVuZGVyKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWYWx1ZSgpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5nZXREYXRhQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBmb3JtRmllbGRzKCk6IEJhc2VGaWVsZFtdIHtcclxuICAgICAgICBjb25zdCBvcHRpb25GaWVsZHMgPSBbXHJcbiAgICAgICAgICAgICdJbmZvcm1hdHlrYScsXHJcbiAgICAgICAgICAgICdQc3ljaG9sb2dpYScsXHJcbiAgICAgICAgICAgICdaYXJ6xIVkemFuaWUnLFxyXG4gICAgICAgICAgICAnRWtvbm9tZXRyaWEnXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgbmV3IElucHV0RmllbGQoJ0ltacSZJywgJ25hbWUnKSxcclxuICAgICAgICAgICAgbmV3IElucHV0RmllbGQoJ05hendpc2tvJywgJ3N1cm5hbWUnKSxcclxuICAgICAgICAgICAgbmV3IEVtYWlsRmllbGQoJ0UtTWFpbCcsICdlbWFpbCcpLFxyXG4gICAgICAgICAgICBuZXcgU2VsZWN0RmllbGQoJ1d5YnJhbnkga2llcnVuZWsgc3R1ZGnDs3cnLCAncHJvZmVzc2lvbicsIG9wdGlvbkZpZWxkcyksXHJcbiAgICAgICAgICAgIG5ldyBDaGVja2JveEZpZWxkKCdDenkgcHJlZmVydWplc3ogZS1sZWFybmluZz8nLCAnZWxlYXJuaW5nJyksXHJcbiAgICAgICAgICAgIG5ldyBUZXh0QXJlYUZpZWxkKCdVd2FnaScsICdkZXNjJyksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICB0aGlzLnNldEZpZWxkRGF0YSh0aGlzLmZvcm1GaWVsZHMoKSk7XHJcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5hcHBlbmQodGhpcy5zdWJtaXRCdG4pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlU3VibWl0QnV0dG9uKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuLmlkID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ1BvYmllcnogd3luaWtpJztcclxuICAgICAgICBidG4udHlwZSA9ICdidXR0b24nO1xyXG5cclxuICAgICAgICByZXR1cm4gYnRuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVGb3JtRWxlbWVudCgpOiBIVE1MRm9ybUVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpZWxkTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9JHtmaWVsZC5uYW1lfV1gKTtcclxuICAgICAgICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChmaWVsZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGaWVsZFR5cGVzLlNlbGVjdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmFsdWUgPSBrZXkucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRmllbGRUeXBlcy5DaGVja2JveDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmFsdWUgPSBrZXkuY2hlY2tlZCA/ICdUYWsnIDogJ05pZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52YWx1ZSA9IGtleS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCB7RmllbGRUeXBlc30gZnJvbSBcIi4uL0ZpZWxkVHlwZXNcIjtcclxuaW1wb3J0IHtJRmllbGR9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvSUZpZWxkXCI7XHJcbmltcG9ydCB7RmllbGRMYWJlbH0gZnJvbSBcIi4uL0ZpZWxkTGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRmllbGQgaW1wbGVtZW50cyBJRmllbGQge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZyA9IEZpZWxkVHlwZXMuVGV4dDtcclxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKGxhYmVsKS5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZpZWxkKHRoaXMuY3JlYXRlSW5wdXQoKSwgdGhpcy5sYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUlucHV0KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGVsLnR5cGUgPSB0aGlzLmdldFR5cGUoKTtcclxuICAgICAgICBlbC5uYW1lID0gdGhpcy5nZXROYW1lKCk7XHJcbiAgICAgICAgZWwudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlRmllbGQoaW5wdXQ6IEhUTUxFbGVtZW50LCBsYWJlbDogSFRNTExhYmVsRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdmb3JtLWdyb3VwJztcclxuICAgICAgICBkaXYuYXBwZW5kKGxhYmVsKTtcclxuICAgICAgICBkaXYuYXBwZW5kKGlucHV0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYXNlRmllbGR9IGZyb20gXCIuL0Jhc2VGaWVsZFwiO1xyXG5pbXBvcnQge0ZpZWxkVHlwZXN9IGZyb20gXCIuLi9GaWVsZFR5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hGaWVsZCBleHRlbmRzIEJhc2VGaWVsZHtcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSBGaWVsZFR5cGVzLkNoZWNrYm94O1xyXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmcgPSAnTmllJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsYWJlbDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihsYWJlbCwgbmFtZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2VGaWVsZH0gZnJvbSBcIi4vQmFzZUZpZWxkXCI7XHJcbmltcG9ydCB7RmllbGRUeXBlc30gZnJvbSBcIi4uL0ZpZWxkVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEZpZWxkIGV4dGVuZHMgQmFzZUZpZWxkIHtcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSBGaWVsZFR5cGVzLkVtYWlsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGxhYmVsLCBuYW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZUZpZWxkfSBmcm9tIFwiLi9CYXNlRmllbGRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEZpZWxkIGV4dGVuZHMgQmFzZUZpZWxkIHtcclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGxhYmVsLCBuYW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZUZpZWxkfSBmcm9tIFwiLi9CYXNlRmllbGRcIjtcclxuaW1wb3J0IHtGaWVsZFR5cGVzfSBmcm9tIFwiLi4vRmllbGRUeXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpZWxkIGV4dGVuZHMgQmFzZUZpZWxkIHtcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSBGaWVsZFR5cGVzLlNlbGVjdDtcclxuICAgIHB1YmxpYyBvcHRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgb3B0aW9uczogc3RyaW5nW10gPSBbJ0JyYWsnXSkge1xyXG4gICAgICAgIHN1cGVyKGxhYmVsLCBuYW1lKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wdGlvbnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3B0aW9ucyhzZWxlY3Q6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0LnZhbHVlID0gaW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgb3B0LnRleHQgPSBvcHRpb247XHJcblxyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kKG9wdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUlucHV0KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgZWwgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZ2V0VHlwZSgpKTtcclxuICAgICAgICBlbC5uYW1lID0gdGhpcy5nZXROYW1lKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhlbCk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZWxkVHlwZXMgfSBmcm9tIFwiLi4vRmllbGRUeXBlc1wiO1xyXG5pbXBvcnQge0Jhc2VGaWVsZH0gZnJvbSBcIi4vQmFzZUZpZWxkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dEFyZWFGaWVsZCBleHRlbmRzIEJhc2VGaWVsZCB7XHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nID0gRmllbGRUeXBlcy5UZXh0YXJlYTtcclxuICAgIHByb3RlY3RlZCBoZWlnaHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaGVpZ2h0OiBzdHJpbmcgPSBcIjE1MHB4XCIpIHtcclxuICAgICAgICBzdXBlcihsYWJlbCwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUlucHV0KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgZWwgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZ2V0VHlwZSgpKTtcclxuICAgICAgICBlbC5uYW1lID0gdGhpcy5nZXROYW1lKCk7XHJcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5pbml0KCk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==