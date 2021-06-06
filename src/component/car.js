import 'bootstrap/js/dist/carousel';
import React from 'react';
const Car = () => {
   return (
      <React.Fragment>
        <div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://mir-s3-cdn-cf.behance.net/46a3913a6a65b802cbd8ea9f7ad3c01d/552805d1-3f6c-450f-8f58-d5616bbe88f6_rwc_0x228x1920x240x1920.jpg?h=da6b20f52f3b0aa63a657649d93fe1a9" className="d-block w-100" alt="apple" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Overview</h5>
        <p>get set go............</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnubBq8Yh841LotKvPBGoXcJoh80G5c2rK15mZmnTbjrj_l7aSdyD-8I4jkjKqT9Mc1Q&usqp=CAU" className="d-block w-100" alt="mango" />
      <div className="carousel-caption d-none d-md-block">
        <h5>welcome to our Gallery pic </h5>
        <p>a for apple , b for boy......</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://bizinportugal.com/wp-content/uploads/2019/08/cyber-connection-1920x240.jpg" className="d-block w-100" alt="pineapple" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Some more info </h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      </React.Fragment>
     );
}
 
export default Car;