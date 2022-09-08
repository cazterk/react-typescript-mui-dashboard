import { AppBar, styled, Toolbar, Typography } from "@mui/material";
const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white"
}));
const Header = () => {
  return (
    <AppBar position="sticky">
      <StyledToobar>
        <Search>search</Search>
        <Typography>avatar</Typography>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
