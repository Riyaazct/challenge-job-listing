import { useState } from "react";
import data from "./data/data.json";
import "./Filter.css";

const FilterComponent = ({
  filteredList,
  setFilteredList,
  setJobData,
  classInUse,
  setClassInUse,
}) => {
  return (
    <div className="FilteredContainer">
      {filteredList.map((item, index) => (
        <div key={index} className="selectedFilterItem">
          <p>{item}</p>
          <img src="images/icon-remove.svg" alt="" />
        </div>
      ))}

      <p
        className={classInUse}
        onClick={(e) => {
          setFilteredList([]);
          setJobData(data);
          setClassInUse("hideClearElement");
        }}
      >
        Clear
      </p>
    </div>
  );
};

export default FilterComponent;
