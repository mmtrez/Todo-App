import { FormControl, TextField, Button, Stack } from "@mui/material";
import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Nav } from "../index";

const validationSchema = yup.object({
    title: yup
        .string()
        .max(120, 'Title should be less than 120 characters.')
        .required('Title is required.'),
    description: yup
        .string()
        .max(250, 'Description should be less than 250 characters.')
        .required('Description is required.')
})

const EditTask = () => {
    const { tasks, setTasks } = useContext(TodoContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const task = tasks.filter((task) => ((task.id).toString() === id))[0];

    const formik = useFormik({
        initialValues: {
            title: task.title,
            description: task.description,
        },
        onSubmit: ({ title, description }) => {
            setTasks(tasks.map((task) => (
                (task.id).toString() === id
                ? {...task, title, description }
                : task
            )))
            navigate('/')
        },
        validationSchema: validationSchema,
    })

    const handleCancleEditTask = () => {
        navigate('/')
    }

    return (
        <>
            <Nav title="Edit Task" />
            <FormControl sx={{ p: 2 }}>
                <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2} sx={{ mb: 2 }}>
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
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        multiline
                        rows={11}
                    />
                </Stack>
                <Stack direction="row-reverse" spacing={1}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Edit Task
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleCancleEditTask}
                    >
                        Cancel
                    </Button>
                </Stack>
                </form>
            </FormControl>
        </>
    )
}

export default EditTask;