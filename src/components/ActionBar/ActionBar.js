import { Fab, Stack, Typography } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useLocation, Link, useParams } from "react-router-dom";
import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import { DeleteDialog } from "../index";

const ActionBar = () => {
    const location = useLocation();
    const { tasks, setOpenDialog } = useContext(TodoContext);
    const { id } = useParams();

    const handleOpenDeleteDialog = () => {
        setOpenDialog(true);
    }

    return (
        <>
            {!location.pathname.includes('/task') &&
                <Stack direction="row-reverse" p={2} justifyContent="space-between" alignItems="center">
                    <Link to="/new">
                        <Fab>
                            <Add />
                        </Fab>
                    </Link>
                    <Typography variant="body1" component="p">
                        {tasks.length === 0 ? '0 task' : `${tasks.length} Tasks`}
                    </Typography>
                </Stack>
            }
            {location.pathname.includes('/task') &&
                <Stack direction="row-reverse" p={2}>
                    <Fab sx={{ ml: 1.5 }} onClick={handleOpenDeleteDialog}>
                        <Delete />
                    </Fab>
                    <Link to={`/edit/${id}`}>
                        <Fab>
                            <Edit />
                        </Fab>
                    </Link>
                    <DeleteDialog id={Number(id)} />
                </Stack>
            }
        </>
    )
}

export default ActionBar;