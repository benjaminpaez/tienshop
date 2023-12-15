import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "wouter";
import front from "../../public/portada.jpg";
import logo from '../../public/logo.png'
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Container
        className="d-flex align-items-center justify-content-center box"
        style={{
          width: "80%",
          height: "70%",
          maxWidth: "650px",
        }}
      >
        <Row
          style={{
            background: "linear-gradient(to right, #a40e26, #660018)",
            padding: "20px",
            borderRadius: "10px",
            marginTop: '4rem',

          }}
        >
          <Col
            lg={6}
            className="d-grid gap-1 align-items-center justify-content-center"
          >
            <img
              src={logo}
              alt="Descripción de la imagen"
              className="img-fluid"
              style={{ width: "80%", height: "90%", borderRadius: '20%' }}
            />
            <p style={{ color: "white" }}>
              Una opcion para disfrutar el momento de descanso bien acompañado
            </p>
            
            <Link to="/store">
              <Button variant="primary">Ver comidas</Button>
            </Link>
          </Col>
          <Col lg={6}>
            <img
              src={front}
              alt="Descripción de la imagen"
              className="img-fluid"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
