import { React, useEffect, useState } from 'react'
import "./Footer1.css"

import Github from "../icons/Github.svg";
import Instagram from "../icons/Instagram.svg";
import Facebook from "../icons/Facebook.jpg";
import Linkedin from "../icons/linkedin.png";
const Footer1 = () => {
    const [data, setData] = useState([]);
    // const [api, setApi] = useState();

    const fetchData = async () => {
        try {
            const Response = await fetch('http://localhost:5000/Foot/foot', {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/json'
                },
            });
            if (Response.ok) {
                const data = await Response.json();
                setData(data.data);
                console.log('Fetched data:', data);
            } else {
                console.error('Failed to fetch data from the API.');
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const data2 = data
    return (
        <div className='foots'>
            {data2.length > 0 ? (
                data2.map((data2) => (
                    <div key={data2._id} className='Flex_containerz' >
                        <div className='flex-itemz'>
                            <p> Our Addreses</p>
                            <p style={{ color: 'white', }}>{data2.t_Address}</p>
                            <p> Our HeadQuarters</p>
                            <p style={{ color: 'white', }}> {data2.t_Headquarter}</p>
                        </div>
                        {/* const  */}
                        <div className='flex-itemz' >
                            <p class="social-media"> Our Phones</p>
                            <p className='pf'>Office  Phone: {data2.t_Telephone}</p>
                            <p className='pf'>Mobile Phone:  {data2.t_Mobile}</p>
                        </div>
                        <div className='flex-itemz'>
                            <p>Follow us on social media:</p>
                            <div class="social-media">

                                <a href="https://www.facebook.com" target='_blank' rel="noreferrer" >
                                    <img src={Facebook} className='socimg' alt='Facebook' />
                                </a>

                                <a href="https://www.github.com" target='_blank' rel="noreferrer" >
                                    <img src={Github} className='socimg' alt='Github' />
                                </a>
                            </div>
                            <div class="social-media">

                                <a href="https://www.instagram.com" target='_blank' rel="noreferrer" >
                                    <img src={Instagram} className='socimg' alt='Instagram' />
                                </a>

                                <a href="https://linkedin.com" target='_blank' rel="noreferrer" >
                                    <img className='socimg' src={Linkedin} alt='Linkedin' />
                                </a>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>)))
                : (<p>No data available</p>)
            }
        </div>
    )
}

export default Footer1;