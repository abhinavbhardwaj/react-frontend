import React from 'react';
import SiteLogo from '../../assets/images/logo.png';
import HeaderNavigation from '../../components/Navigation/Header/HeaderNavigation';

const Header =  (props) => (
        <nav  className="navbar navbar-default navbar-fixed-top hf-menu">
        <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}

            <div className="navbar-header">
                
                <a className="navbar-brand" href="index.html">
                    <img src={SiteLogo} alt="HangerFolks" />
                </a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}

            <div className="collapse navbar-collapse">
               <HeaderNavigation/>
            </div>
        </div>
        </nav>
        );

export default Header;