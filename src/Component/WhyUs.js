// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {Container, Row, Col, Button, Card } from "react-bootstrap"
import { FiThumbsUp, FiAward } from 'react-icons/fi';
import { IoPricetagOutline } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';



function WhyUsSection() {
  return (
    <Container>
      <Row>
        <Col> 
        <div>
          <h1 className='fs-3 fw-bold mb-3'>
            Why Us?
          </h1>
         
         <p className='fw-bold'>
            Mengapa harus pilih Binar Car Rental?
         </p>
        </div>
        
        </Col> 

      </Row>
      <Row>
        <Col className='col-lg-3 col-12'>
        <Card>
       
        <Card.Body>
            <span 
            className='
            rounded-circle 
            d-inline-flex 
            align-items-center 
            justify-content-center 
            mb-3' 
            style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#F9CC00",
              }}>

            < FiThumbsUp className='text-white' />
            </span>
       

          <Card.Title className='fs-5 fw-bold mb-3'>Mobil Lengkap</Card.Title>
          <Card.Text className='fw-bold'>
          Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
            </Card.Text>
         
         </Card.Body>
        </Card>



        </Col>

        <Col className='col-lg-3 col-12'>
        <Card>
       
       <Card.Body>
           <span 
           className='
           rounded-circle 
           d-inline-flex 
           align-items-center 
           justify-content-center 
           mb-3' 
           style={{
               width: "32px",
               height: "32px",
               background: "#FA2C5A",

             }}>

           < IoPricetagOutline className='text-white' />
           </span>
      

         <Card.Title className='fs-5 fw-bold mb-3'>Harga Murah</Card.Title>
         <Card.Text className='fw-bold'>
         Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
           </Card.Text>
        
        </Card.Body>
       </Card>





        </Col>

        <Col className='col-lg-3 col-12'>
        <Card>
       
       <Card.Body>
           <span 
           className='
           rounded-circle 
           d-inline-flex 
           align-items-center 
           justify-content-center 
           mb-3' 
           style={{
               width: "32px",
               height: "32px",
               background: "#0D28A6",


             }}>

           < AiOutlineClockCircle className='text-white' />
           </span>
      

         <Card.Title className='fs-5 fw-bold mb-3'>Mobil Lengkap</Card.Title>
         <Card.Text className='fw-bold'>
         Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
           </Card.Text>
        
        </Card.Body>
       </Card>
        
        </Col>

        <Col className='col-lg-3 col-12'>
        <Card>
       
       <Card.Body>
           <span 
           className='
           rounded-circle 
           d-inline-flex 
           align-items-center 
           justify-content-center 
           mb-3' 
           style={{
               width: "32px",
               height: "32px",
               background: "#5CB85F",



             }}>

           < FiAward className='text-white' />
           </span>
      

         <Card.Title className='fs-5 fw-bold mb-3'>Sopir Profesional</Card.Title>
         <Card.Text className='fw-bold'>
         Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
           </Card.Text>
        
        </Card.Body>
       </Card>


        </Col>

      </Row>
    </Container>
  );
}

export default WhyUsSection;