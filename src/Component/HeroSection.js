import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import car from '../images/img_car.png';

function SectionMobil() {
  return (
    <Container fluid 
    className='customMargin customNavbar margin-hero py-5'> 

      <Row className='justify-content-lg-end'>
        <Col className='col-lg-5 col-10'>
        <div>
            <h1 className= 'fs-2 fw-bold'>
             Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)    
            </h1>  

            <p className='fw-bold'>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            
            <Button variant="success">Mulai Sewa Mobil</Button>{' '}

        </div>
        
        </Col>


        <Col className='col-lg-6 gx-0'>   
        <Image className= 'float-end responsiveCar ' src={car} />
        

        </Col>
      </Row>
      
    </Container>
  );
}

export default SectionMobil;