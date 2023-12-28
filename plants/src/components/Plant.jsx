
const Plant = ({ plant }) => {
  return (
    <div className="plant_card">
    <img className="plant_image" src={plant.imageUrl} />
      <h2>{plant.name}</h2>
      <h4 className="scientific_name">{plant.scientificName}</h4>
      <p>{plant.description}</p>

    </div>
  );
};

export default Plant;
