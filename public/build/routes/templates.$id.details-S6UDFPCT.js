import {
  QuestionCardErrors_default,
  QuestionCard_default,
  TemplateDetailsCardErrors_default,
  TemplateDetailsCard_default,
  require_node
} from "/build/_shared/chunk-GOQ6CKXD.js";
import {
  Card,
  CardContent,
  CardHeader,
  require_auth,
  z
} from "/build/_shared/chunk-WHADLW3T.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PRFG2P6T.js";
import {
  createHotContext
} from "/build/_shared/chunk-B76TKB7I.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/templates.$id.details.tsx
var import_node = __toESM(require_node());

// app/templates/DetailsTemplate.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\templates\\\\DetailsTemplate.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\templates\\DetailsTemplate.tsx"
  );
  import.meta.hot.lastModified = "1714909673860.1265";
}
var DetailsTemplate = (props) => {
  const {
    initial
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", children: [
      "Details: ",
      initial.title
    ] }, void 0, true, {
      fileName: "app/templates/DetailsTemplate.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/templates/DetailsTemplate.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TemplateDetailsCard_default, { title: initial.title, description: initial.description, disabled: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TemplateDetailsCardErrors_default, { title: initial.title }, void 0, false, {
        fileName: "app/templates/DetailsTemplate.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/templates/DetailsTemplate.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: initial.data.map((question) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuestionCard_default, { disabled: true, question, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuestionCardErrors_default, { question }, void 0, false, {
        fileName: "app/templates/DetailsTemplate.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this) }, question.no, false, {
        fileName: "app/templates/DetailsTemplate.tsx",
        lineNumber: 42,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/templates/DetailsTemplate.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/templates/DetailsTemplate.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/templates/DetailsTemplate.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/templates/DetailsTemplate.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c = DetailsTemplate;
var DetailsTemplate_default = DetailsTemplate;
var _c;
$RefreshReg$(_c, "DetailsTemplate");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/templates.$id.details.tsx
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\templates.$id.details.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\templates.$id.details.tsx"
  );
  import.meta.hot.lastModified = "1714932961656.6235";
}
var pathParamsSchema = z.object({
  id: z.coerce.string()
});
function Index() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DetailsTemplate_default, { initial: data }, void 0, false, {
    fileName: "app/routes/templates.$id.details.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s(Index, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/templates.$id.details-S6UDFPCT.js.map
