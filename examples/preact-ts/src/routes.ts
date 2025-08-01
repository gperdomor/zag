import { VNode } from "preact"
import { lazy } from "preact-iso"

interface RouteDefinition {
  path: string
  component: () => VNode<any>
}

export const routes: RouteDefinition[] = [
  // { path: "/progress", component: lazy(() => import("./pages/progress")) },
  // { path: "/file-upload", component: lazy(() => import("./pages/file-upload")) },
  // { path: "/presence", component: lazy(() => import("./pages/presence")) },
  // { path: "/avatar", component: lazy(() => import("./pages/avatar")) },
  // { path: "/color-picker", component: lazy(() => import("./pages/color-picker")) },
  // { path: "/switch", component: lazy(() => import("./pages/switch")) },
  // { path: "/carousel", component: lazy(() => import("./pages/carousel")) },
  // { path: "/date-picker", component: lazy(() => import("./pages/date-picker")) },
  // { path: "/select", component: lazy(() => import("./pages/select")) },
  {
    path: "/",
    component: lazy(() => import("./pages/home")),
  },
  { path: "/accordion", component: lazy(() => import("./pages/accordion")) },
  // { path: "/checkbox", component: lazy(() => import("./pages/checkbox")) },
  // { path: "/combobox", component: lazy(() => import("./pages/combobox")) },
  // { path: "/dialog", component: lazy(() => import("./pages/dialog")) },
  // { path: "/editable", component: lazy(() => import("./pages/editable")) },
  // { path: "/hover-card", component: lazy(() => import("./pages/hover-card")) },
  // { path: "/menu", component: lazy(() => import("./pages/menu")) },
  // { path: "/nested-menu", component: lazy(() => import("./pages/nested-menu")) },
  // { path: "/menu-options", component: lazy(() => import("./pages/menu-options")) },
  // { path: "/context-menu", component: lazy(() => import("./pages/context-menu")) },
  { path: "/number-input", component: lazy(() => import("./pages/number-input")) },
  // { path: "/pagination", component: lazy(() => import("./pages/pagination")) },
  // { path: "/pin-input", component: lazy(() => import("./pages/pin-input")) },
  // { path: "/popper", component:  lazy(()=>import("./pages/popper")) },
  // { path: "/popover", component: lazy(() => import("./pages/popover")) },
  // { path: "/nested-popover", component:  lazy(()=>import("./pages/nested-popover")) },
  // { path: "/radio-group", component: lazy(() => import("./pages/radio-group")) },
  // { path: "/range-slider", component: lazy(() => import("./pages/range-slider")) },
  // { path: "/rating-group", component: lazy(() => import("./pages/rating-group")) },
  // { path: "/slider", component: lazy(() => import("./pages/slider")) },
  // { path: "/tabs", component: lazy(() => import("./pages/tabs")) },
  // { path: "/tags-input", component: lazy(() => import("./pages/tags-input")) },
  // { path: "/toast", component: lazy(() => import("./pages/toast")) },
  // { path: "/toggle-group", component: lazy(() => import("./pages/toggle-group")) },
  // { path: "/tooltip", component: lazy(() => import("./pages/tooltip")) },
  // { path: "/splitter", component: lazy(() => import("./pages/splitter")) },
  // { path: "/segment-control", component: lazy(() => import("./pages/segment-control")) },
  { path: "/json-tree", component: lazy(() => import("./pages/json-tree")) },
]
