import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3 logo-column">
          <a href="#"><img src="assets/images/logo.webp" width="170px" height="70px" className="logo-footer" /></a>
          <p id="p-footer">
            Sophisticated simplicity for the <br />
            independent mind.
          </p>
          <ul className="list-inline socials">
            <li className="list-inline-item">
              <i className="fa-brands fa-twitter" />
            </li>
            <li className="list-inline-item">
              <i className="fa-brands fa-instagram" />
            </li>
            <li className="list-inline-item">
              <i className="fa-brands fa-dribbble" />
            </li>
            <li className="list-inline-item">
              <i className="fa-brands fa-behance" />
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>Help &amp; Information</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Products Return</a></li>
            <li><a href="#">Wholesale Policy</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Pagination</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Home Page</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Menu Items</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Address Store</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Home Page</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2023 | design by <span>Vaegy Team</span></p>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer