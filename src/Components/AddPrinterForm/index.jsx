import React, { useState, useEffect } from "react";
import "./AddPrinterForm.css";

const AddPrinterForm = ({
  addPrinter,
  editPrinter,
  cancelAddition,
  editedPrinter,
}) => {
  const [newPrinter, setNewPrinter] = useState({
    brand: "",
    model: "",
    description: "",
    location: "",
    id: "",
  });

  useEffect(() => {
    if (editedPrinter) {
      setNewPrinter(editedPrinter);
    } else {
      // Reset the form if there's no printer to edit
      setNewPrinter({
        brand: "",
        model: "",
        description: "",
        location: "",
        id: "",
      });
    }
  }, [editedPrinter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPrinter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedPrinter) {
      editPrinter(newPrinter); // Use editPrinter prop when editing
    } else {
      addPrinter(newPrinter); // Use addPrinter prop when adding
    }
    cancelAddition(); // Close the form
  };

  const handleCancel = () => {
    cancelAddition();
  };

  return (
    <div className="add-printer-form">
      <form onSubmit={handleSubmit}>
        {editedPrinter && (
          <>
            <label className="form-label">PID</label>
            <input
              type="text"
              name="id"
              value={newPrinter.id}
              disabled // Disable editing of ID
            />
          </>
        )}
        <label className="form-label">Hãng</label>
        <input
          type="text"
          name="brand"
          value={newPrinter.brand}
          onChange={handleChange}
        />
        <label className="form-label">Mẫu</label>
        <input
          type="text"
          name="model"
          value={newPrinter.model}
          onChange={handleChange}
        />
        <label className="form-label">Mô tả</label>
        <input
          type="text"
          name="description"
          value={newPrinter.description}
          onChange={handleChange}
        />
        <label className="form-label">Vị trí</label>
        <input
          type="text"
          name="location"
          value={newPrinter.location}
          onChange={handleChange}
        />
        {/* Display ID field only during modification */}

        <div className="form-actions">
          <button type="submit" className="form-button add-button">
            {editedPrinter ? "Lưu" : "Thêm"}
          </button>
          <button
            type="button"
            className="form-button cancel-button"
            onClick={handleCancel}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPrinterForm;
