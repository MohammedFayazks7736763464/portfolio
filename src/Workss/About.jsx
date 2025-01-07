import React from 'react'
import './About.css'

function About() {
  return ( 
    <>
    <div className='top container '>
  
        <h5 style={{color:"black",fontSize:"35px",fontWeight:"bold",marginLeft:"20px"}}>ABOUT   ME</h5>  
    </div>

    {/* 2nd */}

    <div className='front container  d-flex justify-content-evenly '>

      <div className='about '>
        <p>I'm a dedicated front-end developer passionate about crafting intuitive and visually stunning web experiences.
           With a solid foundation in HTML, CSS, and JavaScript, 
          I love transforming design concepts into functional applications, always prioritizing user experience. I thrive on solving complex problems and continuously seek to 
          expand my skill set by exploring new technologies and frameworks. Outside of coding, I enjoy playing football, which fuels my creativity and keeps me inspired. 
          Collaborative by nature, I value teamwork and open communication, believing that the best results come from shared ideas and diverse perspectives.</p>
      </div>

      <div className='image'>
        <img  style={{width:"350px",height:"350px",borderRadius:"30px"}} src="https://irp-cdn.multiscreensite.com/2847941c/dms3rep/multi/5+Page+Designs+-+Developer+Animation.png+-+Canva+1156+X+1350.png" alt="" />
      </div>





    </div>
   
   



    </>
  )
}

export default About
