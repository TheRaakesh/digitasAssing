import React from "react";
import "./body.css";
import  '@fortawesome/fontawesome-free';
// import { fab } from '@fortawesome/free-brands-svg-icons';


const Body = () => {
  return (
    <section>
      <div className="blue"></div>
      <div className="green">
        <div className="sub">
          <div className="violet">
            <div className="card" style={{ height: "8rem" }}>
              <div className="card-body">
                <b>Events</b>
                <p>
                  <a href="www.123.com">"Sed ut perspiciatis"</a> unde omnis
                  iste natus error sit voluptatem accusantium sit sat
                </p>
              </div>
            </div>
          </div>
          <div className="light">
            <div className="card" style={{ width: "25rem", height: "8rem" }}>
              <div className="card-body">
                <h5 className="card-title">Partners</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  our leading Partners
                </h6>
                <p className="card-text"></p>
                <li>
                  <a href="#" className="Partner-1">
                    Partner-1
                  </a>
                </li>
                <li>
                  <a href="#" className="partner-n">
                    Partner-2
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="part">
          <div className="pink">
            <div className="card" style={{ height: "8rem",marginTop: "8px" }}>
              <div className="card-body">
                <b>Speeches</b>
                <p>
                  unde omnis iste natus error sit voluptatem accusantium sit sat
                </p>
              </div>
            </div>
          </div>
          <div className="lightg">
            <div
              className="card"
              style={{ marginTop: "8px", marginBottom: "2px" }}
            >
              <div className="card-header">
                <b>Carrer</b>
              </div>
              <div className="card-body">
                {/* <h5 className="card-title">Special title treatment</h5> */}
                <p className="card-text">
                  apple is not mango and Carrer should be good in bad{" "}
                  <a href="#" className="btn btn-secondary btn-sm">
                    explore
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="full">
          <nav style={{ marginTop: "20px" }}>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Press Release
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Media-Coverage
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <a>
                ounter consequences that are extremely painful. Nor again is
                there anyone who loves or pursues or desires t
              </a>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              this is our media coverage......have a look
            </div>
          </div>
        </div>
      </div>
      <div className="yellow">
        <div className="top">
          <div className="card" style={{ width: "18rem", height:"20rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Our Product</h5>
              <p className="card-text">Something Something...</p>
              <a href="#" className="btn btn-dark">
                Explore more
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div class="card bg-dark text-white">
            <img src="https://wl-img-prd.s3-accelerate.amazonaws.com/593fa136-bc9a-482d-81f0-0b0d53537703-h.jpeg" height="309.5" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Recognition</h5>
              <p class="card-text">
                lorel ipsum abc abc def something ...
              </p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="red"> */}
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">About us</h5>
              {/* <!--headin5_amrc--> */}
              <p className="mb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                <i className="fa fa-location-arrow"></i> 17th Floor,Tower A,Urmi
                Estate,Ganpat Rao Kadam Marg, Lower Parel (W) Mumbai 400 013, In{" "}
              </p>
              <p>
                <i className="fa fa-phone"></i> +91 22 3007 3600{" "}
              </p>
              <p>
                <i className="fa fa fa-envelope"></i> info@digitas.com{" "}
              </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Training</h5>
              {/* <!--headin5_amrc--> */}
              <ul className="footer_ul_amrc">
                <li>
                  <a href="http://digitas.com">Keyboard Training</a>
                </li>
                <li>
                  <a href="http://digitas.com">React Training</a>
                </li>
                <li>
                  <a href="http://digitas.com">Hyperloop Training</a>
                </li>
                <li>
                  <a href="http://digitas.com">Thermodynamics</a>
                </li>
                <li>
                  <a href="http://digitas.com">french training</a>
                </li>
                <li>
                  <a href="http://digitas.com">AI dectection</a>
                </li>
              </ul>
              {/* <!--footer_ul_amrc ends here--> */}
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">
                Global Resourse
              </h5>
              {/* <!--headin5_amrc--> */}
              <ul className="footer_ul_amrc">
                <li>
                  <a href="http://digitas.com">Unicorn</a>
                </li>
                <li>
                  <a href="http://digitas.com">Horse</a>
                </li>
                <li>
                  <a href="http://digitas.com">Logo Design</a>
                </li>
                <li>
                  <a href="http://digitas.com">Vectorization</a>
                </li>
                <li>
                  <a href="http://digitas.com">Jeep</a>
                </li>
                <li>
                  <a href="http://digitas.com">Networking</a>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Share</h5>

              <ul className="footer_ul2_amrc">
                <li>
                  <a href="#">
                    <i
                      className="fa fa-facebook-official fleft padding-right"
                      aria-hidden="true"
                    ></i>{" "}
                  </a>
                  <p>
                    share on<a href="#">https://www..com/</a>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    share on<a href="#">https://www..com/</a>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    share on<a href="#">https://www..com/</a>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    share on<a href="#">https://www..com/</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="foote_bottom_ul_amrc">
            <li>
              <a href="http://digitas.com">Legal Notice</a>
            </li>
            <li>
              <a href="http://digitas.com">Privary Policy</a>
            </li>
            <li>
              <a href="http://digitas.com">Services</a>
            </li>
            <li>
              <a href="http://digitas.com">Terms of use</a>
            </li>
            <li>
              <a href="http://digitas.com">site Map</a>
            </li>
          </ul>
          {/* <!--foote_bottom_ul_amrc ends here--> */}
          <p className="text-center">
            Copyright @2021 | Designed With by{" "}
            <a href="https://www.digitas.com/en-in">Digitas</a>
          </p>

          <ul className="social_footer_ul">
            <li>
              <a href="https://www.facebook.com/DigitasIN/">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/digitas_in?lang=en">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/digitasin/?originalSubdomain=in">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/digitas_india/?hl=en">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
          {/* <!--social_footer_ul ends here--> */}
        </div>
      </footer>
      {/* </div> */}
    </section>
  );
};

export default Body;
