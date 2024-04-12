import { Box } from '@mui/system';

const Rightbar = () => {
  return (
    <Box
      bgcolor="indianred"
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
