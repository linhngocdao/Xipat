import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./component/layout/defaultLayout";
import Dashboard from "./pages/Dashboard";
import { Suspense } from "react";
import DefaultRoute from "./routes/router";
import Loading from "./component/core/loading";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
          {DefaultRoute.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loading />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
