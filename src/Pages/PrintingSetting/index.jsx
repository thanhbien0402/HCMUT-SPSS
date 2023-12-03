import React, { useState } from 'react';
import './PrintingSetting.css';
import { ReturnButton } from "../../Components";

function MultiSelectDropdown() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`custom-select ${isOpen ? 'open' : ''}`}>
      <div className="select-selected" onClick={toggleDropdown}>
        {selectedItems.length > 0 ? selectedItems.join(', ') : 'Chọn mục'}
      </div>
      <div className="select-items">
        {['PDF', 'WORD', 'PPT', 'EXCEL'].map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              value={item}
              checked={selectedItems.includes(item)}
              onChange={handleCheckboxChange}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function PrintingSetting() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const applyChanges = () => {
    setShowSuccessPopup(true);
    setSelectedItems([]);
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 500);
  };

  const deleteSelected = () => {

  };

  return (
    <div className="printingsetting">
      <div className="printingsetting-header">
        <h1>Cài đặt in ấn</h1>
        <ReturnButton/>
      </div>

      <div className="setting-section">
        <div className="setting-item">
          <div class="grid-container">
            <div class="grid-item1">
              <label htmlFor="issue-date">Ngày cấp giấy định kỳ</label>
            </div>
            <div class="grid-item">
            <input type="date" id="issue-date" name="issue-date" />            
            </div>
            <div class="grid-item">
            <button onClick={applyChanges} className="btn_add"> Xác nhận </button>
            </div>
            <div class="grid-item">
            <button onClick={deleteSelected} className="btn_delete"> Xoá </button>
            </div>
          </div>
        
          <div class="grid-container">
            <div class="grid-item1">
              <label htmlFor="issue-date">Số giấy cấp định </label>
            </div>
            <div class="grid-item">
              <input type="number" id="issue-number" name="issue-number" />            
            </div>
            <div class="grid-item">
              <button onClick={applyChanges} className="btn_add"> Xác nhận </button>
            </div>
            <div class="grid-item">
              <button onClick={deleteSelected} className="btn_delete"> Xoá </button>
            </div>
          </div> 
        
          <div class="grid-container">
            <div class="grid-item1">
              <label htmlFor="issue-date">Định dạng file cho phép </label>
            </div>
            <div class="grid-item">
              <MultiSelectDropdown selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            </div>
            <div class="grid-item">
              <button onClick={applyChanges} className="btn_add"> Xác nhận </button>
            </div>
            <div class="grid-item">
              <button onClick={deleteSelected} className="btn_delete"> Xoá </button>
            </div>
          </div> 
        </div>
      </div>
      {/* Success Popup */}
      {showSuccessPopup && (
      <div className="success">
        <p>Xác nhận thành công!</p>
      </div>)}
    </div>
  );
}

export default PrintingSetting;
