// node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/state-local/lib/es/state-local.js
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x) {
    return fns.reduceRight(function(y, f) {
      return f(y);
    }, x);
  };
}
function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject(value) {
  return {}.toString.call(value).includes("Object");
}
function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function isFunction(value) {
  return typeof value === "function";
}
function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler("changeType");
  if (Object.keys(changes).some(function(field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler("changeField");
  return changes;
}
function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler("selectorType");
}
function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler("handlerType");
  if (isObject(handler) && Object.values(handler).some(function(_handler) {
    return !isFunction(_handler);
  })) errorHandler("handlersType");
}
function validateInitial(initial) {
  if (!initial) errorHandler("initialIsRequired");
  if (!isObject(initial)) errorHandler("initialType");
  if (isEmpty(initial)) errorHandler("initialContent");
}
function throwError(errorMessages3, type) {
  throw new Error(errorMessages3[type] || errorMessages3["default"]);
}
var errorMessages = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": "an unknown error accured in `state-local` package"
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};
function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);
  function getState2() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state2) {
      return state2;
    };
    validators.selector(selector);
    return selector(state.current);
  }
  function setState2(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }
  return [getState2, setState2];
}
function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}
function updateState(state, changes) {
  state.current = _objectSpread22(_objectSpread22({}, state.current), changes);
  return changes;
}
function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
    var _handler$field;
    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}
var index = {
  create
};
var state_local_default = index;

// node_modules/@monaco-editor/loader/lib/es/config/index.js
var config = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"
  }
};
var config_default = config;

// node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function curry2(fn) {
  return function curried() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
var curry_default = curry2;

// node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function isObject2(value) {
  return {}.toString.call(value).includes("Object");
}
var isObject_default = isObject2;

// node_modules/@monaco-editor/loader/lib/es/validators/index.js
function validateConfig(config3) {
  if (!config3) errorHandler2("configIsRequired");
  if (!isObject_default(config3)) errorHandler2("configType");
  if (config3.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config3.urls.monacoBase
      }
    };
  }
  return config3;
}
function informAboutDeprecation() {
  console.warn(errorMessages2.deprecation);
}
function throwError2(errorMessages3, type) {
  throw new Error(errorMessages3[type] || errorMessages3["default"]);
}
var errorMessages2 = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  "default": "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler2 = curry_default(throwError2)(errorMessages2);
var validators2 = {
  config: validateConfig
};
var validators_default = validators2;

// node_modules/@monaco-editor/loader/lib/es/utils/compose.js
var compose2 = function compose3() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x) {
    return fns.reduceRight(function(y, f) {
      return f(y);
    }, x);
  };
};
var compose_default = compose2;

// node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js
function merge(target, source) {
  Object.keys(source).forEach(function(key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2(_objectSpread2({}, target), source);
}
var deepMerge_default = merge;

// node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
var CANCELATION_MESSAGE = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function(resolve, reject) {
    promise.then(function(val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function() {
    return hasCanceled_ = true;
  }, wrappedPromise;
}
var makeCancelable_default = makeCancelable;

// node_modules/@monaco-editor/loader/lib/es/loader/index.js
var _state$create = state_local_default.create({
  config: config_default,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
});
var _state$create2 = _slicedToArray(_state$create, 2);
var getState = _state$create2[0];
var setState = _state$create2[1];
function config2(globalConfig) {
  var _validators$config = validators_default.config(globalConfig), monaco = _validators$config.monaco, config3 = _objectWithoutProperties(_validators$config, ["monaco"]);
  setState(function(state) {
    return {
      config: deepMerge_default(state.config, config3),
      monaco
    };
  });
}
function init() {
  var state = getState(function(_ref) {
    var monaco = _ref.monaco, isInitialized = _ref.isInitialized, resolve = _ref.resolve;
    return {
      monaco,
      isInitialized,
      resolve
    };
  });
  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });
    if (state.monaco) {
      state.resolve(state.monaco);
      return makeCancelable_default(wrapperPromise);
    }
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return makeCancelable_default(wrapperPromise);
    }
    compose_default(injectScripts, getMonacoLoaderScript)(configureLoader);
  }
  return makeCancelable_default(wrapperPromise);
}
function injectScripts(script) {
  return document.body.appendChild(script);
}
function createScript(src) {
  var script = document.createElement("script");
  return src && (script.src = src), script;
}
function getMonacoLoaderScript(configureLoader2) {
  var state = getState(function(_ref2) {
    var config3 = _ref2.config, reject = _ref2.reject;
    return {
      config: config3,
      reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
  loaderScript.onload = function() {
    return configureLoader2();
  };
  loaderScript.onerror = state.reject;
  return loaderScript;
}
function configureLoader() {
  var state = getState(function(_ref3) {
    var config3 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
    return {
      config: config3,
      resolve,
      reject
    };
  });
  var require2 = window.require;
  require2.config(state.config);
  require2(["vs/editor/editor.main"], function(monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function(error) {
    state.reject(error);
  });
}
function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco
    });
  }
}
function __getMonacoInstance() {
  return getState(function(_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}
var wrapperPromise = new Promise(function(resolve, reject) {
  return setState({
    resolve,
    reject
  });
});
var loader = {
  config: config2,
  init,
  __getMonacoInstance
};
var loader_default = loader;

// js/live_monaco_editor/editor/themes/livebook.js
var colors = {
  background: "#282c34",
  default: "#c4cad6",
  lightRed: "#e06c75",
  blue: "#61afef",
  gray: "#8c92a3",
  green: "#98c379",
  purple: "#c678dd",
  red: "#be5046",
  teal: "#56b6c2",
  peach: "#d19a66"
};
var rules = (colors2) => [
  { token: "", foreground: colors2.default },
  { token: "variable", foreground: colors2.lightRed },
  { token: "constant", foreground: colors2.blue },
  { token: "constant.character.escape", foreground: colors2.blue },
  { token: "comment", foreground: colors2.gray },
  { token: "number", foreground: colors2.blue },
  { token: "regexp", foreground: colors2.lightRed },
  { token: "type", foreground: colors2.lightRed },
  { token: "string", foreground: colors2.green },
  { token: "keyword", foreground: colors2.purple },
  { token: "operator", foreground: colors2.peach },
  { token: "delimiter.bracket.embed", foreground: colors2.red },
  { token: "sigil", foreground: colors2.teal },
  { token: "function", foreground: colors2.blue },
  { token: "function.call", foreground: colors2.default },
  // Markdown specific
  { token: "emphasis", fontStyle: "italic" },
  { token: "strong", fontStyle: "bold" },
  { token: "keyword.md", foreground: colors2.lightRed },
  { token: "keyword.table", foreground: colors2.lightRed },
  { token: "string.link.md", foreground: colors2.blue },
  { token: "variable.md", foreground: colors2.teal },
  { token: "string.md", foreground: colors2.default },
  { token: "variable.source.md", foreground: colors2.default },
  // XML specific
  { token: "tag", foreground: colors2.lightRed },
  { token: "metatag", foreground: colors2.lightRed },
  { token: "attribute.name", foreground: colors2.peach },
  { token: "attribute.value", foreground: colors2.green },
  // JSON specific
  { token: "string.key", foreground: colors2.lightRed },
  { token: "keyword.json", foreground: colors2.blue },
  // SQL specific
  { token: "operator.sql", foreground: colors2.purple }
];
var theme = {
  base: "vs-dark",
  inherit: false,
  rules: rules(colors),
  colors: {
    "editor.background": colors.background,
    "editor.foreground": colors.default,
    "editorLineNumber.foreground": "#636d83",
    "editorCursor.foreground": "#636d83",
    "editor.selectionBackground": "#3e4451",
    "editor.findMatchHighlightBackground": "#528bff3d",
    "editorSuggestWidget.background": "#21252b",
    "editorSuggestWidget.border": "#181a1f",
    "editorSuggestWidget.selectedBackground": "#2c313a",
    "input.background": "#1b1d23",
    "input.border": "#181a1f",
    "editorBracketMatch.border": "#282c34",
    "editorBracketMatch.background": "#3e4451"
  }
};
var livebook_default = theme;

// js/live_monaco_editor/editor/themes/tokyonight.js
var tokyonight_default = {
  base: "vs-dark",
  inherit: true,
  rules: [
    // Basic tokens
    { token: "", foreground: "c0caf5" },
    // Default text
    { token: "comment", foreground: "565f89", fontStyle: "italic" },
    { token: "comment.doc", foreground: "e0af68" },
    // Documentation comments
    // Constants
    { token: "constant", foreground: "ff9e64" },
    { token: "constant.language", foreground: "2ac3de" },
    { token: "constant.numeric", foreground: "ff9e64" },
    { token: "constant.character", foreground: "9ece6a" },
    { token: "constant.character.escape", foreground: "bb9af7" },
    // Strings
    { token: "string", foreground: "9ece6a" },
    { token: "string.regexp", foreground: "b4f9f8" },
    { token: "string.special", foreground: "2ac3de" },
    // Variables
    { token: "variable", foreground: "c0caf5" },
    { token: "variable.predefined", foreground: "f7768e" },
    { token: "variable.parameter", foreground: "e0af68", fontStyle: "italic" },
    { token: "member", foreground: "73daca" },
    // Keywords
    { token: "keyword", foreground: "9d7cd8", fontStyle: "italic" },
    { token: "keyword.control", foreground: "bb9af7" },
    { token: "keyword.operator", foreground: "bb9af7" },
    { token: "keyword.import", foreground: "7dcfff" },
    { token: "keyword.return", foreground: "9d7cd8", fontStyle: "italic" },
    // Functions
    { token: "function", foreground: "7aa2f7", fontStyle: "italic" },
    { token: "function.builtin", foreground: "2ac3de" },
    { token: "function.macro", foreground: "7dcfff" },
    // Types
    { token: "type", foreground: "2ac3de" },
    { token: "type.builtin", foreground: "2ac3de" },
    { token: "type.enum.variant", foreground: "ff9e64" },
    { token: "namespace", foreground: "7dcfff" },
    // Markup
    { token: "markup.heading", foreground: "7aa2f7", fontStyle: "bold" },
    { token: "markup.bold", fontStyle: "bold" },
    { token: "markup.italic", fontStyle: "italic" },
    { token: "markup.strikethrough", fontStyle: "strikethrough" },
    { token: "markup.inserted", foreground: "9ece6a" },
    { token: "markup.deleted", foreground: "f7768e" },
    { token: "markup.changed", foreground: "6183bb" },
    // Operators and punctuation
    { token: "operator", foreground: "89ddff" },
    { token: "punctuation", foreground: "89ddff" }
  ],
  colors: {
    // Editor UI colors
    "editor.background": "#1a1b26",
    "editor.foreground": "#c0caf5",
    "editor.lineHighlightBackground": "#292e42",
    "editor.selectionBackground": "#283457",
    "editor.selectionHighlightBackground": "#343a55",
    "editorCursor.foreground": "#c0caf5",
    "editorWhitespace.foreground": "#3b4261",
    "editorLineNumber.foreground": "#3b4261",
    "editorLineNumber.activeForeground": "#737aa2",
    "editor.findMatchBackground": "#ff9e6455",
    "editor.findMatchHighlightBackground": "#ff9e6422",
    // UI elements
    "editorWidget.background": "#16161e",
    "editorWidget.border": "#15161e",
    "editorSuggestWidget.background": "#16161e",
    "editorSuggestWidget.border": "#15161e",
    "editorSuggestWidget.selectedBackground": "#343a55",
    "editorHoverWidget.background": "#16161e",
    "editorHoverWidget.border": "#15161e",
    "tab.activeBackground": "#1a1b26",
    "tab.inactiveBackground": "#16161e",
    "tab.activeForeground": "#c0caf5",
    "tab.inactiveForeground": "#565f89",
    "diffEditor.insertedTextBackground": "#449dab22",
    "diffEditor.removedTextBackground": "#914c5422"
  }
};

// js/live_monaco_editor/editor/themes/moonlight-ii.js
var moonlight_ii_default = {
  base: "vs-dark",
  inherit: true,
  colors: {
    // Base colors
    "editor.background": "#222436",
    // gray4
    "editor.foreground": "#c8d3f5",
    // gray10
    "editor.selectionBackground": "#2f334d99",
    // gray5 with opacity
    "editor.selectionHighlightBackground": "#444a7380",
    // gray6 with opacity
    "editor.lineHighlightBackground": "#2f334d55",
    // gray5 with opacity
    "editorCursor.foreground": "#c8d3f5",
    // gray10
    "editorLineNumber.foreground": "#828bb8",
    // gray7
    "editorLineNumber.activeForeground": "#c8d3f5",
    // gray10
    // Syntax highlighting
    "editor.findMatchBackground": "#444a7399",
    // gray6 with opacity
    "editor.findMatchHighlightBackground": "#444a7366",
    // gray6 with lower opacity
    // Scrollbar
    "scrollbarSlider.background": "#2f334d80",
    // gray5 with opacity
    "scrollbarSlider.hoverBackground": "#444a7380",
    // gray6 with opacity
    "scrollbarSlider.activeBackground": "#828bb880",
    // gray7 with opacity
    // Sidebar
    "sideBar.background": "#1e2030",
    // gray3
    "sideBar.foreground": "#c8d3f5",
    // gray10
    "sideBar.border": "#191a2a",
    // gray2
    "sideBarTitle.foreground": "#c8d3f5",
    // gray10
    "sideBarSectionHeader.background": "#1e2030",
    // gray3
    "sideBarSectionHeader.foreground": "#c8d3f5",
    // gray10
    // Activity bar
    "activityBar.background": "#1e2030",
    // gray3
    "activityBar.foreground": "#c8d3f5",
    // gray10
    "activityBar.inactiveForeground": "#828bb8",
    // gray7
    "activityBarBadge.background": "#3d6fe0",
    // darkBlue
    "activityBarBadge.foreground": "#c8d3f5",
    // gray10
    // Title bar
    "titleBar.activeBackground": "#1e2030",
    // gray3
    "titleBar.activeForeground": "#c8d3f5",
    // gray10
    "titleBar.inactiveBackground": "#1e2030",
    // gray3
    "titleBar.inactiveForeground": "#828bb8",
    // gray7
    // Status bar
    "statusBar.background": "#1e2030",
    // gray3
    "statusBar.foreground": "#c8d3f5",
    // gray10
    "statusBar.noFolderBackground": "#1e2030",
    // gray3
    "statusBar.debuggingBackground": "#ff757f",
    // red
    "statusBar.debuggingForeground": "#222436",
    // gray4
    // Tabs
    "editorGroupHeader.tabsBackground": "#1e2030",
    // gray3
    "tab.activeBackground": "#222436",
    // gray4
    "tab.activeForeground": "#c8d3f5",
    // gray10
    "tab.inactiveBackground": "#1e2030",
    // gray3
    "tab.inactiveForeground": "#828bb8",
    // gray7
    "tab.activeBorderTop": "#7cafff",
    // blue
    // Panel
    "panel.background": "#1e2030",
    // gray3
    "panel.border": "#191a2a",
    // gray2
    "panelTitle.activeForeground": "#c8d3f5",
    // gray10
    "panelTitle.inactiveForeground": "#828bb8",
    // gray7
    // Terminal
    "terminal.background": "#222436",
    // gray4
    "terminal.foreground": "#c8d3f5",
    // gray10
    "terminal.ansiBlack": "#131421",
    // gray1
    "terminal.ansiRed": "#ff757f",
    // red
    "terminal.ansiGreen": "#c3e88d",
    // green
    "terminal.ansiYellow": "#ffc777",
    // yellow
    "terminal.ansiBlue": "#7cafff",
    // blue
    "terminal.ansiMagenta": "#c4a2ff",
    // purple
    "terminal.ansiCyan": "#78dbff",
    // cyan
    "terminal.ansiWhite": "#c8d3f5",
    // gray10
    "terminal.ansiBrightBlack": "#828bb8",
    // gray7
    "terminal.ansiBrightRed": "#ff5370",
    // darkRed
    "terminal.ansiBrightGreen": "#c3e88d",
    // green
    "terminal.ansiBrightYellow": "#ffc777",
    // yellow
    "terminal.ansiBrightBlue": "#60bdff",
    // sky
    "terminal.ansiBrightMagenta": "#c4a2ff",
    // purple
    "terminal.ansiBrightCyan": "#78dbff",
    // cyan
    "terminal.ansiBrightWhite": "#d5def8",
    // gray11
    // Input
    "input.background": "#2f334d",
    // gray5
    "input.foreground": "#c8d3f5",
    // gray10
    "input.placeholderForeground": "#828bb8",
    // gray7
    "inputOption.activeBorder": "#7cafff",
    // blue
    // List
    "list.activeSelectionBackground": "#2f334d",
    // gray5
    "list.activeSelectionForeground": "#c8d3f5",
    // gray10
    "list.inactiveSelectionBackground": "#222436",
    // gray4
    "list.inactiveSelectionForeground": "#c8d3f5",
    // gray10
    "list.hoverBackground": "#2f334d",
    // gray5
    "list.highlightForeground": "#7cafff"
    // blue
  },
  rules: [
    // Comments
    { token: "comment", foreground: "#7a88cf", fontStyle: "italic" },
    // saturatedGray
    // Variables and Plain Text
    { token: "variable", foreground: "#c8d3f5" },
    // gray10
    { token: "variable.predefined", foreground: "#ff757f" },
    // red
    // Keywords
    { token: "keyword", foreground: "#c4a2ff", fontStyle: "italic" },
    // purple
    { token: "keyword.control", foreground: "#c4a2ff", fontStyle: "italic" },
    // purple
    { token: "keyword.operator", foreground: "#78dbff" },
    // cyan
    // Constants
    { token: "constant", foreground: "#ff98a4" },
    // lightRed
    { token: "constant.language", foreground: "#ff98a4" },
    // lightRed
    { token: "constant.numeric", foreground: "#ff966c" },
    // orange
    { token: "constant.character.escape", foreground: "#78dbff" },
    // cyan
    { token: "constant.language.boolean", foreground: "#ff966c" },
    // orange
    { token: "constant.language.null", foreground: "#979bb6" },
    // desaturatedGray
    { token: "constant.language.undefined", foreground: "#979bb6" },
    // desaturatedGray
    // Storage
    { token: "storage", foreground: "#c4a2ff", fontStyle: "italic" },
    // purple
    { token: "storage.type", foreground: "#c4a2ff", fontStyle: "italic" },
    // purple
    { token: "storage.modifier", foreground: "#c4a2ff", fontStyle: "italic" },
    // purple
    // Strings
    { token: "string", foreground: "#c3e88d" },
    // green
    { token: "string.regexp", foreground: "#b4f9f8" },
    // lightCyan
    // Punctuation
    { token: "delimiter", foreground: "#78dbff" },
    // cyan
    { token: "delimiter.html", foreground: "#78dbff" },
    // cyan
    { token: "delimiter.xml", foreground: "#78dbff" },
    // cyan
    { token: "tag", foreground: "#78dbff" },
    // cyan
    // Tags / HTML
    { token: "tag.tag-name", foreground: "#ff757f" },
    // red
    { token: "tag.attribute-name", foreground: "#c4a2ff", fontStyle: "italic" },
    // purple
    { token: "attribute.name", foreground: "#c4a2ff" },
    // purple
    { token: "attribute.value", foreground: "#c3e88d" },
    // green
    // Functions
    { token: "function", foreground: "#7cafff" },
    // blue
    { token: "function.call", foreground: "#7cafff" },
    // blue
    { token: "method", foreground: "#60bdff" },
    // sky
    // Types
    { token: "type", foreground: "#ffc777" },
    // yellow
    { token: "class", foreground: "#ffc777" },
    // yellow
    { token: "constructor", foreground: "#7cafff" },
    // blue
    // Parameters
    { token: "parameter", foreground: "#fca7ea" },
    // pink
    // Objects and Properties
    { token: "property", foreground: "#a9b8e8" },
    // gray8
    { token: "property.declaration", foreground: "#3ad7c7" },
    // teal
    { token: "member", foreground: "#a9b8e8" },
    // gray8
    { token: "variable.object.property", foreground: "#a9b8e8" },
    // gray8
    // JSON specific
    { token: "string.key.json", foreground: "#3ad7c7" },
    // teal
    { token: "keyword.json", foreground: "#c4a2ff" },
    // purple
    // CSS specific
    { token: "attribute.name.css", foreground: "#7cafff" },
    // blue
    { token: "property.css", foreground: "#7cafff" },
    // blue
    { token: "keyword.css", foreground: "#c4a2ff" },
    // purple
    { token: "attribute.value.css", foreground: "#fca7ea" },
    // pink
    { token: "attribute.value.number.css", foreground: "#ff966c" },
    // orange
    { token: "attribute.value.unit.css", foreground: "#fc7b7b" },
    // darkOrange
    // Markdown specific
    { token: "markup.heading", foreground: "#78dbff" },
    // cyan
    { token: "markup.italic", foreground: "#ff757f", fontStyle: "italic" },
    // red
    { token: "markup.bold", foreground: "#ff757f", fontStyle: "bold" },
    // red
    {
      token: "markup.underline",
      foreground: "#ff966c",
      fontStyle: "underline"
    },
    // orange
    { token: "markup.quote", foreground: "#c8d3f5", fontStyle: "italic" },
    // gray10
    { token: "markup.inserted", foreground: "#c3e88d" },
    // green
    { token: "markup.deleted", foreground: "#ff757f" },
    // red
    { token: "markup.changed", foreground: "#c4a2ff" },
    // purple
    // Misc
    { token: "invalid", foreground: "#ff5370" },
    // darkRed
    { token: "emphasis", fontStyle: "italic" },
    { token: "strong", fontStyle: "bold" }
  ]
};

// js/live_monaco_editor/editor/themes/github-light.js
var github_light_default = {
  base: "vs",
  inherit: true,
  rules: [
    { token: "attribute", foreground: "24292f" },
    { token: "keyword", foreground: "cf222e" },
    { token: "keyword.directive", foreground: "cf222e" },
    { token: "namespace", foreground: "953800" },
    { token: "punctuation", foreground: "24292f" },
    { token: "punctuation.delimiter", foreground: "24292f" },
    { token: "operator", foreground: "0a3069" },
    { token: "special", foreground: "0a3069" },
    { token: "variable.other.member", foreground: "0a3069" },
    { token: "variable", foreground: "24292f" },
    { token: "variable.parameter", foreground: "953800" },
    { token: "variable.builtin", foreground: "cf222e" },
    { token: "type", foreground: "953800" },
    { token: "type.builtin", foreground: "0550ae" },
    { token: "constructor", foreground: "8250df" },
    { token: "function", foreground: "8250df" },
    { token: "function.macro", foreground: "8250df" },
    { token: "tag", foreground: "116329" },
    { token: "comment", foreground: "57606a" },
    { token: "constant", foreground: "0550ae" },
    { token: "constant.builtin", foreground: "0550ae" },
    { token: "string", foreground: "0a3069" },
    { token: "constant.numeric", foreground: "0550ae" },
    { token: "constant.character.escape", foreground: "0550ae" },
    { token: "label", foreground: "cf222e" },
    { token: "markup.heading", foreground: "0550ae" },
    { token: "markup.bold", fontStyle: "bold" },
    { token: "markup.italic", fontStyle: "italic" },
    { token: "markup.strikethrough", fontStyle: "strikethrough" },
    { token: "markup.link.url", fontStyle: "underline" },
    { token: "markup.link.text", foreground: "0a3069", fontStyle: "underline" },
    { token: "markup.raw", foreground: "0550ae" },
    { token: "diff.plus", foreground: "1a7f37" },
    { token: "diff.minus", foreground: "cf222e" },
    { token: "diff.delta", foreground: "9a6700" }
  ],
  colors: {
    // Editor UI colors
    "editor.background": "#ffffff",
    "editor.foreground": "#24292f",
    "editorLineNumber.foreground": "#6e7781",
    "editorLineNumber.activeForeground": "#24292f",
    "editor.selectionBackground": "#ddf4ff",
    "editor.selectionHighlightBackground": "#b6e3ff",
    "editor.inactiveSelectionBackground": "#ddf4ff",
    "editor.findMatchBackground": "#ddf4ff",
    "editor.findMatchHighlightBackground": "#ddf4ff",
    "editorCursor.foreground": "#24292f",
    "editor.lineHighlightBackground": "#f6f8fa",
    "editorWhitespace.foreground": "#6e7781",
    "editorIndentGuide.background": "#d0d7de",
    "editorIndentGuide.activeBackground": "#afb8c1",
    // UI Elements
    "dropdown.background": "#f6f8fa",
    "dropdown.border": "#d0d7de",
    "list.activeSelectionBackground": "#f6f8fa",
    "list.hoverBackground": "#f6f8fa",
    "sideBar.background": "#f6f8fa",
    "sideBar.border": "#d0d7de",
    "titleBar.activeBackground": "#f6f8fa",
    "statusBar.background": "#f6f8fa",
    "statusBar.border": "#d0d7de",
    // Diagnostic colors
    "editorError.foreground": "#cf222e",
    "editorWarning.foreground": "#9a6700",
    "editorInfo.foreground": "#0969da",
    "editorHint.foreground": "#1a7f37"
  }
};

// js/live_monaco_editor/editor/code_editor.js
var CodeEditor = class {
  constructor(el, path, value, opts) {
    this.el = el;
    this.path = path;
    this.value = value;
    this.opts = opts || {};
    this.theme = this.opts.theme || "tokyonight";
    this.autoHeight = this.opts.autoHeight !== false;
    this.standalone_code_editor = null;
    this._onMount = [];
    this._monaco = null;
  }
  isMounted() {
    return !!this.standalone_code_editor;
  }
  mount() {
    if (this.isMounted()) {
      throw new Error("The monaco editor is already mounted");
    }
    this._mountEditor();
  }
  onMount(callback) {
    this._onMount.push(callback);
  }
  dispose() {
    if (this.isMounted()) {
      const model = this.standalone_code_editor.getModel();
      if (model) {
        model.dispose();
      }
      this.standalone_code_editor.dispose();
    }
  }
  /**
   * Changes the editor theme
   * @param {string} theme - The theme name ("default", "tokyonight")
   * @returns {boolean} - Whether the theme was successfully changed
   */
  setTheme(theme2) {
    this.theme = theme2;
    if (this.isMounted() && this._monaco) {
      try {
        this._monaco.editor.setTheme(theme2);
        return true;
      } catch (error) {
        console.error("Failed to set theme:", error);
        return false;
      }
    }
    return false;
  }
  /**
   * Returns the available themes
   * @returns {string[]} - Array of available theme names
   */
  getAvailableThemes() {
    return ["default", "tokyonight", "moonlight-ii", "github-light"];
  }
  /**
   * Returns the current theme
   * @returns {string} - Current theme name
   */
  getCurrentTheme() {
    return this.theme;
  }
  _mountEditor() {
    this.opts.value = this.value;
    loader_default.config({
      paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs" }
    });
    loader_default.init().then((monaco) => {
      this._monaco = monaco;
      monaco.editor.defineTheme("default", livebook_default);
      monaco.editor.defineTheme("tokyonight", tokyonight_default);
      monaco.editor.defineTheme("moonlight-ii", moonlight_ii_default);
      monaco.editor.defineTheme("github-light", github_light_default);
      monaco.editor.setTheme(this.theme);
      let modelUri = monaco.Uri.parse(this.path);
      let language = this.opts.language;
      let model = monaco.editor.createModel(this.value, language, modelUri);
      this.opts.language = void 0;
      this.opts.model = model;
      this.standalone_code_editor = monaco.editor.create(this.el, this.opts);
      this._onMount.forEach((callback) => callback(monaco));
      this._setScreenDependantEditorOptions();
      this.standalone_code_editor.addAction({
        contextMenuGroupId: "word-wrapping",
        id: "enable-word-wrapping",
        label: "Enable word wrapping",
        precondition: "config.editor.wordWrap == off",
        keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KeyZ],
        run: (editor) => editor.updateOptions({ wordWrap: "on" })
      });
      this.standalone_code_editor.addAction({
        contextMenuGroupId: "word-wrapping",
        id: "disable-word-wrapping",
        label: "Disable word wrapping",
        precondition: "config.editor.wordWrap == on",
        keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KeyZ],
        run: (editor) => editor.updateOptions({ wordWrap: "off" })
      });
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(() => {
          if (this.el.offsetHeight > 0) {
            this._setScreenDependantEditorOptions();
            this.standalone_code_editor.layout();
          }
        });
      });
      resizeObserver.observe(this.el);
      if (this.autoHeight) {
        this.standalone_code_editor.onDidContentSizeChange(() => {
          const contentHeight = this.standalone_code_editor.getContentHeight();
          this.el.style.height = `${contentHeight}px`;
        });
      }
    });
  }
  _setScreenDependantEditorOptions() {
    if (window.screen.width < 768) {
      this.standalone_code_editor.updateOptions({
        folding: false,
        lineDecorationsWidth: 16,
        lineNumbersMinChars: Math.floor(
          Math.log10(this.standalone_code_editor.getModel().getLineCount())
        ) + 3
      });
    } else {
      this.standalone_code_editor.updateOptions({
        folding: true,
        lineDecorationsWidth: 10,
        lineNumbersMinChars: 5
      });
    }
  }
};
var code_editor_default = CodeEditor;

// js/live_monaco_editor/hooks/code_editor.js
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
var CodeEditorHook = {
  mounted() {
    const opts = JSON.parse(this.el.dataset.opts);
    if (this.el.dataset.autoHeight === "false" || this.el.dataset.autoHeight === false) {
      opts.autoHeight = false;
    }
    this.codeEditor = new code_editor_default(
      this.el,
      this.el.dataset.path,
      this.el.dataset.value,
      opts
    );
    this.codeEditor.onMount((monaco) => {
      if (this.el.dataset.theme && this.el.dataset.theme !== "") {
        this.codeEditor.setTheme(this.el.dataset.theme);
      }
      if (this.el.dataset.changeEvent && this.el.dataset.changeEvent !== "") {
        const handleContentChange = () => {
          if (this.el.dataset.target && this.el.dataset.target !== "") {
            this.pushEventTo(
              this.el.dataset.target,
              this.el.dataset.changeEvent,
              {
                value: this.codeEditor.standalone_code_editor.getValue()
              }
            );
          } else {
            this.pushEvent(this.el.dataset.changeEvent, {
              value: this.codeEditor.standalone_code_editor.getValue()
            });
          }
        };
        const debounceMs = parseInt(this.el.dataset.debounce);
        const eventHandler = !isNaN(debounceMs) && debounceMs > 0 ? debounce(handleContentChange, debounceMs) : handleContentChange;
        this.codeEditor.standalone_code_editor.onDidChangeModelContent(
          eventHandler
        );
      }
      this.handleEvent(
        "lme:change_language:" + this.el.dataset.path,
        (data) => {
          const model = this.codeEditor.standalone_code_editor.getModel();
          if (model.getLanguageId() !== data.mimeTypeOrLanguageId) {
            monaco.editor.setModelLanguage(model, data.mimeTypeOrLanguageId);
          }
        }
      );
      this.handleEvent("lme:set_value:" + this.el.dataset.path, (data) => {
        this.codeEditor.standalone_code_editor.setValue(data.value);
      });
      this.handleEvent("lme:set_theme:" + this.el.dataset.path, (data) => {
        this.codeEditor.setTheme(data.theme);
      });
      this.handleEvent("lme:update_options:" + this.el.dataset.path, (data) => {
        this.codeEditor.standalone_code_editor.updateOptions(data.options);
      });
      this.el.querySelectorAll("textarea").forEach((textarea) => {
        textarea.setAttribute(
          "name",
          "live_monaco_editor[" + this.el.dataset.path + "]"
        );
      });
      this.el.removeAttribute("data-value");
      this.el.removeAttribute("data-opts");
      this.el.dispatchEvent(
        new CustomEvent("lme:editor_mounted", {
          detail: { hook: this, editor: this.codeEditor },
          bubbles: true
        })
      );
    });
    if (!this.codeEditor.isMounted()) {
      this.codeEditor.mount();
    }
  },
  destroyed() {
    if (this.codeEditor) {
      this.codeEditor.dispose();
    }
  }
};
export {
  CodeEditorHook
};
//# sourceMappingURL=live_monaco_editor.esm.js.map
