import React, { createContext, useContext, ReactNode } from "react";
interface Groups {
  [key: string]: string[];
}
const initialGroups: Groups = {
  group1: ["15"],
  group2: ["48", "35", "04", "32", "40", "49", "08", "56", "30"],
  group3: ["12", "13", "45", "37", "47", "28", "05", "22", "01", "06"],
  group4: [
    "23",
    "33",
    "50",
    "25",
    "09",
    "44",
    "36",
    "42",
    "34",
    "10",
    "24",
    "51",
    "39",
    "21",
    "18",
    "17",
    "55",
    "27",
    "19",
    "46",
    "38",
    "31",
    "54",
    "29",
    "20",
    "16",
    "26",
    "41",
    "53",
    "02",
  ],
  group5: [],
};

const GroupContext = createContext<Groups>(initialGroups);

interface GroupProviderProps {
  children: ReactNode;
}

const GroupProvider: React.FC<GroupProviderProps> = ({ children }) => {
  return (
    <GroupContext.Provider value={initialGroups}>
      {children}
    </GroupContext.Provider>
  );
};

const useGroups = () => useContext(GroupContext);

export { GroupProvider, useGroups };
