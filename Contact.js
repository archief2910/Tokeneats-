import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi'

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
        <div className='row contactus'>
          <div className='col-md-6'>
            <img src='/images/contactus.jpeg' alt='contactus' style={{width:"100%"}} />
          </div>
          <div className='col-md-4'>
            <h1 className='bg-dark p-2 text-white text-center'>Contact Us</h1>
            <p className='text-justify mt-2'>For any queries please feel free to call us, we are available 24x7 at your service</p>
            <p className='mt-3'>
              <BiMailSend/> : www.help@messmanager.com
            </p>
            <p className='mt-3'>
              <BiPhoneCall/> : xxxxxxxxxx
            </p>
            <p className='mt-3'>
              <BiSupport/> : 1800-0000-1800 (toll free)
            </p>

          </div>
        </div>
    </Layout>
  )
}

export default Contact