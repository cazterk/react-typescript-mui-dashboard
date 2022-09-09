import { Outlet, Link, useRoutes, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const SidebarLayout = () => {
  return (
    <Box
      sx={{
        height: "100%",
        background: "#002979",
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
            <Link to="/serach">Search</Link>
          </li>
          <li>
            <Link to="/client">Client </Link>
          </li>
        </ul>
      </nav>
    </Box>
  );
};
export default SidebarLayout;
