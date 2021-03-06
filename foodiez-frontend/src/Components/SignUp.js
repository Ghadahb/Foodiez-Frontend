import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "10px solid #000",
  boxShadow: 24,
  p: 7,
  mx: "auto",
  m: 1,
};

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    authStore.signup(user);
    handleClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant={"contained"}
        color={"secondary"}
        style={{ backgroundColor: "#1e88e5", margin: "10px 0px" }}
      >
        Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
            lineHeight="2"
            style={{ marginBottom: "20px" }}
          >
            Sign Up
          </Typography>
          <Typography lineHeight="3">Create your account.</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="username"
              name="username"
              // value={user.username}
              variant="outlined"
              color="secondary"
              required
              onChange={handleChange}
            />
            <TextField
              label="password"
              name="password"
              // value={user.password}
              variant="outlined"
              color="secondary"
              required
              onChange={handleChange}
            />
            <Button
              onClose={handleClose}
              type="submit"
              color="secondary"
              variant="contained"
              mx="auto"
              display="flex"
              style={{ margin: "4px", backgroundColor: "#1e88e5" }}
              // style={{ backgroundColor: '#1e88e5' }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default observer(SignUp);
