import { useState } from "react";
import { API_BASE_URL, THESAURUS_KEY } from "../apiConfig";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import randomSynonymGenerator from "./helpers/randomSynonymGenerator";
import RandomCard from "./RandomCard";

const SearchBar = ({ type }) => {
  const [searchBarTerm, setSearchBarTerm] = useState("");
  const [randomSynonyms, setRandomSynonyms] = useState([]);

  const handleChange = (e) => {
    setSearchBarTerm(e.target.value);
  };

  const submitSearch = async (e) => {
    e.preventDefault();
    const searchFormat = `${API_BASE_URL}thesaurus/json/${searchBarTerm}?key=${THESAURUS_KEY}`;

    try {
      const response = await fetch(searchFormat);
      const text = await response.text();

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${text}`);
      }

      let result;
      try {
        result = JSON.parse(text);
      } catch (jsonError) {
        console.error("Invalid JSON response:", text);
        return;
      }

      const randomSynonym = await randomSynonymGenerator({ response: result });
      setRandomSynonyms((prevSyns) => [...prevSyns, randomSynonym]);
    } catch (error) {
      console.error(
        "There was an error searching for that term:",
        error.message
      );
    }
  };

  return (
    <>
      <Card color="transparent" shadow={true}>
        <Typography variant="h4" color="blue-gray">
          Search for a synonym or definition.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={submitSearch}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              name="search-bar"
              placeholder="Enter search term here..."
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
              onChange={handleChange}
            />
            <Button className="mt-6" fullWidth type="submit">
              Search
            </Button>
          </div>
        </form>
      </Card>
      <br />
      <RandomCard
        randomSynonyms={randomSynonyms}
        setRandomSynonyms={setRandomSynonyms}
      />
    </>
  );
};

export default SearchBar;
