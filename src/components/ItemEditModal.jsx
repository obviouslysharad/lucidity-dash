import React from "react";
import { editableColumns } from "../AppConstants";

const ItemEditModal = ({ selectedItem, saveItem, setSelectedItem }) => {
  function closeModal() {
    setSelectedItem(null);
  }

  function editItem(e, col) {
    selectedItem[col] = e.target.value;
    setSelectedItem({ ...selectedItem });
  }

  function disabledItemWrapper(cb) {
    if (selectedItem.disabled) return;
    cb();
  }

  return (
    <>
      <div className="backdrop"></div>
      <div className="modal">
        <div>
          <div className="editHeading">Edit product</div>
          <div className="editProductName">{selectedItem.name}</div>
        </div>
        <div className="inputContainer">
          {editableColumns.map((col) => (
            <div className="editInputContainer">
              <div className="onlyCapital">{col}</div>
              <input
                className="editInput"
                disabled={selectedItem.disabled}
                onChange={(e) => editItem(e, col)}
                value={selectedItem[col]}
              />
            </div>
          ))}
        </div>
        <div className="btnsContainer">
          <span className="baseBtn" onClick={closeModal}>
            Cancel
          </span>
          <span
            className="baseBtn saveBtn"
            style={selectedItem.disabled ? { color: "grey" } : {}}
            onClick={() => disabledItemWrapper(saveItem)}
          >
            Save
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemEditModal;
