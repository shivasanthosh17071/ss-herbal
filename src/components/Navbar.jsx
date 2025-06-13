"use client"

import { useState, useEffect } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
      style={{
        transition: "all 0.3s ease",
        padding: scrolled ? "10px 0" : "20px 0",
      }}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="#"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8rem",
            color: scrolled ? "#FF6B98" : "#fff",
            textShadow: scrolled ? "none" : "1px 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          SS Herbal Beauty 

 
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                style={{
                  color: scrolled ? "#333" : "#fff",
                  fontWeight: "500",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                style={{
                  color: scrolled ? "#333" : "#fff",
                  fontWeight: "500",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                style={{
                  color: scrolled ? "#333" : "#fff",
                  fontWeight: "500",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#pricing"
                style={{
                  color: scrolled ? "#333" : "#fff",
                  fontWeight: "500",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#gallery"
                style={{
                  color: scrolled ? "#333" : "#fff",
                  fontWeight: "500",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#booking"
                style={{
                  color: scrolled ? "#333" : "#fff",
                  fontWeight: "500",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Book
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#testimonials"
                style={{
                  color: scrolled ? "#333" : "#fff",
                  fontWeight: "500",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                style={{
                  color: scrolled ? "#333" : "#fff",
                  fontWeight: "500",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex ms-lg-3">
            <a
              href="https://wa.me/919666706347"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{
                backgroundColor: scrolled ? "#f8f9fa" : "rgba(255,255,255,0.2)",
                color: scrolled ? "#FF6B98" : "#fff",
              }}
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{
                backgroundColor: scrolled ? "#f8f9fa" : "rgba(255,255,255,0.2)",
                color: scrolled ? "#FF6B98" : "#fff",
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
                backgroundColor: scrolled ? "#f8f9fa" : "rgba(255,255,255,0.2)",
                color: scrolled ? "#FF6B98" : "#fff",
              }}
            >
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
