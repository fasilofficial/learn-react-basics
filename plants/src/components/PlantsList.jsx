import plants from "../data/plants";
import Plant from "./Plant";

const PlantsList = () => {
  return plants.map((plant, index) => {
    return <Plant key={index} plant={plant} />;
  });
};

export default PlantsList;
