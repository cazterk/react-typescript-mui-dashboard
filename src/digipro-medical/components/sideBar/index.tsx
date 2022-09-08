import { Outlet, Link, useRoutes, useLocation } from "react-router-dom";
const SidebarLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/serach">Users</Link>
          </li>
          <li>
            <Link to="/client">Client profile</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
      <Outlet />
    </div>
  );
};
export default SidebarLayout;
