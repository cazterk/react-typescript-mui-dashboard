import {
  AppBar,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Box,
  Badge,
  Avatar,
  Stack
} from "@mui/material";
import { IconContext } from "react-icons";
import { MdOutlineNotificationsActive } from "react-icons/md";
const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#e8eff6",
  height: "7.5rem"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "15rem",
  height: "3rem",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    width: "37.5rem"
  }
}));

const Icons = styled(Stack)({
  display: "flex",
  marginLeft: "10px"
});
const Header = () => {
  return (
    <AppBar position="sticky">
      <StyledToobar>
        <Typography
          sx={{
            display: { xs: "none", sm: "block" }
          }}
        >
          currentPage.title
        </Typography>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons direction="row" spacing={2}>
          <Badge badgeContent={4} color="error">
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle" }, size: "25" }}
            >
              <MdOutlineNotificationsActive color="action" />
            </IconContext.Provider>
          </Badge>
          <Avatar sx={{ width: 25, height: 25 }} alt="Travis Howard" src="" />
        </Icons>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
