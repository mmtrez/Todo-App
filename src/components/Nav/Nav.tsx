import {ArrowBack} from '@mui/icons-material';
import {Stack, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const Nav = ({title}: {title: string}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{p: 2}}
    >
      <Link to="/">
        <ArrowBack />
      </Link>
      <Typography flexGrow={1} textAlign="center" mr="24px">
        {title}
      </Typography>
    </Stack>
  );
};

export default Nav;
