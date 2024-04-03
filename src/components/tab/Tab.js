import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames'; // Import classNames library for dynamic class names

import Camera from 'react-feather/dist/icons/camera';
import Clock from 'react-feather/dist/icons/clock';
import Search from 'react-feather/dist/icons/search';

import './tab.css';

const Tab = () => {
  const location = useLocation(); // Get current location

  // Define a function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="footer">
      <Link className={classNames("footer__link", { "active": isActive("/") })} to="/" >
        <Camera />
        scan
      </Link>
      <Link className={classNames("footer__link", { "active": isActive("/history") })} to="/history">
        <Clock />
       History
      </Link>
      <Link className={classNames("footer__link", { "active": isActive("/search") })} to="/search">
        <Search />
        Search Food
      </Link>
    </div>
  );
};

export default Tab;
