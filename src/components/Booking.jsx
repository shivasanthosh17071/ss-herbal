"use client"

import { useState } from "react"

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const services = [
    "Hair Cut & Styling",
    "Hair Coloring",
    "Hair Treatment",
    "Facial",
    "Clean Up",
    "Threading",
    "Bridal Makeup",
    "Pre-Bridal Package",
    "Engagement Look",
    "Party Makeup",
    "HD Makeup",
    "Everyday Look",
    "Manicure",
    "Pedicure",
    "Nail Art",
    "Full Body Massage",
    "Aromatherapy",
    "Body Scrub",
  ]

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const message = `
      *New Booking Request*
      Name: ${formData.name}
      Phone: ${formData.phone}
      Email: ${formData.email}
      Service: ${formData.service}
      Date: ${formData.date}
      Time: ${formData.time}
      Message: ${formData.message}
    `

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the pre-filled message
    // Replace 919666706347 with the actual WhatsApp number
    window.open(`https://wa.me/919666706347?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="booking" style={{ backgroundColor: "white", padding: "6rem 0" }}>
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
            BOOK APPOINTMENT
          </h6>

          <h2 className="section-title" style={{ fontSize: "2.5rem" }}>
            Schedule Your Beauty Session
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "1.1rem",
              color: "#666",
            }}
          >
            Book your appointment online and we'll confirm via WhatsApp. Home service is also available for selected
            treatments.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255, 107, 152, 0.8), rgba(138, 79, 255, 0.8)), url("/images/booking-bg.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                padding: "40px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 style={{ color: "white", marginBottom: "20px" }}>Why Book With Us?</h3>

              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <i className="bi bi-calendar-check" style={{ color: "white", fontSize: "1.5rem" }}></i>
                  </div>
                  <div>
                    <h5 style={{ color: "white", margin: "0" }}>Easy Scheduling</h5>
                    <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>Book online anytime</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <i className="bi bi-house-heart" style={{ color: "white", fontSize: "1.5rem" }}></i>
                  </div>
                  <div>
                    <h5 style={{ color: "white", margin: "0" }}>Home Service Available</h5>
                    <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>Beauty at your doorstep</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <i className="bi bi-whatsapp" style={{ color: "white", fontSize: "1.5rem" }}></i>
                  </div>
                  <div>
                    <h5 style={{ color: "white", margin: "0" }}>WhatsApp Confirmation</h5>
                    <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>Quick and convenient</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <i className="bi bi-gem" style={{ color: "white", fontSize: "1.5rem" }}></i>
                  </div>
                  <div>
                    <h5 style={{ color: "white", margin: "0" }}>Premium Experience</h5>
                    <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>Quality service guaranteed</p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "20px",
                  marginTop: "20px",
                }}
              >
                <h5 style={{ color: "white", marginBottom: "10px" }}>Business Hours</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span style={{ color: "white" }}>Monday - Friday</span>
                  <span style={{ color: "white" }}>09:00 AM - 09:00 PM</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span style={{ color: "white" }}>Saturday</span>
                  <span style={{ color: "white" }}>9:00 AM - 9:00 PM</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span style={{ color: "white" }}>Sunday</span>
                  <span style={{ color: "white" }}>10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "15px",
                padding: "40px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              <h4 style={{ color: "#4A0025", marginBottom: "20px" }}>Book Your Appointment</h4>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="service" className="form-label">
                        Select Service *
                      </label>
                      <select
                        className="form-select"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          border: "1px solid #ddd",
                        }}
                      >
                        <option value="">Choose a service...</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="date" className="form-label">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="time" className="form-label">
                        Preferred Time *
                      </label>
                      <select
                        className="form-select"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          border: "1px solid #ddd",
                        }}
                      >
                        <option value="">Choose a time...</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Additional Notes
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          border: "1px solid #ddd",
                        }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="homeService"
                        style={{
                          borderRadius: "5px",
                          border: "1px solid #ddd",
                        }}
                      />
                      <label className="form-check-label" htmlFor="homeService">
                        I would like home service (additional charges may apply)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      style={{
                        borderRadius: "10px",
                        padding: "12px",
                        fontWeight: "600",
                        boxShadow: "0 4px 15px rgba(255, 107, 152, 0.4)",
                      }}
                    >
                      <i className="bi bi-whatsapp me-2"></i> Book via WhatsApp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
