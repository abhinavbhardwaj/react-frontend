import React from 'react';
import Avatar from '../../../assets/images/avatar.jpg'; 
import classes from './HeaderNavigation.css';

const HeaderNavigation = (props) => {
    return (
            <ul className="nav navbar-nav navbar-right hf-main-nav__list js-signin-modal-trigger">
                    <li>
                        <a href="food.html">Food</a>
                    </li>
                    <li>
                        <a href="restaurants.html">Restaurants</a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="fa fa-shopping-cart edd-cart-icon">
                                <span className="edd-cart-quantity base_clr_bg">5</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className="hf-main-nav__item hf-main-nav__item--signin" href="#0" data-signin="login">Sign in/Sign up</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <img alt className="img-circle avatar" src={Avatar} /> Tarun
                            <b className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#">
                                    <i className="fa fa-user" />
                                    <span className="text">My Account</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-list" />
                                    <span className="text">My Orders</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-power-off" />
                                    <span className="text">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            )
     
}
export default HeaderNavigation;