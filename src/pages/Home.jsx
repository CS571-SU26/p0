import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap'
import { supabase } from '../lib/supabaseClient'

function Home() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase
        .from('courses')
        .select('id, title, description')
        .order('id', { ascending: true })

      if (error) {
        setError(error.message)
      } else {
        setCourses(data)
      }
      setLoading(false)
    }

    fetchCourses()
  }, [])

  return (
    <Container className="my-4">
      <h1>Welcome to CS571</h1>
      <p className="lead">Explore our course offerings below.</p>

      {loading && <Spinner animation="border" role="status" />}
      {error && <Alert variant="danger">Failed to load courses: {error}</Alert>}

      {!loading && !error && (
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
      )}
    </Container>
  )
}

export default Home
