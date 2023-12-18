import React from 'react'
import vg from "../assets/img/2.webp"
import {AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram} from 'react-icons/ai'
import IconWrapper from './IconWrapper'
const Home = () => {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>Vision Pro</h1>
                    <p>Take a Leap into future</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt='graphics'/>
                <div>
                    <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we Are</h1>
                    <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                        
                    </p>        
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <IconWrapper time={0.3} text="Google" icon={<AiFillGoogleCircle/>}/>
                        <IconWrapper time={0.5} text="Amazon" icon={<AiFillAmazonCircle/>}/>
                        <IconWrapper time={0.7} text="Youtube" icon={<AiFillYoutube/>}/>
                        <IconWrapper time={0.9} text="Instagram" icon={<AiFillInstagram/>}/>
                    </article>
                </div>
            </div>
        </>

    )
}

export default Home