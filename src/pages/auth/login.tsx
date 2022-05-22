import {Layout} from "@/components/layouts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {ButtonGroup, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import {NextPage} from "next";
/* middleware */
import {
    absoluteUrl,
    getAppCookies,
    verifyToken,
    setLogout,
} from '@/utils/middleware';
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* login schemas */
const FORM_DATA_LOGIN = {
    email: {
        value: '',
        label: 'Email',
        min: 10,
        max: 36,
        required: true,
        validator: {
            regEx: emailRegEx,
            error: 'Please insert valid email',
        },
    },
    password: {
        value: '',
        label: 'Password',
        min: 6,
        max: 36,
        required: true,
        validator: {
            regEx: /^[a-z\sA-Z0-9\W\w]+$/,
            error: 'Please insert valid password',
        },
    },
};

const LoginForm: NextPage = () => {
    return (
        <Layout>
            <section>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    component="form"
                    sx={{
                        marginTop: 8,
                        marginBottom: 12,
                        alignItems: 'center',
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Card sx={{maxWidth: 345}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Login
                            </Typography>
                            <div>
                                <TextField
                                    required
                                    id="username"
                                    label="Username or E-mail"
                                    variant="standard"
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                            </div>
                            <ButtonGroup variant="text" aria-label="text button group">
                                <Button>Login</Button>
                                <Button>Register</Button>
                            </ButtonGroup>
                        </CardContent>
                    </Card>
                </Box>
            </section>
        </Layout>
    )
}

export default LoginForm