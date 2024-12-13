import React from 'react'

function Header() {
  return (
    <div>
          <header className="header">
    <div className="container-fluid nav-bar" id="sticky-navbar">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-lg py-4">
          <a href="/" className="navbar-brand">
            <img src="assets/images/logo.webp" alt="main-logo" className="navbar-brand-img" />
          </a>
          <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars " />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><a href="/" target="_self" className="nav-link active">Home</a></li>
                <li className="nav-item"><a href="/about" target="_self" className="nav-link">About</a></li>
                <li className="nav-item"><a href="/shop" target="_self" className="nav-link">Shop</a></li>
                <li className="nav-item"><a href="/blogs" target="_self" className="nav-link">Blogs</a></li>
                <li className="nav-item"><a href="/contact" target="_self" className="nav-link">Contact</a></li>
              </ul>
            </div>
            <div className="nav-icons">
              <a href="/shop"><i className="bx bx-heart" /></a>
              <a href="/shop"><i className="bx bx-cart" /></a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Header