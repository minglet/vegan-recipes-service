import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import * as Api from "../../api";


export default function RegisterPage() {
  const navigate = useNavigate();

  //useState로 email 상태를 생성함.
  const [email, setEmail] = useState("");
  //useState로 password 상태를 생성함.
  const [password, setPassword] = useState("");
  //useState로 confirmPassword 상태를 생성함.
  const [confirmPassword, setConfirmPassword] = useState("");
  //useState로 name 상태를 생성함.
  const [name, setName] = useState("");

  //이메일이 abc@example.com 형태인지 regex를 이용해 확인함.
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //위 validateEmail 함수를 통해 이메일 형태 적합 여부를 확인함.
  const isEmailValid = validateEmail(email);
  // 비밀번호가 4글자 이상인지 여부를 확인함.
  const isPasswordValid = password.length >= 4;
  // 비밀번호와 확인용 비밀번호가 일치하는지 여부를 확인함.
  const isPasswordSame = password === confirmPassword;
  // 이름이 2글자 이상인지 여부를 확인함.
  const isNameValid = name.length >= 2;

  // 위 4개 조건이 모두 동시에 만족되는지 여부를 확인함.
  const isFormValid =
    isEmailValid && isPasswordValid && isPasswordSame && isNameValid;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // "user/register" 엔드포인트로 post요청함.
      await Api.post("user/register", {
        // id,
        email,
        name,
        password,
      });

      // 로그인 페이지로 이동함.
      navigate("/user/login");
    } catch (err) {
      console.log("회원가입에 실패하였습니다.", err);
    }
  };

  return (
      <Grid container component="main" sx={{ height: "80vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://img.hani.co.kr/imgdb/resize/2015/0722/143743620091_20150722.JPG)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isEmailValid && (
                <Form.Text className="text-success">
                  Please check the email right.
                </Form.Text>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="name"
                type="name"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {!isNameValid && (
                <Form.Text className="text-success">
                  Name should be same as or more than 2 letters.
                </Form.Text>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isPasswordValid && (
                <Form.Text className="text-success">
                  Same as or More than 4 Letters.
                </Form.Text>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="off"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!isPasswordSame && (
                <Form.Text className="text-success">
                  Please check the password one more.
                </Form.Text>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!isFormValid}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    
  );
}
