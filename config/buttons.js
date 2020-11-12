// config/buttons.js

import React from "react";
import {FaHome, FaSearch } from 'react-icons/fa';

const navButtons = [
  {
    label: "Home",
    path: "/",
    icon: <FaHome />
  },
  {
    label: "Search",
    path: "/search",
    icon: <FaSearch />
  },
];

export default navButtons;