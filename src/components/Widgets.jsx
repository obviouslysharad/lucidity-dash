import React from "react";
import { widgetConstants } from "../AppConstants";

const Widgets = ({ widgetValobj }) => {
  return (
    <div className="widget-main-container">
      {widgetConstants.map((widget) => (
        <div className="widget-container">
          <div>{widget.heading}</div>
          <div className= "widget-value">{widgetValobj[widget.id]}</div>
        </div>
      ))}
    </div>
  );
};

export default Widgets;
