import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { apiCallPost } from "@services/api";
import { useRouter } from "next/router";
import { setToken, setUserData, setIsAuthed } from "@stores/slices/user";
import { redirect, redirectHomePage } from "@helpers/route";
import { emailRegEx } from "@helpers/form";

interface SignInButtonProps {
  isModal: boolean;
}

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  message: string | null;
}

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

export default function SignInButton({ isModal }: SignInButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
          dispatch(setUserData(user));
          dispatch(setIsAuthed(true));
          dispatch(setToken(access_token));
          if (isModal) {
            setIsOpen(false);
          } else if (redirectUrl && typeof redirectUrl === "string") {
            await redirect(redirectUrl);
          } else {
            await redirectHomePage();
          }
        }

        if (message) {
          setMessage(message);
        }
      })
      .catch((err) => {
        const { message } = err?.response?.data;
        if (message) {
          setMessage(message);
        }
      });
  };
  return (
    <>
      <button
        className="rounded-full bg-fuchsia-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-fuchsia-700"
        onClick={() => handleOpenModal()}
      >
        Login
      </button>
      {isOpen && (
        <SignIn
          isOpen={isOpen}
          onClose={closeModal}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleLogin={handleLogin}
          message={message}
        />
      )}
    </>
  );
}
const SignIn = ({
  isOpen,
  onClose,
  handleUsernameChange,
  handlePasswordChange,
  handleLogin,
  message,
}: SignInModalProps) => {
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
        {message && <p className="text-xs italic text-red-500">{message}</p>}
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
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="******************"
            onChange={handlePasswordChange}
          />
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
