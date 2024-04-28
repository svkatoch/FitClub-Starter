import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
const Reasons = () => {
    return (
        <div className="Reasons" id='Reasons'>
            <div className="left-r">
                <img src={image1} alt="1" />
                <img src={image2} alt="2" />
                <img src={image3} alt="3" />
                <img src={image4} alt="4" />
            </div>
            <div className="rigth-r">
                <span>some reasons</span>

                <div>
                    <span className='stroke-text'>why </span>
                    <span>choose us?</span>
                </div>
                <div className='details-r'>

                    <div>
                        <img src={tick} alt=""></img>
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>RELATABLE PARTENER</span>
                    </div>
                </div>
                <span style={{
                    color: 'var(--gray)',
                    fontWeight: 'normal'

                }
                }>OUR PARTENER</span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Reasons
