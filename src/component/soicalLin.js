import React from 'react';
const SocialLinks = () => {
   return (  
      <headers>
      <div className="px-1 py-0.2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start">
          <a href="/" className="d-flex align-items-center my-2 my-sm-0 me-sm-auto text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
          </a>

          <ul className="nav col-12 col-sm-auto my-2 justify-content-center my-md-0 text-small">
      
            <li>
              <a href="www.facebook.com" className="nav-link text-white">
                <i className="fa fa-google-plus-square" aria-hidden="true"></i>
               <span className="badge rounded-pill bg-primary text-dark" style={{margin:"4px"}}> 4</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
               <i className="fa fa-twitter-square" aria-hidden="true"></i>
               <a href="www.twitter.com"><span className="badge rounded-pill bg-info text-dark" style={{margin:"4px"}}> 12</span></a>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <a href="www.google.com"><span className="badge rounded-pill bg-danger text-dark" style={{margin:"4px"}}> 7</span></a>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </headers>
   );
}
 
export default SocialLinks;