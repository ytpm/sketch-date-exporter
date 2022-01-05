var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/rename-exporter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/*! exports provided: createDialog, viewContents, DIALOG_ELEMENTS, DIALOG_REPLACE_WORD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDialog", function() { return createDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewContents", function() { return viewContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_ELEMENTS", function() { return DIALOG_ELEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_REPLACE_WORD", function() { return DIALOG_REPLACE_WORD; });
/* harmony import */ var _macos_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./macos-ui */ "./src/macos-ui.js");

var DIALOG_TITLE = "Date Exporter";
var DIALOG_REPLACE_WORD = "DATE";
var ELEMENT_HEIGHT = 24;
var DIALOG_ELEMENTS = [{
  type: 'label',
  id: 'replaceKeyword',
  value: "Replacing word '".concat(DIALOG_REPLACE_WORD, "' with date"),
  paddingBottom: 2
}, {
  type: 'label',
  id: 'fileFormat',
  value: 'File Format:',
  paddingBottom: -2
}, {
  type: 'select',
  id: 'selectFormat',
  value: ['png', 'jpg'],
  paddingBottom: 8
}, {
  type: 'label',
  id: 'dateFormat',
  value: 'Date Format:',
  paddingBottom: -2
}, {
  type: 'select',
  id: 'selectDateFormat',
  value: ['yyyy-mm-dd', 'yy-mm-dd'],
  paddingBottom: 8
}];
var viewContents = null; //  Create custom dialog

function createDialog(previousSettings) {
  var dialog = NSAlert.alloc().init();
  dialog.setMessageText(DIALOG_TITLE);
  dialog.addButtonWithTitle("Export");
  dialog.addButtonWithTitle("Cancel");
  var COUNT_ELEMENTS = DIALOG_ELEMENTS.length;
  var PADDING = DIALOG_ELEMENTS.map(function (elem) {
    return elem.paddingBottom;
  }).reduce(function (acc, pad) {
    return acc + pad;
  }, 0);
  var TOTAL_MODAL_HEIGHT = COUNT_ELEMENTS * ELEMENT_HEIGHT + PADDING;
  var customView = NSView.alloc().initWithFrame(NSMakeRect(0, 0, 200, TOTAL_MODAL_HEIGHT));
  var position_next_elem = ELEMENT_HEIGHT;
  viewContents = DIALOG_ELEMENTS.map(function (element, i) {
    var type = element.type; // let padding = (i === 0 || i === 1 || i === 4) ? 0 : element.paddingBottom

    var yPos = TOTAL_MODAL_HEIGHT - position_next_elem; // ((i+1) * (ELEMENT_HEIGHT))

    var UIElement;

    if (type == 'label') {
      UIElement = Object(_macos_ui__WEBPACK_IMPORTED_MODULE_0__["createLabel"])(NSMakeRect(0, yPos, 200, ELEMENT_HEIGHT), 12, false, element.value);
    } else if (type == 'select') {
      UIElement = Object(_macos_ui__WEBPACK_IMPORTED_MODULE_0__["createSelect"])(NSMakeRect(0, yPos, 200, ELEMENT_HEIGHT), element.value);
    } else if (type == 'checkbox') {
      UIElement = Object(_macos_ui__WEBPACK_IMPORTED_MODULE_0__["createCheckbox"])(NSMakeRect(0, yPos, 200, ELEMENT_HEIGHT), element.label, element.value, element.default, true);
    } else if (type == 'text') {
      UIElement = Object(_macos_ui__WEBPACK_IMPORTED_MODULE_0__["createTextbox"])({
        frame: NSMakeRect(0, yPos, 200, ELEMENT_HEIGHT),
        size: 12,
        text: element.value,
        placeholder: element.placeholder
      });
    }

    if (typeof previousSetting !== 'undefined') {
      if (element.id == 'selectFormat') {
        UIElement.selectItemWithTitle(previousSetting.selectFormat);
      } else if (element.id == 'selectDateFormat') {
        UIElement.selectItemWithTitle(previousSetting.selectScale);
      }
    }

    position_next_elem += ELEMENT_HEIGHT + element.paddingBottom;
    return UIElement;
  });
  viewContents.forEach(function (subview) {
    customView.addSubview(subview);
  });
  dialog.setAccessoryView(customView);
  return dialog;
}



/***/ }),

/***/ "./src/macos-ui.js":
/*!*************************!*\
  !*** ./src/macos-ui.js ***!
  \*************************/
/*! exports provided: rect, createLabel, createTextbox, createSelect, createCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rect", function() { return rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabel", function() { return createLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextbox", function() { return createTextbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelect", function() { return createSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckbox", function() { return createCheckbox; });
// -------------------------------------------------
// --------------- Dialog formatting ---------------
// -------------------------------------------------
function rect(x, y, w, h) {
  var rect = NSMakeRect(x, y, w, h);
  return rect;
}
function createLabel(frame, size, bold, text) {
  var label = NSTextField.alloc().initWithFrame(frame);
  label.setStringValue(text);
  label.setBezeled(false);
  label.setDrawsBackground(false);
  label.setEditable(false);
  label.setSelectable(false);

  if (bold) {
    label.setFont(NSFont.boldSystemFontOfSize(size));
  } else {
    label.setFont(NSFont.systemFontOfSize(size));
  }

  return label;
}
function createTextbox(_ref) {
  var frame = _ref.frame,
      size = _ref.size,
      bold = _ref.bold,
      text = _ref.text,
      placeholder = _ref.placeholder;
  var label = NSTextField.alloc().initWithFrame(frame);
  label.setStringValue(text);
  label.setBezeled(true);
  label.setDrawsBackground(true);
  label.setEditable(true);
  label.setSelectable(true);
  label.placeholderString = placeholder;

  if (bold) {
    label.setFont(NSFont.boldSystemFontOfSize(size));
  } else {
    label.setFont(NSFont.systemFontOfSize(size));
  }

  return label;
}
function createSelect(frame, items) {
  var select = NSPopUpButton.alloc().initWithFrame(frame);

  for (var i = 0; i < items.length; i++) {
    if (items[i] == "--") {
      select.menu().addItem(NSMenuItem.separatorItem());
    } else {
      select.addItemWithTitle(items[i]);
    }
  }

  return select;
}
function createCheckbox(frame, name, value, onstate, enabled) {
  var checkbox = NSButton.alloc().initWithFrame(frame);
  checkbox.setButtonType(NSSwitchButton); // checkbox.setBezelStyle(1);

  checkbox.setTitle(name);
  checkbox.setTag(value);
  checkbox.setState(onstate ? NSOnState : NSOffState);
  checkbox.setEnabled(enabled);
  return checkbox;
}

/***/ }),

/***/ "./src/rename-exporter.js":
/*!********************************!*\
  !*** ./src/rename-exporter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.js");

 //  Dialog creation imports

 //  Import file renamer


var PREFS_KEY = "previous_settings"; // -------------------------------------------------
// ------------------- The Plugin ------------------
// -------------------------------------------------

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var doc = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  if (!doc) return;
  var selection = doc.selectedLayers;

  if (selection.length === 0) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('No layers are selected.');
    return;
  } else {
    // Load user settings
    var previousSettings = sketch_settings__WEBPACK_IMPORTED_MODULE_1___default.a.settingForKey(PREFS_KEY);
    var dialog = Object(_dialog__WEBPACK_IMPORTED_MODULE_2__["createDialog"])(previousSettings); // Run the dialog

    if (dialog.runModal() !== NSAlertFirstButtonReturn) {
      return;
    } else {
      var formatElemIdx = _dialog__WEBPACK_IMPORTED_MODULE_2__["DIALOG_ELEMENTS"].findIndex(function (elem) {
        return elem.id === 'selectFormat';
      });
      var dateFormatElemIdx = _dialog__WEBPACK_IMPORTED_MODULE_2__["DIALOG_ELEMENTS"].findIndex(function (elem) {
        return elem.id === 'selectDateFormat';
      }); // Save the responses from that modal

      var formatValueIndex = _dialog__WEBPACK_IMPORTED_MODULE_2__["viewContents"][formatElemIdx].indexOfSelectedItem();
      var dateFormatValueIndex = _dialog__WEBPACK_IMPORTED_MODULE_2__["viewContents"][dateFormatElemIdx].indexOfSelectedItem(); // Save user settings

      var prefs = {
        "selectFormat": _dialog__WEBPACK_IMPORTED_MODULE_2__["DIALOG_ELEMENTS"][formatElemIdx].value[formatValueIndex],
        "selectDateFormat": _dialog__WEBPACK_IMPORTED_MODULE_2__["DIALOG_ELEMENTS"][dateFormatElemIdx].value[dateFormatValueIndex]
      };
      sketch_settings__WEBPACK_IMPORTED_MODULE_1___default.a.setSettingForKey(PREFS_KEY, prefs); // Create an Open dialog

      var open = NSOpenPanel.openPanel();
      open.canChooseFiles = false;
      open.canChooseDirectories = true;
      open.canCreateDirectories = true; // run the open dialog

      if (open.runModal()) {
        var path = open.URL().path();
        var selectedLayers = selection.layers; // Preserve the original layer names so we can change them back

        var originalLayerNames = selectedLayers.map(function (layer) {
          return layer.name;
        }); // Get the selected file format

        var fileFormat = _dialog__WEBPACK_IMPORTED_MODULE_2__["DIALOG_ELEMENTS"][formatElemIdx].value[formatValueIndex]; // Change the file names appropriately

        selectedLayers.forEach(function (layer) {
          var replaceDateFormat = _dialog__WEBPACK_IMPORTED_MODULE_2__["DIALOG_ELEMENTS"][dateFormatElemIdx].value[dateFormatValueIndex]; //  Replace 'DATE' with current date

          var layerName = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceDate"])(layer.name, replaceDateFormat);
          layer.name = layerName;
        }); // Set the format and save path

        var exportOptions = {
          formats: fileFormat,
          scales: 1,
          output: path
        }; // Export the layers

        sketch__WEBPACK_IMPORTED_MODULE_0___default.a.export(selectedLayers, exportOptions); // Reset the layer names

        selectedLayers.forEach(function (layer, i) {
          layer.name = originalLayerNames[i];
        }); // Show confirmation

        sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Exported ".concat(selectedLayers.length, " layers."));
      }
    }
  }
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: replaceDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceDate", function() { return replaceDate; });
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");

function replaceDate(str, format) {
  if (typeof str !== 'string') return "";
  str = str.replace(_dialog__WEBPACK_IMPORTED_MODULE_0__["DIALOG_REPLACE_WORD"], formattedDate(format));
  return str;
}

function formattedDate(format) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //  4 digits year format

  var yyyy = today.getFullYear(); //  2 digits year format

  if (format === 'yy-mm-dd') {
    yyyy = today.getFullYear().toString().substring(2);
  }

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return yyyy + '-' + mm + '-' + dd;
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__rename-exporter.js.map