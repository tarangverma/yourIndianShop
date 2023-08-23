import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../stylesheet/dashboard/Calc.css";
import Tilt from "react-parallax-tilt";
const Calc = () => {
  return (
    <div id="dash-calc">
      <div className="t-title">
        <span id="blue"> Basic</span>
        <span id="org"> Shipment</span>
        <span id="org"> Cost</span>
        <span id="blue"> Calculator</span>
      </div>
      {/* <div className="t-title"></div> */}
      <div className="cal-box">
        <div className="sh-top">
          <div className="sh-l">
            <div className="btn btn-b">Calculate Now</div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  className="nor-feild"
                  required
                  id="outlined-required"
                  label="Weight (kg)"
                  defaultValue=""
                />{" "}
                <TextField
                  className="err-feild"
                  error
                  id="outlined-error-helper-text"
                  label="How heavy is your item? "
                  defaultValue=""
                  helperText="Please enter a weight up to 70 kg."
                />
              </div>
            </Box>
            <h1>Weight</h1>
            <div className="sh-m">
              <Tilt tiltMaxAngleX="24" tiltMaxAngleY="15">
                <img
                  src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/cur.png"
                  alt=""
                />
              </Tilt>
            </div>
          </div>
          <div className="sh-r">
            <h1>Dimensions</h1>
            <div className="dim">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "20ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    className="nor-feild"
                    required
                    id="outlined-required"
                    label="Length (cm)"
                    defaultValue=""
                  />
                  <TextField
                    className="err-feild"
                    error
                    id="outlined-error-helper-text"
                    label="How long is your item? "
                    defaultValue=""
                    helperText="Please enter a length up to 120 cm to proceed."
                  />
                  <strong>X</strong>
                  <TextField
                    className="nor-feild"
                    required
                    id="outlined-required"
                    label="Width (cm)"
                    defaultValue=""
                  />
                  <TextField
                    className="err-feild"
                    error
                    id="outlined-error-helper-text"
                    label="How wide is your item? "
                    defaultValue=""
                    helperText="Please enter a width up to 80 cm to proceed."
                  />
                  <strong>X</strong>
                  <TextField
                    className="nor-feild"
                    required
                    id="outlined-required"
                    label="Length (cm)"
                    defaultValue=""
                  />
                  <TextField
                    className="err-feild"
                    error
                    id="outlined-error-helper-text"
                    label="How long is your item? "
                    defaultValue=""
                    helperText="Please enter a height up to 80 cm to proceed."
                  />
                </div>
              </Box>{" "}
            </div>
            <h1>Not sure about the sizes?</h1>
            <div className="demo-box">
              <div>
                <div className="olay">
                  <img
                    src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/svg/1.jpg"
                    alt=""
                  />
                </div>
                <div className="olay">
                  <img
                    src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/svg/2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="olay">
                  <img
                    src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/svg/3.jpg"
                    alt=""
                  />
                </div>
                <div className="olay">
                  <img
                    src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/svg/4.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sh-bot"></div>
      </div>
    </div>
  );
};

export default Calc;
