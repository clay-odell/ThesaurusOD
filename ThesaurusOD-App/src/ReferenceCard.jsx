
import { useState } from "react";
import SearchBar from "./SearchBar";

const ReferenceCard = () => {
  const [selectedType, setSelectedType] = useState("thesaurus");

  const handleClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="p-4">
        <h4>Thesaurus OnDemand</h4>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`py-2 px-4 rounded ${selectedType === 'thesaurus' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleClick('thesaurus')}
        >
          Thesaurus
        </button>
      </div>
      <SearchBar />
    </div>
  );
};

export default ReferenceCard;
