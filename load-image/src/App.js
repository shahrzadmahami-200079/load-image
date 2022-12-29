import './App.css';
import { Container, Card, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function App() {

  const [image, setImage] = useState([])
  useEffect(() => {

    var headersAPI = {
      method: 'GET',

      Headers: {
        'Content-Type': 'application/json'
        
      },
    }


    const loadimage = async () => {
      var imageData = await fetch('https://random-d.uk/api/random', headersAPI)
        .then(Response =>
          Response.json())
        .then(data => {
          setImage(data)
        })
    }
    loadimage()
  })


  return (
    <div className="App">
      <Container>
        <Row className="center">
          <Card className='col-10 m-5 bg-info'>
            <Card.Img className='p-5 ' src={image.url} />
            <Card.Body>
              <Card.Title>
                {image.message}
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
