import { ListItem, ListItemText, ListItemButton, Typography, IconButton, Divider } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom";
import { DeleteDialog } from "../index";
import { useContext } from "react";
import TodoContext from "../../context/TodoContext";

const TaskItem = ({ task, length }) => {
    const { setOpenDialog } = useContext(TodoContext);
    const navigate = useNavigate();

    const handleTaskClicked = () => {
        navigate(`/task/${task.id}`);
    };

    const handleToggleDeleteDialog = () => {
        setOpenDialog(true);
    }

    return (
        <>
            <ListItem sx={{ paddingY: '0.5rem' }} secondaryAction={
                <>
                    <Link to={`/edit/${task.id}`}>
                        <IconButton aria-label="edit">
                            <Edit />
                        </IconButton>
                    </Link>
                    <IconButton aria-label="delete" onClick={handleToggleDeleteDialog}>
                        <Delete />
                    </IconButton>
                </>
            } disablePadding>
                <ListItemButton onClick={handleTaskClicked}>
                    <ListItemText>
                        <Typography variant="h6" component="h2">
                            {task.title}
                        </Typography>
                        <Typography variant="caption" component="time">
                            {task.dateTime}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {
                                task.description.length <= 45
                                    ? task.description
                                    : `${task.description.slice(0, 45)}...`
                            }
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            {length !== task.id &&
                <Divider variant="fullWidth" component="hr" />
            }
            <DeleteDialog id={task.id} />
        </>
    )
}

export default TaskItem;