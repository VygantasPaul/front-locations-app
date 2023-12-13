import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Locations from "@/components/Locations/Locations";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

import cookie from "js-cookie";
import { useRouter } from "next/router";
const locations = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [locations, setLocations] = useState<Array<any> | null>(null);

  const fetchLocations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3002/locations/random"
      );
      console.log(response.data.locations);
      setLocations(response.data.locations);
    } catch (err) {
      console.log(err);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <>
      <PageTemplate>
        {locations ? (
          locations.length > 0 ? (
            <Locations locations={locations} />
          ) : (
            <>No records</>
          )
        ) : (
          <>Loading</>
        )}
      </PageTemplate>
    </>
  );
};

export default locations;
