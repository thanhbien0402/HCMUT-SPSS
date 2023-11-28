import "./StudentLog.css";
import { filterPrintingLogs } from '../../Controllers/log_controller'
import { ReturnButton } from "../../Components";
import { PrintingLogsTable } from "../../Components";
const StudentLog = () => {
  const filteredPrintingLogs = filterPrintingLogs();
  console.log(filterPrintingLogs)
  return (
    <div className="studentlog">
      <div className="studentlog-title">
        <h1>Lịch sử SV</h1>
        <ReturnButton />
      </div>
      <PrintingLogsTable printingLogs={filteredPrintingLogs} />
    </div>
  );
};

export default StudentLog;
