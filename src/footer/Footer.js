import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiTwitch } from 'react-icons/fi';

function SectionFooter() {
  return (
    <Container className='custom-Footer'>
      <Row>
        <Col className='col-4 '>
            <h1 className='fs-5 fw-bold'>
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </h1>
              
              <h2 className='fs-5 fw-bold'>
              binarcarrental@gmail.com
              </h2>

              <p className='fs-5 fw-bold'>
              081-233-334-808
              </p>
              
        
        </Col>
        <Col className='col-2'>
        <ListGroup className='list-group-flush'>
      <ListGroup.Item className='border-0'>Our services</ListGroup.Item>
      <ListGroup.Item className='border-0'>Testimonial</ListGroup.Item>
      <ListGroup.Item className='border-0'>Why Us</ListGroup.Item>
      <ListGroup.Item className='border-0'>FAQ</ListGroup.Item>
      
    </ListGroup>
        
        </Col>
        <Col className='col-3'>
                   <h1 className='fs-5'>
                    Connect with Us
                   </h1>

        <div>
        <span 
            className='
            rounded-circle 
            d-inline-flex 
            align-items-center 
            justify-content-center 
            mb-3
            me-2' 
            style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#0D28A6",
              }}>

            < FiFacebook className='text-white' />
            </span>

            <span 
            className='
            rounded-circle 
            d-inline-flex 
            align-items-center 
            justify-content-center 
            mb-3
            me-2' 
            style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#0D28A6",
              }}>

            < FiInstagram className='text-white' />
            </span>

            <span 
            className='
            rounded-circle 
            d-inline-flex 
            align-items-center 
            justify-content-center 
            mb-3
            me-2' 
            style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#0D28A6",
              }}>

            < FiTwitter className='text-white' />
            </span>

            <span 
            className='
            rounded-circle 
            d-inline-flex 
            align-items-center 
            justify-content-center 
            mb-3
            me-2' 
            style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#0D28A6",
              }}>

            < FiMail className='text-white' />
            </span>

            <span 
            className='
            rounded-circle 
            d-inline-flex 
            align-items-center 
            justify-content-center 
            mb-3
            me-2' 
            style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#0D28A6",
               
              }}>

            < FiTwitch className='text-white' />
            </span>
        </div>

        </Col>
        <Col className='col-3'>
          <p className="fw-bold"> Copyright Binar 2022</p>
        <div className="logo">
            
       </div>
  
        
        </Col>
      </Row>
  
    </Container>
  );
}

export default SectionFooter;