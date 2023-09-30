import React from 'react'
import "./Footer1.css"
import PhoneCall from "../icons/PhoneCall.svg";
import Github from "../icons/Github.svg";
import Instagram from "../icons/Instagram.svg";
import Facebook from "../icons/Facebook.jpg";



const Footer1 = () => {
    return (
        <div className='foots'>
            <div className='Flex_containerz'>
                <div className='flex-itemz'>
                    <p> Our Addreses</p>
                    <p style={{ color: 'white', }}>Beirut, Lebanon</p>
                    <p> Our HeadQuarters</p>
                    <p style={{ color: 'white', }}> Dubai, U.A.E.</p>
                </div>
                {/* const  */}
                <div className='flex-itemz'>
                    <p class="social-media"> Our Phones</p>
                    <p style={{ color: 'white', }}>Office  Phone:  +96104606987</p>
                    <p style={{ color: "white" }}>Mobile Phone:   +96170606987</p>
                </div>

                <div className='flex-itemz'>

                    <p>Follow us on social media:</p>
                    <div class="social-media">

                        <a href="https://www.facebook.com" target='_blank' rel="noreferrer" >
                            <img src={Facebook} style={{ height: "25px", fill: 'white' }} alt='Facebook' />
                        </a>
                        {/* </div>
                    <div class="social-media"> */}
                        <a href="https://www.github.com" target='_blank' rel="noreferrer" >
                            <img src={Github} style={{ height: "25px", background: 'white' }} alt='Github' />
                        </a>
                    </div>
                    <div class="social-media">

                        <a href="https://www.instagram.com" target='_blank' rel="noreferrer" >
                            <img src={Instagram} style={{ height: "25px", background: 'white' }} alt='Instagram' />
                        </a>
                        {/* </div>
                    <div class="social-media"> */}
                        <a href="https://twitter.com" target='_blank' rel="noreferrer" >
                            <img src={Github} style={{ height: "25px", background: 'white' }} alt='twitter' />
                        </a>
                    </div>


                </div>
                <div>

                </div>

            </div>
        </div>


    )
}

export default Footer1;