import { Component } from "react";
import {
  Col,
  Container,
  Card,
  Row,
  Alert,
  Button,
  Badge,
  Breadcrumb,
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row className="mb-5">
            <Col>
              <Alert variant="primary" className="mb-0">
                Website React Bootstrap
              </Alert>
            </Col>
            <Col md={8} className="badge-column d-flex justify-content-end">
              <Button variant="primary">
                Notification <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
              </Button>
              <Button variant="primary">
                Message <Badge variant="light">19</Badge>
                <span className="sr-only">unread messages</span>
              </Button>
            </Col>
            <Col className="d-flex align-content-center">
              <Row className="d-flex align-content-center">
                <Col md={3}>
                  <img
                    width={30}
                    height={30}
                    src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                    alt="TesAte"
                  />
                </Col>
                <Col>
                  <h5>Andreas</h5>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="d-flex justify-content-end mb-5">
            <Col md={4}>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"
                />
                <Card.Body>
                  <Card.Title>
                    Diego Godin Ukir Rekor Spesial Lawan Thailand
                  </Card.Title>
                  <Card.Text>
                    Godin sekarang menjadi pemain Uruguay dengan caps terbanyak
                    setelah membantu negaranya melibas Thailand di final Piala
                    Tiongkok. Diego Godin boleh berbangga setelah resmi menjadi
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                />
                <Card.Body>
                  <Card.Title>Neymar Bahas Kontrak Baru Di PSG</Card.Title>
                  <Card.Text>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt."
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                />
                <Card.Body>
                  <Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
                  <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                />
                <Card.Body>
                  <Card.Title>
                    Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia
                    U-23 Tetap Bagus
                  </Card.Title>
                  <Card.Text>
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness."
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
