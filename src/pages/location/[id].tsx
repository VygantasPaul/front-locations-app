import Button from "@/components/Button/Button";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookie from "js-cookie";
import AddPostTemplate from "@/components/PageTemplate/AddPostTemplate";
import Modal from "@/components/Modal/Modal";

type LocationType = {
  _id: string;
  title: string;
  description: string;
  longitude: number;
  latitude: number;
  location_photo_url: string;
  location_id: string;
};
const Location = () => {
  const router = useRouter();
  const [location, setLocation] = useState<LocationType | null>(null);
  const [isModal, setIsModal] = useState(false);

  const headers = {
    authorization: cookie.get("jwttoken"),
  };
  const fetchLocations = async (id: string) => {
    const response = await axios.get(
      `${process.env.SERVER_URL}/locations/${id}`,
      {
        headers,
      }
    );

    setLocation(response.data.locations);
  };

  useEffect(() => {
    router.query.id && fetchLocations(router.query.id as string); //tikrinam jeigu yra gaunama reiksme kad nebutu undefined
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.id]);

  const onDelete = async () => {
    const headers = {
      authorization: cookie.get("jwttoken"),
    };
    const response = await axios.delete(
      `${process.env.SERVER_URL}/locations/${router.query.id}`,
      {
        headers,
      }
    );
    if (response.status === 200) {
      router.push("/");
    }
  };

  return (
    <>
      <AddPostTemplate>
        {location && (
          <div className="container mx-auto">
            <div className="flex items-center my-6 w-full bg-white">
              <div className={`w/1/2`}>
                {location.location_photo_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={location.location_photo_url}
                    alt=""
                    className="w-full max-h-50 object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
              <div className={`w-full pl-8  h-full flex `}>
                <div className=" ">
                  <h2 className="text-3xl"> {location.title}</h2>
                  <h4 className="text-lg"> {location.longitude}</h4>
                  <h4 className="text-lg"> {location.latitude}</h4>
                  <p> {location.description}</p>
                  <div className="flex gap-2">
                    <Button
                      text="Delete"
                      className="bg-red-700 flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setIsModal(true)}
                      isLoading={false}
                    />
                    <Button
                      isLoading={false}
                      text="Edit"
                      className="bg-green-700 flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() =>
                        router.push(`/edit-location/${router.query.id}`)
                      }
                    />
                  </div>
                </div>
              </div>
              {isModal && (
                <Modal
                  onConfirm={onDelete}
                  onCancel={() => setIsModal(false)}
                />
              )}
            </div>
          </div>
        )}
      </AddPostTemplate>
    </>
  );
};

export default Location;
