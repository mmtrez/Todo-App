import { TaskItem, ActionBar } from "../index";
import { List, Box, Typography, Container, Stack } from "@mui/material";
import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import emptyList from "../../assets/emptylist.svg";

const TaskList = () => {
    const { tasks } = useContext(TodoContext);

    return (
        <>
            <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
                {tasks.length ? (
                    <List sx={{ paddingX: '0.5rem', flexGrow: 1, paddingY: 0 }}>
                        {tasks.map((task) => (
                            <TaskItem key={task.id} task={task} length={tasks.length} />
                        ))}
                    </List>
                ) : (
                    <Stack justifyContent="center" height="100%">
                        <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <img src={emptyList} alt="ThereIsNoTask" />
                        </Container>
                        <Typography textAlign="center" variant="h6" component="p">
                            There is no task yet.
                        </Typography>
                    </Stack>
                )}
            </Box>
            <ActionBar />
        </>
    )
}

export default TaskList;