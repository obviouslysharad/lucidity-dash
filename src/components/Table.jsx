import React, { useEffect } from "react";
import { dashboardColumns } from "../AppConstants";
import editSvg from "../svgs/edit.svg";
import deleteSvg from "../svgs/delete.svg";
import eyeSvg from "../svgs/eye.svg";
import { transformToWidget } from "../UtilHelper";

const Table = ({
  rows,
  setRows,
  setSelectedItem,
  setWidgetValues,
  adminView,
}) => {
  function editItem(productObj, index) {
    productObj.index = index;
    setSelectedItem({ ...productObj });
  }

  function disableEdit(index) {
    rows[index].disabled = rows[index]?.disabled ? false : true;
    setRows([...rows]);
  }

  function deleteItem(index) {
    const updatedRows = rows.filter((_, rowI) => rowI != index);
    setRows([...updatedRows]);
    setWidgetValues(transformToWidget(updatedRows));
  }

  function adminWrapper(cb) {
    if (!adminView) return;
    cb();
  }

  return (
    <div className="tableContainer">
      <div className="row">
        {dashboardColumns.map((col) => (
          <div className="value capital">{col}</div>
        ))}
        <div className="value capital">ACTION</div>
      </div>
      {rows.map((productObj, index) => (
        <div className="row">
          {dashboardColumns.map((colKey) => (
            <div className="value">{productObj[colKey]}</div>
          ))}
          <div className={!adminView ? "userBtns value" : "adminBtns value"}>
            <img
              src={editSvg}
              className="icon"
              onClick={() => adminWrapper(() => editItem(productObj, index))}
            />
            <img
              src={eyeSvg}
              className="icon"
              onClick={() => adminWrapper(() => disableEdit(index))}
            />
            <img
              src={deleteSvg}
              className="icon"
              onClick={() => adminWrapper(() => deleteItem(index))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
