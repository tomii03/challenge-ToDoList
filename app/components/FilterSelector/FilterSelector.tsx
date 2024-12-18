"use client";

import React from "react";
import { useFilter } from "../../Context/FilterContext";

const FilterSelector = () => {
  const { selectedFilter, setSelectedFilter } = useFilter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <select
      className="select select-info w-full max-w-xs"
      value={selectedFilter}
      onChange={handleChange}
    >
      <option disabled value="">
        Filter
      </option>
      <option value="all">All</option>
      <option value="complete">Complete</option>
      <option value="incomplete">Incomplete</option>
    </select>
  );
};

export default FilterSelector;
