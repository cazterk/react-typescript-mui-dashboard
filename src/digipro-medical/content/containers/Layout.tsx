import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import SidebarLayout from "src/digipro-medical/components/sidebar";
import Header from "src/digipro-medical/components/header/";

const Layout = ({ children }) => {
  return (
    <Box>
      <Stack direction="row" spacing={0} justifyContent="space-between">
        <SidebarLayout />

        <Box flex={7}>
          {" "}
          <Header />
          <Box
            sx={{
              height: "100vh",
              background: "#e8eff6"
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
