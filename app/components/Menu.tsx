"use client";
import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

const Menu = () => {
  const [value, setValue] = useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents"></BottomNavigationAction>
      <BottomNavigationAction label="Favorites" />
      <BottomNavigationAction label="Nearby" />
    </BottomNavigation>
  );
};

export default Menu;
