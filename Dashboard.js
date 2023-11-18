import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
// import { useAuth } from '../../context/auth'
import axios from 'axios'
import { useEffect } from 'react'
import useEthereum from '../../Ethereum/TokenContract'
import { useAuth } from '../../context/auth'
// import {web3} from 'web3'
const Web3 = require('web3')
// import { useRouteError } from 'react-router-dom'

const Dashboard = ({ TokenContract }) => {
    const [walletAddress, setWalletAddress] = useState("");
    // const router = useRouteError();
    // const [name, setname] = useState();
    // const [phoneNo, setphoneNo] = useState();
    // const [success, setsuccess] = useState(false);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const { connectWallet, user } = useEthereum();
    // useEffect(() => {
    //     let provider = window.ethereum;
    //     if (typeof provider !== 'undefined') {
    //         provider
    //             .request({ method: 'eth_requestAccounts' })
    //             .then((accounts) => {
    //                 console.log(accounts);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    //     }

    //     const web3 = new Web3(provider);
    // }, []);


    
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

    // async function handlePay() {
        

    //     /* const addCustomer = async () => {
    //       await TokenContract.transferToken( user.id,1);
    //     };
    //     addCustomer()
    //       .then(() => {
    //         if (error) setError(false);
    //         router.push("/customer")
    //       })
    //       .catch((e) => {
    //         if (success) setsuccess(false);
    //         setError(e.reason);
    //       }); */

    // }

    return (
        <Layout title={"Dashboard - TokenEats"}>
            <div className='container-fluid p-3 m-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu />
                    </div>
                    <div className='col-md-9'>
                        {/* <h3> {auth?.user?.name}'s remaining balance is {balance}</h3> */}
                        {/* <div className='card w-25 p-5 ' style={{ "background-color": "rgb(45, 49, 72)", "border": "none" }}>

                            <button className='btn btn-lg btn-success' onClick={handlePay} >Pay Now</button>

                        </div> */}
                        <h3>Your remaining balance is {balance}</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard