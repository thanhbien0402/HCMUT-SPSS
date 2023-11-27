import "./PrintReport.css";
import { ReturnButton } from "../../Components";
const PrintReport = () => {
  return (
    <div className="printreport">
      <div className="printreport-title">
        <h1>Báo cáo in ấn</h1>
        <ReturnButton />
      </div>
    </div>
  );
};

export default PrintReport;
