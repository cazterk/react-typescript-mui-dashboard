import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";
import SuspenseLoader from "src/digipro-medical/components/SuspenseLoader";

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
// components
const SidebarLayout = Loader(
  lazy(() => import("src/digipro-medical/components/sideBar/"))
);
// pages
const Home = Loader(lazy(() => import("src/digipro-medical/pages/home/")));
const Search = Loader(lazy(() => import("src/digipro-medical/pages/search/")));
const ClientProfile = Loader(
  lazy(() => import("src/digipro-medical/pages/client-profile/"))
);

const routes: RouteObject[] = [
  {
    path: "",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/serach",
        element: <Search />
      },
      {
        path: "/client",
        element: <ClientProfile />
      }
    ]
  }
];

export default routes;
