import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Our project, TokenEats, is about a mess management system which uses a token system for daily mess payments. This token system is implemented using blockchain. This will result in students paying only for the meals they consume and help them to avoid paying for the meals that they skipped. We are also implementing a ness feedback feature where students can provide their feedback on the meals and the vendor can improve the quality of meals accordingly. A lot of other features include announcement section and real time mess menu.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About