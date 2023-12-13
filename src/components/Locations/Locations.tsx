import React from "react";
import Location from "../Location/Location";
type LocationsType = {
  locations: Array<any> | null; ///tikisi nullo arba masyvo
};
const Locations: React.FC<LocationsType> = ({ locations }) => {
  return (
    <>
      {locations && /// jei location egzistuoja
        locations.map((location) => (
          <div key={location._id} className="p-4">
            <Location location={location} />
          </div>
        ))}
    </>
  );
};

export default Locations;
