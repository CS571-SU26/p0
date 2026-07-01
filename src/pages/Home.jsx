import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const courses = [
  { id: 1, title: 'Introduction to Web Development', description: 'Learn the fundamentals of HTML, CSS, and JavaScript.' },
  { id: 2, title: 'React Fundamentals', description: 'Build dynamic user interfaces with React and hooks.' },
  { id: 3, title: 'Data Structures & Algorithms', description: 'Master core CS concepts with practical problem solving.' },
]

function Home() {
  return (
    <Container className="my-4">
      <h1>Welcome to CS571</h1>
      <p className="lead">Explore our course offerings below.</p>
      <Row xs={1} md={3} className="g-4">
        {courses.map(course => (
          <Col key={course.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
