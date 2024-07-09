import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MyColorContext from "./Context";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import './Navbar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';



const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(113, 57, 204)",
    },
    text: {
      primary: "rgb(113, 57, 204)",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "30%",
          marginBottom: "10px",
        },
        input: {
          padding: "20%",
          height: "20%",
          boxSizing: "border-box",
          "&::before": {
            borderBottom: "2px solid rgb(113, 57, 204)",
          },
          "&::after": {
            borderBottom: "2px solid rgb(113, 57, 204)",
          },
        },
        outlinedInput: {
          padding: "20px",
        },
      },
    },
  },
});

const Donates = (props) => {
  const { handleSubmit, register, reset } = useForm();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const notifySuccess = () =>
  toast.success("The donation has been successfully added", {
    bodyClassName: "toast-body-success",
    className: "toast-success",
  });
  
  const [myContributions, setMyContributions] = useState({
    name: "",
    donationAmount: 0,
    deditation: "",
    date: new Date(),
  });
  const [myErrors, setMyErrors] = useState({
    name: "",
    donationAmount: "",
  });



  const change = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setMyContributions((prev) => ({ ...prev, [inputName]: inputValue }));
    validate(); // בכל שינוי בתיבת הטקסט, תבצע בדיקת התקינות
  };

  const validate = () => {
    let err = {};
    if (!myContributions.name) err.name = "Name is a required field";
    if (!myContributions.donationAmount) err.donationAmount = "What is the amount";
    setMyErrors(err);
    return err;
  };

  const save = () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      const contribution = { ...myContributions };
      props.addContribution(contribution);
      console.log(contribution);
      setMyContributions({
        name: "",
        donationAmount: 0,
        deditation: "",
        date: new Date(),
      });
      reset();

      setShowSuccessMessage(true);
      notifySuccess();
      setTimeout(() => {
        setShowSuccessMessage(false);

      }, 3000);
    } else {
      setShowSuccessMessage(false);
      setMyErrors(errors);
      
    }
  };
  return (
    <>
      <form className="formDonates" onSubmit={handleSubmit(save)}>
        <div className="textFild"></div>
        <div className="formInputs">
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-basic"
              label="Name:"
              variant="outlined"
              {...register("name")}
              onBlur={change}
              onChange={change}
            />
            {myErrors.name ? (
              <span className="error-message"> {myErrors.name}</span>
            ) : null}
          </ThemeProvider>
        </div>
        <div className="formInputs">
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-basic"
              label="Amouunt for donation:"
              variant="outlined"
              {...register("donationAmount")}
              className="input"
              onBlur={change}
              onChange={change}
            />
            {myErrors.donationAmount ? (
              <span className="error-message">{myErrors.donationAmount}</span>
            ) : null}
          </ThemeProvider>
        </div>
        <div className="formInputs">
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-basic"
              label="Do you whant to add a deditetion:"
              variant="outlined"
              {...register("deditation")}
              className="input"
              onBlur={change}
              onChange={change}
            />
          </ThemeProvider>
        </div>
        <div className="submitButton">
          <Button
            type="submit"
            value="send"
            variant="contained"
          >
            Send
          </Button>
        </div>
      </form>
      <div className="showSuccessMessage">
      {showSuccessMessage && (
        
       <ToastContainer />
      )}
      </div>
    </>
  );
};

export default Donates;

