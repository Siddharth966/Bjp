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
            style={{ 
              height: "50vh", // Smaller on mobile
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          <Carousel.Caption className="carousel-caption-mobile">
            <h3 className="carousel-title">सेवा आमचा धर्म</h3>
            <p className="carousel-text d-none d-sm-block">People-centric leadership and social commitment</p>
            <p className="carousel-text-small d-block d-sm-none">People-centric leadership</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slide2}
            alt="Second slide"
            style={{ 
              height: "50vh",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          <Carousel.Caption className="carousel-caption-mobile">
            <h3 className="carousel-title">विकास आमचा कर्तव्य</h3>
            <p className="carousel-text d-none d-sm-block">Focused on sustainable development for Ward No. 30</p>
            <p className="carousel-text-small d-block d-sm-none">Sustainable development</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slide3}
            alt="Third slide"
            style={{ 
              height: "50vh",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          <Carousel.Caption className="carousel-caption-mobile">
            <h3 className="carousel-title">जनतेसाठी समर्पित</h3>
            <p className="carousel-text d-none d-sm-block">Working with dedication, transparency, and trust</p>
            <p className="carousel-text-small d-block d-sm-none">Dedication & transparency</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ===== HOME CONTENT ===== */}
      <section className="home-gradient text-center">
        <div className="container py-4 py-md-5 px-3 px-md-0">
          <h1 className="fw-bold display-6 display-md-4 display-lg-3 mb-3">
            Smt. Pallavi Sudhir Walhekar
          </h1>

          <h4 className="text-dark my-3 h5 h4-md">
            "सेवा आमचा धर्म, विकास आमचा कर्तव्य"
          </h4>

          <p className="lead px-2 px-md-0 mb-4">
            Service is our religion, development is our duty. Working with
            dedication for inclusive growth, people-centric governance, and
            sustainable development for Ward No. 30.
          </p>

          <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link to="/about" className="btn btn-primary btn-lg px-4 px-sm-5">
              Know More
            </Link>
            <Link to="/vision" className="btn btn-outline-dark btn-lg px-4 px-sm-5">
              Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-4 py-md-5">
        <div className="container px-3 px-md-0">
          <div className="text-center mb-4 mb-md-5 fade-up">
            <h2 className="fw-bold h3 h2-md mb-2">Moments from Public Service</h2>
            <p className="text-muted mb-0 px-2 px-md-0">
              Connecting with people, serving society, and working for development
            </p>
          </div>

          <div className="row g-3 g-md-4">
            <div className="col-12 col-md-4 fade-up">
              <div className="gallery-card">
                <img 
                  src={slide1} 
                  alt="Gallery 1" 
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-md-4 fade-up-delay mt-3 mt-md-0">
              <div className="gallery-card">
                <img 
                  src={slide4} 
                  alt="Gallery 4" 
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-md-4 fade-up mt-3 mt-md-0">
              <div className="gallery-card">
                <img 
                  src={slide3} 
                  alt="Gallery 3" 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <style jsx>{`
        /* Responsive adjustments */
        @media (min-width: 576px) {
          /* Small devices (landscape phones, 576px and up) */
          .carousel-img {
            height: 60vh !important;
          }
          .carousel-title {
            font-size: 1.5rem;
          }
        }
        
        @media (min-width: 768px) {
          /* Medium devices (tablets, 768px and up) */
          .carousel-img {
            height: 70vh !important;
          }
          .carousel-title {
            font-size: 2rem;
          }
          .carousel-caption-mobile {
            bottom: 30% !important;
          }
        }
        
        @media (min-width: 992px) {
          /* Large devices (desktops, 992px and up) */
          .carousel-img {
            height: 80vh !important;
          }
          .carousel-title {
            font-size: 2.5rem;
          }
        }
        
        /* Mobile-specific styles */
        @media (max-width: 575.98px) {
          .carousel-caption-mobile {
            bottom: 10px !important;
            padding: 10px !important;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 5px;
          }
          .carousel-title {
            font-size: 1.2rem;
            margin-bottom: 5px;
          }
          .carousel-text-small {
            font-size: 0.9rem;
            margin: 0;
          }
          .gallery-card {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .gallery-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transition: transform 0.3s ease;
          }
          .gallery-card:hover img {
            transform: scale(1.03);
          }
        }
        
        /* Tablet styles */
        @media (min-width: 576px) and (max-width: 991.98px) {
          .gallery-card img {
            height: 250px;
          }
          .btn-lg {
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
          }
        }
        
        /* Desktop styles */
        @media (min-width: 992px) {
          .gallery-card img {
            height: 300px;
          }
        }
        
        /* Extra small devices (portrait phones, less than 576px) */
        @media (max-width: 375px) {
          h1 {
            font-size: 1.5rem;
          }
          h4 {
            font-size: 1.1rem;
          }
          .lead {
            font-size: 0.95rem;
          }
          .btn-lg {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }
        
        /* Animation for fade-up effects */
        .fade-up {
          animation: fadeUp 0.6s ease-out;
        }
        
        .fade-up-delay {
          animation: fadeUp 0.6s ease-out 0.2s both;
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Home gradient section */
        .home-gradient {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
      `}</style>
    </>
  );
};

export default Home;