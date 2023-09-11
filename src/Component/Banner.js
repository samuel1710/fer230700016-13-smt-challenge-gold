import {Container, Row, Col, Button } from "react-bootstrap"

function BannerSection() {
  return (
    <Container className='customMargin rounded'  
    style={{
        
        backgroundColor: "#0D28A6",

      }}> 
      <Row className='d-flex 
      justify-content-center 
      text-center 
      text-white
      py-5'>
        <Col className='col-lg-12 col-10'>
          <h1>  
          Sewa Mobil di (Lokasimu) Sekarang

          </h1>

          <p className='mx-auto
          w-50'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Button className="mt-5" variant="success">Mulai Sewa Mobil</Button>{' '}

        </Col>
      </Row>
    </Container>
  );
}

export default BannerSection;