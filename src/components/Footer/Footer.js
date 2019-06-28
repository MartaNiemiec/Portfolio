import React from 'react';
import * as classes from './Footer.module.scss';

const projects = (props) => {
  return (
    <footer id="footer" className={`page-footer font-small special-color-dark ${classes.Footer}`}>
      <div className="container d-flex flex-wrap justify-content-center">

        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe className={classes.Footer__map} title="location" width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=san%20luis%20de%20sabinillas&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <a href="https://www.maps-erstellen.de"></a>
          </div>
        </div>
        <div className="p-5">
          <h2 className={`text-light ${classes.Footer__contactMessage}`}>You can find me on:</h2>
          <ul className="list-unstyled text-center list-inline mt-4">
            <li className={`list-inline-item `}>
              <a href="https://www.linkedin.com/in/MartaNiemiec/" 
                className={`btn-floating btn-dribbble ${classes.Footer__socialIcon}`}>
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className={`list-inline-item `}>
              <a href="https://github.com/MartaNiemiec" 
                className={`btn-floating btn-dribbble ${classes.Footer__socialIcon}`}>
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="footer-copyright text-center py-3 text-light">© 2019 Copyright: <span className={classes.Footer__myname}>{"<"} Marta Niemiec {"/ >"}</span>
      </div>
    </footer>

        
    
  );
};

export default projects;