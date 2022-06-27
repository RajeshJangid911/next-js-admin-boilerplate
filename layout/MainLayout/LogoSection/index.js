// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import {useRouter} from "next/router";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const router = useRouter()
    return(
    <ButtonBase disableRipple onClick={()=>router.push(config.defaultPath)}>
        <Logo />
    </ButtonBase>
)};

export default LogoSection;
