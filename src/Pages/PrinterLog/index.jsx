import "./PrinterLog.css";
import DatePicker from 'react-datepicker';
import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { filterPrintingLogs } from '../../Controllers/log_controller';
import { ReturnButton } from "../../Components";
import { PrintingLogsTable } from "../../Components";
const PrinterLog = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [printerId, setPrinterId] = useState('');
  const [filteredPrintingLogs, setFilteredPrintingLogs] = useState(() => filterPrintingLogs('', '', null, null));
  const [selectAllPrinters, setSelectAllPrinters] = useState(false);
  const [selectAllDates, setSelectAllDates] = useState(false);

  const handleSelectAllPrintersChange = (event) => {
    if (!selectAllPrinters) {
      setPrinterId('')
    }
    setSelectAllPrinters(event.target.checked);
  };

  useEffect(() => {
    // Ensure 'printerId', 'startDate', and 'endDate' are up to date
    updateTable(printerId, startDate, endDate);
  }, [selectAllPrinters, printerId, startDate, endDate]);

  const handleSelectAllDatesChange = (event) => {
    if (!selectAllDates) {
      setStartDate(null)
      setEndDate(null)
    }
    setSelectAllDates(event.target.checked);
  };

  useEffect(() => {
    console.log('Updated selectAllDates:', selectAllDates);
    // Ensure 'printerId', 'startDate', and 'endDate' are up to date
    updateTable(printerId, startDate, endDate);
  }, [selectAllDates, printerId, startDate, endDate]);


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Prevent the default behavior of the Enter key (e.g., form submission)
      event.preventDefault();
      // Update the table when Enter key is pressed
      updateTable(printerId, startDate, endDate);
    }
  };

  const updateTable = (printerId, startDate, endDate) => {
    // Example: Filter logs for the entered printer ID
    const sid = ''
    const logs = filterPrintingLogs(sid, printerId, startDate, endDate);
    setFilteredPrintingLogs(logs);
  };

  return (
    <div className="printerlog">
      <div className="printerlog-title">
        <h1>Lịch sử máy in</h1>
        <ReturnButton />
      </div>

      <div className="filter">
        <div className="input-container">
            <label htmlFor="printerId">Mã số máy in</label>

            <input 
              type="text" 
              id="printerId" 
              name="printerId" 
              placeholder="Nhập mã số máy in" 
              value={printerId}
              onChange={(event) => setPrinterId(event.target.value)}
              onKeyDown={handleKeyDown}
            />

        </div>

        <div className="input-container">
          <label htmlFor="selectAllPrinter">Tất cả máy in</label>
          <input 
            type="checkbox" 
            id="selectAllPrinter" 
            name="selectAllPrinter"
            checked={selectAllPrinters}
            onChange={handleSelectAllPrintersChange}
          />
        </div>

        <div className="filter">
          <div className="input-container">
            <label htmlFor="startDate">From</label>
              <DatePicker
                  id="startDate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  onKeyDown={handleKeyDown}
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
                  onKeyDown={handleKeyDown}
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

export default PrinterLog;
