import React from "react";
import Car from './car';
import Body from './body';


const Tab = () => {
  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active "
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link "
            id="pills-Overview-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-Overview"
            type="button"
            role="tab"
            aria-controls="pills-Overview"
            aria-selected="false"
          >
            Overview
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-whoAreWe-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-whoAreWe"
            type="button"
            role="tab"
            aria-controls="pills-whoAreWe"
            aria-selected="false"
          >
            Who we Are
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-whatWeDo-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-whoAreWe"
            type="button"
            role="tab"
            aria-controls="pills-whatWeDo"
            aria-selected="false"
          >
            What we do
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-HowWeDoIt-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-whoAreWe"
            type="button"
            role="tab"
            aria-controls="pills-HowWeDoIt"
            aria-selected="false"
          >
            How we do it
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-WhyDigitas-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-whoAreWe"
            type="button"
            role="tab"
            aria-controls="pills-WhyDigitas"
            aria-selected="false"
          >
            Why Digitas LBi
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link "
            id="pills-GloabalSearch"
            data-bs-toggle="pill"
            data-bs-target="#pills-whoAreWe"
            type="button"
            role="tab"
            aria-controls="pills-GloabalSearch"
            aria-selected="false"
          >
            Gloabal Search
          </button>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <h1>Welcome to Digitas</h1>
        </div>
        <div
          className="tab-pane fade"
          id="pills-Overview"
          role="tabpanel"
          aria-labelledby="pills-Overview-tab"
        >
          {<Car/>}
          {<Body/>}
        </div>
        <div
          className="tab-pane fade"
          id="pills-whoAreWe"
          role="tabpanel"
          aria-labelledby="pills-whoAreWe-tab"
        >
          <h1> Loading....</h1>
        </div>
        <div
          className="tab-pane fade"
          id="pills-whatWeDo"
          role="tabpanel"
          aria-labelledby="pills-whatWeDo-tab"
        >
          <h1> We change the future with our high tech Enginners</h1>
        </div>
        <div
          className="tab-pane fade"
          id="pills-HowWeDoIt"
          role="tabpanel"
          aria-labelledby="pills-HowWeDoIt-tab"
        >
          <h1> we do it with out qulity Enginners </h1>
        </div>
        <div
          className="tab-pane fade"
          id="pills-WhyDigitas"
          role="tabpanel"
          aria-labelledby="pills-WhyDigitas-tab"
        >
          <h1> because we are the best</h1>
        </div>
        <div
          className="tab-pane fade"
          id="pills-GloabalSearch"
          role="tabpanel"
          aria-labelledby="pills-GloabalSearch-tab"
        >
          <h1>Lorem ipsum apple mango pineapple ............
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Tab;
