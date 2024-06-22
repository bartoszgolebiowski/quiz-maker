import {
  Button,
  cn
} from "/build/_shared/chunk-65GMCP66.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  NavLink,
  isRouteErrorResponse,
  useRevalidator,
  useRouteError
} from "/build/_shared/chunk-PRFG2P6T.js";
import {
  createHotContext
} from "/build/_shared/chunk-B76TKB7I.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/icons/Info.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\icons\\\\Info.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\icons\\Info.tsx"
  );
  import.meta.hot.lastModified = "1703685207635.546";
}
var Info = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" }, void 0, false, {
    fileName: "app/components/icons/Info.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/icons/Info.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = Info;
var Info_default = Info;
var _c;
$RefreshReg$(_c, "Info");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/link/InspectNavLink.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\link\\\\InspectNavLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\link\\InspectNavLink.tsx"
  );
  import.meta.hot.lastModified = "1703685207640.5442";
}
var InspectNavLink = (props) => {
  const {
    children,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { ...rest, preventScrollReset: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Info_default, {}, void 0, false, {
    fileName: "app/components/link/InspectNavLink.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/link/InspectNavLink.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c2 = InspectNavLink;
var InspectNavLink_default = InspectNavLink;
var _c2;
$RefreshReg$(_c2, "InspectNavLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/table.tsx
var React = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\table.tsx"
  );
  import.meta.hot.lastModified = "1704552867267.7817";
}
var Table = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 27,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c22 = Table;
Table.displayName = "Table";
var TableHeader = React.forwardRef(_c32 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 34,
  columnNumber: 12
}, this));
_c4 = TableHeader;
TableHeader.displayName = "TableHeader";
var TableBody = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 40,
  columnNumber: 12
}, this));
_c6 = TableBody;
TableBody.displayName = "TableBody";
var TableFooter = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tfoot", { ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 46,
  columnNumber: 12
}, this));
_c8 = TableFooter;
TableFooter.displayName = "TableFooter";
var TableRow = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { ref, className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 52,
  columnNumber: 12
}, this));
_c10 = TableRow;
TableRow.displayName = "TableRow";
var TableHead = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { ref, className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 58,
  columnNumber: 12
}, this));
_c12 = TableHead;
TableHead.displayName = "TableHead";
var TableCell = React.forwardRef(_c13 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { ref, className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 64,
  columnNumber: 12
}, this));
_c14 = TableCell;
TableCell.displayName = "TableCell";
var TableCaption = React.forwardRef(_c15 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 70,
  columnNumber: 12
}, this));
_c16 = TableCaption;
TableCaption.displayName = "TableCaption";
var _c3;
var _c22;
var _c32;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
var _c15;
var _c16;
$RefreshReg$(_c3, "Table$React.forwardRef");
$RefreshReg$(_c22, "Table");
$RefreshReg$(_c32, "TableHeader$React.forwardRef");
$RefreshReg$(_c4, "TableHeader");
$RefreshReg$(_c5, "TableBody$React.forwardRef");
$RefreshReg$(_c6, "TableBody");
$RefreshReg$(_c7, "TableFooter$React.forwardRef");
$RefreshReg$(_c8, "TableFooter");
$RefreshReg$(_c9, "TableRow$React.forwardRef");
$RefreshReg$(_c10, "TableRow");
$RefreshReg$(_c11, "TableHead$React.forwardRef");
$RefreshReg$(_c12, "TableHead");
$RefreshReg$(_c13, "TableCell$React.forwardRef");
$RefreshReg$(_c14, "TableCell");
$RefreshReg$(_c15, "TableCaption$React.forwardRef");
$RefreshReg$(_c16, "TableCaption");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/GenericErrorBoundary.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\GenericErrorBoundary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\GenericErrorBoundary.tsx"
  );
  import.meta.hot.lastModified = "1714934394923.3508";
}
function GenericErrorBoundary(props) {
  _s();
  const {
    Error400
  } = props;
  const error = useRouteError();
  const revalidator = useRevalidator();
  const isSubmitting = revalidator.state !== "idle";
  const handleRetry = () => revalidator.revalidate();
  if (isRouteErrorResponse(error)) {
    if (error.status === 400) {
      if (Error400) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Error400, { error }, void 0, false, {
          fileName: "app/components/GenericErrorBoundary.tsx",
          lineNumber: 37,
          columnNumber: 16
        }, this);
      }
    }
    if (error.status === 404) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", children: error.data?.message ?? "Not found" }, void 0, false, {
        fileName: "app/components/GenericErrorBoundary.tsx",
        lineNumber: 41,
        columnNumber: 14
      }, this);
    }
    if (error.status === 500) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", children: error.data?.message ?? "Something went wrong" }, void 0, false, {
          fileName: "app/components/GenericErrorBoundary.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: handleRetry, disabled: isSubmitting, children: "Try again" }, void 0, false, {
          fileName: "app/components/GenericErrorBoundary.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/GenericErrorBoundary.tsx",
        lineNumber: 46,
        columnNumber: 14
      }, this);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", children: "Something went wrong" }, void 0, false, {
      fileName: "app/components/GenericErrorBoundary.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: handleRetry, disabled: isSubmitting, children: "Try again" }, void 0, false, {
      fileName: "app/components/GenericErrorBoundary.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/GenericErrorBoundary.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(GenericErrorBoundary, "HgmgHdtNsVS1XKvVh8KAZpHqnXc=", false, function() {
  return [useRouteError, useRevalidator];
});
_c17 = GenericErrorBoundary;
var GenericErrorBoundary_default = GenericErrorBoundary;
var _c17;
$RefreshReg$(_c17, "GenericErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  InspectNavLink_default,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  GenericErrorBoundary_default
};
//# sourceMappingURL=/build/_shared/chunk-JOWOWEOE.js.map
