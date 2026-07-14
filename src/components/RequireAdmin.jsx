import { Navigate } from 'react-router-dom'
import { Container, Spinner, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { ADMIN_EMAIL } from '../config'

function RequireAdmin({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <Container className="my-4">
        <Spinner animation="border" role="status" />
      </Container>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (user.email !== ADMIN_EMAIL) {
    return (
      <Container className="my-4">
        <Alert variant="danger">You are not authorized to view this page.</Alert>
      </Container>
    )
  }

  return children
}

export default RequireAdmin
