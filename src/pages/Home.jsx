import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

// import your images
import slide1 from "../assets/new1.png";
import slide2 from "../assets/rally.jpg";
import slide3 from "../assets/new2.png";
import slide4 from "../assets/crausal1.jpeg";

const Home = () => {
  return (
    <>
      {/* ===== HERO CAROUSEL ===== */}
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slide1}
            alt="First slide"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>सेवा आमचा धर्म</h3>
            <p>People-centric leadership and social commitment</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slide2}
            alt="Second slide"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>विकास आमचा कर्तव्य</h3>
            <p>Focused on sustainable development for Ward No. 30</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slide3}
            alt="Third slide"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>जनतेसाठी समर्पित</h3>
            <p>Working with dedication, transparency, and trust</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ===== HOME CONTENT ===== */}
      <section className="home-gradient text-center">
        <div className="container py-5">
          <h1 className="fw-bold">Smt. Pallavi Sudhir Walhekar</h1>

          <h4 className="text-dark my-3">
            “सेवा आमचा धर्म, विकास आमचा कर्तव्य”
          </h4>

          <p className="lead">
            Service is our religion, development is our duty. Working with
            dedication for inclusive growth, people-centric governance, and
            sustainable development for Ward No. 30.
          </p>

          <div className="mt-4">
            <Link to="/about" className="btn btn-primary me-2">
              Know More
            </Link>
            <Link to="/vision" className="btn btn-outline-dark">
              Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}

      <section className="gallery-section py-5">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <h2 className="fw-bold">Moments from Public Service</h2>
            <p className="text-muted">
              Connecting with people, serving society, and working for
              development
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4 fade-up">
              <div className="gallery-card">
                <img src={slide1} alt="Gallery 1" />
              </div>
            </div>

            <div className="col-12 col-md-4 fade-up-delay">
              <div className="gallery-card">
                <img src={slide4} alt="Gallery 4" />
              </div>
            </div>

            <div className="col-12 col-md-4 fade-up">
              <div className="gallery-card">
                <img src={slide3} alt="Gallery 3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
