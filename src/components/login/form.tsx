import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ButtonGroup, Snackbar, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import React, { FC, useState } from "react";
import { apiCallPost } from "@services/api";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setToken, setUserData } from "@stores/slices/user";
import { setIsAuthed } from "@stores/slices/app";

const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SignInForm: FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [isEmailFormat, setIsEmailFormat] = useState(true);
  const [message, setMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (!emailRegEx.test(value)) {
      setIsEmailFormat(false);
      return false;
    }
    setIsEmailFormat(true);
    setUsername(value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setPassword(value);
  };
  const handleLogin = () => {
    const data = { email: username, password: password };
    apiCallPost("/login", data)
      .then((response) => {
        const { user, statusCode, message, access_token } = response?.data;
        if (statusCode === 201) {
          dispatch(setToken(access_token));
          dispatch(setUserData(user));
          dispatch(setIsAuthed(true));
        }

        if (message) {
          setMessage(message);
          setOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Login
        </Typography>
        <div>
          <TextField
            required
            error={!isEmailFormat}
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
          <Button onClick={() => router.push("/register")}>Register</Button>
        </ButtonGroup>
        <Snackbar
          anchorOrigin={{
            horizontal: "center",
            vertical: "top",
          }}
          open={open}
          autoHideDuration={5000}
          message={message}
          onClose={handleToClose}
        />
      </CardContent>
    </Card>
  );
};
