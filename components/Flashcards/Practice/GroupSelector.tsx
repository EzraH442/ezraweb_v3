import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { FlashcardData } from "../../../types/flashcards";

interface IGroupSelectorProps {
  flashcardData: FlashcardData;
  onChange: (groups: Set<string>) => void;
}

const GroupSelector: React.FC<IGroupSelectorProps> = ({
  flashcardData,
  onChange,
}) => {
  const [selectedGroups, setSelectedGroups] = useState<Set<string>>(new Set());

  const handleSelect = (groupName: string) => {
    const setCopy = new Set(selectedGroups);

    if (selectedGroups.has(groupName)) {
      setCopy.delete(groupName);
      setSelectedGroups(setCopy);
    } else {
      setCopy.add(groupName);
      setSelectedGroups(setCopy);
    }

    onChange(setCopy);
  };

  return (
    <div className="pb-4">
      {flashcardData.map(({ groupName }) => {
        return (
          <div key={groupName} className="flex items-center">
            <input type="checkbox" onChange={() => handleSelect(groupName)} />
            <p
              className="inline-block px-4 overflow-ellipsis whitespace-nowrap overflow-hidden"
              style={{ maxWidth: 300 }}
              data-tip
              data-for={groupName}
            >
              {groupName}
            </p>
            <ReactTooltip
              id={groupName}
              place="bottom"
              effect="solid"
              type="dark"
              border
              textColor="#000000"
              backgroundColor="#F0F0F0"
              borderColor="black"
            >
              <span>{groupName}</span>
            </ReactTooltip>
          </div>
        );
      })}
    </div>
  );
};
export default GroupSelector;
