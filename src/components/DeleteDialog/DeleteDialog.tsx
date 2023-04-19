import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import {useContext} from 'react';
import TodoContext from '../../context/TodoContext';
import {useNavigate} from 'react-router-dom';

const DeleteDialog = ({id}: {id: number}) => {
  const {tasks, setTasks, openDialog, setOpenDialog} = useContext(TodoContext);
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleDeleteTask = () => {
    setTasks(tasks.filter((task) => Number(task.id) !== id));
    setOpenDialog(false);
    navigate('/');
  };

  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle aria-label="delete-alert-title">Are you sure ?</DialogTitle>
      <DialogContent>
        <DialogContentText aria-label="delete-alert-content">
          Do you really want to delete this task ? be aware that you can't
          restore a task if you delete it.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} variant="contained">
          Cancel
        </Button>
        <Button onClick={handleDeleteTask} variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
