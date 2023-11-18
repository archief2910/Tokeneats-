import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
import axios from 'axios';


const Orders =  () => {
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
        <Layout title={"My Orders"}>
            <div className='container-fluid p-3 m-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>My Balance</h1><br/>
                        <h3> {auth?.user?.name}'s remaining balance is {balance}</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Orders