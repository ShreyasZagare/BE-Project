import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const formContainerStyle = {
  backgroundColor: 'black',
  minHeight: '100vh',
  color: 'white',
};

function ProductForm({ setProductData }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    manufacturingCompany: {
      name: '',
      address: ''
    },
    manufacturingDate: '',
    expiryDate: '',
    content: '',
    mrp: '',
    certification: '',
    quantityWeight: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setProductData(formData);
  };

  return (
    <div style={formContainerStyle}>
      <div className="container">
        <h2 className="text-center">Enter Product Information</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formId">
            <Form.Label>ID:</Form.Label>
            <Form.Control type="text" name="id" value={formData.id} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formCompanyName">
            <Form.Label>Manufacturing Company Name:</Form.Label>
            <Form.Control type="text" name="manufacturingCompany.name" value={formData.manufacturingCompany.name} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formCompanyAddress">
            <Form.Label>Manufacturing Company Address:</Form.Label>
            <Form.Control type="text" name="manufacturingCompany.address" value={formData.manufacturingCompany.address} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formManufacturingDate">
            <Form.Label>Manufacturing Date:</Form.Label>
            <Form.Control type="text" name="manufacturingDate" value={formData.manufacturingDate} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formExpiryDate">
            <Form.Label>Expiry Date:</Form.Label>
            <Form.Control type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formMRP">
            <Form.Label>MRP:</Form.Label>
            <Form.Control type="text" name="mrp" value={formData.mrp} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formCertification">
            <Form.Label>Certification:</Form.Label>
            <Form.Control type="text" name="certification" value={formData.certification} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formQuantityWeight">
            <Form.Label>Quantity/Weight:</Form.Label>
            <Form.Control type="text" name="quantityWeight" value={formData.quantityWeight} onChange={handleChange} />
          </Form.Group>

          <Row className="justify-content-end mt-3">
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default ProductForm;
