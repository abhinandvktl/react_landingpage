import React from 'react'
import Services from '../components/Services';
import Partners from '../components/Partners';


function Landingpage() {
  return (
    <>
      <div style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/car-engine-repair-shop-auto-service-industry-automotive-background_795422-8814.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        width:1458,
        height:800
      }}>
        <div style={{paddingLeft:200,paddingTop:150}}><h1 className='text-warning' >FRIENDLY, FAST AND <br /> KNOWLEDGEABLE SERVICE - <br /> EVERY TIME!</h1></div>

        <div style={{paddingLeft:200,paddingTop:60,paddingLeft:250}}><h3 className='text-light'>A mechanic you can trust!</h3></div>

        <div style={{paddingLeft:250}}>
        <button type="button" class="btn btn-secondary">Read More</button>
        </div>
      </div>


      <Services/>
      <Partners/>



    </>
  )
}

export default Landingpage