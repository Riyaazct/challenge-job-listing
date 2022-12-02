import "./Filter.css";

const FilterComponent = ({ filteredList }) => {
  return (
    <div className="FilteredContainer">
      {filteredList.map((item, index) => (
        <div key={index} className="selectedFilterItem">
          <p>{item}</p>
          <img src="images/icon-remove.svg" alt="" />
        </div>
      ))}
    </div>
  );
};

export default FilterComponent;
