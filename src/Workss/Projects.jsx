import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import'./Projects.css'




function Projects() {
  return (
    <>
    <div className='top container '>
  
  <h5 style={{color:"black",fontSize:"35px",fontWeight:"bold",marginLeft:"20px"}}>MY PROJECTS</h5>  
</div>

{/* next */}

<div className='card  '>
  <div className='clone container  '>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d.newsweek.com/en/full/356324/spotify.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:"25px",fontWeight:"bold"}}>Spotify Clone</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
       <Link to={"https://github.com/MohammedFayazks7736763464/spotify-clone"} target='_blank'><Button  variant="primary">GIT HUB</Button>  </Link> 
        
      <Link to={"https://idyllic-salamander-19473e.netlify.app/"} target='_blank'> <Button style={{margin:"20px"}} variant="primary">LIVE LINK</Button>  </Link> 
       
       
       
      </Card.Body>
    
  </Card>





  <Card style={{ width: '18rem' }}>
      <Card.Img  style={{height:"160px"}} variant="top" src="https://th.bing.com/th/id/OIP.-uEqTMu2Vd_NL9-C-rtHNgHaHa?w=1380&h=1380&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title style={{fontSize:"25px",fontWeight:"bold"}}>TRAVEL WEBSITE</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
       <Link to={"https://github.com/MohammedFayazks7736763464/travel"} target='_blank'><Button  variant="primary">GIT HUB</Button>  </Link> 
        
      <Link to={"https://radiant-creponne-64e45e.netlify.app/"} target='_blank'> <Button style={{margin:"20px"}} variant="primary">LIVE LINK</Button>  </Link> 
       
       
       
      </Card.Body>
    
  </Card>
  
  <Card style={{ width: '18rem',backgroundColor:"" }}>
      <Card.Img style={{height:"160px"}} variant="top" src="https://th.bing.com/th/id/OIP.Z0tTN4662fPHdTqiICLKAgHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title style={{fontSize:"25px",fontWeight:"bold"}}>BMI CALCULATOR</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
       <Link to={"https://github.com/MohammedFayazks7736763464/bmi"} target='_blank'><Button  variant="primary">GIT HUB</Button>  </Link> 
        
      <Link to={"https://lucent-bienenstitch-aefa5a.netlify.app/ "} target='_blank'> <Button style={{margin:"20px"}} variant="primary">LIVE LINK</Button>  </Link> 
       
       
       
      </Card.Body>
    
  </Card>
   
  </div>


  {/* 2nd */}

  <div className='calc container'>

  <Card style={{ width: '18rem',backgroundColor:"" }}>
      <Card.Img style={{height:"160px"}} variant="top" src="https://th.bing.com/th/id/OIP.nFCxGkLBVwY4g1-vcJ0hBwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title style={{fontSize:"25px",fontWeight:"bold"}}>CALCULATOR</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
       <Link to={"https://github.com/MohammedFayazks7736763464/calculator"} target='_blank'><Button  variant="primary">GIT HUB</Button>  </Link> 
        
      <Link to={"https://taupe-belekoy-6ff7b7.netlify.app/"} target='_blank'> <Button style={{margin:"20px"}} variant="primary">LIVE LINK</Button>  </Link> 
       
       
       
      </Card.Body>
    
  </Card>



  <Card style={{ width: '18rem',backgroundColor:"" }}>
      <Card.Img style={{height:"160px"}} variant="top" src="https://th.bing.com/th/id/OIP.QKpn8OE_vziY3c-awnsTmwHaEO?w=323&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title style={{fontSize:"25px",fontWeight:"bold"}}>Discount Calculator</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
       <Link to={"https://github.com/MohammedFayazks7736763464/discount"} target='_blank'><Button  variant="primary">GIT HUB</Button>  </Link> 
        
      <Link to={" "} target='_blank'> <Button style={{margin:"20px"}} variant="primary">LIVE LINK</Button>  </Link> 
       
       
       
      </Card.Body>
    
  </Card>



  <Card style={{ width: '18rem',backgroundColor:"" }}>
      <Card.Img style={{height:"160px"}} variant="top" src="https://th.bing.com/th/id/OIP.BV_8inDAx6fiCECyO7PqRwHaFj?w=252&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title style={{fontSize:"25px",fontWeight:"bold"}}>MEDIA PLAYER</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
       <Link to={""} target='_blank'><Button  variant="primary">GIT HUB</Button>  </Link> 
        
      <Link to={" "} target='_blank'> <Button style={{margin:"20px"}} variant="primary">LIVE LINK</Button>  </Link> 
       
       
       
      </Card.Body>
    
  </Card>






   
  </div>
  <div  className='parallax container d-flex justify-content-evenly'>
  <Card style={{ width: '18rem',backgroundColor:"" }}>
      <Card.Img style={{height:"160px"}} variant="top" src="https://th.bing.com/th/id/OIP.XeXABRCzYKWcKjiit96UAQAAAA?w=474&h=370&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title style={{fontSize:"25px",fontWeight:"bold"}}>PARALLAX WEBSITE</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
       <Link to={"https://github.com/MohammedFayazks7736763464/jacob-and-co"} target='_blank'><Button  variant="primary">GIT HUB</Button>  </Link> 
        
      <Link to={"https://startling-banoffee-a94926.netlify.app/"} target='_blank'> <Button style={{margin:"20px"}} variant="primary">LIVE LINK</Button>  </Link> 
       
       
       
      </Card.Body>
    
  </Card>
  <Card style={{ width: '18rem',backgroundColor:"" }}>
      <Card.Img style={{height:"160px"}} variant="top" src="https://th.bing.com/th/id/OIP.BCF242fERez2o_tC_2Jm5QHaEx?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title style={{fontSize:"25px",fontWeight:"bold"}}>Budget Calculator</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
       <Link to={""} target='_blank'><Button  variant="primary">GIT HUB</Button>  </Link> 
        
      <Link to={"https://rad-blancmange-6ea6c3.netlify.app/"} target='_blank'> <Button style={{margin:"20px"}} variant="primary">LIVE LINK</Button>  </Link> 
       
       
       
      </Card.Body>
    
  </Card>





 




 






  </div>


 




  








































  {/* last end tag */}



</div>


    
    
    
    
    </>
   
  )
}

export default Projects
