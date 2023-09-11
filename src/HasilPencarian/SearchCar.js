import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function SearchCarSection() {
  return (
    <Container className='marginsearchcar'>
      <Row className='bg-white 
      shadow 
      border
      rounded-2'>
        <Col>
        
        <Form className='d-flex justify-content-evenly'>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Nama mobil</Form.Label>
        <Form.Control type="text" placeholder="ketik nama/tipe mobil" />   
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Kategori</Form.Label>
        <Form.Select type="email"   > 
        <option> Masukkan Kapasitas Mobil</option>
        <option> 2</option>
        <option> 3</option>
        <option> 4</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Harga</Form.Label>
        <Form.Select type="email"   > 
        <option> Masukkan Harga Sewa per Hari</option>
        <option> 2</option>
        <option> 3</option>
        <option> 4</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Status</Form.Label>
        <Form.Select type="email"  > 
        <option> Disewa</option>
        <option> 2</option>
        <option> 3</option>
        <option> 4</option>
        </Form.Select>
      </Form.Group>


    </Form>
     
        
        </Col>
      </Row>
    </Container>
  );
}

export default SearchCarSection;