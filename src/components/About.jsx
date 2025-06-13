function About() {
  return (
    <section id="about" style={{ backgroundColor: "white", padding: "6rem 0" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              style={{
                position: "relative",
                padding: "20px",
              }}
            >
              <img
                src="https://img.freepik.com/premium-photo/woman-is-putting-necklace-that-says-she-is-wearing_981168-5097.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740"
                alt="Beautician at work"
                className="img-fluid rounded-3 shadow"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  zIndex: "2",
                  position: "relative",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  width: "60%",
                  height: "60%",
                  bottom: "0",
                  right: "0",
                  backgroundColor: "#FF6B98",
                  zIndex: "1",
                  borderRadius: "15px",
                }}
              ></div>

              <div
                style={{
                  position: "absolute",
                  width: "40%",
                  height: "40%",
                  top: "0",
                  left: "0",
                  backgroundColor: "#8A4FFF",
                  zIndex: "1",
                  borderRadius: "15px",
                }}
              ></div>

              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  padding: "15px 30px",
                  borderRadius: "50px",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                  zIndex: "3",
                }}
              >
                <div className="text-center px-3" style={{ borderRight: "1px solid #ddd" }}>
                  <h3 style={{ color: "#FF6B98", fontWeight: "700", margin: "0" }}>6+</h3>
                  <p style={{ margin: "0", fontSize: "0.9rem" }}>Years Experience</p>
                </div>

                <div className="text-center px-3">
                  <h3 style={{ color: "#8A4FFF", fontWeight: "700", margin: "0" }}>100+</h3>
                  <p style={{ margin: "0", fontSize: "0.9rem" }}>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div style={{ paddingLeft: "20px" }}>
              <h6
                style={{
                  color: "#FF6B98",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  marginBottom: "15px",
                }}
              >
                ABOUT US
              </h6>

              <h2 className="section-title" style={{ fontSize: "2.5rem" }}>
                Transforming Beauty Since 2017
              </h2>

              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                Welcome to SS Herbal Beauty Parlour , where traditional desi beauty techniques meet modern aesthetics. With over 6
                years of dedicated experience in the beauty industry, we've been helping women discover their most
                beautiful selves.
              </p>

              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "30px" }}>
                Our journey began with a passion for enhancing natural beauty and has evolved into a full-service beauty
                parlour offering everything from bridal makeup to everyday beauty treatments. We take pride in using
                premium products and personalized approaches for each client.
              </p>

              <div className="row mb-4">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 107, 152, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                      }}
                    >
                      <i className="bi bi-award" style={{ color: "#FF6B98", fontSize: "1.5rem" }}></i>
                    </div>
                    <div>
                      <h5 style={{ margin: "0", fontWeight: "600" }}>Certified Expert</h5>
                      <p style={{ margin: "0", fontSize: "0.9rem" }}>Professional training</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(138, 79, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                      }}
                    >
                      <i className="bi bi-gem" style={{ color: "#8A4FFF", fontSize: "1.5rem" }}></i>
                    </div>
                    <div>
                      <h5 style={{ margin: "0", fontWeight: "600" }}>Premium Products</h5>
                      <p style={{ margin: "0", fontSize: "0.9rem" }}>Quality guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 215, 0, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                      }}
                    >
                      <i className="bi bi-stars" style={{ color: "#FFD700", fontSize: "1.5rem" }}></i>
                    </div>
                    <div>
                      <h5 style={{ margin: "0", fontWeight: "600" }}>Bridal Specialist</h5>
                      <p style={{ margin: "0", fontSize: "0.9rem" }}>Perfect wedding looks</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(74, 0, 37, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                      }}
                    >
                      <i className="bi bi-house-heart" style={{ color: "#4A0025", fontSize: "1.5rem" }}></i>
                    </div>
                    <div>
                      <h5 style={{ margin: "0", fontWeight: "600" }}>Home Service</h5>
                      <p style={{ margin: "0", fontSize: "0.9rem" }}>Beauty at your doorstep</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="#services"
                  className="btn btn-primary"
                  style={{
                    borderRadius: "30px",
                    padding: "12px 30px",
                    fontWeight: "600",
                    boxShadow: "0 4px 15px rgba(255, 107, 152, 0.4)",
                  }}
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
