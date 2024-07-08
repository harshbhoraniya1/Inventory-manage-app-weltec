import React, { useEffect, useState } from "react";
import authFetch from "../axiosbase/interceptors";

export default function ProfileGrid() {
  const [profileData, setProfileData] = useState([]);
  authFetch.get("/profile").then((response) => {
    setProfileData(response.data);
  });
  return <>{console.log(profileData)}</>;
}
