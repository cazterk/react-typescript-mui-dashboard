import {
  AppBar,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Badge,
  Stack
} from "@mui/material";
import { IconContext } from "react-icons";
import { MdOutlineNotificationsActive } from "react-icons/md";
import UserAvatar from "src/digipro-medical/components/avatars/userAvator";

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
  },
  zIndex: "1"
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
          <UserAvatar />
        </Icons>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
