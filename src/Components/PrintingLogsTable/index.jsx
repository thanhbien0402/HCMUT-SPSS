import "./PrintingLogsTable.css";
const PrintingLogsTable = ({ printingLogs }) => {
    return (
      <div className="printing-logs-table-container">
        <table className="printing-logs-table">
          <thead>
            <tr>
              <th>MSSV</th>
              <th>PID</th>
              <th>Tên File</th>
              <th>Bắt đầu</th>
              <th>Kết thúc</th>
              <th>Ngày</th>
              <th>Số trang</th>
            </tr>
          </thead>
          <tbody>
            {printingLogs.map((log) => (
              <tr key={log.id}>
                <td>{log.sid}</td>
                <td>{log.pid}</td>
                <td>{log.file_name}</td>
                <td>{log.start}</td>
                <td>{log.stop}</td>
                <td>{log.date}</td>
                <td>{log.page_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PrintingLogsTable;