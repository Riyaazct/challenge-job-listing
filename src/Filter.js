import { useState } from "react";
import data from "./data/data.json";
import "./Filter.css";

const FilterComponent = ({
  filteredList,
  setFilteredList,
  setJobData,
  jobData,
  isActive,
  setIsActive,
}) => {
  const handleOnClick = (e, index) => {
    const elementName =
      e.target.offsetParent.children[index].innerText;

    let result = data.filter(
      (job) =>
        !job.role.includes(elementName) ||
        !job.level.includes(elementName) ||
        !job.languages.includes(elementName) ||
        !job.tools.includes(elementName)
    );
    setJobData(result, ...jobData);
    setFilteredList(() =>
      filteredList.filter((name) => name !== elementName)
    );
  };

  return (
    <div
      className={
        filteredList.length !== 0
          ? "FilteredContainer"
          : "hideElement"
      }
      /*className={!isActive ? "FilteredContainer" : ""}*/
    >
      {filteredList.map((item, index) => (
        <div key={index} className="selectedFilterItem">
          <p>{item}</p>
          <img
            src="images/icon-remove.svg"
            alt=""
            onClick={(e) => handleOnClick(e, index)}
          />
        </div>
      ))}

      <p
        onClick={(e) => {
          setFilteredList([]);
          setJobData(data);
          setIsActive(true);
        }}
      >
        <span>Clear</span>
      </p>
    </div>
  );
};

export default FilterComponent;
