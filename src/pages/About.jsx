const About = () => {
  return (
    <>
    
    <section className="about-gradient">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5 fade-up">
          <h2 className="fw-bold section-title">
            About Smt. Pallavi Sudhir Walhekar
          </h2>
          <p className="text-muted mt-3">
            A leader driven by service, responsibility, and development
          </p>
        </div>

        {/* Intro */}
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto fade-up-delay">
            <p className="lead text-center">
              Smt. Pallavi Sudhir Walhekar is a committed social worker,
              women leader, and public representative who firmly believes
              that real progress begins with selfless service and inclusive governance.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">

          {/* Electoral Profile */}
          <div className="col-md-6 fade-up">
            <div className="about-card">
              <h4 className="fw-bold mb-3">Electoral Profile</h4>
              <ul className="list-unstyled">
                <li><strong>Position:</strong> Nagar Sevak</li>
                <li><strong>Ward Number:</strong> 30</li>
                <li><strong>Party:</strong> Bharatiya Janata Party (BJP)</li>
                <li><strong>Election Symbol:</strong> Lotus (कमळ)</li>
              </ul>
            </div>
          </div>

          {/* Leadership Roles */}
          <div className="col-md-6 fade-up-delay">
            <div className="about-card">
              <h4 className="fw-bold mb-3">Leadership Roles</h4>
              <ul>
                <li>
                  Vice President – Ekvira Seva Sangh Trust, Maharashtra
                </li>
                <li>
                  President – BJP Mahila Morcha, Ravet–Kiwale Mandal
                </li>
                <li>
                  President – Ekvira Bachat Gat Mahasangh, Pimpri–Chinchwad
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Responsibilities */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto fade-up">
            <div className="about-card">
              <h4 className="fw-bold mb-3 text-center">
                Key Responsibilities & Social Work
              </h4>

              <ul>
                <li>
                  Actively addressing local civic issues such as road conditions,
                  sanitation, water supply, and public safety.
                </li>
                <li>
                  Empowering women through self-help groups, skill development
                  programs, and financial literacy initiatives.
                </li>
                <li>
                  Organizing community welfare activities, health camps,
                  and social awareness programs.
                </li>
                <li>
                  Acting as a bridge between citizens and municipal authorities
                  to ensure transparency and accountability.
                </li>
                <li>
                  Promoting education, youth engagement, and cultural harmony
                  within the community.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-5 fade-up-delay">
          <blockquote className="fst-italic fs-5">
            “Leadership is not about authority,  
            it is about responsibility towards the people.”
          </blockquote>
        </div>

      </div>
    </section>
    </>
  );
};

export default About;
