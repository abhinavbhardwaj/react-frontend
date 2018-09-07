import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css'; 

import Routers from '../Config/Routers'; 
import Header from '../../components/Navigation/Header'; 
//import Footer from '../../components/Navigation/Footer';
//import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import asyncComponent from '../../hoc/asyncComponent'; 

class Layout extends Component { 

    render () {
        return (
            <Aux> 
    <Header/>
        {/* Page Heading Section Start */}
        <div className="pagehding-sec">
          <div className="pagehding-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-heading">
                  <h1>Vendor Registration</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Vendor Registration ==========================================*/}
        <section className="vendor-registration">
          <div className="container">
            <div className="row">
              <form className="form-horizontal" action=" " method="post" id="reg_form">
                <div className="col-sm-12 no-padding">
                  <div className="col-sm-9">
                    <div className="col-sm-4">
                      <div className="control-group form-group">
                        <label>Restuarent Name:</label>
                        <input type="text" className="form-control" name="restuarent_name" placeholder="Please enter Restuarent Name" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="control-group form-group">
                        <label>Vendor Name:</label>
                        <input type="text" className="form-control" name="name" placeholder="Please enter your name" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="control-group form-group">
                        <label>Phone Number:</label>
                        <input type="text" className="form-control" name="phone" placeholder="Please enter Phone Number" />
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-sm-4">
                      <div className="control-group form-group">
                        <label>Email ID:</label>
                        <input type="text" className="form-control" name="email" placeholder="Please enter Email" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="control-group form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" name="password" placeholder="Please enter Password" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="control-group form-group">
                        <label>Password Confirm:</label>
                        <input type="password" className="form-control" name="confirmPassword" placeholder="Password Confirm" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="clearfix help-block" />
                      <hr />
                      <div className="control-group form-group">
                        <button type="submit" className="btn btn-warning">REGISTER NOW</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <h4>Notes</h4>
                    <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* Download App ==========================================*/}
        <div className="downloadApp">
          <div className="container">
            <div className="col-sm-12">
              <div className="col-sm-6">
                <h3>Get the Hunger Folks App</h3>
                <p>The best food in town, right in your pocket.</p>
                <p><a href="javascript:;" target="_blank"><img src="images/appstore-icon.png" alt="ios" /></a>&nbsp;&nbsp;<a href="javascript:;" target="_blank"><img src="images/android-icon.png" alt="google play" /></a></p>
                <p>About time, right? So sit back, relax, and enjoy a better way to order food.</p>
              </div>
              <div className="col-sm-6">
                <p className="pull-right"><img src="images/hungry.png" className="img-responsive" alt="hungry" /></p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Section
    ==========================================*/}
        <div id="hf-footer" className="hf-footer">
          <footer id="hf-footer-content">
            <div className="container">
              <div className="hf-footer-columns hf-footer-widget-area row">
                <div className="hf-footer-column-1 col-lg-3 col-md-3 col-sm-3">
                  <aside className="widget widget_text">
                    <div className="help-block" />
                    <div className="textwidget">Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when.</div>
                  </aside>
                  <ul className="hf-social">
                    <li className="twitter"><a href="#" title="twitter"><i className="fa fa-twitter" /></a></li>
                    <li className="facebook"><a href="#" title="facebook"><i className="fa fa-facebook" /></a></li>
                    <li className="linkedin"><a href="#" title="linkedin"><i className="fa fa-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="hf-footer-column-2 col-lg-2 col-md-2 col-sm-3 col-lg-offset-1 col-md-offset-1">
                  <aside className="widget widget_nav_menu">
                    <h3 className="wg-title">Information</h3>
                    <div className="menu-footer-menu-container">
                      <ul id="menu-footer-menu" className="menu">
                        <li><a href="about-us.html">Who We Are</a></li>
                        <li><a href="faqs.html">FAQ's</a></li>
                        <li><a href="contact-us.html">Contact Us</a></li>
                        <li><a href="privacy.html">Privacy</a></li>
                        <li><a href="terms.html">Terms &amp; Conditions</a></li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="hf-footer-column-3 col-lg-2 col-md-2 col-sm-2">
                  <aside className="widget widget_nav_menu">
                    <h3 className="wg-title">Work with us</h3>
                    <div className="menu-footer-infomation-container">
                      <ul id="menu-footer-infomation" className="menu">
                        <li><a href="restaurants.html">Restaurants</a></li>
                        <li><a href="drivers.html">Drivers</a></li>
                        <li><a href="javascript:;">Corporate Accounts</a></li>
                        <li><a href="#vendorRegistration" data-toggle="modal">Vendor Registration</a></li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="hf-footer-column-4 col-lg-4 col-md-4 col-sm-4">
                  <aside className="widget widget-thumbnails">
                    <h3 className="wg-title">Latest News</h3>
                    <ul>
                      <li>
                        <div className="recent-detail">
                          <div className="hf-post-date"><span>Mar 28, 2017</span></div>
                          <div className="hf-post-title"> <a href="javascript:;"> What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. </a> </div>
                        </div>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </footer>
          <div className="footer-line">
            <div className="container">
              <div className="row">
                <div className="col-sm-12"><span /></div>
              </div>
            </div>
          </div>
          <div className="footer-address">
            <div className="container">
              <div className="row">
                <aside className="widget widget_text">
                  <div className="textwidget">
                    <ul className="lets-talk">
                      <li><i className="fa fa-paper-plane-o" />Address comes here, TN 50011</li>
                      <li><i className="fa fa-phone" />+91 98848 88504</li>
                      <li><i className="fa fa-envelope-o" /><a href="mailto:sales@hungerfolks.com">sales@hungerfolks.com</a></li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <footer id="hf-footer-copyright" className="hf-footer-copyright">
            <div className="container">
              <div className="hf-footer-copyright-wrap">
                <div className="col-sm-12"> © 2018 Hunger Folks Inc. All Rights Reserved. </div>
              </div>
            </div>
          </footer>
          </div> 
          
          <Routers/>
            </Aux>
        )
    }
}

export default Layout;