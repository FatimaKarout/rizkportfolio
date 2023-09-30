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
                    <p> Our Address</p>

                    <p> Our HeadQuarters</p>
                </div>
                {/* const  */}
                <div className='flex-itemz'>
                    <nav class="social-media"> Our Phones</nav>
                    <p>Office Phone:</p><nav style={{ color: 'white' }}>+96104606987</nav>
                    <p>Mobile Phone:</p><nav style={{ color: "white" }}>+96170606987</nav>
                </div>

                <div className='flex-itemz'>

                    <p>Follow us on social media:</p>
                    <div class="social-media">

                        <a href="https://www.facebook.com" target='_blank'>
                            <img src={Facebook} style={{ height: "25px", fill: 'white' }} alt='PhoneCall' />
                        </a>
                    </div>
                    <div class="social-media">

                        <a href="https://www.github.com" target='_blank'>
                            <img src={Github} style={{ height: "25px", background: 'white' }} alt='PhoneCall' />
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/">Twitter</a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/">Instagram</a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/">Instagram</a>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer1;