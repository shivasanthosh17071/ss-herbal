"use client"

function Services() {
  const serviceCategories = [
    {
      id: 1,
      name: "Hair",
      icon: "bi-scissors",
      description: "Transform your locks with our expert hair services",
      services: [
        { name: "Haircut & Styling", duration: "45 min", price: "₹500" },
        { name: "Hair Coloring", duration: "2 hrs", price: "₹1500" },
        { name: "Hair Treatment", duration: "1 hr", price: "₹1200" },
      ],
      image: "https://img.freepik.com/free-photo/beautiful-woman-has-cutting-hair-hairdresser_329181-1942.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
    },
    {
      id: 2,
      name: "Skin",
      icon: "bi-droplet",
      description: "Revitalize your skin with our specialized treatments",
      services: [
        { name: "Facial", duration: "45 min", price: "₹800" },
        { name: "Clean Up", duration: "30 min", price: "₹500" },
        { name: "Threading", duration: "15 min", price: "₹100" },
      ],
      image: "https://img.freepik.com/premium-photo/closeup-beautician-doctor-hand-making-antiage-procedure-apply-peeling-acid-young-attractive-female_1261167-11470.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
    },
    {
      id: 3,
      name: "Bridal",
      icon: "bi-gem",
      description: "Complete bridal packages for your special day",
      services: [
        { name: "Bridal Makeup", duration: "2 hrs", price: "₹8000" },
        { name: "Pre-Bridal Package", duration: "3 hrs", price: "₹5000" },
        { name: "Engagement Look", duration: "1.5 hrs", price: "₹4000" },
      ],
      image: "https://img.freepik.com/premium-photo/woman-applying-makeup-front-mirror_981168-15713.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
    },
    {
      id: 4,
      name: "Makeup",
      icon: "bi-palette",
      description: "Professional makeup for any occasion",
      services: [
        { name: "Party Makeup", duration: "1 hr", price: "₹2000" },
        { name: "HD Makeup", duration: "1 hr", price: "₹2500" },
        { name: "Everyday Look", duration: "30 min", price: "₹1000" },
      ],
      image: "https://img.freepik.com/free-photo/makeup-artist-vlogging-her-tutorials_23-2149080321.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
    },
    {
      id: 5,
      name: "Nails",
      icon: "bi-hand-index-thumb",
      description: "Beautiful nail art and manicure services",
      services: [
        { name: "Manicure", duration: "45 min", price: "₹500" },
        { name: "Pedicure", duration: "1 hr", price: "₹700" },
        { name: "Nail Art", duration: "30 min", price: "₹300" },
      ],
      image: "https://img.freepik.com/premium-photo/womans-hand-with-red-manicure-pink-background-valentines-day-nail-design_113876-3455.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
    },
    {
      id: 6,
      name: "Spa",
      icon: "bi-flower1",
      description: "Relaxing spa treatments for mind and body",
      services: [
        { name: "Full Body Massage", duration: "1 hr", price: "₹2000" },
        { name: "Aromatherapy", duration: "1 hr", price: "₹2500" },
        { name: "Body Scrub", duration: "45 min", price: "₹1500" },
      ],
      image: "https://img.freepik.com/free-photo/young-woman-having-face-massage-relaxing-spa-salon_176420-7546.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
    },
  ]

  const addToBooking = (service) => {
    alert(`${service.name} added to your booking. Price: ${service.price}`)
    // In a real app, this would add to a cart or booking state
  }

  return (
    <section id="services" style={{ backgroundColor: "#FFF5F8", padding: "6rem 0" }}>
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
            OUR SERVICES
          </h6>

          <h2 className="section-title" style={{ fontSize: "2.5rem" }}>
            Beauty Services We Offer
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "1.1rem",
              color: "#666",
            }}
          >
            Discover our wide range of beauty services designed to enhance your natural beauty and make you feel
            confident and radiant.
          </p>
        </div>

        <div className="row g-4">
          {serviceCategories.map((category) => (
            <div key={category.id} className="col-md-6 col-lg-4 ">
              <div
                className="card h-100 border-0"
                style={{
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                  backgroundColor: "white",
                }}
              >
                <div className="" style={{ position: "relative", overflow: "hidden", height: "200px" }}>
                  <img
                    src={category.image || "/placeholder.svg"}
                    className="card-img-top"
                    alt={category.name}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 107, 152, 0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className={`bi ${category.icon}`} style={{ color: "white", fontSize: "1.5rem" }}></i>
                  </div>
                </div>

                <div className="card-body">
                  <h4 className="card-title" style={{ color: "#4A0025", fontWeight: "700" }}>
                    {category.name}
                  </h4>
                  <p className="card-text" style={{ color: "#666", marginBottom: "20px" }}>
                    {category.description}
                  </p>

                  <div className="service-list">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        className="service-card p-3 mb-3"
                        style={{
                          backgroundColor: "#f9f9f9",
                          borderRadius: "10px",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 style={{ margin: "0", fontWeight: "600" }}>{service.name}</h5>
                          <span style={{ color: "#FF6B98", fontWeight: "700" }}>{service.price}</span>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                          <small style={{ color: "#666" }}>
                            <i className="bi bi-clock me-1"></i> {service.duration}
                          </small>

                          <button
                            className="btn btn-sm"
                            style={{
                              backgroundColor: "rgba(255, 107, 152, 0.1)",
                              color: "#FF6B98",
                              borderRadius: "20px",
                              padding: "5px 15px",
                              fontWeight: "500",
                            }}
                            onClick={() => addToBooking(service)}
                          >
                            <i className="bi bi-plus-circle me-1"></i> Add to Booking
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
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
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
