import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const displayContainerStyle = {
  backgroundColor: 'black',
  minHeight: '100vh',
  color: 'white',
};

function DisplayProduct({ productData }) {
  const [productId, setProductId] = useState('');
  const [displayedProductData, setDisplayedProductData] = useState(null);

  const handleChange = e => {
    setProductId(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Make API call to fetch product data for the entered ID
    try {
      const response = await fetch(`YOUR_API_ENDPOINT/${productId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }
      const data = await response.json();
      setDisplayedProductData(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  return (
    <div style={displayContainerStyle}>
      <div className="container">
        <h2 className="text-center">Product Information</h2>
        <Card bg="dark" text="white">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="productId">
                <Form.Label>Enter Product ID:</Form.Label>
                <Form.Control type="text" value={productId} onChange={handleChange} />
              </Form.Group>
              <Row className="justify-content-end mt-3">
                <Col>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>

            {displayedProductData && (
              <div>
                <p><strong>ID:</strong> {displayedProductData.id}</p>
                <p><strong>Name:</strong> {displayedProductData.name}</p>
                <p><strong>Manufacturing Company Name:</strong> {displayedProductData.manufacturingCompany.name}</p>
                <p><strong>Manufacturing Company Address:</strong> {displayedProductData.manufacturingCompany.address}</p>
                <p><strong>Manufacturing Date:</strong> {displayedProductData.manufacturingDate}</p>
                <p><strong>Expiry Date:</strong> {displayedProductData.expiryDate}</p>
                <p><strong>MRP:</strong> {displayedProductData.mrp}</p>
                <p><strong>Certification:</strong> {displayedProductData.certification}</p>
                <p><strong>Quantity/Weight:</strong> {displayedProductData.quantityWeight}</p>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default DisplayProduct;
