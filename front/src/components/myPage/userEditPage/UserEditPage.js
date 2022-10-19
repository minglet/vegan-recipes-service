import { Link, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Form from "@mui/material/Form";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useForm, Controller } from "react-hook-form";
import * as Api from "../../../api";
import { UserStateContext, DispatchContext } from "../../../App";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function UserEditPage() {
  const { id } = useParams();

  const [user, setUser] = useState("");
  const email = user.email;  // email 변경 불가
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");

  useEffect (() => {
    Api.get('user/current').then((res) => setUser(res.data))

  }, []);

  console.log(user);
  console.log(user.name);

  // const { control, getValues } = useForm({
  //   defaultValues: {
  //     name: user.name,
  //     password: user.password,
  //     password_confirm: user.password,
  //   },
  // });

  // 비밀번호가 4글자 이상인지 여부를 확인함.
  const isPasswordValid = password.length >= 4;
  // 비밀번호와 확인용 비밀번호가 일치하는지 여부를 확인함.
  const isPasswordSame = password === password_confirm;
  // 이름이 2글자 이상인지 여부를 확인함.
  const isNameValid = name.length >= 2;

  const isFormValid =
    isPasswordValid && isPasswordSame && isNameValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Api.put(`users/${id}`, {
      name: name,
      email: email,
      password: password,
    });

    // 성공했을 때, name이랑 password를 해당 TextField 안에 있는 값으로 변경?
  };

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h6">
            UserEdit
          </Typography>

          <Box sx={{ mt: 3 }}>
            {/* <Controller
              control={control}
              name="name"
              rules={{
                required: {
                  value: true,
                  message: "Please put your name",
                },
                minLength: {
                  value: 2,
                  message: "Name should be same as or more than 2 letters.",
                },
                maxLength: {
                  value: 12,
                  message: "Name cannot be more than 12 characters long.",
                },
              }}
              render={({ field, fieldState: { error } }) => {
                 return ( */}
                  <TextField
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoFocus
                    // {...field}
                    // error={!!error}
                    // helperText={error?.message}
                    defaultValue= {user.name}
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {!isNameValid && (
                  <Form.Text className="text-success">
                    Name should be same as or more than 2 letters.
                  </Form.Text>
                  )}    
              {/* )}}
            /> */}

            {/* <Controller
              control={control}
              name="password"
              rules={{
                required: {
                  value: true,
                  message: "put your password",
                },
                minLength: {
                  value: 4,
                  message: "Same as or More than 4 Letters.",
                },
              }}
              render={({ field, fieldState: { error } }) => { */}
                {/* return ( */}
                  <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                    // {...field}
                    // error={!!error}
                    // helperText={error?.message}
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!isPasswordValid && (
                <Form.Text className="text-success">
                  Same as or More than 4 Letters.
                </Form.Text>
              )}
                {/* ); */}
              {/* }}
            /> */}

            {/* <Controller
              control={control}
              name="password_confirm"
              rules={{
                // required: {
                //   value: true,
                //   message: "필수메세지",
                // },
                validate: (value) => {
                  const password = getValues("password");
                  if (password !== value) {
                    return "Please check the password one more.";
                  }
                  return true;
                },
                onChange: (target) => {
                  const { value } = target;
                  const password = getValues("password");
                  if (password !== value) {
                    return "Please check the password one more.";
                  }
                  return true;
                },
              }}
              render={({ field, fieldState: { error } }) => { */}
                {/* return ( */}
                  <TextField
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                    // {...field}
                    // error={!!error}
                    // helperText={error?.message}
                    value = {password_confirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                  {!isPasswordSame && (
                    <Form.Text className="text-success">
                      Please check the password one more.
                    </Form.Text>
                  )}
                {/* ); */}
              {/* }}
            /> */}

            <Button
              // onClick={handleSubmit}
              variant="contained"
              type="submit"
              fullWidth
              color="inherit"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
}
