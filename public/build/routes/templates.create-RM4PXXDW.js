import {
  EditTemplate_default,
  GenericCardServerrErrors_default,
  helpers_exports
} from "/build/_shared/chunk-I7C2WDEY.js";
import "/build/_shared/chunk-7TYOZF3U.js";
import {
  require_node
} from "/build/_shared/chunk-GOQ6CKXD.js";
import {
  quizContentSchema,
  require_auth,
  z
} from "/build/_shared/chunk-WHADLW3T.js";
import {
  useFetcher
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

// app/routes/templates.create.tsx
var import_node = __toESM(require_node());
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\templates.create.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\templates.create.tsx"
  );
  import.meta.hot.lastModified = "1714932778001.7285";
}
var meta = () => {
  return [{
    title: "Create Quiz Template"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function Index() {
  _s();
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state !== "idle";
  const handleSubmit = (state) => {
    fetcher.submit({
      action: "create",
      data: JSON.stringify(state),
      title: state.title,
      description: state.description
    }, {
      method: "POST"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditTemplate_default, { isSubmitting, onSubmit: handleSubmit, children: "Manual creator" }, void 0, false, {
      fileName: "app/routes/templates.create.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    fetcher.data?.type === "error" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GenericCardServerrErrors_default, { error: fetcher.data }, void 0, false, {
      fileName: "app/routes/templates.create.tsx",
      lineNumber: 68,
      columnNumber: 41
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/templates.create.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(Index, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c = Index;
var createTemplateSchema = helpers_exports.formData({
  title: helpers_exports.text(z.string().min(1, {
    message: "Title is required"
  }).max(255, {
    message: "Title is too long, max 255 characters"
  })),
  description: helpers_exports.text(z.string().min(1, {
    message: "Description is required"
  }).max(255, {
    message: "Description is too long, max 255 characters"
  })).optional().default(""),
  data: helpers_exports.json(quizContentSchema)
});
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/templates.create-RM4PXXDW.js.map
