import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  InputControll_default,
  Label,
  TextAreaControll_default
} from "/build/_shared/chunk-OYXAFN2E.js";
import {
  CheckIcon,
  quizContentSingleElementValidationSchema
} from "/build/_shared/chunk-4FWQSIWA.js";
import {
  Plus_default
} from "/build/_shared/chunk-YDX4UJES.js";
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

// app/templates/QuestionCard.tsx
var import_react2 = __toESM(require_react());

// app/components/icons/Cross.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
    fileName: "app/components/icons/Cross.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/icons/Cross.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = Cross;
var Cross_default = Cross;
var _c;
$RefreshReg$(_c, "Cross");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/checkbox.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $e698a72e93240346$var$CHECKBOX_NAME = "Checkbox";
var [$e698a72e93240346$var$createCheckboxContext, $e698a72e93240346$export$b566c4ff5488ea01] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($e698a72e93240346$var$CHECKBOX_NAME);
var [$e698a72e93240346$var$CheckboxProvider, $e698a72e93240346$var$useCheckboxContext] = $e698a72e93240346$var$createCheckboxContext($e698a72e93240346$var$CHECKBOX_NAME);
var $e698a72e93240346$export$48513f6b9f8ce62d = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...checkboxProps } = props;
  const [button, setButton] = (0, import_react.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  const initialCheckedStateRef = (0, import_react.useRef)(checked);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_react.createElement)($e698a72e93240346$var$CheckboxProvider, {
    scope: __scopeCheckbox,
    state: checked,
    disabled
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
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
  })), isFormControl && /* @__PURE__ */ (0, import_react.createElement)($e698a72e93240346$var$BubbleInput, {
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
var $e698a72e93240346$export$59aad738f51d1c05 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
  const context = $e698a72e93240346$var$useCheckboxContext($e698a72e93240346$var$INDICATOR_NAME, __scopeCheckbox);
  return /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $e698a72e93240346$var$isIndeterminate(context.state) || context.state === true
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
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
  const ref = (0, import_react.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_react.createElement)("input", _extends({
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

// app/components/ui/checkbox.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
var Checkbox = React.forwardRef(_c2 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($e698a72e93240346$export$be92b6f5f03c0fe9, { ref, className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($e698a72e93240346$export$adb584737d712b70, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon, { className: "h-4 w-4" }, void 0, false, {
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
_c22 = Checkbox;
Checkbox.displayName = $e698a72e93240346$export$be92b6f5f03c0fe9.displayName;
var _c2;
var _c22;
$RefreshReg$(_c2, "Checkbox$React.forwardRef");
$RefreshReg$(_c22, "Checkbox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/CheckboxControll.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { ...innerProps.wrapperProps, className: clsx_default("w-full", innerProps?.wrapperProps?.className), children: [
    label ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { ...innerProps.labelProps, htmlFor: rest.id, children: label }, void 0, false, {
      fileName: "app/components/input/CheckboxControll.tsx",
      lineNumber: 35,
      columnNumber: 16
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Checkbox, { ...rest }, void 0, false, {
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
_c3 = CheckboxControll;
CheckboxControll.displayName = "CheckboxControll";
var CheckboxControll_default = CheckboxControll;
var _c3;
$RefreshReg$(_c3, "CheckboxControll");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/templates/QuestionCard.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { className: "mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("fieldset", { disabled, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-xl font-semibold tracking-tight", children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextAreaControll_default, { label: "Question *", id: `question-${question.no}`, value: question.question, onChange: (e) => updateQuestionText(question.no, e.target.value), className: "h-24", disabled: readOnly }, void 0, false, {
        fileName: "app/templates/QuestionCard.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { className: "flex justify-start my-4", children: "Answers *" }, void 0, false, {
          fileName: "app/templates/QuestionCard.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { className: "mr-4", onClick: () => appendAnswer(question.no), disabled: readOnly, "aria-label": `Add answer to question ${question.no}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Plus_default, {}, void 0, false, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "New answer" }, void 0, false, {
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
      Object.entries(question.answers).map(([answerNo, answer], index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CheckboxControll_default, { checked: index === question.correct, id: `answer-checkbox-${question.no}-${answerNo}`, disabled: readOnly, onClick: () => updateCorrectAnswer(question.no, index), className: "size-6", innerProps: {
          wrapperProps: {
            className: "mr-2 !w-auto"
          }
        }, "aria-label": `Check ${answerNo} from question ${question.no}` }, void 0, false, {
          fileName: "app/templates/QuestionCard.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InputControll_default, { type: "text", id: `answer-text-${question.no}-${answerNo}`, value: answer, onChange: (e) => updateAnswer(question.no, index, e.target.value), innerProps: {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "destructive", onClick: () => deleteAnswer(question.no, index), disabled: readOnly, "aria-label": `Delete ${answerNo} from question ${question.no}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Cross_default, {}, void 0, false, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Delete answer" }, void 0, false, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardFooter, { className: "card-actions justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tooltip, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "destructive", onClick: () => deleteQuestion(question.no), disabled: readOnly, "aria-label": `Delete question ${question.no}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Cross_default, {}, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Delete question" }, void 0, false, {
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
_c4 = QuestionCard;
var QuestionCard_default = _c23 = import_react2.default.memo(QuestionCard, (prev, next) => prev.question === next.question && prev.disabled === next.disabled);
var _c4;
var _c23;
$RefreshReg$(_c4, "QuestionCard");
$RefreshReg$(_c23, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/alert.tsx
var React3 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
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
var Alert = React3.forwardRef(_c5 = ({
  className,
  variant,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ref, role: "alert", className: cn(alertVariants({
  variant
}), className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c24 = Alert;
Alert.displayName = "Alert";
var AlertTitle = React3.forwardRef(_c32 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h5", { ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert.tsx",
  lineNumber: 47,
  columnNumber: 12
}, this));
_c42 = AlertTitle;
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React3.forwardRef(_c52 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert.tsx",
  lineNumber: 53,
  columnNumber: 12
}, this));
_c6 = AlertDescription;
AlertDescription.displayName = "AlertDescription";
var _c5;
var _c24;
var _c32;
var _c42;
var _c52;
var _c6;
$RefreshReg$(_c5, "Alert$React.forwardRef");
$RefreshReg$(_c24, "Alert");
$RefreshReg$(_c32, "AlertTitle$React.forwardRef");
$RefreshReg$(_c42, "AlertTitle");
$RefreshReg$(_c52, "AlertDescription$React.forwardRef");
$RefreshReg$(_c6, "AlertDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/templates/QuestionCardErrors.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: result.error.issues.map((issue) => {
      const path = issue.path.join("");
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Alert, { variant: "destructive", className: "mb-2", role: "alert", "aria-label": `Question ${question.no} field ${path}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertTitle, { children: issue.message }, void 0, false, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, {}, void 0, false, {
    fileName: "app/templates/QuestionCardErrors.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_c7 = QuestionCardErrors;
var QuestionCardErrors_default = _c25 = import_react3.default.memo(QuestionCardErrors, (prev, next) => prev.question === next.question);
var _c7;
var _c25;
$RefreshReg$(_c7, "QuestionCardErrors");
$RefreshReg$(_c25, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/templates/TemplateDetailsCard.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: "mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("fieldset", { disabled, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-xl font-semibold tracking-tight", children: "Details" }, void 0, false, {
      fileName: "app/templates/TemplateDetailsCard.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/templates/TemplateDetailsCard.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(InputControll_default, { type: "text", id: "title", value: title, onChange: (e) => onChange("title", e.target.value), label: "Title *", required: true, innerProps: {
        wrapperProps: {
          className: "flex-grow mb-2"
        }
      }, disabled: readOnly, maxLength: 255 }, void 0, false, {
        fileName: "app/templates/TemplateDetailsCard.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextAreaControll_default, { id: "description", label: "Description", value: description, onChange: (e) => onChange("description", e.target.value), className: "h-24", disabled: readOnly, maxLength: 255 }, void 0, false, {
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
_c8 = TemplateDetailsCard;
var TemplateDetailsCard_default = _c26 = import_react4.default.memo(TemplateDetailsCard, (prev, next) => prev.title === next.title && prev.description === next.description && prev.disabled === next.disabled);
var _c8;
var _c26;
$RefreshReg$(_c8, "TemplateDetailsCard");
$RefreshReg$(_c26, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/templates/TemplateDetailsCardErrors.tsx
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Alert, { variant: "destructive", className: "mt-2", role: "alert", "aria-label": `title field`, children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AlertTitle, { children: "Title is required" }, void 0, false, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, {}, void 0, false, {
    fileName: "app/templates/TemplateDetailsCardErrors.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_c9 = TemplateDetailsCardErrors;
var TemplateDetailsCardErrors_default = _c27 = import_react5.default.memo(TemplateDetailsCardErrors, (prev, next) => prev.title === next.title);
var _c9;
var _c27;
$RefreshReg$(_c9, "TemplateDetailsCardErrors");
$RefreshReg$(_c27, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  QuestionCard_default,
  Alert,
  AlertTitle,
  AlertDescription,
  QuestionCardErrors_default,
  TemplateDetailsCard_default,
  TemplateDetailsCardErrors_default
};
//# sourceMappingURL=/build/_shared/chunk-YF5O4RAK.js.map
