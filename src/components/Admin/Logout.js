import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate} from "react-router-dom";
function Logout() {
    let navigate = useNavigate();
    function Logout() {
        sessionStorage.removeItem('value');
        navigate("/")
    }
    return ( 
        <Box sx={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh"}}>
        <Typography sx={{mb:4}}>Are you sure</Typography>
        <Box>
            <Button variant='contained' onClick={Logout}>Yes</Button>
            <Button>No</Button>
        </Box>
        </Box>
     );
}

export default Logout;