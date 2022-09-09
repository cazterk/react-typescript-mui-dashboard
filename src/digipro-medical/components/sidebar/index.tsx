import { Link } from "react-router-dom";
import { Box, List, Typography } from "@mui/material";
import { SidebarData } from "src/digipro-medical/components/sidebar/sidebarData";
import { IconContext } from "react-icons";

const SidebarLayout = () => {
  return (
    <Box
      sx={{
        background: "#002979",
        display: { xs: "none", sm: "block" },
        height: "inherit"
      }}
      flex={1}
      p={2}
      position="sticky"
    >
      <Box position="fixed">
        <Box>
          <Typography>Logo</Typography>
        </Box>
        <Box>
          {SidebarData.map((item, index) => {
            return (
              <List
                key={index}
                className=" flex list-none w-full h-14 py-2 pr-4 pl-4 justify-start items-center "
              >
                <IconContext.Provider value={{ size: "30" }}>
                  <Link
                    to={item.path}
                    className="flex items-center text-base text-black font-semibold h-full rounded hover:bg-gray-100 hover:w-full p-4"
                  >
                    {item.icon}
                    <span className=" w-full ml-4">{item.title}</span>
                  </Link>
                </IconContext.Provider>
              </List>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default SidebarLayout;
