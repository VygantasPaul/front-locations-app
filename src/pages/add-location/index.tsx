import React, { useState } from "react";
import axios from "axios";
import { Router, useRouter } from "next/router";
import cookie from "js-cookie";
import Button from "@/components/Button/Button";
import PageTemplate from "@/components/PageTemplate/AddPostTemplate";
const AddLocation = () => {
  const [isLoading, setLoading] = useState(false);
  const [alert, setAlert] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [longitude, setLongitude] = useState<Number>();
  const [latitude, setLatitude] = useState<Number>();
  const [locationPhotoUrl, setLocationPhotoUrl] = useState<string>("");
  const router = useRouter();

  const checkValidation = () => {
    const titleRegex = /^\S.{5,}/;
    const textareaRegex = /^\S.{10,}/;

    if (!title || !description || !longitude || !latitude) {
      setAlert("Please fill in all required fields");
      return false;
    } else if (!titleRegex.test(title)) {
      setAlert("Please enter a title with at least three letters");
      return false;
    } else if (!textareaRegex.test(description)) {
      setAlert("Please enter a description with at least ten letter");
      return false;
    } else {
      setAlert("Location added successfully");
      return true;
    }
  };

  const onAddLocation = async () => {
    try {
      const isValid = checkValidation();
      if (isValid) {
        setLoading(true);
        const newLocation = {
          title: title,
          description: description,
          longitude: longitude,
          latitude: latitude,
          location_photo_url: locationPhotoUrl,
        };
        const headers = {
          authorization: cookie.get("jwttoken"),
        };
        const response = await axios.post(
          `${process.env.SERVER_URL}/locations/`,
          newLocation,
          { headers }
        );
        setLoading(false);

        if (response.status === 201) {
          setTimeout(() => {
            router.push("/");
          }, 3000);
        } else {
          return false;
        }
      }
    } catch (error) {
      console.error("Error adding location:", error);
    }
  };

  return (
    <PageTemplate>
      <div className="flex-1 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add location
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>

              <div className="mt-2">
                <input
                  value={title}
                  onChange={(e) => setTitle(String(e.target.value))}
                  id="email"
                  name="email"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-2">
                <input
                  id="image"
                  name="image"
                  value={locationPhotoUrl}
                  onChange={(e) => setLocationPhotoUrl(e.target.value)}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="longitude"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Longitude
              </label>
              <div className="mt-2">
                <input
                  id="longitude"
                  name="longitude"
                  value={Number(longitude) || ""}
                  onChange={(e) => setLongitude(Number(e.target.value))}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="latitude"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Latitude
              </label>
              <div className="mt-2">
                <input
                  id="latitude"
                  name="latitude"
                  value={Number(latitude || "")}
                  onChange={(e) => setLatitude(Number(e.target.value))}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
              </div>
              <div className="my-2">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  name="about"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div>
              <Button
                className="bg-green-700 flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={onAddLocation}
                isLoading={isLoading}
                text="Add location"
              />
              {alert && <div className="text-red-500">{alert}</div>}
            </div>
          </form>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AddLocation;
