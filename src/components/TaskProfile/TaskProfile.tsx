import { Stack, Typography } from "@mui/material";
import { ActionBar, Nav } from "../index";
import TodoContext from "../../context/TodoContext";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

const TaskProfile = () => {
    const { tasks } = useContext(TodoContext);
    const { id } = useParams();
    const [task, setTask] = useState(tasks.filter((task) => ((task.id).toString() === id))[0]);
    console.log(task);

    return (
        <>
            <Nav title="Task Profile" />
            <Stack flexGrow={1}>
                <Stack p={2} sx={{ overflow: 'auto' }} flexGrow={1}>
                    <Typography variant="h6" component="h2">
                        {task.title}
                    </Typography>
                    <Typography variant="caption" component="time">
                        {task.dateTime}
                    </Typography>
                    <Typography variant="body1" component="p" mt={2}>
                        {task.description}
                    </Typography>
                </Stack>
                <ActionBar />
            </Stack>
        </>
    )
}

export default TaskProfile;