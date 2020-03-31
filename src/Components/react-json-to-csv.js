/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/react-json-to-csv@1.0.4/dist/index.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/* eslint-disable */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_react=require("react"),_react2=_interopRequireDefault(_react),_jsonToCsvExport=require("json-to-csv-export"),_jsonToCsvExport2=_interopRequireDefault(_jsonToCsvExport);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}var CsvDownload=function(e){var t=e.data,r=e.filename,o=_objectWithoutProperties(e,["data","filename"]);return _react2.default.createElement("button",_extends({onClick:function(){return(0,_jsonToCsvExport2.default)(t,r)}},o),e.children||"Download Data")};exports.default=CsvDownload;
//# sourceMappingURL=/sm/099331f17fcccd75af27008a962a8c0b46f7ce2d1ecac5e75a546e337598f1af.map