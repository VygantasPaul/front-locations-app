import React from "react";
import styles from "./Location.module.css";

type LocationType = {
  _id: string;
  title: string;
  description: string;
  longitude: number;
  latitude: number;
  location_photo_url: string;
};

type LocationComponentType = {
  location: LocationType;
};

const Location: React.FC<LocationComponentType> = ({ location }) => {
  return (
    <a
      className={`bg-slate-800 hover:bg-slate-500 max-h-80 block rounded-lg relative overflow-hidden`}
      href={`location/${location._id}`}
    >
      {location.location_photo_url ? (
        <>
          <img
            src={location.location_photo_url}
            alt={location.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 px-6 py-20 text-white bg-slate-400/50">
            <div>Title: {location.title}</div>
            <div>longitude: {location.longitude}</div>
            <div>latitude: {location.latitude}</div>
          </div>
        </>
      ) : (
        <>
          <div className=" w-full h-80  flex  bg-slate-400/50 text-white">
            <div className=" flex items-center  px-6  ">
              <div>
                <div>Title: {location.title}</div>
                <div>longitude: {location.longitude}</div>
                <div>latitude: {location.latitude}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </a>
  );
};

export default Location;
