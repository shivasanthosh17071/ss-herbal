"use client"

import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import Gallery from "./components/Gallery"
import Booking from "./components/Booking"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  // Add smooth scrolling effect
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  }, [])

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      {/* Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

      {/* Custom styles */}
      <style>
        {`
          :root {
            --primary-color: #FF6B98;
            --secondary-color: #8A4FFF;
            --accent-color: #FFD700;
            --light-color: #FFF5F8;
            --dark-color: #4A0025;
          }
          
          body {
            font-family: 'Poppins', sans-serif;
            color: #333;
            background-color: var(--light-color);
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
          }
          
          .section-title {
            position: relative;
            display: inline-block;
            color: var(--dark-color);
            margin-bottom: 2rem;
            font-weight: 700;
          }
          
          .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 60%;
            height: 3px;
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          }
          
          .btn-primary {
            background-color: var(--primary-color);
            border-color: var(--primary-color);
          }
          
          .btn-primary:hover {
            background-color: #ff4983;
            border-color: #ff4983;
          }
          
          .btn-outline-primary {
            color: var(--primary-color);
            border-color: var(--primary-color);
          }
          
          .btn-outline-primary:hover {
            background-color: var(--primary-color);
            color: white;
          }
          
          section {
            padding: 5rem 0;
          }
          
          .card {
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
          }
          
          .card:hover {
            transform: translateY(-5px);
          }
          
          .social-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: var(--light-color);
            color: var(--primary-color);
            font-size: 1.2rem;
            margin: 0 5px;
            transition: all 0.3s ease;
          }
          
          .social-icon:hover {
            background-color: var(--primary-color);
            color: white;
          }
          
          .service-card {
            border-left: 4px solid var(--primary-color);
          }
          
          .testimonial-card {
            background-color: white;
            border-radius: 15px;
            padding: 20px;
            margin: 15px 0;
            position: relative;
          }
          
          .testimonial-card::before {
            content: '"';
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 4rem;
            color: rgba(255, 107, 152, 0.2);
            font-family: 'Georgia', serif;
          }
          
          @media (max-width: 768px) {
            .section-title {
              font-size: 1.8rem;
            }
          }
        `}
      </style>

      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <Booking />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossOrigin="anonymous"
      ></script>
    </>
  )
}

export default App
