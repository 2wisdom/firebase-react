import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <form>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src="https://avatars.dicebear.com/api/big-smile/:seed.svg"
            sx={{ width: 70, height: 70 }}
          />
          <Typography component="h1" variant="h6">
            어서와서 당신의 동물을 자랑해주세요 !
          </Typography>

          <TextField
            name="email"
            label="Email Address"
            autoComplete="email"
            margin="normal"
            fullWidth
            autoFocus
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            fullWidth
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="당신을 기억할게요 :)"
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/" variant="body2">
                비밀번호를 잊으셨나요?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/SignUp" variant="body2">
                처음이시군요!
              </Link>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Container>
  );
}
