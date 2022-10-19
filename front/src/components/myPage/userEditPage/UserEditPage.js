import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useForm, Controller } from "react-hook-form";

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export default function UserEditPage() {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      name: "",
      password: "",
      password_confirm: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    await sleep(5); // API 호출로 대체

    // 성공시
  });

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={onSubmit}>
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
            <Controller
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
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  autoFocus
                  {...field}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Controller
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
              render={({ field, fieldState: { error } }) => {
                return (
                  <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                    {...field}
                    error={!!error}
                    helperText={error?.message}
                  />
                );
              }}
            />

            <Controller
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
              render={({ field, fieldState: { error } }) => {
                return (
                  <TextField
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                    {...field}
                    error={!!error}
                    helperText={error?.message}
                  />
                );
              }}
            />

            {/* <TextField
              name="email"
              label="이메일을 입력해주세요."
              variant="outlined"
              autoComplete="email"
              margin="normal"
              fullWidth
            /> */}

            <Button
              variant="contained"
              type="submit"
              fullWidth
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
