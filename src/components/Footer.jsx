import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Facebook, Instagram, Mail, Twitter, Upload } from 'react-feather'




function Footer() {
  return (
    <>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block ps-5'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'><Facebook/>
          </a>
          <a href='' className='me-4 text-reset'><Twitter/>
          </a>
          <a href='' className='me-4 text-reset'><Instagram/>
          </a>
          <a href='' className='me-4 text-reset'><Mail/>
          </a>
        </div>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Vector Garage
              </h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis dolorum quos voluptate nulla aliquam vitae quaerat eos, placeat quo aliquid ipsum dolorem iure minima reiciendis natus ut provident rerum.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Body fairings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Power parts
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Oils
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Essentials
                </a>
              </p>
            </Col>
            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                New York, NY 10012, US
              </p>
              <p>
                vectorgarage@example.com
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4'>
      All rights reserved &copy; <Upload/> &reg;
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Vectorgarage.com
        </a>
      </div>
    </>
  )
}

export default Footer