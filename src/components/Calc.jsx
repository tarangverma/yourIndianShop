import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../stylesheet/dashboard/Calc.css";
import Tilt from "react-parallax-tilt";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Calc = () => {
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    const weightValue = parseFloat(weight);
    const lengthValue = parseFloat(length);
    const widthValue = parseFloat(width);
    const heightValue = parseFloat(height);
    const adminGivenPrice = 10;
    const volumetricWeight = (lengthValue * widthValue * heightValue) / 5000;
    const calculatedPrice =
      Math.max(weightValue, volumetricWeight) * adminGivenPrice;

    setPrice(calculatedPrice);
    handleClickOpen();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="dash-calc">
      <div className="t-title">
        <span id="blue"> Basic</span>
        <span id="org"> Shipment</span>
        <span id="org"> Cost</span>
        <span id="blue"> Calculator</span>
      </div>
      <div className="cal-box">
        <div className="sh-top">
          <div className="sh-l">
            <Button
              // variant="outlined"
              className="btn btn-b btn-pg"
              onClick={calculatePrice}
            >
              Calculate Now
            </Button>
            {/* <div className="btn btn-b" onClick={calculatePrice}>
              Calculate Now
            </div> */}
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
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </Box>
            <select name="" id="">
              <option value="-1" selected>
                Choose Country
              </option>
              <option value="7">USA</option>
              <option value="6">INDIA</option>
              <option value="2">NEPAL</option>
              <option value="1">PAKISTAN</option>
              <option value="4">UAE</option>
              <option value="9">CANADA</option>
            </select>

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
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                  <strong>X</strong>
                  <TextField
                    className="nor-feild"
                    required
                    id="outlined-required"
                    label="Width (cm)"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />
                  <strong>X</strong>
                  <TextField
                    className="nor-feild"
                    required
                    id="outlined-required"
                    label="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
              </Box>
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
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="Estimated Price:"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Estimated Shipping Cost ?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                The estimated price is based on Product weight ({weight}kgs) &
                <br /> dimensions of product({height}cmx{width}cmx{length}cm) is
              </DialogContentText>
              <h1 id="prc">${price.toFixed(2)} </h1>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Calc;
// <div className="sh-bot">
//   <div className="price">
//     <strong>
//       Estimated Price:
//       <span className="price-value">${price.toFixed(2)}</span>
//     </strong>
//     {showPopup && (
//       <div className="popup" onClick={closePopup}>
//         <p>The estimated price is based on your inputs:</p>
//         {/* <ul>
//           <li>Weight (kg): {weight}</li>
//           <li>Length (cm): {length}</li>
//           <li>Width (cm): {width}</li>
//           <li>Height (cm): {height}</li>
//           <li>Price ($): {price.toFixed(2)}</li>
//         </ul> */}
//         <h1>Price ($): {price.toFixed(2)}</h1>
//         <button className="btn btn-r">Close</button>
//       </div>
//     )}
//   </div>
// </div>;
