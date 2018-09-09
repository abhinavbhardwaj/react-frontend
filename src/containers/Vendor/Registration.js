import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'; 
import Aux from '../../hoc/Aux/Aux';

class Registration extends Component {
    render(){
        return (
                <Aux>
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
        </Aux>
                );
    }
}

export default Registration;