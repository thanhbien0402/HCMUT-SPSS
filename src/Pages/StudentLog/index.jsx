import "./StudentLog.css";
import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { filterPrintingLogs } from '../../Controllers/log_controller';
import { ReturnButton } from "../../Components";
import { PrintingLogsTable } from "../../Components";
const StudentLog = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [studentId, setStudentId] = useState('');
  const [filteredPrintingLogs, setFilteredPrintingLogs] = useState(() => filterPrintingLogs('', '', null, null));

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Prevent the default behavior of the Enter key (e.g., form submission)
      event.preventDefault();
      // Update the table when Enter key is pressed
      updateTable(studentId, startDate, endDate);
    }
  };

  const updateTable = (studentId, startDate, endDate) => {
    // Example: Filter logs for the entered student ID
    const pid = ''
    const logs = filterPrintingLogs(studentId, pid, startDate, endDate);
    setFilteredPrintingLogs(logs);
  };

  return (
    <div className="studentlog">
      <div className="studentlog-title">
        <h1>Lịch sử SV</h1>
        <ReturnButton />
      </div>

      <div className="filter">
        <div className="input-container">
            <label htmlFor="studentId">MSSV</label>

            <input 
              type="text" 
              id="studentId" 
              name="studentId" 
              placeholder="Enter Student ID" 
              value={studentId}
              onChange={(event) => setStudentId(event.target.value)}
              onKeyDown={handleKeyDown}
            />

        </div>

        <div className="input-container">
          <label htmlFor="selectAllStudent">Tất cả SV</label>
          <input type="checkbox" id="selectAllStudent" name="selectAllStudent" />
        </div>

        <div className="filter">
          <div className="input-container">
            <label htmlFor="startDate">From</label>
              <DatePicker
                  id="startDate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Ngày bắt đầu"
              />
          </div>
          <div className="input-container">
            <label htmlFor="endDate">To</label>
              <DatePicker
                  id="endDate"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Ngày kết thúc"
              />
          </div>
          <div className="input-container">
            <label htmlFor="selectAllDates">Tất cả các ngày</label>
            <input
                type="checkbox"
                id="selectAllDates"
                name="selectAllDates"
            />
          </div>
        </div>
      </div>
      <PrintingLogsTable printingLogs={filteredPrintingLogs} />
    </div>
  );
};

export default StudentLog;
