import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="container py-5">

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">
            Get in touch for public service, support, or community initiatives
          </p>
        </div>

        <div className="row g-4">

          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="contact-card h-100">
              <h5 className="fw-bold mb-4">Contact Information</h5>

              <div className="contact-item">
                <FaUser className="contact-icon" />
                <div>
                  <strong>Ma. Sou. Pallavitai Sudhir (Aaba) Walhekar</strong>
                  <p className="mb-0 small">
                    President – BJP Mahila Morcha, Chinchwad–Kiwale Mandal
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <p className="mb-0">+91 70835 85813</p>
                  <p className="mb-0">+91 77440 50868</p>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <p className="mb-0">pallavi.w83@icloud.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <p className="mb-0">
                    Below Ekvira Gym, Gurudwara,<br />
                    Walhekarwadi Road, Chinchwad,<br />
                    Pune – 411033
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-card h-100">
              <h5 className="fw-bold mb-4">Send a Message</h5>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button className="btn btn-danger w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
