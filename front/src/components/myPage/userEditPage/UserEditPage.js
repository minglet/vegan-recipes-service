import { Link, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import * as Api from "../../../api";
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

  // console.log(user);
  // console.log(user.name);

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
                  <TextField
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoFocus
                    defaultValue= {user.name}
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {!isNameValid && (
                    <Form.Text className="text-success">
                      Name should be same as or more than 2 letters.
                    </Form.Text>
                  )}    
            
                  <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!isPasswordValid && (
                    <Form.Text className="text-success">
                      Same as or More than 4 Letters.
                    </Form.Text>
                  )}
    
                  <TextField
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                    value = {password_confirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                  {!isPasswordSame && (
                    <Form.Text className="text-success">
                      Please check the password one more.
                    </Form.Text>
                  )}

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
