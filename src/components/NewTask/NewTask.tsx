import {FormControl, TextField, Button, Stack} from '@mui/material';
import {useContext} from 'react';
import TodoContext from '../../context/TodoContext';
import {format} from 'date-fns';
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Nav} from '../index';
import {Task} from '../../context/TodoContext';

const validationSchema = yup.object({
  title: yup
    .string()
    .max(120, 'Title should be less than 120 characters.')
    .required('Title is required.'),
  description: yup
    .string()
    .max(250, 'Description should be less than 250 characters.')
    .required('Description is required.'),
});

const NewTask = () => {
  const {tasks, setTasks} = useContext(TodoContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title: '',
      dateTime: format(new Date(), 'MMMM dd, yyyy pp'),
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({id, title, dateTime, description}) => {
      console.log('submited');
      setTasks([...tasks, {id, title, dateTime, description}] as Task[]);
      navigate('/');
    },
  });

  const handleCancleNewTask = () => {
    navigate('/');
  };

  return (
    <>
      <Nav title="New Task" />
      <FormControl sx={{p: 2}}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2} sx={{mb: 2}}>
            <TextField
              id="title"
              label="title"
              variant="outlined"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              id="description"
              label="description"
              variant="outlined"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              multiline
              rows={11}
            />
          </Stack>
          <Stack direction="row-reverse" spacing={1}>
            <Button variant="contained" type="submit">
              Add Task
            </Button>
            <Button variant="contained" onClick={handleCancleNewTask}>
              Cancel
            </Button>
          </Stack>
        </form>
      </FormControl>
    </>
  );
};

export default NewTask;
