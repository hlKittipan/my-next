import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {ButtonGroup, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import React, {FC, useState} from "react";
import {apiCallPost} from "@/services/api";
import {useRouter} from 'next/router'

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SignInForm: FC = () => {
    const router = useRouter()
    const [username, setUsername] = useState('');
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setUsername(value);
    }
    const [password, setPassword] = useState('');
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setPassword(value);
    }
    const handleLogin = () => {
        const data = {email: username, password: password};
        apiCallPost('/login', data).then(r => console.log(r));
    }
    return (
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
                        onChange={handleUsernameChange}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={handlePasswordChange}
                    />
                </div>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={handleLogin}>Login</Button>
                    <Button onClick={() => router.push('/register')}>Register</Button>
                </ButtonGroup>
            </CardContent>
        </Card>
    );
}
