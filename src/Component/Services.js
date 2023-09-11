// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import services from '../images/img_service.png'
import correct from '../images/correct.png'
// import ListGroup from 'react-bootstrap/ListGroup';
import {Container, Row, Col, ListGroup, Image } from "react-bootstrap"

function SectionServices() {
  return (
    <Container className='customMargin'>
      <Row className='justify-content-lg-center'>
        <Col>
        <Image className='ibuResponsive' src={services} />

        </Col>

        <Col className='col-lg-5 col-10'>
        <div>
             <h1 className='fs-lg-3 fs-2 fw-bold'>
             Best Car Rental for any kind of trip in (Lokasimu)!
             </h1>

             <p className=' textKecil fw-bold'> 
             
            
             Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
             </p>
              
              <div>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item className='border-0'> <Image className='me-3' src={correct} />Sewa Mobil Dengan Supir di Bali 12 Jam</ListGroup.Item>
                <ListGroup.Item className='border-0'> <Image className='me-3' src={correct} />Sewa Mobil Lepas Kunci di Bali 24 Jam</ListGroup.Item>
                <ListGroup.Item className='border-0'> <Image className='me-3' src={correct} />Sewa Mobil Jangka Panjang Bulanan</ListGroup.Item>
                <ListGroup.Item className='border-0'> <Image className='me-3' src={correct} />Gratis Antar - Jemput Mobil di Bandara</ListGroup.Item>
                <ListGroup.Item className='border-0'> <Image className='me-3' src={correct} />Layanan Airport Transfer / Drop In Out</ListGroup.Item>
              </ListGroup>
              

              </div>
             

        </div>
        
        </Col>

      </Row>
    
    </Container>
  );
}

export default SectionServices;