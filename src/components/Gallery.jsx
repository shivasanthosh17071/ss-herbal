"use client"

import { useState } from "react"

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "bridal", name: "Bridal" },
    { id: "makeup", name: "Makeup" },
    { id: "hair", name: "Hair" },
    { id: "parlour", name: "Parlour" },
  ]

  const galleryItems = [
    {
      id: 1,
      image: "/images/gallery-1.jpg",
      category: "bridal",
      title: "Traditional Bridal Look",
    },
    {
      id: 2,
      image: "/images/gallery-2.jpg",
      category: "makeup",
      title: "Party Makeup",
    },
    {
      id: 3,
      image: "/images/gallery-3.jpg",
      category: "hair",
      title: "Hair Styling",
    },
    {
      id: 4,
      image: "/images/gallery-4.jpg",
      category: "bridal",
      title: "Modern Bridal Makeup",
    },
    {
      id: 5,
      image: "/images/gallery-5.jpg",
      category: "makeup",
      title: "Natural Glam Look",
    },
    {
      id: 6,
      image: "/images/gallery-6.jpg",
      category: "parlour",
      title: "Salon Interior",
    },
    {
      id: 7,
      image: "/images/gallery-7.jpg",
      category: "hair",
      title: "Hair Coloring",
    },
    {
      id: 8,
      image: "/images/gallery-8.jpg",
      category: "bridal",
      title: "Engagement Look",
    },
    {
      id: 9,
      image: "/images/gallery-9.jpg",
      category: "parlour",
      title: "Beauty Products",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" style={{ backgroundColor: "#FFF5F8", padding: "6rem 0" }}>
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
            OUR GALLERY
          </h6>

          <h2 className="section-title" style={{ fontSize: "2.5rem" }}>
            Showcasing Our Beautiful Work
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "1.1rem",
              color: "#666",
            }}
          >
            Browse through our gallery to see the transformations and beautiful work we've done for our clients over the
            years.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="text-center mb-4">
          <div
            className="d-inline-flex flex-wrap justify-content-center gap-2 p-2 rounded-pill"
            style={{ backgroundColor: "white", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`btn ${activeCategory === category.id ? "btn-primary" : "btn-light"}`}
                style={{
                  borderRadius: "30px",
                  padding: "8px 20px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div
                className="card border-0"
                style={{
                  overflow: "hidden",
                  borderRadius: "15px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
              >
                <div style={{ position: "relative", overflow: "hidden", height: "280px" }}>
                  <img
                    src={item.image || "/placeholder.svg"}
                    className="card-img-top"
                    alt={item.title}
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
                      bottom: "0",
                      left: "0",
                      right: "0",
                      padding: "15px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                      color: "white",
                      transform: "translateY(100%)",
                      transition: "transform 0.3s ease",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    className="gallery-overlay"
                  >
                    <h5 style={{ margin: "0" }}>{item.title}</h5>
                    <button
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.2)",
                        color: "white",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className="bi bi-zoom-in"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed */}
        <div className="text-center mt-5">
          <h4 style={{ color: "#4A0025", marginBottom: "20px" }}>Follow Us On Instagram</h4>

          <a
            href="https://www.instagram.com/swapna_makeupartist.16/?igsh=dWhkcnNoOGlhN2t4#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              backgroundColor: "#E1306C",
              color: "white",
              borderRadius: "30px",
              padding: "10px 25px",
              fontWeight: "600",
            }}
          >
            <i className="bi bi-instagram me-2"></i> SSHerbal 
          </a>

          {/* Instagram Embed Placeholder */}
          <div
            className="mt-4 p-4 text-center"
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <p style={{ color: "#666" }}>Instagram feed would be embedded here in the live website.</p>
          </div>
        </div>
      </div>

      <style>
        {`
          .card:hover img {
            transform: scale(1.05);
          }
          
          .card:hover .gallery-overlay {
            transform: translateY(0);
          }
        `}
      </style>
    </section>
  )
}

export default Gallery
