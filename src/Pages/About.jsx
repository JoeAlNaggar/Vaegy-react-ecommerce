import React from 'react'
import BreadCrumps from '../components/BreadCrumps'

function About() {
  return (
    <div>
      <BreadCrumps title="Story" Page="About" />
      <>
  <div className="sectionOne">
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center my-5">
        <div className="content col-lg-6 col-md-6 col-sm-12">
          <h3>
            Fashion Style
            <br />
            Love From Our Passion
          </h3>
          <p>
            Suspendisse non nisl sit amet velit hendrerit rutrum. Nulla porta
            dolor. Nunc interdum lacus sit amet orci. Donec orci lectus, aliquam
            ut, faucibus non, euismod id, nulla. Etiam sit amet orci eget eros
            faucibus tincidunt.
          </p>
          <p className="p2">
            Maecenas egestas arcu quis ligula mattis placerat. Quisque id mi.
            Sed a libero. Vestibulum ullamcorper mauris at ligula. Aenean
            posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
            sollicitudin urna dolor sagittis lacus.
          </p>
        </div>
        <div className="image col-lg-6 col-md-6 col-sm-12">
          <img className="img-fluid" src="assets/images/about2.jpg" alt="about-img" />
        </div>
      </div>
    </div>
  </div>
  {/* end section one */}
  {/* start section two */}
  <div className="Revolutionary py-5 m-auto text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 content">
          <h2 className="mb-4">Revolutionary Inclusivity</h2>
          <p>
            Suspendisse non nisl sit amet velit hendrerit rutrum. Nulla porta
            dolor. Nunc interdum lacus sit amet orci. Donec orci lectus, aliquam
            ut faucibus non, euismod id, nulla. Etiam sit amet orci eget eros
            faucibus tincidunt.Maecenas egestas arcu quis ligula mattis
            placerat. Quisque id mi. Sed a libero. Vestibulum ullamcorper mauris
            at ligula. Aenean posuere, tortor sed cursus feugiat,
          </p>
          <div className="button-wrapper">
            <a href="#">EXPLORE OUR PRODUCT</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end section  */}
  {/* start section  */}
  <div className="Clients py-5">
    <h2>Happy Clients</h2>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 box">
          <div className="star">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p className="py-2">
            Blood bank canine teeth larynx occupational therapist oncologist
            optician plaque spinal tap stat strep screen violence joints
            symptoms x-ray...
          </p>
          <div className="box-data d-flex align-items-center">
            <img
              ps-2=""
              src="assets/images/instagram10_68x68_crop_center.jpg"
              alt="client-img"
            />
            <div className="content">
              <h2>Sara Colinton</h2>
              <p>Nutricionist</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 box">
          <div className="star">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p className="py-2">
            Blood bank canine teeth larynx occupational therapist oncologist
            optician plaque spinal tap stat strep screen violence joints
            symptoms x-ray...
          </p>
          <div className="box-data d-flex align-items-center">
            <img
              ps-2=""
              src="assets/images/instagram5_68x68_crop_center.jpg"
              alt="client-img"
            />
            <div className="content">
              <h2>Sara Colinton</h2>
              <p>Nutricionist</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 box">
          <div className="star">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p className="py-2">
            Blood bank canine teeth larynx occupational therapist oncologist
            optician plaque spinal tap stat strep screen violence joints
            symptoms x-ray...
          </p>
          <div className="box-data d-flex align-items-center">
            <img
              ps-2=""
              src="assets/images/instagram7_68x68_crop_center.jpg"
              alt="client-img"
            />
            <div className="content">
              <h2>Sara Colinton</h2>
              <p>Nutricionist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end section  */}
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

export default About