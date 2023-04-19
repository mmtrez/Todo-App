import {Typography, Stack, Divider, Fab} from '@mui/material';
import {DarkMode, LightMode} from '@mui/icons-material';
import TodoContext from '../../context/TodoContext';
import {useContext} from 'react';

function AppTitle() {
  const {dark, setDark} = useContext(TodoContext);

  const handleToggleDarkLight = () => {
    setDark(!dark);
  };

  return (
    <>
      <Stack direction="row-reverse">
        <Fab
          sx={{backgroundColor: 'primary.light'}}
          onClick={handleToggleDarkLight}
        >
          {dark ? <DarkMode /> : <LightMode />}
        </Fab>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={4} mb={2}>
        <Divider sx={{flexGrow: 1, borderColor: '#595959'}} />
        <Typography
          variant="h4"
          component="h1"
          sx={{fontWeight: 400, color: '#eee'}}
        >
          <Typography
            variant="h4"
            component="span"
            sx={{fontWeight: 500, color: '#333333'}}
          >
            TODO
          </Typography>{' '}
          App
        </Typography>
        <Divider sx={{flexGrow: 1, borderColor: '#595959'}} />
      </Stack>
    </>
  );
}

export default AppTitle;
