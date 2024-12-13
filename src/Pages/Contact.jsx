import React from 'react'
import BreadCrumps from '../components/BreadCrumps'

function Contact() {
  return (
    <div>
      <BreadCrumps title="Get in touch" Page="Contact" />
      <>

  <div className="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54693.29221736419!2d31.2774690486328!3d31.04489029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dd4295c80e9%3A0x29c566a018cecb77!2sMansoura%20University!5e0!3m2!1sen!2seg!4v1697995735095!5m2!1sen!2seg"
      width="100%"
      height={700}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  <div className="middle">
    <div className="contact-wrap">
      <div className="p1">
        <h1>Contact Us</h1>
        <p>
          If you would like to know more about our policies, you can consult our
          Terms and Conditions.You
          <br />
          will also be able to follow your order (tracking number will be
          provided in an e-mail after ordering). You wish to return some items?
          <a href="#">Click here.</a>
        </p>
      </div>
      <div className="location">
        <img src="assets/resources/Location.png" width={20} height={30} />
        <h3>Address</h3>
      </div>
      <div className="location2">
        <p>
          Click the icon in the bottom right of the page to talk to our agents
          during business hours. At other times we will respond as soon as
          possible.
        </p>
      </div>
      <div className="phone">
        <img src="assets/resources/mobile.png" width={40} height={40} />
        <h3>Phone</h3>
      </div>
      <div className="phone2">
        <p>+41 71 227 76 90</p>
      </div>
      <div className="mail">
        <img src="assets/resources/mail.png" width={40} height={30} />
        <h3>Email</h3>
      </div>
      <div className="mail2">
        <p>help@example.com</p>
      </div>
      <div className="clock">
        <img src="assets/resources/clock.png" width={30} height={30} />
        <h3>Open Hours</h3>
      </div>
      <div className="clock2">
        <p>
          Monday to Friday 09:30 - 17:30
          <br />
          Saturday &amp; Sunday 10:00 - 15:00
        </p>
      </div>
    </div>
    <div className="form">
      <h1 className="form-title">Send Us A Message</h1>
      <form>
        <input type="text" placeholder="Your name..." className="txt" />
        <input type="text" placeholder="your mail" className="txt" />
        <textarea className="txt-area" rows={4} cols={100} defaultValue={""} />
        <button>Send</button>
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
        <input
          type="text"
          placeholder="your email address..."
          className="bottom-txt"
        />
        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Contact