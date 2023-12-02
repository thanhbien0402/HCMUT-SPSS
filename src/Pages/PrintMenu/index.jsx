import "./PrintMenu.css";
import { NoPaper, Popup } from "../../Components";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Print = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonNoPaper, setButtonNoPaper] = useState(false);
  const navigate = useNavigate();
  const reUpdateAmount = () => {
    if (props.amount === 0) {
      setButtonNoPaper(true);
      console.log(buttonNoPaper);
    } else {
      props.setTrigger((prevAmount) => {
        const updatedAmount = prevAmount - 1;
        navigate("/");
        return updatedAmount < 0 ? 0 : updatedAmount;
      });
    }
  };
  return (
    <div className="print">
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
      <NoPaper trigger={buttonNoPaper} setTrigger={setButtonNoPaper} />
      <div className="print-title">
        <h1>In</h1>
      </div>
      <div className="print-window">
        <img src="./Images/Group 36.png" alt="printwindow" />
      </div>
      <div className="print-button">
        <h1 onClick={reUpdateAmount}>In</h1>
        <h1 onClick={() => setButtonPopup(true)}>Hủy in</h1>
      </div>
    </div>
  );
};

export default Print;
