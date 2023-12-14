import React from 'react'
import Services from '../components/Services';
import Partners from '../components/Partners';
import './Landingpage.css';

function Landingpage() {
  return (
    <>
      <div style={{
        backgroundImage: `url("https://simbaauto.com/wp-content/uploads/sites/514/2023/07/AdobeStock_595213057-1024x574.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        width:1458,
        height:650
      }}>
        
        <div className='main-heading' style={{paddingLeft:250,paddingTop:150}}><h1 className='text-warning' >FRIENDLY, FAST AND <br /> KNOWLEDGEABLE SERVICE - <br /> EVERY TIME!</h1></div>

        <div className='second-heading' style={{paddingLeft:350,paddingTop:30}}><h3 className='text-light'>A mechanic you can trust!</h3></div>

        <div style={{paddingLeft:350}}>
        <button type="button" class="btn btn-secondary">Read More</button>
        </div>
      </div>


      <Services/>
      <Partners/>



    </>
  )
}

export default Landingpage