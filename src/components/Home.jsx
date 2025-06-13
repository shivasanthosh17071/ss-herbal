function Home() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/hero-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(5px)",
                padding: "40px",
                borderRadius: "15px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontSize: "3.5rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                Glow Like <span style={{ color: "#FFD700" }}>Never Before</span>
              </h1>

              <p
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  marginBottom: "30px",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                Experience the magic of traditional desi beauty treatments with a modern twist. Six years of expertise
                in transforming looks and boosting confidence.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="#booking"
                  className="btn btn-primary btn-lg"
                  style={{
                    borderRadius: "30px",
                    padding: "12px 30px",
                    fontWeight: "600",
                    boxShadow: "0 4px 15px rgba(255, 107, 152, 0.4)",
                  }}
                >
                  Book Now
                </a>

                <a
                  href="#services"
                  className="btn btn-outline-light btn-lg"
                  style={{
                    borderRadius: "30px",
                    padding: "12px 30px",
                    fontWeight: "600",
                  }}
                >
                  View Services
                </a>

                <a
                  href="#contact"
                  className="btn btn-light btn-lg"
                  style={{
                    borderRadius: "30px",
                    padding: "12px 30px",
                    fontWeight: "600",
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
        }}
      >
        <a
          href="#about"
          style={{
            color: "white",
            fontSize: "2rem",
          }}
        >
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0) translateX(-50%);
            }
            40% {
              transform: translateY(-20px) translateX(-50%);
            }
            60% {
              transform: translateY(-10px) translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  )
}

export default Home
