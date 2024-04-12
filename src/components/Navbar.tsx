import PetsIcon from '@mui/icons-material/Pets';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => {
  backgroundColor: 'white';
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          KG DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
