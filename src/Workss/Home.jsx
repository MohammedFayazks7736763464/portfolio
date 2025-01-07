import React from 'react'
import { Button } from 'react-bootstrap'
import'./Home.css'




function Home() {
  return (
    <div className='rono'>
    <div className='main mt-5  '>
        <div className='write'>
            <h4 className='  cc text-warning font-weight-bold '>Hello I'am MOHAMMED FAYAZ</h4>
            <h3 className='text'>I'am a FRONT-END DEVELOPER</h3>
            <p>I'm Mohammed Fayaz, a passionate Front-End Developer skilled in crafting responsive and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and modern frameworks like React.js. With a keen eye for design and performance optimization, I aim to deliver seamless user experiences. Let's build something amazing together!"   <br />
                
              </p>
                 <Button variant="primary" size="lg">
          More Info
        </Button>{' '}
       
                 <Button variant="primary" size="lg">
          HIRE ME
        </Button>{' '}
    

        </div>

        <div className='pic'>
            <img  className='pics' src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" alt="" />


        </div>




      </div>
      </div>
  )
}

export default Home
