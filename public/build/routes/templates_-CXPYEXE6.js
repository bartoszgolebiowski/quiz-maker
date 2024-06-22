import {
  GenericErrorBoundary_default,
  InspectNavLink_default,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "/build/_shared/chunk-JOWOWEOE.js";
import {
  Plus_default
} from "/build/_shared/chunk-YDX4UJES.js";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  require_auth
} from "/build/_shared/chunk-65GMCP66.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link,
  NavLink,
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

// app/components/icons/Edit.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\icons\\\\Edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\icons\\Edit.tsx"
  );
  import.meta.hot.lastModified = "1703685207634.5437";
}
var Edit = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, false, {
    fileName: "app/components/icons/Edit.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/icons/Edit.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = Edit;
var Edit_default = Edit;
var _c;
$RefreshReg$(_c, "Edit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/link/EditNavLink.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\link\\\\EditNavLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\link\\EditNavLink.tsx"
  );
  import.meta.hot.lastModified = "1704644802742.8784";
}
var EditNavLink = (props) => {
  const {
    children,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { ...rest, preventScrollReset: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Edit_default, {}, void 0, false, {
    fileName: "app/components/link/EditNavLink.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/link/EditNavLink.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c2 = EditNavLink;
var EditNavLink_default = EditNavLink;
var _c2;
$RefreshReg$(_c2, "EditNavLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/templates_.tsx
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\templates_.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\templates_.tsx"
  );
  import.meta.hot.lastModified = "1719051237271.664";
}
var meta = () => {
  return [{
    title: "Quiz Templates"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function Index() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card, { className: "mb-10 w-2.3 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", children: "My templates" }, void 0, false, {
        fileName: "app/routes/templates_.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tooltip, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "my-4", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/templates/create", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Plus_default, {}, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 63,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 62,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 61,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Create template" }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 68,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/templates_.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/templates_.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/templates_.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/templates_.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { children: "Title" }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { children: "Description" }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { className: "text-right", children: "Edit" }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { className: "text-right", children: "Details" }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/templates_.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/templates_.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableBody, { children: data.templates.map((template) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: template.title }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 86,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: template.description }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 87,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { align: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TooltipTrigger, { tabIndex: -1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EditNavLink_default, { to: `/templates/${template.templateId}/edit` }, void 0, false, {
            fileName: "app/routes/templates_.tsx",
            lineNumber: 92,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/templates_.tsx",
            lineNumber: 91,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Edit" }, void 0, false, {
            fileName: "app/routes/templates_.tsx",
            lineNumber: 95,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/templates_.tsx",
            lineNumber: 94,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 90,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 89,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 88,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { align: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TooltipTrigger, { tabIndex: -1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InspectNavLink_default, { to: `/templates/${template.templateId}/details` }, void 0, false, {
            fileName: "app/routes/templates_.tsx",
            lineNumber: 104,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/templates_.tsx",
            lineNumber: 103,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Inspect" }, void 0, false, {
            fileName: "app/routes/templates_.tsx",
            lineNumber: 107,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/templates_.tsx",
            lineNumber: 106,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 102,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 101,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/templates_.tsx",
          lineNumber: 100,
          columnNumber: 19
        }, this)
      ] }, template.version, true, {
        fileName: "app/routes/templates_.tsx",
        lineNumber: 85,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/routes/templates_.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/templates_.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/templates_.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/templates_.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/templates_.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(Index, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c3 = Index;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GenericErrorBoundary_default, {}, void 0, false, {
    fileName: "app/routes/templates_.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_c22 = ErrorBoundary;
var _c3;
var _c22;
$RefreshReg$(_c3, "Index");
$RefreshReg$(_c22, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/templates_-CXPYEXE6.js.map
