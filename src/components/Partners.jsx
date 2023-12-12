import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function Partners() {
  return (
    <>
    <h2 className='m-5'>Partners</h2>

    <div className='ms-5'>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Valvoline_company_logo.svg/1200px-Valvoline_company_logo.svg.png" rounded width={150} />
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://njbmwcca.org/wp-content/uploads/2022/12/Tyspeed2.jpg" rounded width={150} />
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOjjrZZ6S9DIbdNfbMZycVJXVdnNV2NguBg&usqp=CAU" rounded width={250} />
            </Col>
          </Row>
        </Container>
    </div>

    </>
  )
}

export default Partners