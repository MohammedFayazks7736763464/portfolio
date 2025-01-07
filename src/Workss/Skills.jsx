import React from 'react'
import './skills.css'

function Skills() {
  return (
    <>

<div className='top container '>
  
  <h5 style={{color:"black",fontSize:"35px",fontWeight:"bold",marginLeft:"20px"}}>MY SKILLS</h5>  
</div>



    <div className='box container '>

      <div className='row1 d-flex justify-content-evenly'>
        <div className='html'>
            <img className='pixel' src="https://img.icons8.com/?size=48&id=20909&format=png" alt="" />
            <h5>HTML</h5>
        </div>
        <div className='html'>
            <img className='pixel' src="https://img.icons8.com/?size=48&id=21278&format=png" alt="" />
            <h5>CSS</h5>
        </div>
        <div className='html'>
            <img className='pixel' src="https://img.icons8.com/?size=50&id=ldQqWiIRv9bc&format=png" alt="" />
            <h5>BOOTSTRAP</h5>
        </div>
        <div className='html'>
            <img className='pixel' src="https://img.icons8.com/?size=48&id=108784&format=png" alt="" />
            <h5>JAVA SCRIPT</h5>
        </div>
     
       
        
       
      </div>


      {/* row 2 */}



      <div className='ro2 d-flex justify-content-evenly'>
      <div className='html'>
            <img className='pixel' src="https://img.icons8.com/?size=40&id=bzf0DqjXFHIW&format=png" alt="" />
            <h5>REACT JS</h5>
        </div>
      <div className='html'>
            <img className='pixel' src="https://img.icons8.com/?size=50&id=12599&format=png" alt="" />
            <h5>GIT HUB</h5>
        </div>
      <div className='html'>
            <img className='pixel' src="https://img.icons8.com/?size=50&id=amXjtNWVYSKP&format=png" alt="" />
            <h5>FIGMA</h5>
        </div>






      </div>








      
      
    </div>
    </>
    
  
  )
}

export default Skills
