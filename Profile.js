import React, { state,useState } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth,setAuth } from '../../context/auth'

const Profile = () => {
    const [auth] = useAuth();
  const [balance,setBalance] = useState();
  
  console.log("hii");
    axios.get(`${process.env.REACT_APP_API}/admin/getBalance`)
    .then((response) => {
        console.log(response.data)
        if (response) {
            setBalance(response.data)
        } else {
            alert("Failed to Fetch balance!")
        }
    })
    .catch(err=>{
        console.log(err);
    })
    return (
        <Layout title={"Dashboard - TokenEats"}>
        <div className='container-fluid p-3 m-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <UserMenu />
                </div>
                <div className='col-md-9'>
                    <div className='card w-75 p-3' style={{  "background-color": "rgb(45, 49, 72)","border":"none", "color":"white"}}>
                      <h3>Name : {auth?.user?.name}</h3>
                      <h3>Enrollment No. : {auth?.user?.roll}</h3>
                      <h3>Email : {auth?.user?.email}</h3>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    )
}

export default Profile