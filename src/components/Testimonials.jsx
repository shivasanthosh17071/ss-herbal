"use client"

import { useState } from "react"

function Testimonials() {
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    rating: 5,
    message: "",
  })

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      message:
        "I got my bridal makeup done here and it was absolutely stunning! Everyone at my wedding was complimenting how beautiful I looked. The makeup artist understood exactly what I wanted and delivered beyond my expectations.",
      image: "https://img.freepik.com/free-vector/minimalist-geometric-judith-s-tiktok-profile-picture_742173-12131.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
    },
    {
      id: 2,
      name: "Ananya Patel",
      rating: 5,
      message:
        "I've been coming here for facials for over a year now, and my skin has never looked better. The staff is very professional and knowledgeable about skincare. Highly recommend their gold facial!",
      image: "https://img.freepik.com/premium-photo/portrait-young-successful-indian-woman-worker-employee-stand-isolated-grey-studio-background-feel-confident-millennial-mixed-race-female-intern-show-motivation-employment-hr-concept_656932-3758.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
    },
    {
      id: 3,
      name: "Meera Kapoor",
      rating: 4,
      message:
        "Got a haircut and color here last week. The stylist was very skilled and gave me exactly what I asked for. The ambience is also very nice and relaxing. Will definitely come back!",
      image: "https://img.freepik.com/free-vector/geometric-professional-consultant-discord-profile-picture_742173-13190.jpg?t=st=1749837796~exp=1749841396~hmac=b2bf2487deba7ebb72eaad874059afe02ab2af39ceb59c26ce3b737b88c5d908&w=1380",
    },
    {
      id: 4,
      name: "Riya Desai",
      rating: 5,
      message:
        "I booked their home service for party makeup and it was so convenient! The makeup artist arrived on time with all equipment and did an amazing job. Everyone was asking where I got my makeup done!",
      image: "https://img.freepik.com/free-photo/sexy-fashion-beauty-person-smile_1303-574.jpg?ga=GA1.1.8474301.1749832929&semt=ais_hybrid&w=740",
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewTestimonial((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your testimonial! It will be reviewed and published soon.")
    setNewTestimonial({
      name: "",
      rating: 5,
      message: "",
    })
  }

  return (
    <section id="testimonials" style={{ backgroundColor: "#FFF5F8", padding: "6rem 0" }}>
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
            TESTIMONIALS
          </h6>

          <h2 className="section-title" style={{ fontSize: "2.5rem" }}>
            What Our Clients Say
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "1.1rem",
              color: "#666",
            }}
          >
            Don't just take our word for it. Here's what our happy clients have to say about their experience with us.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6">
              <div
                className="testimonial-card"
                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "30px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  height: "100%",
                }}
              >
                <div className="d-flex mb-4">
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      marginRight: "15px",
                      border: "3px solid #FF6B98",
                    }}
                  >
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div>
                    <h5 style={{ color: "#4A0025", margin: "0", fontWeight: "600" }}>{testimonial.name}</h5>
                    <div className="mt-1">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi bi-star${i < testimonial.rating ? "-fill" : ""}`}
                          style={{ color: "#FFD700", fontSize: "0.9rem" }}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>

                <p style={{ color: "#666", fontSize: "1rem", fontStyle: "italic" }}>"{testimonial.message}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Testimonial Form */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              <h4 style={{ color: "#4A0025", marginBottom: "20px", textAlign: "center" }}>Share Your Experience</h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={newTestimonial.name}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #ddd",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Rating *</label>
                  <div className="rating-select">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="rating"
                          id={`rating${rating}`}
                          value={rating}
                          checked={Number.parseInt(newTestimonial.rating) === rating}
                          onChange={handleChange}
                          style={{
                            borderRadius: "50%",
                            border: "1px solid #ddd",
                          }}
                        />
                        <label className="form-check-label" htmlFor={`rating${rating}`}>
                          {rating} {rating === 1 ? "Star" : "Stars"}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={newTestimonial.message}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #ddd",
                    }}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      borderRadius: "30px",
                      padding: "12px 30px",
                      fontWeight: "600",
                      boxShadow: "0 4px 15px rgba(255, 107, 152, 0.4)",
                    }}
                  >
                    Submit Testimonial
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
