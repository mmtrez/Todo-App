import { Paper, List } from "@mui/material";
import Routes from "../../Router";

const Card = () => {

    return (
        <Paper
            elevation={12}
            sx={{ display: 'flex', flexDirection: 'column', height: '500px' }}
            component="main"
        >
            <Routes />
        </Paper>
    )
}

export default Card;