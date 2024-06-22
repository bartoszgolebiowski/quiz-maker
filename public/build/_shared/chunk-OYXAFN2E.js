import {
  Input
} from "/build/_shared/chunk-4FWQSIWA.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  _extends,
  clsx_default,
  cn,
  cva
} from "/build/_shared/chunk-65GMCP66.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-B76TKB7I.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/input/InputControll.tsx
var React2 = __toESM(require_react());

// app/components/ui/label.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-label/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $b73a6c6685e72184$export$b04be29aa201d4f5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends({}, props, {
    ref: forwardedRef,
    onMouseDown: (event) => {
      var _props$onMouseDown;
      (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event);
      if (!event.defaultPrevented && event.detail > 1)
        event.preventDefault();
    }
  }));
});
var $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;

// app/components/ui/label.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\label.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\label.tsx"
  );
  import.meta.hot.lastModified = "1704552867257.7798";
}
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($b73a6c6685e72184$export$be92b6f5f03c0fe9, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "app/components/ui/label.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c2 = Label;
Label.displayName = $b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;
var _c;
var _c2;
$RefreshReg$(_c, "Label$React.forwardRef");
$RefreshReg$(_c2, "Label");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/InputControll.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\input\\\\InputControll.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\input\\InputControll.tsx"
  );
  import.meta.hot.lastModified = "1714909171246.7798";
}
var InputControll = React2.forwardRef(_c3 = (props, ref) => {
  const {
    innerProps = {
      wrapperProps: {},
      labelProps: {}
    },
    className,
    errorText,
    label,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ...innerProps.wrapperProps, children: [
    label ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: clsx_default(innerProps?.labelProps?.className, {
      ["text-red-600"]: errorText
    }), htmlFor: rest.id, children: label }, void 0, false, {
      fileName: "app/components/input/InputControll.tsx",
      lineNumber: 37,
      columnNumber: 18
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { ref, className: clsx_default(className, {
      ["border-red-600 border-2"]: errorText
    }), ...rest }, void 0, false, {
      fileName: "app/components/input/InputControll.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    errorText ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-red-600", children: errorText }, void 0, false, {
      fileName: "app/components/input/InputControll.tsx",
      lineNumber: 45,
      columnNumber: 22
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/input/InputControll.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
});
_c22 = InputControll;
InputControll.displayName = "InputControll";
var InputControll_default = InputControll;
var _c3;
var _c22;
$RefreshReg$(_c3, "InputControll$React.forwardRef");
$RefreshReg$(_c22, "InputControll");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/TextAreaControll.tsx
var React4 = __toESM(require_react());

// app/components/ui/textarea.tsx
var React3 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\textarea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\textarea.tsx"
  );
  import.meta.hot.lastModified = "1704552867271.7786";
}
var Textarea = React3.forwardRef(_c4 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("textarea", { className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/textarea.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
});
_c23 = Textarea;
Textarea.displayName = "Textarea";
var _c4;
var _c23;
$RefreshReg$(_c4, "Textarea$React.forwardRef");
$RefreshReg$(_c23, "Textarea");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/TextAreaControll.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\input\\\\TextAreaControll.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\input\\TextAreaControll.tsx"
  );
  import.meta.hot.lastModified = "1704314016593.3264";
}
var TextAreaControll = React4.forwardRef(_c5 = (props, ref) => {
  const {
    innerProps = {
      wrapperProps: {},
      labelProps: {}
    },
    errorText,
    className,
    label,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { ...innerProps.wrapperProps, className: clsx_default("w-full", innerProps?.wrapperProps?.className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { className: clsx_default(innerProps?.wrapperProps?.className, {
      ["text-red-600"]: errorText
    }), htmlFor: rest.id, children: label }, void 0, false, {
      fileName: "app/components/input/TextAreaControll.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Textarea, { ref, className: clsx_default(className, {
      ["border-red-600 border-2"]: errorText
    }), ...rest }, void 0, false, {
      fileName: "app/components/input/TextAreaControll.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    errorText ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-red-600", children: errorText }, void 0, false, {
      fileName: "app/components/input/TextAreaControll.tsx",
      lineNumber: 45,
      columnNumber: 22
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/input/TextAreaControll.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
});
_c24 = TextAreaControll;
var TextAreaControll_default = TextAreaControll;
var _c5;
var _c24;
$RefreshReg$(_c5, "TextAreaControll$React.forwardRef");
$RefreshReg$(_c24, "TextAreaControll");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react2.useRef)({
    value,
    previous: value
  });
  return (0, import_react2.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

export {
  Label,
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  InputControll_default,
  TextAreaControll_default
};
//# sourceMappingURL=/build/_shared/chunk-OYXAFN2E.js.map
