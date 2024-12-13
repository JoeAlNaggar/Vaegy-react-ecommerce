import React from 'react'

function Home() {
  return (
    <div>
  <section className="hero-section">
    <div className="swiper-container" style={{overflowX: 'hidden'}}>
      <div className="swiper-wrapper">
        <div className="swiper-slide main-img">
          <img src="assets/images/s1.webp" className="d-block w-100" alt="Image 1" />
          <div className="banner-txt">
            <h4>Quality Assurance!</h4>
            <h3>Organic Food</h3>
            <a href="/shop" className="shop-btn">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-us">
    <h2> <span>About </span> us</h2>
    <div className="sectionOne">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center my-5">
          <div className="content col-lg-6 col-md-6 col-sm-12">
            <h3>Fashion Style
              <br />
              Love From Our Passion</h3>
            <p>Suspendisse non nisl sit amet velit hendrerit rutrum. Nulla porta dolor. Nunc interdum lacus sit amet orci. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Etiam sit amet orci eget eros faucibus tincidunt.</p>
            <p className="p2">Maecenas egestas arcu quis ligula mattis placerat. Quisque id mi. Sed a libero. Vestibulum ullamcorper mauris at ligula. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.</p>
          </div>
          <div className="image col-lg-6 col-md-6 col-sm-12">
            <img className="img-fluid" src="assets/images/about2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="Revolutionary py-5 m-auto text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 content">
            <h2 className="mb-4">Revolutionary Inclusivity</h2>
            <p>Suspendisse non nisl sit amet velit hendrerit rutrum. Nulla porta dolor. Nunc interdum lacus sit amet orci. Donec orci lectus, aliquam ut faucibus non, euismod id, nulla. Etiam sit amet orci eget eros faucibus tincidunt.Maecenas egestas arcu quis ligula mattis placerat. Quisque id mi. Sed a libero. Vestibulum ullamcorper mauris at ligula. Aenean posuere, tortor sed cursus feugiat,</p>
            <div className="button-wrapper">
              <a href="/shop">EXPLORE OUR PRODUCT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="products">
    <h2>Fresh <span>Products</span></h2>
    <div className="container">
      <div className="row py-4" style={{width: '100%'}}>
        <div className="col-12 product" id="right">
          <div className="row mb-2">
            <div className="col-6 col-md-3 col-lg-3 price-5-10 size-medium color-yellow">
              <div className="hover-icon-center">
                <img src="assets/images/one.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Onion <br /><span className="text-success">5.00$</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 price-5-10 size-xlarge color-green">
              <div className="hover-icon-center">
                <img src="assets/images/two.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Broccoli <br /><span className="text-success">8.00$</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 price-5-10 size-medium color-red">
              <div className="hover-icon-center">
                <img src="assets/images/three.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Tomato <br /><span className="text-success">3.00$</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 price-5-10 size-xxlarge color-gray">
              <div className="hover-icon-center">
                <img src="assets/images/four.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Potato <br /><span className="text-success">6.00$</span>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6 col-md-3 col-lg-3 price-5-10 size-xxlarge color color-green">
              <div className="hover-icon-center">
                <img src="assets/images/five.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Cabbage <br /><span className="text-success">10.00$</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 price-11-20 size-small color-yellow">
              <div className="hover-icon-center">
                <img src="assets/images/six.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Carrot <br /><span className="text-success">12.00$</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 price-11-20 size-large color-green">
              <div className="hover-icon-center">
                <img src="assets/images/seven.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Cabbage <br /><span className="text-success">13.00$</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 price-5-10 size-medium color-blue">
              <div className="hover-icon-center">
                <img src="assets/images/eight.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Eggplant <br /><span className="text-success">7.00$</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3 col-lg-3 price-5-10 size-small color-blue">
              <div className="hover-icon-center">
                <img src="assets/images/nine.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Onion <br /><span className="text-success">10.00$</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 price-11-20 size-small color-gray">
              <div className="hover-icon-center">
                <img src="assets/images/ten.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Garlic <br /><span className="text-success">15.00$</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 price-5-10 size-small color-yellow">
              <div className="hover-icon-center">
                <img src="assets/images/onee.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                Lemon <br /><span className="text-success text-decoration-line-through opacity-50 me-1">9.00$</span><span className>7.00$</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 price-5-10 size-medium color-red">
              <div className="hover-icon-center">
                <img src="assets/images/twoo.png.jpg" alt="product-image" />
                <div className="popup opacity-0">
                  <a href="product1.html"><i className="fa-solid fa-cart-shopping" /></a>
                  <a href="product1.html"><i className="fa-solid fa-magnifying-glass" /></a>
                  <a href="product1.html"><i className="fa-regular fa-heart" /></a>
                </div>
              </div>
              <div className="text-center fw-bolder">
                tomatoes <br />
                <span className="text-success">9.00$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contact-us">
    <h2> <span>contact</span> Us</h2>
    <div className="middle">
      <div className="form">
        <h2 className="form-title">Send Us A Message</h2>
        <form>
          <input type="text" placeholder="Your name..." className="txt" />
          <input type="text" placeholder="your mail" className="txt" />
          <textarea className="txt-area" placeholder="your message" rows={4} cols={100} defaultValue={""} />
          <button className="send-btn">Send</button>
        </form>
      </div>
    </div>
    <div className="bottom">
      <div className="p2">
        <img src="assets/resources/mail2.png" width={70} height={50} />
        <h3>
          SIGN UP <br />
          FOR NEW SETTLER
        </h3>
      </div>
      <div className="p3">
        <p>Subscribe to the weekly newsletter for all the latest updates</p>
        <div className="Subscribe">
          <input type="text" placeholder="your email address..." className="bottom-txt" />
          <button type="submit" className="submit-btn">SUBMIT</button>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Home