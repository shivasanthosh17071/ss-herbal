"use client"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: "#4A0025", color: "white", padding: "4rem 0 0" }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                marginBottom: "20px",
              }}
            >
              SS Herbal Beauty Parlour 
            </h3>

            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "20px" }}>
              Transforming beauty since 2017. We specialize in bridal makeup, hair styling, skincare treatments, and
              more. Visit us for a complete beauty experience.
            </p>

            <div className="d-flex">
              <a
                href="https://wa.me/919666706347"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon me-2"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                }}
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/ss_herbal_beauty_parlour/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon me-2"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                }}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                }}
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 style={{ marginBottom: "20px", fontWeight: "600" }}>Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#home"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FF6B98")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#about"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FF6B98")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#services"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FF6B98")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#gallery"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FF6B98")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FF6B98")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 style={{ marginBottom: "20px", fontWeight: "600" }}>Services</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#services"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FF6B98")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                >
                  Bridal Makeup
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#services"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FF6B98")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                >
                  Hair Styling
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#services"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FF6B98")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                >
                  Facials
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#services"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FF6B98")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                >
                  Nail Art
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#FF6B98")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                >
                  Spa Treatments
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4">
            <h5 style={{ marginBottom: "20px", fontWeight: "600" }}>Newsletter</h5>

            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "20px" }}>
              Subscribe to our newsletter for beauty tips, special offers, and updates.
            </p>

            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  style={{
                    borderRadius: "30px 0 0 30px",
                    padding: "10px 20px",
                    border: "none",
                  }}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{
                    borderRadius: "0 30px 30px 0",
                    padding: "10px 20px",
                    backgroundColor: "#FF6B98",
                    border: "none",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>

            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          padding: "20px 0",
          marginTop: "4rem",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p style={{ margin: "0", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
            &copy; {currentYear} SS Herbal Beauty Parlour . All Rights Reserved. Designed with ❤️ by <a
  href="https://www.instagram.com/santhosh.dev_/"
  style={{ color: "white", textDecoration: "none" }}
>
  @Santhosh.Dev
</a>

          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
