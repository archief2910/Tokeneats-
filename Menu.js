import React from 'react'
import Layout from '../components/Layout/Layout'
import menu from '../messMenu'
import { useAuth } from '../context/auth'

const Menu = () => {
    const [auth,setAuth] = useAuth();
    return (
        <Layout title={"About Us"}>
            <div className="row contactus ">
                <div className="col-md-8 ">
                    {/* <table>
                        <tbody>
                            <tr>
                                <th>Days/Items</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                            </tr>
                            <tr>
                                <th>Breakfast</th>
                                <td contenteditable="true">{menu.monday.breakfast}</td>
                                <td contenteditable="true">{menu.tuesday.breakfast}</td>
                                <td contenteditable="true">{menu.wednesday.breakfast}</td>
                                <td contenteditable="true">{menu.thursday.breakfast}</td>
                                <td contenteditable="true">{menu.friday.breakfast}</td>
                                <td contenteditable="true">{menu.saturday.breakfast}</td>
                                <td contenteditable="true">{menu.sunday.breakfast}</td>
                            </tr>
                            <tr>
                                <th>Lunch</th>
                                <td contenteditable="true">{menu.monday.lunch}</td>
                                <td contenteditable="true">{menu.tuesday.lunch}</td>
                                <td contenteditable="true">{menu.wednesday.lunch}</td>
                                <td contenteditable="true">{menu.thursday.lunch}</td>
                                <td contenteditable="true">{menu.friday.lunch}</td>
                                <td contenteditable="true">{menu.saturday.lunch}</td>
                                <td contenteditable="true">{menu.sunday.lunch}</td>
                            </tr>
                            <tr>
                                <th>Dinner</th>
                                <td contenteditable="true">{menu.monday.dinner}</td>
                                <td contenteditable="true">{menu.tuesday.dinner}</td>
                                <td contenteditable="true">{menu.wednesday.dinner}</td>
                                <td contenteditable="true">{menu.thursday.dinner}</td>
                                <td contenteditable="true">{menu.friday.dinner}</td>
                                <td contenteditable="true">{menu.saturday.dinner}</td>
                                <td contenteditable="true">{menu.sunday.dinner}</td>
                            </tr>
                        </tbody>
                    </table> */}
                    <table>
                        <tbody>
                            <tr className='row-table m-2'>
                                <th style={{padding:"20px"}}>Days/Items</th>
                                <th style={{padding:"20px"}}>Breakfast</th>
                                <th style={{padding:"20px"}}>Lunch</th>
                                <th style={{padding:"20px"}}>Dinner</th>
                            </tr>
                            <tr>
                                <th  style={{padding:"20px"}}>Monday</th>
                                <td style={{padding:"20px"}}>{menu.tuesday.breakfast}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td>
                            </tr>
                            <tr>
                                <th style={{padding:"20px"}}>Tuesday</th>
                                <td style={{padding:"20px"}}>{menu.tuesday.breakfast}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td>  </tr>
                            <tr>
                                <th style={{padding:"20px"}}>Wednesday</th>
                                <td style={{padding:"20px"}}>{menu.tuesday.breakfast}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td></tr>
                            <tr>
                                <th style={{padding:"20px"}}>thursday</th>
                                <td style={{padding:"20px"}}>{menu.tuesday.breakfast}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td> </tr>
                            <tr>
                                <th style={{padding:"20px"}}>friday</th>
                                <td style={{padding:"20px"}}>{menu.tuesday.breakfast}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td> </tr>
                            <tr>
                                <th style={{padding:"20px"}}>saturday</th>
                                <td style={{padding:"20px"}}>{menu.tuesday.breakfast}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td> </tr>
                            <tr>
                                <th style={{padding:"20px"}}>sunday</th>
                                <td style={{padding:"20px"}}>{menu.tuesday.breakfast}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td>
                                <td style={{padding:"20px"}}>{menu.tuesday.lunch}</td>  </tr>

                        </tbody>
                    </table>


                </div>

            </div>
        </Layout>
    )
}

export default Menu