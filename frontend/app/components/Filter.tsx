import React from "react";

const FilterComponent = ({ options, onSelectFilter }: any) => {
  const handleFilterChange = (event: any) => {
    const selectedFilter = event.target.value;
    onSelectFilter(selectedFilter);
  };

  return (
    <div className="w-20 border border-slate-950 ">
      <select className="text-white border border-slate-1000 bg-slate-950 pr-8" onChange={handleFilterChange}>
        {options.map((option: any, index: any) => (<>
          <option key={index} value={option.Value ? option.Value : option.Name}>
            {option.Name}
          </option>

        </>
        ))}
      </select>
    </div>

  );
};

export default FilterComponent;
