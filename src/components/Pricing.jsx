function Pricing() {
  const pricingCategories = [
    {
      id: 1,
      name: "Hair Services",
      items: [
        { service: "Hair Cut (Women)", price: "₹500 - ₹800" },
        { service: "Hair Cut (Men)", price: "₹300 - ₹500" },
        { service: "Hair Coloring", price: "₹1500 - ₹3000" },
        { service: "Hair Styling", price: "₹800 - ₹2000" },
        { service: "Hair Spa", price: "₹1200 - ₹2500" },
        { service: "Keratin Treatment", price: "₹4000 - ₹8000" },
      ],
    },
    {
      id: 2,
      name: "Skin Care",
      items: [
        { service: "Basic Facial", price: "₹800" },
        { service: "Gold Facial", price: "₹1500" },
        { service: "Diamond Facial", price: "₹2000" },
        { service: "Clean Up", price: "₹500" },
        { service: "Threading (Eyebrows)", price: "₹100" },
        { service: "Full Face Threading", price: "₹250" },
      ],
    },
    {
      id: 3,
      name: "Bridal Packages",
      items: [
        { service: "Bridal Makeup", price: "₹8000 - ₹15000" },
        { service: "Engagement Makeup", price: "₹4000 - ₹6000" },
        { service: "Pre-Bridal Package (6 sessions)", price: "₹12000" },
        { service: "Family Makeup (per person)", price: "₹2000" },
        { service: "Mehndi", price: "₹1500 - ₹5000" },
        { service: "Complete Bridal Package", price: "₹25000" },
      ],
    },
    {
      id: 4,
      name: "Makeup",
      items: [
        { service: "Party Makeup", price: "₹2000" },
        { service: "HD Makeup", price: "₹2500" },
        { service: "Airbrush Makeup", price: "₹3500" },
        { service: "Everyday Makeup", price: "₹1000" },
        { service: "Eye Makeup", price: "₹800" },
        { service: "Makeup with Hairstyling", price: "₹3000" },
      ],
    },
  ]

  const specialOffers = [
    {
      id: 1,
      name: "Bridal Bliss Package",
      price: "₹20,000",
      originalPrice: "₹25,000",
      description: "Complete bridal makeup, hairstyling, mehndi, and pre-bridal treatments",
      image: "https://img.freepik.com/premium-photo/portrait-beautifull-girl-posing-time-looking-down_108126-47.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
      popular: true,
    },
    {
      id: 2,
      name: "Facial + Threading Combo",
      price: "₹850",
      originalPrice: "₹1,050",
      description: "Gold facial with eyebrow and upper lip threading",
      image: "https://img.freepik.com/free-photo/young-woman-relaxing-beauty-salon_23-2148895551.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
      popular: false,
    },
    {
      id: 3,
      name: "Party Ready Package",
      price: "₹3,500",
      originalPrice: "₹4,500",
      description: "HD makeup, hairstyling, and manicure for special occasions",
      image: "https://img.freepik.com/free-photo/woman-sideways-standing-curtain-sparkles_23-2148331904.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
      popular: false,
    },
  ]

  return (
    <section id="pricing" style={{ backgroundColor: "white", padding: "6rem 0" }}>
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
            OUR PRICING
          </h6>

          <h2 className="section-title" style={{ fontSize: "2.5rem" }}>
            Transparent & Affordable Pricing
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "1.1rem",
              color: "#666",
            }}
          >
            We offer competitive pricing for all our beauty services with no hidden costs. Check out our special
            packages for even better value.
          </p>
        </div>

        {/* Special Offers */}
        <div className="mb-5">
          <h3 style={{ textAlign: "center", marginBottom: "30px", color: "#4A0025" }}>Special Packages & Offers</h3>

          <div className="row g-4">
            {specialOffers.map((offer) => (
              <div key={offer.id} className="col-md-6 col-lg-4 ">
                <div
                  className="card h-100 border-0"
                  style={{
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                    backgroundColor: "white",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                    position: "relative",
                  }}
                >
                  {offer.popular && (
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "0",
                        backgroundColor: "#FFD700",
                        color: "#4A0025",
                        padding: "5px 15px",
                        fontWeight: "600",
                        fontSize: "0.8rem",
                        zIndex: "2",
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    >
                      MOST POPULAR
                    </div>
                  )}

                  <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
                    <img
                      src={offer.image || "/placeholder.svg"}
                      className="card-img-top"
                      alt={offer.name}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "#4A0025", fontWeight: "700" }}>
                      {offer.name}
                    </h4>
                    <p className="card-text" style={{ color: "#666", marginBottom: "20px" }}>
                      {offer.description}
                    </p>

                    <div className="price-tag mb-4">
                      <span
                        style={{
                          fontSize: "0.9rem",
                          textDecoration: "line-through",
                          color: "#999",
                          marginRight: "10px",
                        }}
                      >
                        {offer.originalPrice}
                      </span>
                      <span style={{ fontSize: "1.8rem", fontWeight: "700", color: "#FF6B98" }}>{offer.price}</span>
                    </div>

                    <a
                      href="#booking"
                      className="btn btn-primary w-100"
                      style={{
                        borderRadius: "30px",
                        padding: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Book This Package
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Price List */}
        <div className="row g-4 mt-5">
          {pricingCategories.map((category) => (
            <div key={category.id} className="col-md-6">
              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: "15px",
                  padding: "30px",
                  height: "100%",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    color: "#4A0025",
                    marginBottom: "20px",
                    position: "relative",
                    paddingBottom: "15px",
                  }}
                >
                  {category.name}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "50px",
                      height: "3px",
                      backgroundColor: "#FF6B98",
                    }}
                  ></span>
                </h3>

                <table className="table">
                  <tbody>
                    {category.items.map((item, index) => (
                      <tr key={index}>
                        <td style={{ border: "none", padding: "12px 0" }}>{item.service}</td>
                        <td
                          style={{
                            border: "none",
                            color: "#FF6B98",
                            fontWeight: "600",
                            textAlign: "right",
                            padding: "12px 0",
                          }}
                        >
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p style={{ color: "#666", marginBottom: "20px" }}>
            * Prices may vary based on hair length, skin type, and specific requirements.
          </p>

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

export default Pricing
