import "./StudentLog.css";
import DatePicker from 'react-datepicker';
import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { filterPrintingLogs } from '../../Controllers/log_controller';
import { ReturnButton } from "../../Components";
import { PrintingLogsTable } from "../../Components";
import vi from 'date-fns/locale/vi';

const StudentLog = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [studentId, setStudentId] = useState('');
  const [filteredPrintingLogs, setFilteredPrintingLogs] = useState(() => filterPrintingLogs('', '', null, null));
  const [selectAllStudents, setSelectAllStudents] = useState(false);
  const [selectAllDates, setSelectAllDates] = useState(false);

  const handleSelectAllStudentsChange = (event) => {
    if (!selectAllStudents) {
      setStudentId('')
    }
    setSelectAllStudents(event.target.checked);
  };

  useEffect(() => {
    // Ensure 'studentId', 'startDate', and 'endDate' are up to date
    updateTable(studentId, startDate, endDate);
  }, [selectAllStudents, studentId, startDate, endDate]);

  const handleSelectAllDatesChange = (event) => {
    if (!selectAllDates) {
      setStartDate(null)
      setEndDate(null)
    }
    setSelectAllDates(event.target.checked);
  };

  useEffect(() => {
    // Ensure 'studentId', 'startDate', and 'endDate' are up to date
    updateTable(studentId, startDate, endDate);
  }, [selectAllDates, studentId, startDate, endDate]);


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
            <label htmlFor="studentId">MSSV </label>

            <input 
              type="text" 
              id="studentId" 
              name="studentId"
              value={studentId}
              onChange={(event) => setStudentId(event.target.value)}
              onKeyDown={handleKeyDown}
              readOnly={selectAllStudents}
            />

        </div>

        <div className="input-container">
          <label htmlFor="selectAllStudent">Tất cả SV</label>
          <input 
            type="checkbox" 
            id="selectAllStudent" 
            name="selectAllStudent"
            checked={selectAllStudents}
            onChange={handleSelectAllStudentsChange}
          />
        </div>

        <div className="filter">
          <div className="input-container">
            <label htmlFor="startDate">Từ </label>
              <DatePicker
                  id="startDate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                  locale={vi}
                  readOnly={selectAllDates}
              />
          </div>
          <div className="input-container">
            <label htmlFor="endDate">Đến </label>
              <DatePicker
                  id="endDate"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                  locale={vi}
                  readOnly={selectAllDates}
              />
          </div>
          <div className="input-container">
            <label htmlFor="selectAllDates">Tất cả các ngày</label>
            <input
                type="checkbox"
                id="selectAllDates"
                name="selectAllDates"
                checked={selectAllDates}
                onChange={handleSelectAllDatesChange}
            />
          </div>
        </div>
      </div>
      <PrintingLogsTable printingLogs={filteredPrintingLogs} />
    </div>
  );
};

export default StudentLog;
