import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Locations from "@/components/Locations/Locations";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner/Spinner";
const RandomLocations = () => {
  const router = useRouter();

  const [locations, setLocations] = useState<Array<any> | null>(null);
  const headers = {
    authorization: cookie.get("jwttoken"),
  };
  const fetchLocations = async () => {
    try {
      const response = await axios.get(
        `${process.env.SERVER_URL}/locations/random`,
        { headers }
      );
      console.log(response.data.locations);
      setLocations(response.data.locations);
    } catch (err) {
      console.log(err);
      // @ts-ignore
      if (err.response.status === 401) {
        router.push("/login");
      }
    }
  };

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
          <Spinner />
        )}
      </PageTemplate>
    </>
  );
};

export default RandomLocations;
