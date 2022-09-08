import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import SidebarLayout from "src/digipro-medical/components/sideBar/";
import Header from "src/digipro-medical/components/header/";

const Layout = ({ children }) => {
  return (
    <Box>
      <Stack direction="row" spacing={0} justifyContent="space-between">
        <SidebarLayout />

        <Box flex={6}>
          {" "}
          <Header />
          <Box
            sx={{
              background: "#caf1de"
            }}
            p={2}
          >
            {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
            <Outlet />{" "}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Layout;
