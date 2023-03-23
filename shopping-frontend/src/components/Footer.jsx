import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Furniture Store
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
