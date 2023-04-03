import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { apiCallPost } from "@services/api";
import { useRouter } from "next/router";
import { setToken, setUserData, setIsAuthed } from "@stores/slices/user";
import { setCookieValue } from "@helpers/cookies";
import appConfigs from "@configs/app";
import { redirect, redirectHomePage } from "@helpers/route";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "25rem",
    border: "0",
    background: "transparent",
  },
};

export default function SignInButton() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        className="rounded-full bg-fuchsia-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-fuchsia-700"
        onClick={() => handleOpenModal()}
      >
        Login
      </button>
      {isOpen && <SignIn isOpen={isOpen} onClose={closeModal} />}
    </>
  );
}
const SignIn = ({ isOpen, onClose }: SignInModalProps) => {
  const router = useRouter();
  const [isEmailFormat, setIsEmailFormat] = useState(true);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (!emailRegEx.test(value)) {
      setIsEmailFormat(false);
    } else {
      setIsEmailFormat(true);
    }
    setUsername(value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setPassword(value);
  };
  const handleLogin = () => {
    const redirectUrl = router.query?.redirect ?? undefined;
    const data = {
      username: username,
      password: password,
      isEmail: isEmailFormat,
    };
    apiCallPost("/auth/login", data)
      .then(async (response) => {
        const { user, statusCode, message, access_token } = response?.data;
        if (statusCode === 201) {
          dispatch(setToken(access_token));
          dispatch(setUserData(user));
          dispatch(setIsAuthed(true));
          if (access_token) {
            setCookieValue(null, appConfigs.authTokenKey, access_token);
            if (redirectUrl && typeof redirectUrl === "string") {
              await redirect(redirectUrl);
            } else {
              await redirectHomePage();
            }
          }
        }

        if (message) {
          setMessage(message);
          onClose();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Minimal Modal Example"
    >
      <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div className="mb-1 items-end text-black">
          <button onClick={onClose}>X</button>
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="******************"
            onChange={handlePasswordChange}
          />
          <p className="text-xs italic text-red-500">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </Modal>
  );
};
