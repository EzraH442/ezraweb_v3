import React, { useState } from "react";
import { FlashcardData } from "../../types/flashcards";

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
    <div>
      {flashcardData.map(({ groupName }) => {
        return (
          <div key={groupName}>
            <p className="inline-block px-4">{groupName}</p>
            <input type="checkbox" onChange={() => handleSelect(groupName)} />
          </div>
        );
      })}
    </div>
  );
};
export default GroupSelector;
