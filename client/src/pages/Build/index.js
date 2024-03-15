import { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import { Card, Form, Button } from 'react-bootstrap';
// import Auth from "../../utils/auth.js"
const client = createClient(
  'PYyuBmxiimtl3ZUUi2y2d7MKvzXmqkFXkUxms2pyKFzze4OE7hSwflfV'
);

const Build = () => {
  const storedId = parseInt(localStorage.getItem('currentImage'));
  const [formData, setFormData] = useState({
    recipient_name: '',
    recipient_email: '',
    sender_name: '',
    sender_email: '',
    message: '',
  });
  const [photo, setPhoto] = useState();
  const [pexelId, setPexelId] = useState(storedId);

  useEffect(() => {
    const getSingleImage = async () => {
      try {
        console.log(pexelId);
        const response = await client.photos.show({ id: pexelId });
        console.log(response);
        if (!response) {
          throw new Error('something went wrong!');
        }

        setPhoto(response);
      } catch (err) {
        console.error(err);
      }
    };

    getSingleImage();
  }, [pexelId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit= (event) => {
    event.preventDefault()
    console.log(formData)
    console.log(event)
  }
  return (
    <section className="row">
      <aside className="col-4">
        <Form onSubmit={handleFormSubmit} className="card">
          <Form.Group className="mb-3" controlId="recipient_name">
            <Form.Label>Recipient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter recipient name"
              value={formData.recipient_name}
              name="recipient_name"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="recipient_email">
            <Form.Label>Recipient's Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter recipient email"
              value={formData.recipient_email}
              name="recipient_email"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sender_name">
            <Form.Label>Sender Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter sender name"
              value={formData.sender_name}
              name="sender_name"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sender_email">
            <Form.Label>Sender's Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter sender email"
              value={formData.sender_email}
              name="sender_email"
              onChange={handleInputChange}
            />
          </Form.Group>{' '}
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              placeholder="Enter Message"
              value={formData.message}
              name="message"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </aside>
      <div className="col-8">
        {photo ? (
          <Card
            key={photo.id}
            style={{
              padding: '12px 12px 24px 12px',
              margin: '10px 0',
              boxShadow: '1px 1px 5px grey',
            }}
          >
            <Card.Img src={photo.src.large2x} />
          </Card>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Build;
