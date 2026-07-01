import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container className="my-4 text-center">
      <h1>404 — Page Not Found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Button as={Link} to="/" variant="primary">Back to Home</Button>
    </Container>
  )
}

export default NotFound
