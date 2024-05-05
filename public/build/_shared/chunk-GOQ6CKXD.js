import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $db6c3485150b8e66$export$1ab7ae714698c4b8,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  _extends,
  clsx_default,
  cn,
  cva,
  quizContentSingleElementValidationSchema
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/components/icons/Plus.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\icons\\\\Plus.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\icons\\Plus.tsx"
  );
  import.meta.hot.lastModified = "1704491088122.2896";
}
var Plus = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
    fileName: "app/components/icons/Plus.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/icons/Plus.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = Plus;
var Plus_default = Plus;
var _c;
$RefreshReg$(_c, "Plus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/templates/QuestionCard.tsx
var import_react5 = __toESM(require_react());

// app/components/icons/Cross.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\icons\\\\Cross.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\icons\\Cross.tsx"
  );
  import.meta.hot.lastModified = "1704491091361.343";
}
var Cross = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
    fileName: "app/components/icons/Cross.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/icons/Cross.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c2 = Cross;
var Cross_default = Cross;
var _c2;
$RefreshReg$(_c2, "Cross");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

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
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
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
var Label = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($b73a6c6685e72184$export$be92b6f5f03c0fe9, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "app/components/ui/label.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = Label;
Label.displayName = $b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;
var _c3;
var _c22;
$RefreshReg$(_c3, "Label$React.forwardRef");
$RefreshReg$(_c22, "Label");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/checkbox.tsx
var React2 = __toESM(require_react());

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);

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

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var $e698a72e93240346$var$CHECKBOX_NAME = "Checkbox";
var [$e698a72e93240346$var$createCheckboxContext, $e698a72e93240346$export$b566c4ff5488ea01] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($e698a72e93240346$var$CHECKBOX_NAME);
var [$e698a72e93240346$var$CheckboxProvider, $e698a72e93240346$var$useCheckboxContext] = $e698a72e93240346$var$createCheckboxContext($e698a72e93240346$var$CHECKBOX_NAME);
var $e698a72e93240346$export$48513f6b9f8ce62d = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...checkboxProps } = props;
  const [button, setButton] = (0, import_react3.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react3.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  const initialCheckedStateRef = (0, import_react3.useRef)(checked);
  (0, import_react3.useEffect)(() => {
    const form = button === null || button === void 0 ? void 0 : button.form;
    if (form) {
      const reset = () => setChecked(initialCheckedStateRef.current);
      form.addEventListener("reset", reset);
      return () => form.removeEventListener("reset", reset);
    }
  }, [
    button,
    setChecked
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($e698a72e93240346$var$CheckboxProvider, {
    scope: __scopeCheckbox,
    state: checked,
    disabled
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": $e698a72e93240346$var$isIndeterminate(checked) ? "mixed" : checked,
    "aria-required": required,
    "data-state": $e698a72e93240346$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, checkboxProps, {
    ref: composedRefs,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => $e698a72e93240346$var$isIndeterminate(prevChecked) ? true : !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ (0, import_react3.createElement)($e698a72e93240346$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
var $e698a72e93240346$var$INDICATOR_NAME = "CheckboxIndicator";
var $e698a72e93240346$export$59aad738f51d1c05 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
  const context = $e698a72e93240346$var$useCheckboxContext($e698a72e93240346$var$INDICATOR_NAME, __scopeCheckbox);
  return /* @__PURE__ */ (0, import_react3.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $e698a72e93240346$var$isIndeterminate(context.state) || context.state === true
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $e698a72e93240346$var$getState(context.state),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      pointerEvents: "none",
      ...props.style
    }
  })));
});
var $e698a72e93240346$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react3.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react3.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      input.indeterminate = $e698a72e93240346$var$isIndeterminate(checked);
      setChecked.call(input, $e698a72e93240346$var$isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)("input", _extends({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: $e698a72e93240346$var$isIndeterminate(checked) ? false : checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $e698a72e93240346$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $e698a72e93240346$var$getState(checked) {
  return $e698a72e93240346$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var $e698a72e93240346$export$be92b6f5f03c0fe9 = $e698a72e93240346$export$48513f6b9f8ce62d;
var $e698a72e93240346$export$adb584737d712b70 = $e698a72e93240346$export$59aad738f51d1c05;

// node_modules/@radix-ui/react-icons/dist/react-icons.esm.js
var import_react4 = __toESM(require_react());
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$T = ["color"];
var CheckIcon = /* @__PURE__ */ (0, import_react4.forwardRef)(function(_ref, forwardedRef) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$T);
  return (0, import_react4.createElement)("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), (0, import_react4.createElement)("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});

// app/components/ui/checkbox.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\checkbox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\checkbox.tsx"
  );
  import.meta.hot.lastModified = "1704552867251.7842";
}
var Checkbox = React2.forwardRef(_c4 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($e698a72e93240346$export$be92b6f5f03c0fe9, { ref, className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($e698a72e93240346$export$adb584737d712b70, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CheckIcon, { className: "h-4 w-4" }, void 0, false, {
  fileName: "app/components/ui/checkbox.tsx",
  lineNumber: 30,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "app/components/ui/checkbox.tsx",
  lineNumber: 29,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/checkbox.tsx",
  lineNumber: 28,
  columnNumber: 12
}, this));
_c23 = Checkbox;
Checkbox.displayName = $e698a72e93240346$export$be92b6f5f03c0fe9.displayName;
var _c4;
var _c23;
$RefreshReg$(_c4, "Checkbox$React.forwardRef");
$RefreshReg$(_c23, "Checkbox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/CheckboxControll.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\input\\\\CheckboxControll.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\input\\CheckboxControll.tsx"
  );
  import.meta.hot.lastModified = "1714909200547.9614";
}
var CheckboxControll = (props) => {
  const {
    innerProps = {
      wrapperProps: {},
      labelProps: {}
    },
    label,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ...innerProps.wrapperProps, className: clsx_default("w-full", innerProps?.wrapperProps?.className), children: [
    label ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { ...innerProps.labelProps, htmlFor: rest.id, children: label }, void 0, false, {
      fileName: "app/components/input/CheckboxControll.tsx",
      lineNumber: 35,
      columnNumber: 16
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Checkbox, { ...rest }, void 0, false, {
      fileName: "app/components/input/CheckboxControll.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/input/CheckboxControll.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c5 = CheckboxControll;
CheckboxControll.displayName = "CheckboxControll";
var CheckboxControll_default = CheckboxControll;
var _c5;
$RefreshReg$(_c5, "CheckboxControll");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/InputControll.tsx
var React4 = __toESM(require_react());

// app/components/ui/input.tsx
var React3 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\input.tsx"
  );
  import.meta.hot.lastModified = "1704552867255.7827";
}
var Input = React3.forwardRef(_c6 = ({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type, className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/input.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
});
_c24 = Input;
Input.displayName = "Input";
var _c6;
var _c24;
$RefreshReg$(_c6, "Input$React.forwardRef");
$RefreshReg$(_c24, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/InputControll.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
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
var InputControll = React4.forwardRef(_c7 = (props, ref) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { ...innerProps.wrapperProps, children: [
    label ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Label, { className: clsx_default(innerProps?.labelProps?.className, {
      ["text-red-600"]: errorText
    }), htmlFor: rest.id, children: label }, void 0, false, {
      fileName: "app/components/input/InputControll.tsx",
      lineNumber: 37,
      columnNumber: 18
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { ref, className: clsx_default(className, {
      ["border-red-600 border-2"]: errorText
    }), ...rest }, void 0, false, {
      fileName: "app/components/input/InputControll.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    errorText ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-sm text-red-600", children: errorText }, void 0, false, {
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
_c25 = InputControll;
InputControll.displayName = "InputControll";
var InputControll_default = InputControll;
var _c7;
var _c25;
$RefreshReg$(_c7, "InputControll$React.forwardRef");
$RefreshReg$(_c25, "InputControll");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/TextAreaControll.tsx
var React6 = __toESM(require_react());

// app/components/ui/textarea.tsx
var React5 = __toESM(require_react());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
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
var Textarea = React5.forwardRef(_c8 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("textarea", { className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/textarea.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
});
_c26 = Textarea;
Textarea.displayName = "Textarea";
var _c8;
var _c26;
$RefreshReg$(_c8, "Textarea$React.forwardRef");
$RefreshReg$(_c26, "Textarea");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/TextAreaControll.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
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
var TextAreaControll = React6.forwardRef(_c9 = (props, ref) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { ...innerProps.wrapperProps, className: clsx_default("w-full", innerProps?.wrapperProps?.className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Label, { className: clsx_default(innerProps?.wrapperProps?.className, {
      ["text-red-600"]: errorText
    }), htmlFor: rest.id, children: label }, void 0, false, {
      fileName: "app/components/input/TextAreaControll.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Textarea, { ref, className: clsx_default(className, {
      ["border-red-600 border-2"]: errorText
    }), ...rest }, void 0, false, {
      fileName: "app/components/input/TextAreaControll.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    errorText ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-sm text-red-600", children: errorText }, void 0, false, {
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
_c27 = TextAreaControll;
var TextAreaControll_default = TextAreaControll;
var _c9;
var _c27;
$RefreshReg$(_c9, "TextAreaControll$React.forwardRef");
$RefreshReg$(_c27, "TextAreaControll");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/templates/QuestionCard.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\templates\\\\QuestionCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\templates\\QuestionCard.tsx"
  );
  import.meta.hot.lastModified = "1714909641033.5547";
}
var noop = () => {
};
var QuestionCard = (props) => {
  const {
    disabled = false,
    readOnly = false,
    children,
    question,
    deleteQuestion = noop,
    updateQuestionText = noop,
    appendAnswer = noop,
    deleteAnswer = noop,
    updateAnswer = noop,
    updateCorrectAnswer = noop
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Card, { className: "mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("fieldset", { disabled, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-xl font-semibold tracking-tight", children: [
      "Question ",
      question.no + 1
    ] }, void 0, true, {
      fileName: "app/templates/QuestionCard.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/templates/QuestionCard.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextAreaControll_default, { label: "Question *", id: `question-${question.no}`, value: question.question, onChange: (e) => updateQuestionText(question.no, e.target.value), className: "h-24", disabled: readOnly }, void 0, false, {
        fileName: "app/templates/QuestionCard.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "pb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Label, { className: "flex justify-start my-4", children: "Answers *" }, void 0, false, {
          fileName: "app/templates/QuestionCard.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { className: "mr-4", onClick: () => appendAnswer(question.no), disabled: readOnly, "aria-label": `Add answer to question ${question.no}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Plus_default, {}, void 0, false, {
            fileName: "app/templates/QuestionCard.tsx",
            lineNumber: 61,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/templates/QuestionCard.tsx",
            lineNumber: 60,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/templates/QuestionCard.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "New answer" }, void 0, false, {
            fileName: "app/templates/QuestionCard.tsx",
            lineNumber: 65,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/templates/QuestionCard.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/templates/QuestionCard.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/templates/QuestionCard.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/templates/QuestionCard.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      Object.entries(question.answers).map(([answerNo, answer], index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CheckboxControll_default, { checked: index === question.correct, id: `answer-checkbox-${question.no}-${answerNo}`, disabled: readOnly, onClick: () => updateCorrectAnswer(question.no, index), className: "size-6", innerProps: {
          wrapperProps: {
            className: "mr-2 !w-auto"
          }
        }, "aria-label": `Check ${answerNo} from question ${question.no}` }, void 0, false, {
          fileName: "app/templates/QuestionCard.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(InputControll_default, { type: "text", id: `answer-text-${question.no}-${answerNo}`, value: answer, onChange: (e) => updateAnswer(question.no, index, e.target.value), innerProps: {
          labelProps: {
            className: "sr-only"
          },
          wrapperProps: {
            className: "flex-grow mr-2"
          }
        }, disabled: readOnly, maxLength: 511, label: `Answer ${answerNo}` }, void 0, false, {
          fileName: "app/templates/QuestionCard.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { variant: "destructive", onClick: () => deleteAnswer(question.no, index), disabled: readOnly, "aria-label": `Delete ${answerNo} from question ${question.no}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Cross_default, {}, void 0, false, {
            fileName: "app/templates/QuestionCard.tsx",
            lineNumber: 89,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/templates/QuestionCard.tsx",
            lineNumber: 88,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/templates/QuestionCard.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "Delete answer" }, void 0, false, {
            fileName: "app/templates/QuestionCard.tsx",
            lineNumber: 93,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/templates/QuestionCard.tsx",
            lineNumber: 92,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/templates/QuestionCard.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/templates/QuestionCard.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, answerNo, true, {
        fileName: "app/templates/QuestionCard.tsx",
        lineNumber: 71,
        columnNumber: 80
      }, this)),
      children
    ] }, void 0, true, {
      fileName: "app/templates/QuestionCard.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardFooter, { className: "card-actions justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Tooltip, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { variant: "destructive", onClick: () => deleteQuestion(question.no), disabled: readOnly, "aria-label": `Delete question ${question.no}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Cross_default, {}, void 0, false, {
        fileName: "app/templates/QuestionCard.tsx",
        lineNumber: 105,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/templates/QuestionCard.tsx",
        lineNumber: 104,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/templates/QuestionCard.tsx",
        lineNumber: 103,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "Delete question" }, void 0, false, {
        fileName: "app/templates/QuestionCard.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/templates/QuestionCard.tsx",
        lineNumber: 108,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/templates/QuestionCard.tsx",
      lineNumber: 102,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/templates/QuestionCard.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/templates/QuestionCard.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/templates/QuestionCard.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/templates/QuestionCard.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_c10 = QuestionCard;
var QuestionCard_default = _c28 = import_react5.default.memo(QuestionCard, (prev, next) => prev.question === next.question && prev.disabled === next.disabled);
var _c10;
var _c28;
$RefreshReg$(_c10, "QuestionCard");
$RefreshReg$(_c28, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/alert.tsx
var React8 = __toESM(require_react());
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\alert.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\alert.tsx"
  );
  import.meta.hot.lastModified = "1714908983545.0552";
}
var alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Alert = React8.forwardRef(_c11 = ({
  className,
  variant,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { ref, role: "alert", className: cn(alertVariants({
  variant
}), className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c29 = Alert;
Alert.displayName = "Alert";
var AlertTitle = React8.forwardRef(_c32 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h5", { ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert.tsx",
  lineNumber: 47,
  columnNumber: 12
}, this));
_c42 = AlertTitle;
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React8.forwardRef(_c52 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert.tsx",
  lineNumber: 53,
  columnNumber: 12
}, this));
_c62 = AlertDescription;
AlertDescription.displayName = "AlertDescription";
var _c11;
var _c29;
var _c32;
var _c42;
var _c52;
var _c62;
$RefreshReg$(_c11, "Alert$React.forwardRef");
$RefreshReg$(_c29, "Alert");
$RefreshReg$(_c32, "AlertTitle$React.forwardRef");
$RefreshReg$(_c42, "AlertTitle");
$RefreshReg$(_c52, "AlertDescription$React.forwardRef");
$RefreshReg$(_c62, "AlertDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/templates/QuestionCardErrors.tsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\templates\\\\QuestionCardErrors.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\templates\\QuestionCardErrors.tsx"
  );
  import.meta.hot.lastModified = "1714909361341.7676";
}
var QuestionCardErrors = (props) => {
  const {
    question
  } = props;
  const result = quizContentSingleElementValidationSchema.safeParse(question);
  if (!result.success) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: result.error.issues.map((issue) => {
      const path = issue.path.join("");
      return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Alert, { variant: "destructive", className: "mb-2", role: "alert", "aria-label": `Question ${question.no} field ${path}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(AlertTitle, { children: issue.message }, void 0, false, {
        fileName: "app/templates/QuestionCardErrors.tsx",
        lineNumber: 34,
        columnNumber: 15
      }, this) }, issue.message, false, {
        fileName: "app/templates/QuestionCardErrors.tsx",
        lineNumber: 33,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/templates/QuestionCardErrors.tsx",
      lineNumber: 30,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, {}, void 0, false, {
    fileName: "app/templates/QuestionCardErrors.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_c12 = QuestionCardErrors;
var QuestionCardErrors_default = _c210 = import_react6.default.memo(QuestionCardErrors, (prev, next) => prev.question === next.question);
var _c12;
var _c210;
$RefreshReg$(_c12, "QuestionCardErrors");
$RefreshReg$(_c210, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/templates/TemplateDetailsCard.tsx
var import_react7 = __toESM(require_react());
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\templates\\\\TemplateDetailsCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\templates\\TemplateDetailsCard.tsx"
  );
  import.meta.hot.lastModified = "1714909277572.6072";
}
var noop2 = () => {
};
var TemplateDetailsCard = (props) => {
  const {
    title,
    description,
    children,
    onChange = noop2,
    readOnly = false,
    disabled = false
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Card, { className: "mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("fieldset", { disabled, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "text-xl font-semibold tracking-tight", children: "Details" }, void 0, false, {
      fileName: "app/templates/TemplateDetailsCard.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/templates/TemplateDetailsCard.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(InputControll_default, { type: "text", id: "title", value: title, onChange: (e) => onChange("title", e.target.value), label: "Title *", required: true, innerProps: {
        wrapperProps: {
          className: "flex-grow mb-2"
        }
      }, disabled: readOnly, maxLength: 255 }, void 0, false, {
        fileName: "app/templates/TemplateDetailsCard.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(TextAreaControll_default, { id: "description", label: "Description", value: description, onChange: (e) => onChange("description", e.target.value), className: "h-24", disabled: readOnly, maxLength: 255 }, void 0, false, {
        fileName: "app/templates/TemplateDetailsCard.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      children
    ] }, void 0, true, {
      fileName: "app/templates/TemplateDetailsCard.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/templates/TemplateDetailsCard.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/templates/TemplateDetailsCard.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c13 = TemplateDetailsCard;
var TemplateDetailsCard_default = _c211 = import_react7.default.memo(TemplateDetailsCard, (prev, next) => prev.title === next.title && prev.description === next.description && prev.disabled === next.disabled);
var _c13;
var _c211;
$RefreshReg$(_c13, "TemplateDetailsCard");
$RefreshReg$(_c211, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/templates/TemplateDetailsCardErrors.tsx
var import_react8 = __toESM(require_react());
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\templates\\\\TemplateDetailsCardErrors.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\templates\\TemplateDetailsCardErrors.tsx"
  );
  import.meta.hot.lastModified = "1714909276676.473";
}
var TemplateDetailsCardErrors = (props) => {
  const {
    title
  } = props;
  if (title === "") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Alert, { variant: "destructive", className: "mt-2", role: "alert", "aria-label": `title field`, children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AlertTitle, { children: "Title is required" }, void 0, false, {
        fileName: "app/templates/TemplateDetailsCardErrors.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/templates/TemplateDetailsCardErrors.tsx",
      lineNumber: 28,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, {}, void 0, false, {
    fileName: "app/templates/TemplateDetailsCardErrors.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_c14 = TemplateDetailsCardErrors;
var TemplateDetailsCardErrors_default = _c212 = import_react8.default.memo(TemplateDetailsCardErrors, (prev, next) => prev.title === next.title);
var _c14;
var _c212;
$RefreshReg$(_c14, "TemplateDetailsCardErrors");
$RefreshReg$(_c212, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_node,
  Plus_default,
  QuestionCard_default,
  Alert,
  AlertTitle,
  AlertDescription,
  QuestionCardErrors_default,
  TemplateDetailsCard_default,
  TemplateDetailsCardErrors_default
};
//# sourceMappingURL=/build/_shared/chunk-GOQ6CKXD.js.map
