import { Container, Row, Col, Image } from 'react-bootstrap';

export default function AboutMe() {
  return (
    <Container className="py-5">
      <Row className="align-items-center g-5">
        <Col md={4} className="text-center">
          <Image
            src="https://placehold.co/280x280?text=Jordan+Ellis"
            roundedCircle
            fluid
            alt="Jordan Ellis"
          />
        </Col>
        <Col md={8}>
          <h1 className="mb-3">Hi, I'm Jordan Ellis</h1>
          <p className="lead text-muted">Full-Stack Developer &amp; UX Enthusiast</p>
          <p>
            I'm a software engineer based in Madison, WI with 5 years of experience
            building web applications that are fast, accessible, and fun to use.
            I enjoy working across the full stack — from designing clean REST APIs
            to crafting polished user interfaces.
          </p>
          <p>
            When I'm not writing code, you can find me hiking local trails,
            experimenting with sourdough recipes, or contributing to open-source
            projects I care about.
          </p>
          <hr />
          <Row className="text-center g-3">
            <Col xs={4}>
              <div className="fw-bold fs-4">5+</div>
              <div className="text-muted small">Years Experience</div>
            </Col>
            <Col xs={4}>
              <div className="fw-bold fs-4">30+</div>
              <div className="text-muted small">Projects Shipped</div>
            </Col>
            <Col xs={4}>
              <div className="fw-bold fs-4">12</div>
              <div className="text-muted small">Happy Clients</div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-3">Skills</h2>
          <Row className="g-2">
            {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'Docker', 'AWS', 'Figma'].map(skill => (
              <Col xs="auto" key={skill}>
                <span className="badge bg-primary fs-6 px-3 py-2">{skill}</span>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
