import React, { createContext, useContext, useState } from "react";

type SelectionContextType = {
  selectedItems: Set<number>;
  setSelectedItems: React.Dispatch<React.SetStateAction<Set<number>>>;
};

const SelectionContext = createContext<SelectionContextType | undefined>(
  undefined
);

export const SelectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  return (
    <SelectionContext.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </SelectionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
};
