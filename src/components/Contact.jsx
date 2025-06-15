"use client"

function Contact() {
  const handleWhatsApp = () => {
    // Replace 919666706347 with the actual WhatsApp number
    window.open("https://wa.me/919666706347", "_blank")
  }

  const handleCall = () => {
    // Replace 919666706347 with the actual phone number
    window.location.href = "tel:919666706347"
  }

  const handleEmail = () => {
    // Replace email@example.com with the actual email
    window.location.href = "mailto:email@example.com"
  }

  return (
    <section id="contact" style={{ backgroundColor: "white", padding: "6rem 0" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h6
            style={{
              color: "#FF6B98",
              fontWeight: "600",
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            CONTACT US
          </h6>

          <h2 className="section-title" style={{ fontSize: "2.5rem" }}>
            Get In Touch With Us
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "1.1rem",
              color: "#666",
            }}
          >
            Have questions or want to book an appointment? Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "15px",
                padding: "30px",
                height: "100%",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              <h4 style={{ color: "#4A0025", marginBottom: "30px" }}>Contact Information</h4>

              <div className="d-flex align-items-center mb-4">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 107, 152, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "20px",
                  }}
                >
                  <i className="bi bi-geo-alt" style={{ color: "#FF6B98", fontSize: "1.8rem" }}></i>
                </div>
                <div>
                  <h5 style={{ margin: "0", fontWeight: "600" }}>Our Location</h5>
                  <p style={{ margin: "0", color: "#666" }}>4, 7-59, Khas Bagh, Sai Clony, Hayathnagar Khalsa, Hyderabad, Telangana</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(138, 79, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "20px",
                  }}
                >
                  <i className="bi bi-telephone" style={{ color: "#8A4FFF", fontSize: "1.8rem" }}></i>
                </div>
                <div>
                  <h5 style={{ margin: "0", fontWeight: "600" }}>Call Us</h5>
                  <p style={{ margin: "0", color: "#666" }}>+91 9666706347</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 215, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "20px",
                  }}
                >
                  <i className="bi bi-envelope" style={{ color: "#FFD700", fontSize: "1.8rem" }}></i>
                </div>
                <div>
                  <h5 style={{ margin: "0", fontWeight: "600" }}>Email Us</h5>
                  <p style={{ margin: "0", color: "#666" }}>Swapna@gmail.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(74, 0, 37, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "20px",
                  }}
                >
                  <i className="bi bi-clock" style={{ color: "#4A0025", fontSize: "1.8rem" }}></i>
                </div>
                <div>
                  <h5 style={{ margin: "0", fontWeight: "600" }}>Business Hours</h5>
                  <p style={{ margin: "0", color: "#666" }}>Mon-Fri: 09AM-09PM, Sat: 9AM-10PM, Sun: 10AM-10PM</p>
                </div>
              </div>

              <div className="mt-5">
                <h5 style={{ marginBottom: "15px" }}>Connect With Us</h5>
                <div className="d-flex">
                  <a
                    href="https://wa.me/919666706347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon me-2"
                    style={{
                      backgroundColor: "#25D366",
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
                      backgroundColor: "#E1306C",
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
                      backgroundColor: "#1877F2",
                      color: "white",
                    }}
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              {/* Google Maps Embed Placeholder */}
              {/* Google Maps Embed for S S Herbal Beauty Parlour */}
<div className="mt-4 rounded shadow-sm overflow-hidden" style={{ width: "100%", height: "300px" }}>
  <iframe
    title="S S Herbal Beauty Parlour Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.767605289869!2d78.601397973316!3d17.32675840455257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba16f6e618725%3A0x8e25cc6ecfdb39da!2sS%20S%20Herbal%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1749837436696!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


              <div
                style={{
                  backgroundColor: "#FF6B98",
                  padding: "30px",
                  color: "white",
                }}
              >
                <h4 style={{ marginBottom: "20px" }}>Quick Contact</h4>

                <div className="row g-3">
                  <div className="col-md-4">
                    <button
                      className="btn btn-light w-100"
                      style={{
                        borderRadius: "10px",
                        padding: "15px",
                        fontWeight: "600",
                      }}
                      onClick={handleWhatsApp}
                    >
                      <i className="bi bi-whatsapp me-2"></i> WhatsApp
                    </button>
                  </div>

                  <div className="col-md-4">
                    <button
                      className="btn btn-light w-100"
                      style={{
                        borderRadius: "10px",
                        padding: "15px",
                        fontWeight: "600",
                      }}
                      onClick={handleCall}
                    >
                      <i className="bi bi-telephone me-2"></i> Call
                    </button>
                  </div>

                  <div className="col-md-4">
                    <button
                      className="btn btn-light w-100"
                      style={{
                        borderRadius: "10px",
                        padding: "15px",
                        fontWeight: "600",
                      }}
                      onClick={handleEmail}
                    >
                      <i className="bi bi-envelope me-2"></i> Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
