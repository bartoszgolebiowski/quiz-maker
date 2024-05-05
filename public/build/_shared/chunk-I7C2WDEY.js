import {
  An
} from "/build/_shared/chunk-7TYOZF3U.js";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Plus_default,
  QuestionCardErrors_default,
  QuestionCard_default,
  TemplateDetailsCardErrors_default,
  TemplateDetailsCard_default
} from "/build/_shared/chunk-GOQ6CKXD.js";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  ZodType,
  clsx_default,
  isValid,
  z
} from "/build/_shared/chunk-WHADLW3T.js";
import {
  createHotContext
} from "/build/_shared/chunk-B76TKB7I.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/zod-form-data/dist/index.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_lodash = __commonJS({
  "../../node_modules/lodash.get/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var INFINITY = 1 / 0;
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var symbolTag = "[object Symbol]";
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    var reLeadingDot = /^\./;
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reEscapeChar = /\\(\\)?/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Symbol2 = root.Symbol;
    var splice = arrayProto.splice;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function Hash(entries2) {
      var index = -1, length = entries2 ? entries2.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries2[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries2) {
      var index = -1, length = entries2 ? entries2.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries2[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries2) {
      var index = -1, length = entries2 ? entries2.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries2[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGet(object, path) {
      path = isKey(path, object) ? [path] : castPath(path);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    var stringToPath = memoize(function(string) {
      string = toString(string);
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, string2) {
        result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArray = Array.isArray;
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get2;
  }
});
var helpers_exports = {};
__export(helpers_exports, {
  checkbox: () => checkbox,
  file: () => file,
  formData: () => formData,
  json: () => json,
  numeric: () => numeric,
  preprocessFormData: () => preprocessFormData,
  repeatable: () => repeatable,
  repeatableOfType: () => repeatableOfType,
  text: () => text
});
var stringToPathArray = (path) => {
  if (path.length === 0)
    return [];
  const match = path.match(/^\[(.+?)\](.*)$/) || path.match(/^\.?([^\.\[\]]+)(.*)$/);
  if (match) {
    const [_2, key, rest] = match;
    return [/^\d+$/.test(key) ? Number(key) : key, ...stringToPathArray(rest)];
  }
  return [path];
};
function setPath(object, path, defaultValue) {
  return _setPathNormalized(object, stringToPathArray(path), defaultValue);
}
function _setPathNormalized(object, path, value) {
  var _a;
  const leadingSegments = path.slice(0, -1);
  const lastSegment = path[path.length - 1];
  let obj = object;
  for (let i2 = 0; i2 < leadingSegments.length; i2++) {
    const segment = leadingSegments[i2];
    if (obj[segment] === void 0) {
      const nextSegment = (_a = leadingSegments[i2 + 1]) != null ? _a : lastSegment;
      obj[segment] = typeof nextSegment === "number" ? [] : {};
    }
    obj = obj[segment];
  }
  obj[lastSegment] = value;
  return object;
}
var import_lodash = __toESM2(require_lodash());
var stripEmpty = z.literal("").transform(() => void 0);
var preprocessIfValid = (schema) => (val) => {
  const result = schema.safeParse(val);
  if (result.success)
    return result.data;
  return val;
};
var text = (schema = z.string()) => z.preprocess(preprocessIfValid(stripEmpty), schema);
var numeric = (schema = z.number()) => z.preprocess(
  preprocessIfValid(
    z.union([
      stripEmpty,
      z.string().transform((val) => Number(val)).refine((val) => !Number.isNaN(val))
    ])
  ),
  schema
);
var checkbox = ({ trueValue = "on" } = {}) => z.union([
  z.literal(trueValue).transform(() => true),
  z.literal(void 0).transform(() => false)
]);
var file = (schema = z.instanceof(File)) => z.preprocess((val) => {
  return val instanceof File && val.size === 0 ? void 0 : val;
}, schema);
var repeatable = (schema = z.array(text())) => {
  return z.preprocess((val) => {
    if (Array.isArray(val))
      return val;
    if (val === void 0)
      return [];
    return [val];
  }, schema);
};
var repeatableOfType = (schema) => repeatable(z.array(schema));
var entries = z.array(z.tuple([z.string(), z.any()]));
var safeParseJson = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return jsonString;
  }
};
var json = (schema) => z.preprocess(
  preprocessIfValid(
    z.union([stripEmpty, z.string().transform((val) => safeParseJson(val))])
  ),
  schema
);
var processFormData = preprocessIfValid(
  z.any().refine((val) => Symbol.iterator in val).transform((val) => [...val]).refine(
    (val) => entries.safeParse(val).success
  ).transform((data) => {
    const map = /* @__PURE__ */ new Map();
    for (const [key, value] of data) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    }
    return [...map.entries()].reduce((acc, [key, value]) => {
      return setPath(acc, key, value.length === 1 ? value[0] : value);
    }, {});
  })
);
var preprocessFormData = processFormData;
var formData = (shapeOrSchema) => z.preprocess(
  processFormData,
  shapeOrSchema instanceof ZodType ? shapeOrSchema : z.object(shapeOrSchema)
);

// app/templates/GenericCardServerrErrors.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\templates\\\\GenericCardServerrErrors.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\templates\\GenericCardServerrErrors.tsx"
  );
  import.meta.hot.lastModified = "1714910747275.6406";
}
var GenericCardServerrErrors = (props) => {
  _s();
  const {
    error,
    className,
    ...rest
  } = props;
  const [show, setShow] = import_react.default.useState(true);
  const handleClose = () => setShow(false);
  (0, import_react.useEffect)(() => {
    An.error(error.message, {
      description: error.formattedErrors ? error.formattedErrors.map((issue) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: issue.field }, void 0, false, {
          fileName: "app/templates/GenericCardServerrErrors.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: issue.errors.map((error2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: error2 }, error2, false, {
          fileName: "app/templates/GenericCardServerrErrors.tsx",
          lineNumber: 42,
          columnNumber: 44
        }, this)) }, void 0, false, {
          fileName: "app/templates/GenericCardServerrErrors.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/templates/GenericCardServerrErrors.tsx",
        lineNumber: 39,
        columnNumber: 79
      }, this)) : null
    });
  }, []);
  if (!show)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { ...rest, className: clsx_default("mb-10 mt-10", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold tracking-tight", children: [
      "Error: ",
      error.message
    ] }, void 0, true, {
      fileName: "app/templates/GenericCardServerrErrors.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/templates/GenericCardServerrErrors.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    error.formattedErrors ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: error.formattedErrors.map((issue) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { variant: "destructive", className: "mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertTitle, { children: issue.field }, void 0, false, {
        fileName: "app/templates/GenericCardServerrErrors.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDescription, { children: issue.errors.join(", ") }, void 0, false, {
        fileName: "app/templates/GenericCardServerrErrors.tsx",
        lineNumber: 57,
        columnNumber: 15
      }, this)
    ] }, issue.errors.join(", "), true, {
      fileName: "app/templates/GenericCardServerrErrors.tsx",
      lineNumber: 55,
      columnNumber: 47
    }, this)) }, void 0, false, {
      fileName: "app/templates/GenericCardServerrErrors.tsx",
      lineNumber: 54,
      columnNumber: 32
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "destructive", onClick: handleClose, children: "Close" }, void 0, false, {
      fileName: "app/templates/GenericCardServerrErrors.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/templates/GenericCardServerrErrors.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/templates/GenericCardServerrErrors.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/templates/GenericCardServerrErrors.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_s(GenericCardServerrErrors, "7rrxj0wE5iz58YydTDN/pg4Izes=");
_c = GenericCardServerrErrors;
var GenericCardServerrErrors_default = GenericCardServerrErrors;
var _c;
$RefreshReg$(_c, "GenericCardServerrErrors");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/immer/dist/immer.esm.mjs
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e = 1; e < r2; e++)
    t2[e - 1] = arguments[e];
  if (true) {
    var i2 = Y[n2], o2 = i2 ? "function" == typeof i2 ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3)
      return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L]) || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
    t2 && "symbol" == typeof e || r2(e, n2[e], n2);
  }) : n2.forEach(function(t3, e) {
    return r2(e, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e = o(n2);
  2 === e ? n2.set(r2, t2) : 3 === e ? n2.add(t2) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e = 0; e < t2.length; e++) {
    var i2 = t2[e], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e) {
  return void 0 === e && (e = false), y(n2) || r(n2) || !t(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true)), n2;
}
function h() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function _() {
  return U || n(0), U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function g(n2) {
  O(n2), n2.p.forEach(S), n2.p = null;
}
function O(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.g = true;
}
function P(r2, e) {
  e._ = e.p.length;
  var i2 = e.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e.h.O || b("ES5").S(e, r2, o2), o2 ? (i2[Q].P && (g(e), n(4)), t(r2) && (r2 = M(e, r2), e.l || x(e, r2)), e.u && b("Patches").M(i2[Q].t, r2, e.u, e.s)) : r2 = M(e, i2, []), g(e), e.u && e.v(e.u, e.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e = r2[Q];
  if (!e)
    return i(r2, function(i2, o3) {
      return A(n2, e, r2, i2, o3, t2);
    }, true), r2;
  if (e.A !== n2)
    return r2;
  if (!e.P)
    return x(n2, e.t, true), e.t;
  if (!e.I) {
    e.I = true, e.A._--;
    var o2 = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o, u2 = o2, a2 = false;
    3 === e.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r3, i2) {
      return A(n2, e, o2, r3, i2, t2, a2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").N(e, t2, n2.u, n2.s);
  }
  return e.o;
}
function A(e, i2, o2, a2, c2, s2, v2) {
  if (c2 === o2 && n(5), r(c2)) {
    var p2 = M(e, c2, s2 && i2 && 3 !== i2.i && !u(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, p2), !r(p2))
      return;
    e.m = false;
  } else
    v2 && o2.add(c2);
  if (t(c2) && !y(c2)) {
    if (!e.h.D && e._ < 1)
      return;
    M(e, c2), i2 && i2.A.l || x(e, c2);
  }
}
function x(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d(r2, t2);
}
function z2(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e = Object.getOwnPropertyDescriptor(t2, r2);
      if (e)
        return e;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function N(n2, r2, t2) {
  var e = s(r2) ? b("MapSet").F(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.O ? function(n3, r3) {
    var t3 = Array.isArray(n3), e2 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
    t3 && (i2 = [e2], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e2.k = f2, e2.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e), e;
}
function R(e) {
  return r(e) || n(22, e), function n2(r2) {
    if (!t(r2))
      return r2;
    var e2, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e2 = D(r2, c2), u2.I = false;
    } else
      e2 = D(r2, c2);
    return i(e2, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e2, r3, n2(t2));
    }), 3 === c2 ? new Set(e2) : e2;
  }(e);
}
function D(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
var G;
var U;
var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
var X = "undefined" != typeof Map;
var q = "undefined" != typeof Set;
var B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
  return "Cannot apply patch, path doesn't resolve: " + n2;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
  return "Unsupported patch operation: " + n2;
}, 18: function(n2) {
  return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
}, 22: function(n2) {
  return "'current' expects a draft, got: " + n2;
}, 23: function(n2) {
  return "'original' expects a draft, got: " + n2;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames;
var rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
};
var tn = {};
var en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e = p(n2);
  if (!u(e, r2))
    return function(n3, r3, t2) {
      var e2, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e2 = i3.get) || void 0 === e2 ? void 0 : e2.call(n3.k) : void 0;
    }(n2, e, r2);
  var i2 = e[r2];
  return n2.I || !t(i2) ? i2 : i2 === z2(n2.t, r2) ? (E(n2), n2.o[r2] = N(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e = I(p(n2), r2);
  if (null == e ? void 0 : e.set)
    return e.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z2(p(n2), r2), o2 = null == i2 ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z2(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E(n2), k(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e.enumerable, value: t2[r2] } : e;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return isNaN(parseInt(t2)) && n(13), on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e) {
  return "length" !== t2 && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e, r2[0]);
};
var un = function() {
  function e(r2) {
    var e2 = this;
    this.O = B, this.D = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e2;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e3[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e3));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
        var c2 = w(e2), s2 = N(e2, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? g(c2) : O(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw g(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e2.D && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2)
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e2.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e2.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e.prototype;
  return i2.createDraft = function(e2) {
    t(e2) || n(8), r(e2) && (e2 = R(e2));
    var i3 = w(this), o2 = N(this, e2, void 0);
    return o2[Q].C = true, O(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e2 = r2 && r2[Q];
    e2 && e2.C || n(9), e2.I && n(10);
    var i3 = e2.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.O = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e2;
    for (e2 = t2.length - 1; e2 >= 0; e2--) {
      var i3 = t2[e2];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e2 > -1 && (t2 = t2.slice(e2 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);

// app/templates/reducer.ts
var import_react2 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\templates\\reducer.ts"
  );
  import.meta.hot.lastModified = "1714910482536.8574";
}
var initialState = {
  data: [],
  title: "",
  description: ""
};
var appendQuestion = () => ({
  type: "APPEND_QUESTION"
});
var deleteQuestion = (no) => ({
  type: "DELETE_QUESTION",
  payload: {
    no
  }
});
var changeQuestionOrder = (from, to) => ({
  type: "CHANGE_QUESTION_ORDER",
  payload: {
    from,
    to
  }
});
var updateQuestionText = (no, text2) => ({
  type: "UPDATE_QUESTION_TEXT",
  payload: {
    no,
    text: text2
  }
});
var appendAnswer = (no) => ({
  type: "APPEND_ANSWER",
  payload: {
    no
  }
});
var deleteAnswer = (no, index) => ({
  type: "DELETE_ANSWER",
  payload: {
    no,
    index
  }
});
var updateAnswer = (no, index, text2) => ({
  type: "UPDATE_ANSWER",
  payload: {
    no,
    index,
    text: text2
  }
});
var updateCorrectAnswer = (no, index) => ({
  type: "UPDATE_CORRECT_ANSWER",
  payload: {
    no,
    index
  }
});
var updateQuizTitle = (title) => ({
  type: "UPDATE_QUIZ_TITLE",
  payload: {
    title
  }
});
var updateQuizDescription = (description) => ({
  type: "UPDATE_QUIZ_DESCRIPTION",
  payload: {
    description
  }
});
var reducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPEND_QUESTION": {
      return fn(state, (draft) => {
        draft.data.push({
          correct: null,
          no: draft.data.length,
          question: "",
          answers: {}
        });
      });
    }
    case "DELETE_QUESTION": {
      return fn(state, (draft) => {
        draft.data = draft.data.filter((question) => question.no !== action.payload.no);
        draft.data.forEach((question, index) => {
          question.no = index;
        });
      });
    }
    case "CHANGE_QUESTION_ORDER": {
      return fn(state, (draft) => {
        const { from, to } = action.payload;
        const question = draft.data[from];
        draft.data.splice(from, 1);
        draft.data.splice(to, 0, question);
        draft.data.forEach((question2, index) => {
          question2.no = index;
        });
      });
    }
    case "UPDATE_QUESTION_TEXT": {
      return fn(state, (draft) => {
        const { no, text: text2 } = action.payload;
        draft.data[no].question = text2;
      });
    }
    case "APPEND_ANSWER": {
      return fn(state, (draft) => {
        const { no } = action.payload;
        draft.data[no].answers[Object.keys(draft.data[no].answers).length] = "";
      });
    }
    case "DELETE_ANSWER": {
      return fn(state, (draft) => {
        const { no, index } = action.payload;
        delete draft.data[no].answers[index];
        if (draft.data[no].correct === index) {
          draft.data[no].correct = null;
        }
        const newAnswers = {};
        Object.keys(draft.data[no].answers).forEach((key, index2) => {
          newAnswers[index2] = draft.data[no].answers[Number(key)];
        });
        draft.data[no].answers = newAnswers;
      });
    }
    case "UPDATE_ANSWER": {
      return fn(state, (draft) => {
        const { no, index, text: text2 } = action.payload;
        draft.data[no].answers[index] = text2;
      });
    }
    case "UPDATE_CORRECT_ANSWER": {
      return fn(state, (draft) => {
        const { no, index } = action.payload;
        draft.data[no].correct = index;
      });
    }
    case "UPDATE_QUIZ_TITLE": {
      return fn(state, (draft) => {
        draft.title = action.payload.title;
      });
    }
    case "UPDATE_QUIZ_DESCRIPTION": {
      return fn(state, (draft) => {
        draft.description = action.payload.description;
      });
    }
    default: {
      return state;
    }
  }
};
var useManualWizardReducer = (inital = initialState) => {
  const [state, dispatch] = (0, import_react2.useReducer)(reducer, inital);
  return {
    state,
    appendQuestion: () => dispatch(appendQuestion()),
    deleteQuestion: (index) => dispatch(deleteQuestion(index)),
    changeQuestionOrder: (index, newIndex) => dispatch(changeQuestionOrder(index, newIndex)),
    updateQuestionText: (questionIndex, text2) => dispatch(updateQuestionText(questionIndex, text2)),
    appendAnswer: (questionIndex) => dispatch(appendAnswer(questionIndex)),
    deleteAnswer: (questionIndex, answerIndex) => dispatch(deleteAnswer(questionIndex, answerIndex)),
    updateAnswer: (questionIndex, answerIndex, text2) => dispatch(updateAnswer(questionIndex, answerIndex, text2)),
    updateCorrectAnswer: (questionIndex, answerIndex) => dispatch(updateCorrectAnswer(questionIndex, answerIndex)),
    updateQuizMetaData: (key, value) => {
      if (key === "title") {
        dispatch(updateQuizTitle(value));
        return;
      }
      if (key === "description") {
        dispatch(updateQuizDescription(value));
        return;
      }
      throw new Error("Invalid key");
    }
  };
};

// app/templates/EditTemplate.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\templates\\\\EditTemplate.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\templates\\EditTemplate.tsx"
  );
  import.meta.hot.lastModified = "1714909808916.6265";
}
var EditTemplate = (props) => {
  _s2();
  const {
    children,
    initial,
    isSubmitting,
    onSubmit
  } = props;
  const {
    state,
    appendQuestion: appendQuestion2,
    deleteQuestion: deleteQuestion2,
    updateQuizMetaData,
    updateQuestionText: updateQuestionText2,
    appendAnswer: appendAnswer2,
    deleteAnswer: deleteAnswer2,
    updateAnswer: updateAnswer2,
    updateCorrectAnswer: updateCorrectAnswer2
  } = useManualWizardReducer(initial);
  const disabled = !isValid(state) || isSubmitting;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", children: children ? children : `Edit: ${state.title}` }, void 0, false, {
        fileName: "app/templates/EditTemplate.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/templates/EditTemplate.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TemplateDetailsCard_default, { title: state.title, description: state.description, onChange: updateQuizMetaData, disabled: isSubmitting, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TemplateDetailsCardErrors_default, { title: state.title }, void 0, false, {
          fileName: "app/templates/EditTemplate.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/templates/EditTemplate.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4", children: state.data.map((question) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(QuestionCard_default, { disabled: isSubmitting, question, deleteQuestion: deleteQuestion2, updateQuestionText: updateQuestionText2, appendAnswer: appendAnswer2, deleteAnswer: deleteAnswer2, updateAnswer: updateAnswer2, updateCorrectAnswer: updateCorrectAnswer2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(QuestionCardErrors_default, { question }, void 0, false, {
          fileName: "app/templates/EditTemplate.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this) }, question.no, false, {
          fileName: "app/templates/EditTemplate.tsx",
          lineNumber: 65,
          columnNumber: 41
        }, this)) }, void 0, false, {
          fileName: "app/templates/EditTemplate.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/templates/EditTemplate.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/templates/EditTemplate.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tooltip, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: appendQuestion2, "aria-label": "Add question", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Plus_default, {}, void 0, false, {
        fileName: "app/templates/EditTemplate.tsx",
        lineNumber: 76,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/templates/EditTemplate.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/templates/EditTemplate.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "New question" }, void 0, false, {
        fileName: "app/templates/EditTemplate.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/templates/EditTemplate.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/templates/EditTemplate.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/templates/EditTemplate.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/templates/EditTemplate.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed right-4 bottom-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { disabled, onClick: () => onSubmit(state), type: "submit", children: "Submit" }, void 0, false, {
      fileName: "app/templates/EditTemplate.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/templates/EditTemplate.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/templates/EditTemplate.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
};
_s2(EditTemplate, "eeTGv/fI2goFRkZ2ajTyqCfOxGs=", false, function() {
  return [useManualWizardReducer];
});
_c2 = EditTemplate;
var EditTemplate_default = EditTemplate;
var _c2;
$RefreshReg$(_c2, "EditTemplate");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  helpers_exports,
  GenericCardServerrErrors_default,
  EditTemplate_default
};
//# sourceMappingURL=/build/_shared/chunk-I7C2WDEY.js.map
