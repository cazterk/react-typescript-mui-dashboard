import { AppBar, InputBase, styled, Toolbar, Typography } from "@mui/material";
const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));
const Header = () => {
  return (
    <AppBar position="sticky">
      <StyledToobar>
        <Typography>currentPage.title</Typography>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Typography>avatar</Typography>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
