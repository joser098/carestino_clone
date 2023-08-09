const Carrousel = ({slider1, slider2, slider3}) => {
    return (
<div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-theme="dark">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={slider1} className="d-block w-100" alt="slider1"/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src={slider2} className="d-block w-100" alt="slider2"/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src={slider3} className="d-block w-100" alt="slider3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      );
};

export default Carrousel;