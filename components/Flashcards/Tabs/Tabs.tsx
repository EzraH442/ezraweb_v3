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

  return (
    <div>
      <div className="inline-flex items-center py-2 flex-wrap">
        {tabData.map(({ id }) => {
          return (
            <div key={id} className="px-2 py-2">
              <Button
                label={id}
                onClick={() => setSelectedTab(id)}
                disabled={selectedTab === id}
              />
            </div>
          );
        })}
      </div>
      {tabData.map(({ id, component }) => {
        return (
          <div key={id} hidden={id !== selectedTab}>
            {component}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
