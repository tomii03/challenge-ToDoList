"use client";

import React, { useContext, useState, ReactNode, createContext } from "react";

interface FilterContextType {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const FilterContext = createContext<FilterContextType | null>(null);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  return (
    <FilterContext.Provider value={{ selectedFilter, setSelectedFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter debe ser usado dentro de un FilterProvider");
  }
  return context;
};
