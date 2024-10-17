import { lazy } from "react";

const TestComponent = lazy(() => import("../pages/Test"));
const ProductComponent = lazy(() => import("../pages/Product"));

const DefaultRoute = [
  {
    path: "test",
    title: "Test component",
    component: TestComponent,
  },
  {
    path: "product",
    title: "Product",
    component: ProductComponent,
  },
];

export default DefaultRoute;
