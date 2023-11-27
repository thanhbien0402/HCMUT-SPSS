import "./PrinterLog.css";
import { ReturnButton } from "../../Components";
const PrinterLog = () => {
  return (
    <div className="printerlog">
      <div className="printerlog-title">
        <h1>Lịch sử máy in</h1>
        <ReturnButton />
      </div>
    </div>
  );
};

export default PrinterLog;
