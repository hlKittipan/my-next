import { Layout } from "@components/layouts";
import { RegisterForm } from "@components/register/form";
import Box from "@mui/material/Box";
import { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <Layout>
      <div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          component="form"
          sx={{
            marginTop: 8,
            marginBottom: 12,
            alignItems: "center",
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <RegisterForm />
        </Box>
      </div>
    </Layout>
  );
};

export default Register;
