import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const Choose = () => {
    const [user, setUser] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Layout title={"TokenEats"}>
            <div className='container-fluid  d-flex justify-content-center' >
                <div className='card col-md-4 mt-5 p-5 text-center'>
                    <form action="" style={{"color":"black"}}>
                        <h2>Login as</h2>
                        <div>
                        <div className='m-3'>
                        &nbsp; <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
                        &nbsp; <label htmlFor="html"style={{"color":"black"}}>Student</label><br />
                        </div>
                        <div className='m-3'>
                        &nbsp; <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
                        &nbsp; <label htmlFor="css"style={{"color":"black"}}>Vendor</label><br />
                        </div>
                        </div>
                        <input type="submit" className='btn btn-primary' defaultValue="Submit" />
                    </form>


                </div>
            </div>
        </Layout>
    )
}

export default Choose