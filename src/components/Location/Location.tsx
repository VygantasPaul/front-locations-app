import React from "react";
import styles from "./Location.module.css";
type LocationType = {
  _id: string;
  title: string;
  description: string;
  longitude: number;
  latitude: number;
  location_photo_url: string;
  location_id: string;
};
type LocationComponentType = {
  location: LocationType;
};
const Location: React.FC<LocationComponentType> = ({ location }) => {
  return (
    <a
      className={`bg-slate-800 hover:bg-slate-500 max-h-80 block rounded-lg object-cover px-6 py-20 ring-1 text-white ring-slate-900/5 shadow-xl ${styles.custom}`}
      href={`location/${location._id}`}
    >
      <div>Title: {location.title}</div>
      <div>longitude: {location.longitude}</div>
      <div>latitude: {location.latitude}</div>
    </a>
  );
};

export default Location;
