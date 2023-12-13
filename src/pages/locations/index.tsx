import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Locations from "@/components/Locations/Locations";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

import cookie from "js-cookie";
import { useRouter } from "next/router";
const locations = () => {
  const router = useRouter();

  const [locations, setLocations] = useState<Array<any> | null>(null);
  const headers = {
    authorization: cookie.get("jwttoken"),
  };
  const fetchLocations = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}locations/`, {
        headers,
      });
      console.log(response.data.locations);
      setLocations(response.data.locations);
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        router.push("/login");
      }
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
