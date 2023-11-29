import React, { useState } from "react";
import "./PrinterSetting.css";
import { ReturnButton } from "../../Components";
import { AddPrinterForm } from "../../Components";

const PrinterSetting = () => {
  const [printers, setPrinters] = useState([
    {
      id: "P001",
      brand: "HP",
      model: "HMC23",
      description: "Black, colour",
      location: "CS2, H1-203",
      active: false,
      visible: true,
    },
    {
      id: "P002",
      brand: "HP",
      model: "GJE43",
      description: "Grey, greyscale",
      location: "CS1, B4-305",
      active: true,
      visible: true,
    },
    {
      id: "P003",
      brand: "Bosch",
      model: "FJEK23",
      description: "Black, colour",
      location: "CS2, H2-101",
      active: true,
      visible: true,
    },
    {
      id: "P004",
      brand: "HP",
      model: "FKD232",
      description: "Grey, greyscale",
      location: "CS1, C5-101",
      active: false,
      visible: true,
    },
    // ... other printers
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editPrinter, setEditPrinter] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [pageTitle, setPageTitle] = useState("Cài đặt máy in");
  const addPrinter = (newPrinter) => {
    setPrinters([
      ...printers,
      {
        ...newPrinter,
        id: `P00${printers.length + 1}`,
        active: false,
        visible: true,
      },
    ]);
  };
  const handleShowAddForm = () => {
    setShowAddForm(true);
    setEditPrinter(null);
    setPageTitle("Thêm máy in");
  };

  // Function to hide the add printer form
  const handleHideAddForm = () => {
    setShowAddForm(false); // This should hide the form
    setEditPrinter(null); // Reset any edit state
    setPageTitle("Cài đặt máy in");
  };

  const toggleSelectPrinter = (printerId) => {
    setPrinters(
      printers.map((printer) =>
        printer.id === printerId
          ? { ...printer, selected: !printer.selected }
          : printer
      )
    );
  };
  const updatePrinter = (updatedPrinter) => {
    setPrinters((prevPrinters) =>
      prevPrinters.map((printer) =>
        printer.id === updatedPrinter.id ? { ...updatedPrinter } : printer
      )
    );
    handleHideAddForm(); // Close the form after updating
  };

  const handleEditPrinter = (printerId) => {
    const printerToEdit = printers.find((printer) => printer.id === printerId);
    if (printerToEdit) {
      setEditPrinter(printerToEdit);
      setShowAddForm(true);
      setPageTitle("Chỉnh sửa thông tin máy in");
    } else {
      // Handle the case where the printer is not found
      console.error("Printer not found.");
    }
  };

  const applyChanges = () => {
    setPrinters(
      printers.map((printer) => ({
        ...printer,
        active: printer.selected ? true : printer.active,
      }))
    );
    setShowSuccessPopup(true);

    // Hide the success popup after a delay (e.g., 3 seconds)
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  };
  const deleteSelected = () => {
    setPrinters(printers.filter((printer) => !printer.selected));
  };

  return (
    <div className="printsetting">
      <div className="printsetting-header">
        <h1>{pageTitle}</h1>
        <ReturnButton />
      </div>
      {showAddForm ? (
        // Show the form if showAddForm is true
        <AddPrinterForm
          addPrinter={addPrinter} // For adding new printer
          editPrinter={updatePrinter} // For editing existing printer
          cancelAddition={handleHideAddForm}
          editedPrinter={editPrinter}
        />
      ) : (
        <>
          <a
            href="#addPrinter"
            className="add-printer-link"
            onClick={handleShowAddForm}
          >
            Thêm máy in
          </a>
          <table className="printsetting-table">
            <thead>
              <tr>
                <th>Kích hoạt</th>
                <th>PID</th>
                <th>Hãng</th>
                <th>Mẫu</th>
                <th>Mô tả</th>
                <th>Vị trí</th>
                <th></th> {/* Column for the edit icon */}
              </tr>
            </thead>
            <tbody>
              {printers.map((printer) => (
                <tr key={printer.id}>
                  <td>
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={printer.selected}
                      onChange={() => toggleSelectPrinter(printer.id)}
                    />
                  </td>
                  <td>{printer.id}</td>
                  <td>{printer.brand}</td>
                  <td>{printer.model}</td>
                  <td>{printer.description}</td>
                  <td>{printer.location}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => handleEditPrinter(printer.id)}
                    >
                      <img src="public/Images/pen.svg" alt="Edit" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="printsetting-actions">
            <button onClick={applyChanges} className="form-button add-button">
              Áp dụng
            </button>
            <button
              onClick={deleteSelected}
              className="form-button delete-button"
            >
              Xóa
            </button>
          </div>
          {/* Success Popup */}
          {showSuccessPopup && (
            <div className="success-popup">
              <p>Áp dụng thành công!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PrinterSetting;
