import "./PrintReport.css";
import DatePicker from 'react-datepicker';
import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { summaryPrintingLogs } from '../../Controllers/log_controller';
import { ReturnButton } from "../../Components";
import { PrintingLogsTable } from "../../Components";
import vi from 'date-fns/locale/vi';

const PrintReport = () => {
  const today = new Date();
  const curr_year = today.getFullYear();
  const curr_month = today.getMonth();
  const [selectedDate, setSelectedDate] = useState(today);
  const [summarizedPrintingLogs, setSummarizedPrintingLogs] = useState(() => summaryPrintingLogs(curr_month, curr_year)); 
  const [selectAnnualReport, setSelectAnnualReport] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    updateTable(date);
  };
  const updateTable = (date) => {
    const month = selectAnnualReport ? null : date.getMonth();
    const year = date.getFullYear()
    const logs = summaryPrintingLogs(month, year);
    setSummarizedPrintingLogs(logs);
  };
  
  useEffect (() => {
    updateTable(selectedDate)
  }, [selectAnnualReport])
  
  return (
    <div className="printreport">
      <div className="printreport-title">
        <h1>Báo cáo in ấn</h1>
        <ReturnButton />
      </div>
      <div className="filter">
          <div className="input-container">
            <label htmlFor="date">Thời gian </label>
            {selectAnnualReport ? (
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy"
                locale={vi}
                showYearPicker
              />
            ) : (
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/yyyy"
                locale={vi}
                showMonthYearPicker
              />
            )}
              
          </div>
          <div className="input-container">
            <label htmlFor="selectAnnualReport">Báo cáo năm</label>
            <input
                type="checkbox"
                id="selectAnnualReport"
                name="selectAnnualReport"
                checked={selectAnnualReport}
                onChange={(event) => setSelectAnnualReport(event.target.checked)}
            />
          </div>
        </div>

      <PrintingLogsTable printingLogs={summarizedPrintingLogs} />
    </div>
  );
};

export default PrintReport;