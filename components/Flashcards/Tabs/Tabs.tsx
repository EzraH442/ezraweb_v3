/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import Button from "../Button/Button";

type ITabsProps = {
  tabData: {
    id: string;
    component: React.ReactNode;
  }[];
};

const Tabs: React.FC<ITabsProps> = ({ tabData }) => {
  const [selectedTab, setSelectedTab] = useState(tabData[0].id);

  const getSelectedComponent = () => {
    return tabData.find(({ id }) => id === selectedTab)?.component;
  };

  return (
    <div>
      <div className="flex items-center">
        {tabData.map(({ id }) => {
          return (
            <div key={id} className="px-2">
              <Button label={id} onClick={() => setSelectedTab(id)} />
            </div>
          );
        })}
      </div>
      {getSelectedComponent()}
    </div>
  );
};

export default Tabs;
