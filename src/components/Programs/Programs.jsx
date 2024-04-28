import React from 'react'
import './Programs.css'
import RigthArrow from '../../assets/rightArrow.png'
import { programsData } from '../../data/programsData'
const Programs = () => {
    return (
        <div className="Programs" id='programs'>
            {/* headers */}
            <div className="programs-header">
                <span className='stroke-text'>Explore out</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape your</span>
            </div>
            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now"><span>Join Now</span>
                        <img src={RigthArrow} alt=''></img>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs
