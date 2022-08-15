import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import {ButtonGroup, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import React, {FC, useState} from "react";
import {apiCallPost} from "@/services/api";
import {useRouter} from 'next/router'

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const RegisterForm: FC = () => {
    const router = useRouter()
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handleChange = (event: {
        target: {
            name: string;
            value: string;
        };
    }) => {
        console.log(event)
        const newValue = event.target.value;
        const inputValue = event.target.name;
        setForm(preValue => {
            return {
                ...preValue,
                [inputValue]: newValue
            }
        })
    }
    const handleRegister = () => {
        console.log(form)
        apiCallPost('/register', form).then(r => console.log(r));
    }
    return (
        <Card sx={{maxWidth: 345}} style={{textAlign: 'center'}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Login
                </Typography>
                <div>
                    <TextField
                        required
                        id="username"
                        name="username"
                        label="Username"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        id="confirm-password"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                </div>
                <Button size="small" onClick={handleRegister}>Submit</Button>
                <Button size="small">Clear</Button>
                <CardActions>
                    <ButtonGroup variant="outlined" aria-label="text button group">
                        <Button onClick={() => router.push('/login')}>Login</Button>
                        <Button>Register</Button>
                    </ButtonGroup>
                </CardActions>
            </CardContent>
        </Card>
    );
}
