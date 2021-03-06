import React from 'react';
import * as classes from './CardLinks.module.scss';
import { NavLink } from 'reactstrap';

const CardLinks = (props) => {
  const courseLink = props.courseLink ? <NavLink className={`${classes.CardLinks__icon} m-2 text-light `} 
                                                href={props.courseLink}>
                                        <i className="fas fa-graduation-cap"></i>
                                        </NavLink>
                                      : null

  const liveLink = <NavLink className={`${classes.CardLinks__icon} m-2 text-light `} 
                            href={props.liveLink}>
                     <i className="fas fa-globe-americas"></i>
                   </NavLink>

  const githubLink = props.githubLink ? <NavLink className={`${classes.CardLinks__icon} m-2 text-light `} 
                                                 href={props.githubLink}>
                                          <i className="fab fa-github"></i>
                                        </NavLink>
                                      : null
  

  return (
      <div className="d-flex ">
        {liveLink}
        {githubLink}
        {courseLink}
      </div>
  );
};

export default CardLinks;