
import { Card, Button, Typography } from "@material-tailwind/react";
const RandomCard = ({ randomSynonyms, setRandomSynonyms }) => {
  const handleClick = () => {
    setRandomSynonyms([]);
  };

  return (
    <Card color="blue-gray" shadow={false}>
      {randomSynonyms.length === 0 ? null : (
        <>
          {randomSynonyms.length === 1 ? (
            <Typography variant="h4" color="aliceblue">
              Random Synonym:
            </Typography>
          ) : (
            <Typography variant="h4" color="aliceblue">
              Random Synonyms:
            </Typography>
          )}

          <Typography variant="h5" color="aliceblue">
            {randomSynonyms.join(", ")}
          </Typography>
        </>
      )}
      <Button onClick={handleClick}>Clear</Button>
    </Card>
  );
};

export default RandomCard;
