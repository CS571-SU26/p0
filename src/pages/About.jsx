import { Container, Row, Col, Alert } from 'react-bootstrap'

function About() {
  return (
    <Container className="my-4">
      <h1>About</h1>
      <Alert variant="info">
        This is a demo project for CS571, built with Vite, React, React Bootstrap, and React Router.
      </Alert>
      <Row>
        <Col md={6}>
          <h2>Tech Stack</h2>
          <ul>
            <li>Vite (build tool)</li>
            <li>React (UI library)</li>
            <li>React Bootstrap (component library)</li>
            <li>React Router (client-side routing)</li>
          </ul>
        </Col>
        <Col md={6}>
          <h2>Deployment</h2>
          <ul>
            <li>Hosted on GitHub Pages</li>
            <li>Build output: <code>docs/</code> folder</li>
            <li>Run <code>npm run build</code> then push to main</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default About
