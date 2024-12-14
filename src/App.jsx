import { useState, useEffect } from "react";
import "./App.css";
import { PRODUCT_API_ENDPOINT } from "./AppConstants";
import ItemEditModal from "./components/ItemEditModal.jsx";
import useFetch from "./customHooks/useFetch";
import Table from "./components/Table";
import { transformToWidget } from "./UtilHelper";
import Widgets from "./components/Widgets";

function App() {
  const { data, loading, error } = useFetch(PRODUCT_API_ENDPOINT);
  const [selectedItem, setSelectedItem] = useState();
  const [rows, setRows] = useState([]);
  const [widgetValues, setWidgetValues] = useState([]);
  const [adminView, setAdminView] = useState(true);

  useEffect(() => {
    if (!data?.length) return;
    setRows(data);
    setWidgetValues(transformToWidget(data));
  }, [data]);

  function saveItem() {
    data[selectedItem.index] = selectedItem;
    setRows([...data]);
    setWidgetValues(transformToWidget(data));
    setSelectedItem(null)
  }

  return (
    <div className="main">
      <div className="bar">
        <span>Admin</span>
        <input
          type="checkbox"
          checked={adminView}
          onChange={(e) => setAdminView(e.target.checked)}
        />
      </div>
      <div className="heading">Inventory Stats</div>
      <Widgets widgetValobj={widgetValues} />
      <Table
        rows={rows}
        setRows={setRows}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        setWidgetValues={setWidgetValues}
        adminView = {adminView}
      />
      {selectedItem && (
        <ItemEditModal
          saveItem={saveItem}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
}

export default App;
