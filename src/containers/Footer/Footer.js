import React from 'react';
import Text from '../../components/Navigation/Footer/Text'; 
import InformationLink from '../../components/Navigation/Footer/InformationLink'; 
import WorkWithUs from '../../components/Navigation/Footer/WorkWithUsLink'; 
import News from '../../components/Navigation/Footer/News'; 
import Contact from '../../components/Navigation/Footer/Contact'; 
import CopyRight from '../../components/Navigation/Footer/CopyRight'; 

const Footer = (props) => (
     <div id="hf-footer" className="hf-footer">
          <footer id="hf-footer-content">
            <div className="container">
              <div className="hf-footer-columns hf-footer-widget-area row">
                <div className="hf-footer-column-1 col-lg-3 col-md-3 col-sm-3">
                  <Text/>
                </div>
                <div className="hf-footer-column-2 col-lg-2 col-md-2 col-sm-3 col-lg-offset-1 col-md-offset-1">
                  <InformationLink/>
                </div>
                <div className="hf-footer-column-3 col-lg-2 col-md-2 col-sm-2">
                 <WorkWithUs/>
                </div>
                <div className="hf-footer-column-4 col-lg-4 col-md-4 col-sm-4">
                  <News/>
                </div>
              </div>
            </div>
          </footer>
          <div className="footer-line">
            <div className="container">
              <div className="row">
                <div className="col-sm-12"><span/></div>
              </div>
            </div>
          </div>
          <div className="footer-address">
            <Contact/>
          </div>
          <CopyRight/>
          </div> 
)
export default Footer; 