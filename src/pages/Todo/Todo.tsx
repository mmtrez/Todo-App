import {Card, AppTitle} from '../../components/index';
import {Container, Box} from '@mui/material';
import TodoContext from '../../context/TodoContext';
import {useContext} from 'react';

function Todo() {
  const {dark}: {dark: boolean} = useContext(TodoContext);

  return (
    <Box
      className="App"
      sx={{
        background: dark
          ? 'linear-gradient(to bottom, teal 40%, #161722 1px)'
          : 'linear-gradient(to bottom, teal 40%, #eee 1px)',
      }}
    >
      <Container maxWidth="sm">
        <AppTitle />
        <Card />
      </Container>
    </Box>
  );
}

export default Todo;
