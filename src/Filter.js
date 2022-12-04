import { useState } from "react";
import data from "./data/data.json";
import "./Filter.css";

const FilterComponent = ({
  filteredList,
  setFilteredList,
  setJobData,
  isActive,
  setIsActive,
}) => {
  return (
    <div className={!isActive ? "FilteredContainer" : null}>
      {filteredList.map((item, index) => (
        <div key={index} className="selectedFilterItem">
          <p>{item}</p>
          <img src="images/icon-remove.svg" alt="" />
        </div>
      ))}

      <p
        className={isActive ? "hideClearElement" : null}
        onClick={(e) => {
          setFilteredList([]);
          setJobData(data);
          setIsActive(true);
        }}
      >
        Clear
      </p>
    </div>
  );
};

export default FilterComponent;
