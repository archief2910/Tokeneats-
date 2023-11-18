import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Eat Now - TokenEats"}>
      <div className='d-flex '>
        <div className="header-text col-md-6 p-5">
          <h1 className='mx-5 pt-4 mt-5 fs-1 fw-bolder'>Tokenize Your Tastes,<br />Simplify Your Transactions.</h1>
          <p className='mx-5 mt-4 fs-6'>Step into Token Eats, where each bite not only delights your palate but also makes every transaction
            seamlessly savored, bringing together the perfect blend of Culinary Enjoyment and Smart Savings!</p>
            {!auth.user?<NavLink to="/register" className="nav-link" href="#"><button type="button" className="btn btn-danger mx-5 btn-lg mt-2 fs-6">Get Started</button></NavLink>:<></>}
        </div>
        <div className="header-img col-md-4 p-4">
          <img src='\images\img-top.png' height={"500px"} />
        </div>
      </div>
      <div className="services">
        <div className="services-heading">
          <h1>Features</h1>

        </div>
        <div className="row our-services p-5">
          <div className="service-col col-md-3">
            <center>
              <div className="icon-services text-white p-0"><i className="fa fa-bitcoin fa-5x" /></div>
            </center>
            <h3>Mess Menu</h3>
            <p classname="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae corrupti mollitia quisquam
              iure. Maxime!</p>
          </div>
          <div className="service-col col-md-3">
            <center>
              <div className="icon-services text-white p-0"><i className="fa fa-bitcoin fa-5x" /></div>
            </center>
            <h3>Tokenize your meal savings!</h3>
            <p classname="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae corrupti mollitia quisquam
              iure. Maxime!</p>
          </div>
          <div className="service-col col-md-3">
            <center>
              <div className="icon-services text-white p-0"><i className="fa fa-bitcoin fa-5x" /></div>
            </center>
            <h3>Keep track of your meals</h3>
            <p classname="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae corrupti mollitia quisquam
              iure. Maxime!</p>
          </div>
          <div className="service-col col-md-3">
            <center>
              <div className="icon-services text-white p-0"><i className="fa fa-bitcoin fa-5x" />
              </div>
            </center>
            <h3>Value for your insights </h3>
            <p classname="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae corrupti mollitia quisquam
              iure. Maxime!</p>
          </div>
        </div>
      </div>
      <div className="services" id='testimonials'>
        <div className="services-heading">
          <h1>Testimonials</h1>

        </div>
        <div id="testimonial-carousel" className="carousel slide" data-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active text-white text-center container-fluid">
              <h2 className=''>I have saved so much money using this app that i no longer need internship or placement
              </h2>
              <img src="/images/download.png" className="profile" alt="dog-profile" />
              <em>Pebbles, New York</em>
            </div>
            <div className="carousel-item text-white text-center container-fluid">
              <h2 className="testimonial-text">I have saved so much money using this app that i no longer need internship or placement</h2>
              <img className="testimonial-image profile" src="/images/download.png" alt="lady-profile" />
              <em>Beverly, Illinois</em>
            </div>
          </div>
          <a href="#testimonial-carousel" className="carousel-control-prev" data-slide="prev" role="button">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </a>
          <a href="#testimonial-carousel" className="carousel-control-next" data-slide="next" role="button">
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </a>
        </div>
      </div>

    </Layout>
  )
}

export default HomePage