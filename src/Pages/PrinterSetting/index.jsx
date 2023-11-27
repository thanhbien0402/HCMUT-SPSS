import "./PrinterSetting.css";
import { ReturnButton } from "../../Components";
const PrinterSetting = () => {
  return (
    <div className="printsetting">
      <div className="printsetting-title">
        <h1>Cài đặt máy in</h1>
        <ReturnButton />
      </div>
    </div>
  );
};

export default PrinterSetting;
