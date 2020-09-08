import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../util/constants';

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#11b2bd" }}>
        <div className="container-fluid" data-testid="menu-bar">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/" style={{ fontSize: "3rem", fontWeight: "bold", color: "#18191a"}}>
                {constants.labels.banner}
              </Link>
                <i className="fa fa-bicycle fa-4x"></i>
            </div>
        </div>
      </nav>
	);
};

export default Header;

