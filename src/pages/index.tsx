import PageTemplate from "../components/PageTemplate/PageTemplate";
import { useEffect, useState } from "react";
import axios from "axios";
import Locations from "@/components/Locations/Locations";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import cookie from "js-cookie";
export default function Home({}) {
  const router = useRouter();
  const [locations, setLocations] = useState<Array<any> | null>(null);
  const fetchLocations = async () => {
    try {
      const headers = {
        authorization: cookie.get("jwttoken"),
      };
      const response = await axios.get("process.env.SERVER_URLlocations/", {
        headers,
      });
      setLocations(response.data.locations);
    } catch (err) {
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
          <>Loading</>
        )}
      </PageTemplate>
    </>
  );
}
