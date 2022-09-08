import { Outlet, Link, useRoutes, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const SidebarLayout = () => {
  return (
    <Box
      sx={{
        height: "100%",
        background: "#fef8dd",
        display: { xs: "none", sm: "block" }
      }}
      flex={1}
      p={2}
    >
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
    </Box>
  );
};
export default SidebarLayout;
