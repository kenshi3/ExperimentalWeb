import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <StaticImage className="profile-pic" src="https://res.cloudinary.com/kenshi/image/upload/v1614865463/photo.jpg" alt="Nordic Giant Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>A Software Engineer</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Kenshi Lau</span><br />
						   <span>Remote</span><br />
						   <span>+62 811-355-2553</span><br />
                     <span>ryukenlau@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     {/* <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a> */}
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    )
}

export default About;
