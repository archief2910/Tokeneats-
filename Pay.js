import React, { useState } from 'react'
import axios from 'axios';
import Layout from '../../components/Layout/Layout'
import { useLocation, useNavigate } from 'react-router-dom';

const Pay = () => {
    const [roll,setRoll] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.put(
                `${process.env.REACT_APP_API}/vendor`,{roll}
            );
            if(response.data.success){
                alert("Payment successful")
                navigate("/vendor");
            }else{
                alert("Login Failed");
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <Layout title={"Payment - TokenEats"}>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                <h2 className='title text-dark' style={{alignItems:"center", justifyContent:"center"}}>Enter Student Enrollment no.</h2>
                    <div className="form-group">
                        <input type="text" value={roll} onChange={(e)=>setRoll(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter your roll no." required />
                    </div>
                    <button type="submit" style={{position:"relative", left:"75px"}} className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Pay