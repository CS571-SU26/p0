import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button, Alert, Card } from 'react-bootstrap'
import { supabase } from '../lib/supabaseClient'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setSubmitting(false)
    } else {
      navigate('/admin')
    }
  }

  return (
    <Container className="my-4" style={{ maxWidth: 420 }}>
      <Card>
        <Card.Body>
          <Card.Title as="h1" className="h3 mb-3">Admin Login</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" disabled={submitting}>
              {submitting ? 'Signing in...' : 'Sign In'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login
