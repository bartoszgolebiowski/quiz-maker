import {
  EditTemplate_default,
  GenericCardServerrErrors_default
} from "/build/_shared/chunk-RSXQFFUO.js";
import "/build/_shared/chunk-7TYOZF3U.js";
import "/build/_shared/chunk-YF5O4RAK.js";
import "/build/_shared/chunk-OYXAFN2E.js";
import {
  require_node,
  z
} from "/build/_shared/chunk-4FWQSIWA.js";
import "/build/_shared/chunk-YDX4UJES.js";
import {
  require_auth
} from "/build/_shared/chunk-65GMCP66.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-PRFG2P6T.js";
import {
  createHotContext
} from "/build/_shared/chunk-B76TKB7I.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/templates.$id.edit.tsx
var import_node = __toESM(require_node());
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\templates.$id.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\templates.$id.edit.tsx"
  );
  import.meta.hot.lastModified = "1719051185169.4631";
}
var meta = () => {
  return [{
    title: "Edit Quiz Template"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
var pathParamsSchema = z.object({
  id: z.coerce.string()
});
function Index() {
  _s();
  const data = useLoaderData();
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state !== "idle";
  const initial = {
    title: data.title,
    description: data.description,
    data: data.data
  };
  const handleSubmit = (state) => {
    fetcher.submit({
      action: "edit",
      data: JSON.stringify(state),
      title: state.title,
      description: state.description
    }, {
      method: "POST"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditTemplate_default, { initial, isSubmitting, onSubmit: handleSubmit }, void 0, false, {
      fileName: "app/routes/templates.$id.edit.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    fetcher.data?.type === "error" && fetcher.state === "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GenericCardServerrErrors_default, { error: fetcher.data }, void 0, false, {
      fileName: "app/routes/templates.$id.edit.tsx",
      lineNumber: 78,
      columnNumber: 69
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/templates.$id.edit.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_s(Index, "7ZsjsNr2e15PzLVKUx9CA7bMCjw=", false, function() {
  return [useLoaderData, useFetcher];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/templates.$id.edit-F5VFTE44.js.map
