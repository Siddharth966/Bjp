import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-dark pt-5">
      <div className="container">

        <div className="row gy-4 text-center text-md-start">

          {/* ===== About ===== */}
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold footer-title">About</h5>
            <p className="small footer-text">
              Dedicated to public service, development with dignity,
              and people-centric governance. Working continuously
              for social welfare and inclusive growth.
            </p>
          </div>

          {/* ===== Quick Links ===== */}
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/vision" className="footer-link">Vision</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* ===== Contact ===== */}
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold footer-title">Contact</h5>
            <ul className="list-unstyled footer-text small">
              <li>📍 Ward No. 30, Pimpri</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@example.com</li>
            </ul>
          </div>

          {/* ===== Social ===== */}
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold footer-title">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="footer-divider my-4" />

        {/* Bottom */}
        <div className="text-center pb-3 small footer-text">
          Designed & Developed by <strong>Guru Software Solutions</strong><br />
          © {new Date().getFullYear()} All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
